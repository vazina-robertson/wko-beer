import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  title = 'wko.beer';
  brewerAdmin: boolean;

  private _auth: AuthService;

  constructor(private auth: AuthService)
  {

    this._auth = auth;
    this.brewerAdmin = false;

  }


  async ngOnInit()
  {

    try {
      const user = await this._auth.getUser();
      console.log(user);

      // TODO: check if user is brewer admin
      this.brewerAdmin = true;

    }
    catch(err) {
      // Do nothing if unable to resolve user
    }

  }
}
