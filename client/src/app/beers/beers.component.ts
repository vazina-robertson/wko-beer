import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.styl']
})
export class BeersComponent implements OnInit {

  _beerSvc = null;
  beers = [];

  constructor(private beersService: BeersService)
  {

    this._beerSvc = beersService;

  }

  async ngOnInit()
  {

    this.beers = await this._beerSvc.getBeers();
    console.log('beers:', this.beers);

  }

}
