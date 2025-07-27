import { Component, signal,computed } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-computedsignals',
  standalone: true,
  templateUrl: './computedsignals.component.html',
  styleUrl: './computedsignals.component.css'
})
export class ComputedsignalsComponent {
    router=inject(Router)
    navigator(){
      this.router.navigate(['/'])
    }

    title:string = "Computed Signals"
    // x:number = 10;
    // y:number = 30;
    // z:number = this.x + this.y
    x = signal(10);
    y = signal(40);
    z = computed(()=>this.x()+this.y())
    
    showValue(){
    // console.log(this.z) // output 40
    // this.x = 50
    // console.log(this.z) // output 40 expected output is 80 
                           // that's why we use computed signals
    console.log(this.z())
    this.x.set(100)
    console.log(this.z())
  }
}
