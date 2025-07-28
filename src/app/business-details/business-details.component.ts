import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent {
  businessForm: FormGroup;

  constructor() {
    this.businessForm = new FormGroup({
      technologyOrProductStartup: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      problemSolving: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      valueProposition: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      uniqueSellingPoint: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      targetCustomerSegment: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      marketSizeOpportunity: new FormControl('', [Validators.maxLength(500)]),
      scaleUpAim: new FormControl('', [Validators.maxLength(500)]),
      revenueModel: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      website: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
  }

  onSubmit() {
    if (this.businessForm.valid) {
      console.log('Form Submitted', this.businessForm.value);
    } else {
      console.error('Form Error');
    }
  }
}
