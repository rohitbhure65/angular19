import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatButtonModule,MatSelectModule,MatFormFieldModule,MatInputModule],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent {
  businessForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      technologyOrProductStartup: ['', [Validators.required]],
      problemSolving: ['', [Validators.required]],
      valueProposition: ['', [Validators.required]],
      uniqueSellingPoint: ['', [Validators.required]],
      targetCustomerSegment: ['', [Validators.required]],
      marketSizeOpportunity: [''],
      scaleUpAim: [''],
      revenueModel: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.businessForm.valid) {
      console.log('Form Submitted', this.businessForm.value);
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
