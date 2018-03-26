import { Injectable } from '@angular/core';
import { WkoApi } from './wko-api.service';

@Injectable()
export class BeersService {

  private _api: WkoApi;

  constructor(private wkoApi: WkoApi)
  {

    this._api = wkoApi;

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

  getBeers()
  {

    return this._api.get('/beers');

  }

}
