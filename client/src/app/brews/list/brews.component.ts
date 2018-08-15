import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeersService } from '../../beers.service';
import * as moment from 'moment';

@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.styl']
})
export class BrewsComponent implements OnInit {

  public brews : Array<any>;

  private _svc : BeersService;

  constructor(private router: Router, private svc: BeersService) {
    this.router = router;
    this._svc = svc;
  }

  async ngOnInit() {
    this.brews = await this._svc.getBrews();
    // console.log('brews: ', this.brews);
    this.brews = this.brews.map(b => {
      b.brew_date = moment(b.brew_date).format('MM/DD/YYYY');
      return b;
    })
  }

  createBrew()
  {
    console.log(this.router);
    this.router.navigate([ 'brew-creation' ]);
  }

  goToBrew(id)
  {
    this.router.navigate([ '/brews', id ]);
  }

}
