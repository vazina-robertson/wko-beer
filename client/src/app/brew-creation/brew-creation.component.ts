import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BeersService } from '../beers.service';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-brew-creation',
  templateUrl: './brew-creation.component.html',
  styleUrls: ['./brew-creation.component.styl'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class BrewCreationComponent implements OnInit {

  public newBrewForm : FormGroup;
  public brews : Array<any>;
  public beers : Array<any>;
  public brewPhases: Array<any>;

  private _svc : BeersService;
  private _router : Router;

  constructor(beerService: BeersService, private fb: FormBuilder, private router: Router) {
    this._router = router;
    this._svc = beerService;
    this.brews = [ ];

    this.newBrewForm = new FormGroup({
      name: new FormControl(''),
      beerId: new FormControl(),
      brewNumber: new FormControl(),
      batchNumber: new FormControl('1'),
      brewDate: new FormControl(new Date()),
      gone: new FormControl('false')
    });

  }

  async ngOnInit()
  {
    try {
      // fetch data
      this.beers = await this._svc.getBeers();
      this.brews = await this._svc.getBrews();

      // set brew number based on max
      let max = { brew_number: 0 };
      if (this.brews) {
        max = this.brews.reduce((b1, b2) =>
          b1.brew_number > b2.brew_number ? b1 : b2, max);
      }

      this.newBrewForm.patchValue({
        brewNumber: max.brew_number + 1
      });

      // TODO: fetch brew_phases

    }
    catch (e) {
      console.error('ngOnInit Error: ', e);
    }
  }

  async createNewBrew()
  {
    const brew : any = {
      name: this.newBrewForm.value.name,
      brew_number: this.newBrewForm.value.brewNumber,
      batch_number: this.newBrewForm.value.batchNumber,
      brew_date: this.newBrewForm.value.brewDate,
      gone: this.newBrewForm.value.gone
    };

    if (this.newBrewForm.value.beerId) {
      brew.beer_id = this.beers.find(x => x.name === this.newBrewForm.value.beerId).id;
    }

    console.log('brew to create: ', brew);

    //other fields
    // og, fg, ibu, brew_phase_id, recipe_id

    try {
      await this._svc.createNewBrew(brew);

      // TODO: go to brew details page
      // just go back to brews list for now
      this._router.navigate([ 'brews' ]);
    }
    catch (e) {
      console.error(e);
    }

  }

  cancel()
  {
    this._router.navigate([ 'brews' ]);
  }

}
