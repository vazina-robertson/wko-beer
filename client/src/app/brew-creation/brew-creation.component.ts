import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-brew-creation',
  templateUrl: './brew-creation.component.html',
  styleUrls: ['./brew-creation.component.styl']
})
export class BrewCreationComponent implements OnInit {

  private _brew: any;
  private _svc : BeersService;
  public newBrewForm : FormGroup;
  private _router : Router;

  constructor(beerService: BeersService, private fb: FormBuilder, private router: Router) {
    this._router = router;
    this._svc = beerService;
    this._brew = { };

    this.newBrewForm = new FormGroup({
      name: new FormControl(''),
      beerId: new FormControl(),
      brewNumber: new FormControl(),
      batchNumber: new FormControl('1'),
      brewDate: new FormControl(new Date()),
      gone: new FormControl('false')
    });

  }

  ngOnInit() {
    // TODO initialize defaults for beerId, brewNumber
  }

  createNewBrew()
  {
    this._brew.name = this.newBrewForm.value.name;
    this._brew.beer_id = this.newBrewForm.value.beerId;
    this._brew.brew_number = this.newBrewForm.value.brewNumber;
    this._brew.batch_number = this.newBrewForm.value.batchNumber;
    this._brew.brew_date = this.newBrewForm.value.brewDate;
    this._brew.gone = this.newBrewForm.value.gone;

    console.log('brew to create: ', this._brew);
    return;
    //other fields
    // og, fg, ibu, brew_phase_id, recipe_id

    try {
      this._svc.createNewBrew(this._brew);
    }
    catch (e) {
      console.error(e);
    }

  }

  cancel()
  {

  }

}
