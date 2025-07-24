import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [SignupComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular19'; // property declaration with type annotation
  // data: string|number = "hello";

  // handleclickevent(){
  //   let a:number = 10; // variable declaration with type inference

  //   alert("Button clicked");
  //   this.showMessage();
  //   this.data = 20;
  // }

  // showMessage(){
  //   console.log("hello world");
  // }

  // Counter app
  counter: number = 0;

  handleCounter(val: string) {
    if (val === 'increment') {
      this.counter++;
      console.log('increment', this.counter);
    } else if (val === 'decrement') {
      if (this.counter == 0) return;
      this.counter--;
      console.log('decrement', this.counter);
    } else if (val === 'reset') {
      this.counter = 0;
    }
  }
}
