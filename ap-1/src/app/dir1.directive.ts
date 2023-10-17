import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {

  constructor(el:ElementRef) {
el.nativeElement.style.color="blue";

   }

}
