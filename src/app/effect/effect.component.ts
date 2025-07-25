import { Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
  title:string = "Effects in angular"
  userName = signal<string>('Rohit')

    constructor(){
      effect(()=>{
        console.log(this.userName())
      })
    }
}
