import { Component } from '@angular/core';

@Component({
  selector: 'app-getandset',
  standalone: true,
  templateUrl: './getandset.component.html',
  styleUrls: ['./getandset.component.css'],
})
export class GetAndSetComponent {
  name: string = '';
  displayName: string = '';
  email: string = "";

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = "Rohit Bhure";
  }

  getEmail(val:string){
    this.email = val
  }

  setEmail(){
    this.email = "company@test.com";
  }

}
