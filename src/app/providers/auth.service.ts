import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { LoginRequest } from './entities/LoginRequest';
import { LoginResponse } from './entities/LoginResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private router: Router,
    private navCtrl: NavController
  ) {}

  public login(code: number, password: string) {
    let body = new LoginRequest(code, password);
    this.http
      .post<LoginResponse>(environment.backend.api + 'auth/login', body)
      .subscribe(
        async (resp) => {
          this.storage.set('User', resp.employe);
          this.storage.set('Token', resp.token);
          window.localStorage.setItem('Token', resp.token);
          this.router.navigate(['/home']);
          const toast = await this.toastController.create({
            message: 'Bienvenue ' + resp.employe.firstName + '!',
            duration: 2000,
          });
          toast.present();
          return resp;
        },
        (error) => {}
      );
  }

  public logout() {
    window.localStorage.removeItem('Token');
    this.storage.remove('Token');
    this.storage.remove('User');
    this.navCtrl.pop();
    this.router.navigate(['/']);
  }

  public async checkConnected() {
    if (!this.connected()) {
      const toast = await this.toastController.create({
        message: 'Cette section est reservée au utilisateurs connectées.',
        duration: 2000,
      });
      toast.present();
      this.logout();
    }
    return true;
  }

  public connected() {
    return AuthService.getToken() != null;
  }

  public static getToken() {
    return window.localStorage.getItem('Token');
  }

  public getUser() {
    this.storage.get('User').then((user) => {
      return user;
    });
  }
}
