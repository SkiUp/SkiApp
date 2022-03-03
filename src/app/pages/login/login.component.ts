import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  public login() {
    this.authService.SignIn('mateimartin21@gmail.com', 'mateiMartin21');
  }
}
