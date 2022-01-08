import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

export enum HTTP_STATUS {
  Bad_Request = 400,
  Unauthorized = 401,
  Forbidden = 403,
  Not_Found = 404,
  Method_Not_Allowed = 405,
  "I'm a teapot" = 418,
  Internal_Server_Error = 500,
  Not_Implemented = 501,
  Bad_Gateway = 502,
  Service_Unavailable = 503,
  Gateway_Timeout = 504,
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * Formatage des erreurs retournées par une requête
   * @param error Erreurs
   *
   */
  private static async formatErrors(error: HttpErrorResponse) {
    if (error.status >= 500) {
      if (HTTP_STATUS.Internal_Server_Error) {
        console.log(error.message);
      }
    } else if (
      (error.status == 400 && error.message == 'USER_NOT_FOUND') ||
      (error.status == HTTP_STATUS.Unauthorized &&
        error.error == 'INVALID_TOKEN')
    ) {
      localStorage.removeItem('token');
    } else if (error.status == HTTP_STATUS.Unauthorized) {
    } else {
      return error;
    }
  }

  /**
   * Effectuer une requête GET.
   * @param path Chemin de la requête
   * @param params Paramètres de la requête
   * @param baseUrl Url de base de la requête
   * @param loadingScreen Si il faut afficher un ecran de chargement.
   * @returns Observable de la réponse du serveur
   */
  get<Type>(
    path: string,
    params: HttpParams = new HttpParams(),
    baseUrl = environment.backend.api,
    loadingScreen?: boolean
  ): Observable<Type | HttpErrorResponse> {
    let subscription = this.http
      .get<Type>(baseUrl + path, this.getHeaders(params))
      .pipe(catchError(HttpService.formatErrors));

    return subscription;
  }

  /**
   * Effectuer une requête PUT.
   * @param path Chemin de la requête
   * @param body Paramètres du corps de la requête
   * @param baseUrl Url de base de la requête
   * @param loadingScreen Si il faut afficher un ecran de chargement.
   * @returns Observable de la réponse du serveur
   */
  put<Type>(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams(),
    baseUrl = environment.backend.api,
    loadingScreen?: boolean
  ): Observable<Type | HttpErrorResponse> {
    let subscription = this.http
      .put<Type>(baseUrl + path, JSON.stringify(body), this.getHeaders(params))
      .pipe(catchError(HttpService.formatErrors));

    return subscription;
  }

  /**
   * Effectuer une requête POST.
   * @param path Chemin de la requête
   * @param body Paramètres du corps de la requête
   * @param baseUrl Url de base de la requête
   * @param loadingScreen Si il faut afficher un ecran de chargement.
   * @returns Observable de la réponse du serveur
   */
  post<Type>(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams(),
    baseUrl = environment.backend.api,
    loadingScreen?: boolean
  ): Observable<Type | HttpErrorResponse> {
    let subscription = this.http
      .post<Type>(baseUrl + path, JSON.stringify(body), this.getHeaders(params))
      .pipe(catchError(HttpService.formatErrors));
    if (loadingScreen) {
    }
    return subscription;
  }

  /**
   * Effectuer une requête DELETE.
   * @param path Chemin de la requête
   * @param params Paramètres de la requête
   * @param baseUrl Url de base de la requête
   * @param loadingScreen Si il faut afficher un ecran de chargement.
   * @returns Observable de la réponse du serveur
   */
  delete<Type>(
    path: string,
    params: HttpParams = new HttpParams(),
    baseUrl = environment.backend.api,
    loadingScreen?: boolean
  ): Observable<Type | HttpErrorResponse> {
    return this.http
      .delete<Type>(baseUrl + path, this.getHeaders(params))
      .pipe(catchError(HttpService.formatErrors));
  }

  private getHeaders(params?: HttpParams) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + AuthService.getToken(),
      }),
      params: params,
    };
  }
}
