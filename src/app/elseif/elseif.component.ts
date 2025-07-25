import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  standalone: true,
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css'
})

export class ElseifComponent {
  title:string = "else if Condtion"
  color:number|string = 2;

  handleColor(val:number){
    this.color = val
  }
}