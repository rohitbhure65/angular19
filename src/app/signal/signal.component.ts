import { Component,effect,signal,Signal,computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  data : WritableSignal<number | string> = signal<number | string>(10);
  num: Signal<number> = computed(()=>200)

  count = signal(10);
  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }

  updateValue(){
    this.count.set(this.count()+1)
    // this.data.update((val)=>val+1) // return error if we have 2 data types other it will work perfectly
  }
}