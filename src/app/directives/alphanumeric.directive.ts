import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]',
})
export class AlphanumericDirective {

  private regex: RegExp = /^[a-zA-Z0-9]*$/;

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target;
    const cleaned = input.value.replace(/[^a-zA-Z0-9]/g, '');
    if (input.value !== cleaned) {
      input.value = cleaned;
      input.dispatchEvent(new Event('input'));
    }
  }
}
