import { Component } from '@angular/core';

@Component({
  selector: 'app-contextualforloop',
  standalone: true,
  templateUrl: './contextualforloop.component.html',
  styleUrl: './contextualforloop.component.css',
})
export class ContextualforloopComponent {
  title:string = "For Loop Contextual variables"
  users:string [] = ["John", "Mary", "David", "Emma", "Tom"]
  salil_bg_color:string="red"
}
