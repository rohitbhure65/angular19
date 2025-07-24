import { Component } from '@angular/core';
import { GetAndSetComponent } from '../getandset/getandset.component';

@Component({
  selector: 'app-signup',
  imports: [GetAndSetComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title= "signup page";
}
