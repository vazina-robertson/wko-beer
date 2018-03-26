import { Directive, ElementRef, Input } from "@angular/core";
import { WindowRef } from "./window-ref.service";

/*

  Autofocus some element

*/
@Directive({
    selector: "[autofocus]"
})
export class Autofocus
{

  private focus = true;
  private _el: ElementRef;
  private _window: WindowRef;

  constructor(private el: ElementRef, private win: WindowRef)
  {

    this._window = win;
    this._el = el;

  }

  ngOnInit()
  {

    // Use timeout otherwise Angular throws error: Expression has changed after it was checked.
    // For SSR (server side rendering) this is not safe.
    // Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
    if (this.focus) {
      this._window.nativeWindow.setTimeout(() => {
        this._el.nativeElement.focus();
      });
    }

  }

  @Input() set autofocus(condition: boolean)
  {

    this.focus = condition !== false;

  }

}