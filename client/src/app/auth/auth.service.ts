import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';

// token response shape
interface TokenResponse {
  token: string;
}

/*

  Auth service

*/
@Injectable()
export class AuthService {

  public token: string;
  private _storage: AsyncLocalStorage;
  private _http: HttpClient;

  constructor(private http: HttpClient, private localStorage: AsyncLocalStorage)
  {

    this._storage = localStorage;
    this._http = http;
    this._readToken();

  }

  getAuthorizationToken()
  {

    return this.token;

  }

  setToken(token)
  {

    return new Promise((res, rej) => {
      this._storage.setItem('auth_token', token)
        .subscribe(() => res(token), err => rej(err));
    });

  }

  private _readToken()
  {

    return new Promise((res, rej) => {

      this._storage.getItem('auth_token')
        .subscribe(async t => {

          // set the token from local storage
          await this.setToken(t);
          res(t);

        }, err => rej(err));

    });

  }

  async login(username: string, password: string)
  {

    return new Promise((res, rej) => {
      this._http.post('http://localhost/auth/login', { username, password })
        .subscribe(async (resp: TokenResponse) => {

          // set the token from login response
          console.log('login resp:', resp);
          await this.setToken(resp.token);
          res(true);

        }, err => rej(err))
    });

  }

}

