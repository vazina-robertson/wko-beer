import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WkoApi {

  private _server: string;
  private _http: HttpClient;

  constructor(private http: HttpClient) {

    this._http = http;

    if (isDevMode()) {
      this._server = 'http://localhost';
    }
    else {
      this._server = 'https://api.wko.io';
    }

  }

  get baseUrl() : string
  {

    return this._server;

  }

  private _joinUrl(base: string, endpoint: string)
  {

    if (endpoint.startsWith('/')) {
      return `${base}${endpoint}`;
    }

    return `${base}/${endpoint}`;

  }

  get(endpoint: string)
  {

    const url = this._joinUrl(this._server, endpoint);

    return new Promise((res, rej) =>
      this._http.get(url).subscribe(r => res(r), e => rej(e)));

  }

  post(endpoint: string, data: any)
  {

    const url = this._joinUrl(this._server, endpoint);

    return new Promise((res, rej) =>
      this._http.post(url, data).subscribe(r => res(r), e => rej(e)));

  }

  put(endpoint: string, data: any)
  {

    const url = this._joinUrl(this._server, endpoint);

    return new Promise((res, rej) =>
      this._http.put(url, data).subscribe(r => res(r), e => rej(e)));

  }

  delete(endpoint: string)
  {

    const url = this._joinUrl(this._server, endpoint);

    return new Promise((res, rej) =>
      this._http.delete(url).subscribe(r => res(r), e => rej(e)));

  }

}
