import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]',
})
export class AlphanumericDirective {
  private regex: RegExp = /[^a-zA-Z0-9 ]/g;

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target;
    let cleaned = input.value.replace(this.regex, '');
    cleaned = cleaned.replace(/^\s+/, '');
    if (input.value !== cleaned) {
      input.value = cleaned;
      input.dispatchEvent(new Event('input'));
    }
  }
}
