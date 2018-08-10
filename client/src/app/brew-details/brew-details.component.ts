import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brew-details',
  templateUrl: './brew-details.component.html',
  styleUrls: ['./brew-details.component.styl']
})
export class BrewDetailsComponent implements OnInit {

  private _router : Router;
  private _route : ActivatedRoute;
  constructor(private route: ActivatedRoute, private router: Router) {
    this._route = route;
    this._router = router;
  }

  async ngOnInit() {
    console.log(await this.getParam());
    // TODO fetch details
  }

  getParam()
  {
    return new Promise((res, rej) => {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params['id']) { 
          res(params['id'])
        }
        else {
          rej(params['id']);
        }

      });
    })
  }

}
