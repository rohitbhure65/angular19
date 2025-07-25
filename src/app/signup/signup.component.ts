import { Component } from '@angular/core';
import { GetAndSetComponent } from '../getandset/getandset.component';
import { ElseifComponent } from '../elseif/elseif.component';
import { ForinComponent } from '../forin/forin.component';
import { SignalComponent } from '../signal/signal.component';
import { ComputedsignalsComponent } from '../computedsignals/computedsignals.component';
import { EffectComponent } from '../effect/effect.component';

@Component({
  selector: 'app-signup',
  imports: [GetAndSetComponent,ElseifComponent,ForinComponent,SignalComponent,ComputedsignalsComponent,EffectComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title= "signup page";
}
