import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { WkoApi } from '../wko-api.service';

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
  private _api;

  constructor(private http: HttpClient, private localStorage: AsyncLocalStorage, private wkoApi: WkoApi)
  {

    this._storage = localStorage;
    this._http = http;
    this._api = wkoApi;

  }

  getAuthorizationToken()
  {

    return this.token;

  }

  async fetchUser()
  {

    const user = await this._api.get('/users');
    this._user = user;
    return this._user;

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

    const resp = await this._api.post('/auth/login', { username, password });
    await this.setToken(resp.token);

  }

}

