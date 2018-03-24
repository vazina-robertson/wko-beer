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

  ngOnInit()
  {

    const beers = this._beerSvc.getBeerCounts();
    console.log('beers:', beers);

  }

}
