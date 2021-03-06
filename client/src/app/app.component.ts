import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'wko-beer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  private title = 'wko.beer';
  private brewerAdmin: boolean;
  private _auth: AuthService;

  constructor(private auth: AuthService)
  {

    this._auth = auth;
    this.brewerAdmin = false;

  }


  async ngOnInit()
  {

    try {
      const user = await this._auth.getAuthenticatedUser();

      if (user) {
        // TODO: check if user is brewer admin
        // this.brewerAdmin = !!user.flags.find(f => f.name === 'brewer_admin');
        this.brewerAdmin = true;
      }

    }
    catch(err) {
      // Do nothing if unable to resolve user
    }

  }
}
