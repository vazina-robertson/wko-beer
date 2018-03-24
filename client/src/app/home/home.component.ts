import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';


import { AsyncLocalStorage } from 'angular-async-local-storage';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  private _auth: AuthService;
  private loginState: boolean;

  constructor(private _beers: BeersService, private auth: AuthService)
  {

    this._auth = auth;

  }

  async ngOnInit()
  {

    this.loginState = true;

  }

  toggleLoginForm()
  {

    this.loginState = !this.loginState;

  }

  async testUserFetch()
  {

    await this._beers.getUsers().subscribe(d => {
      console.log(d);
    }, err => console.error('darn:', err));

  }

  async login(f: NgForm)
  {

    console.log('attempting login with username', f.value.username, 'and pass', f.value.password);
    const attempt = await this._auth.login(f.value.username, f.value.password);

    if (attempt === true) {
      // TODO: reload?
      console.log('login successful');
      this.loginState = false;
    }
    else {
      console.error(attempt);
    }

  }

}
