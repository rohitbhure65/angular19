import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      technologyOrProductStartup: ['', [Validators.required, Validators.maxLength(500)]],
      problemSolving: ['', [Validators.required, Validators.maxLength(500)]],
      valueProposition: ['', [Validators.required, Validators.maxLength(500)]],
      uniqueSellingPoint: ['', [Validators.required, Validators.maxLength(500)]],
      targetCustomerSegment: ['', [Validators.required, Validators.maxLength(500)]],
      marketSizeOpportunity: ['', Validators.maxLength(500)],
      scaleUpAim: ['', Validators.maxLength(500)],
      revenueModel: ['', [Validators.required, Validators.maxLength(500)]],
      website: ['', [Validators.required, Validators.maxLength(500)]],
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
