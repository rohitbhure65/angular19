import { Component } from '@angular/core';
import { GetAndSetComponent } from '../getandset/getandset.component';
import { ElseifComponent } from '../elseif/elseif.component';
import { ForinComponent } from '../forin/forin.component';

@Component({
  selector: 'app-signup',
  imports: [GetAndSetComponent,ElseifComponent,ForinComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title= "signup page";
}
