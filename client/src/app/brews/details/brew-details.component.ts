import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersService } from '../../beers.service';
import * as moment from 'moment';

@Component({
  selector: 'app-brew-details',
  templateUrl: './brew-details.component.html',
  styleUrls: ['./brew-details.component.styl']
})
export class BrewDetailsComponent implements OnInit {

  private _router : Router;
  private _route : ActivatedRoute;
  private _svc : BeersService;
  
  public brew : any;

  constructor(private route: ActivatedRoute, private router: Router, private svc: BeersService) {
    this._route = route;
    this._router = router;
    this._svc = svc;
  }

  async ngOnInit() {
    const id = await this.getParam('id');
    this.brew = await this._svc.getBrew(id);
    this.brew.brewDate = moment(this.brew.brew_date).format('MMMM DD, YYYY');
    console.log(this.brew);
  }

  editBrew()
  {
    this._router.navigate([ 'brews', this.brew.id, 'edit' ])
  }

  goToBrewNoteCreation()
  {
    // TODO
    console.log('// TODO: implement create-brew-note page');
  }

  goToLinkRecipePage()
  {
    // TODO
    console.log('// TODO: implement link-recipe page');
  }

  getParam(param)
  {
    return new Promise((res, rej) => {
      this.route.params.subscribe(params => {

        if (params[param]) { 
          res(params[param])
        }
        else {
          rej(params[param]);
        }

      });
    })
  }

}
