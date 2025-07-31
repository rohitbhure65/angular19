import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
})
export class AlphabetOnlyDirective {

  private regex: RegExp = /^[a-zA-Z]*$/;

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target;
    const cleaned = input.value.replace(/[^a-zA-Z]/g, '');
    if (input.value !== cleaned) {
      input.value = cleaned;
      input.dispatchEvent(new Event('input')); // update ngModel or formControl
    }
  }
}