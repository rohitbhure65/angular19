import { Component } from '@angular/core';
import { GetandsetComponent } from '../getandset/getandset.component';

@Component({
  selector: 'app-signup',
  imports: [GetandsetComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title= "signup page";
}
