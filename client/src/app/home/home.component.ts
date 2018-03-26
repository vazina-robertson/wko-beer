import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WindowRef } from '../window-ref.service';
import { BeersService } from '../beers.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  private _auth: AuthService;
  private _window: WindowRef;
  private loginState: boolean;
  private loginErrors: any;
  private successMessage: string;

  constructor(private auth: AuthService, private wr: WindowRef)
  {

    this._auth = auth;
    this._window = wr;

  }

  async ngOnInit()
  {

    this.loginState = false;

  }

  toggleLoginForm()
  {

    this.loginErrors = null;
    this.loginState = !this.loginState;

  }

  async login(f: NgForm)
  {

    if (!f.value.username) {
      this.loginErrors = 'Must provide username';
      return;
    }

    if (!f.value.password) {
      this.loginErrors = 'Must provide password';
      return;
    }

    try {

      const attempt = await this._auth.login(f.value.username, f.value.password);

      this.successMessage = 'Logging in...'

      setTimeout(() => {
        this._window.nativeWindow.location.reload(false);
      }, 40);

    }
    catch(err) {

      this.loginErrors = err.error.message;

    }

  }

}
