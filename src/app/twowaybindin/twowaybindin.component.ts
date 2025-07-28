import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybindin',
  standalone: true,
  templateUrl: './twowaybindin.component.html',
  styleUrl: './twowaybindin.component.css'
})
export class TwowaybindinComponent {
  title:string = "Two way binding"
  name:string=""
  changeName(event:Event){
    const val = (event.target as HTMLInputElement).value
    this.name = val
  }

}
