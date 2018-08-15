import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrewsComponent } from './list/brews.component';
import { BrewDetailsComponent } from './details/brew-details.component';
import { BrewCreationComponent } from './creation/brew-creation.component';
 
const brewsRoutes: Routes = [
  { path: 'brew-creation', component: BrewCreationComponent },
  { path: 'brews',  component: BrewsComponent },
  { path: 'brews/:id', component: BrewDetailsComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(brewsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrewsRoutingModule { }