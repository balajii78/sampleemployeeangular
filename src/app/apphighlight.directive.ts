import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {

  constructor(e1:ElementRef) {

    e1.nativeElement.style.backgroundColor ="orange";
   }

}
