import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BeersService {

  _http = null;

  constructor(private http: HttpClient) {
    this._http = http;
  }

  getApiResp()
  {

    return this._http.get('http://localhost')
      .catch((error:any) => Observable.throw(error));

  }

  getBeerCounts()
  {

    return {
      brewed: {
        total: 12,
        latest: [ { name: 'Tank 7 Clone' }, { name: 'Brett Rye Pale Ale' }, { name: 'Belgian Single - Batch #2' } ]
      },
      currently_available: {
        total: 6,
        latest: [ { name: 'Belgian Single - Batch #2' }, { name: '90 Shilling Clone' }, { name: 'Sour Oak Saison' }
        ]
      },
    };

  }

  getUsers()
  {

    return this._http.get('http://localhost/users')
      .catch((error:any) => Observable.throw(error));

  }

}
