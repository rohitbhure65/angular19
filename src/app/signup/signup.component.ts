import { Component } from '@angular/core';
import { GetAndSetComponent } from '../getandset/getandset.component';
import { ElseifComponent } from '../elseif/elseif.component';

@Component({
  selector: 'app-signup',
  imports: [GetAndSetComponent,ElseifComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title= "signup page";
}
