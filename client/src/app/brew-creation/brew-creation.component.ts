import { Component, OnInit } from '@angular/core';
import { WkoApi } from '../wko-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-brew-creation',
  templateUrl: './brew-creation.component.html',
  styleUrls: ['./brew-creation.component.styl']
})
export class BrewCreationComponent implements OnInit {

  public brew: any;
  private _api : WkoApi;
  public newBrewForm : any;

  constructor(api: WkoApi, private fb: FormBuilder) {
    this._api = api;
    this.brew = { };
    this.newBrewForm = fb.group({
      gone: [ false ]
    });
  }

  ngOnInit() {
  }

  createNewBrew()
  {

    try {
      this._api.post('/brews', this.brew);
    }
    catch (e) {
      console.error(e);
    }

  }

}
