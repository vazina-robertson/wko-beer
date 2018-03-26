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
  private _user;

  constructor(private http: HttpClient, private localStorage: AsyncLocalStorage)
  {

    this._storage = localStorage;
    this._http = http;

  }

  getAuthorizationToken()
  {

    return this.token;

  }

  fetchUser()
  {

    return new Promise((res, rej) => {
      this._http.get(`http://localhost/users`)
        .subscribe(data => {
          this._user = data;
          res(data);
        }, err => rej(err));
    });

  }

  async getUser()
  {

    if (this._user) {
      return this._user;
    }

    try {
      await this._readToken();
    }
    catch(err) {
      console.error('error reading token.. bouncing');
      return;
    }

    await this.fetchUser();
    return this._user;

  }

  setToken(token)
  {

    this.token = token;

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

