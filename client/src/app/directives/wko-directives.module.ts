import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autofocus } from './auto-focus.directive';
import { WindowRef } from '../window-ref.service';
import { EmitterService } from '../emitter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Autofocus
  ],
  exports: [
    Autofocus
  ],
  providers: [
    EmitterService,
    WindowRef
  ]
})
export class WkoDirectivesModule { }
