import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.styl']
})
export class BrewsComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  createBrew()
  {
    console.log(this.router);
    this.router.navigate([ 'brew-creation' ]);
  }

}
