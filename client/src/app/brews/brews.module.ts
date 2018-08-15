import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

// Material Design
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';


import { BeersService } from '../beers.service';
import { BrewCreationComponent } from './creation/brew-creation.component';
import { BrewDetailsComponent } from './details/brew-details.component';
import { BrewsComponent } from './list/brews.component';
import { BrewsRoutingModule } from './brews-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrewsRoutingModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [
    BrewsComponent,
    BrewCreationComponent,
    BrewDetailsComponent
  ],
  providers: [ BeersService ]
})
export class BrewsModule {}
