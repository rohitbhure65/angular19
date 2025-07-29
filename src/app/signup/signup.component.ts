import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAndSetComponent } from '../getandset/getandset.component';
import { ElseifComponent } from '../elseif/elseif.component';
import { ForinComponent } from '../forin/forin.component';
import { SignalComponent } from '../signal/signal.component';
import { ComputedsignalsComponent } from '../computedsignals/computedsignals.component';
import { EffectComponent } from '../effect/effect.component';
import { ContextualforloopComponent } from '../contextualforloop/contextualforloop.component';
import { TwowaybindinComponent } from '../twowaybindin/twowaybindin.component';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicstylingComponent } from '../dynamicstyling/dynamicstyling.component';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { CommentsSectionComponent } from '../comments-section/comments-section.component';
import { StartupfundingdetailsComponent } from '../startupfundingdetails/startupfundingdetails.component';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    GetAndSetComponent,
    ReactiveFormsModule,
    ElseifComponent,
    ForinComponent,
    SignalComponent,
    ComputedsignalsComponent,
    EffectComponent,
    ContextualforloopComponent,
    TwowaybindinComponent,
    DynamicstylingComponent,
    BusinessDetailsComponent,
    CommentsSectionComponent,
    StartupfundingdetailsComponent
  ],
  templateUrl: './signup.component.html', 
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  title = 'signup page';
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  }); 

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log(this.userForm.value?.name);
      console.log(this.userForm.value?.email);
      console.log(this.userForm.value?.password);
    } else {
      console.log('Form Invalid');
    }
  }
}
