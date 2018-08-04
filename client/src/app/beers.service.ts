import { Injectable } from '@angular/core';
import { WkoApi } from './wko-api.service';

@Injectable()
export class BeersService {

  private _api: WkoApi;

  constructor(private wkoApi: WkoApi)
  {

    this._api = wkoApi;

  }

  getMockData()
  {

    return [
      {
        "id": 1,
        "name": "Scout Saison",
        "main_type_id": 1,
        "on_display": true,
        "created_at": "2018-08-04T22:01:59.442Z",
        "updated_at": "2018-08-04T22:01:59.442Z",
        "description": "Light sour Saison with subtle Brett notes",
        "style": "Saison",
        "tags": [
          { "id": 1, "name": "Saison" },
          { "id": 3, "name": "Belgian" },
          { "id": 4, "name": "Brett Beer" },
          { "id": 5, "name": "Sour Ale" }
        ]
      },

      {
        "id": 2,
        "name": "Roeselare Bruin",
        "main_type_id": 6,
        "on_display": true,
        "created_at": "2018-08-04T22:26:31.240Z",
        "updated_at": "2018-08-04T22:26:31.240Z",
        "description": "Medium bodied dark beer. Slightly tart with a depth of roasty malt and fruity esters.",
        "style": "Oud Bruin",
        "tags": [
          { "id": 3, "name": "Belgian" },
          { "id": 4, "name": "Brett Beer" },
          { "id": 5, "name": "Sour Ale" },
          { "id": 6, "name": "Oud Bruin" },
          { "id": 7, "name": "Dark Beer" }
        ]
      }
    ];

  }

  getBeers()
  {

    return this._api.get('/beers');

  }

}
