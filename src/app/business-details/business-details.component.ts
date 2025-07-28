import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent {
  businessForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      technologyOrProductStartup: ['', [Validators.required, this.wordCountValidator(500)]],
      problemSolving: ['', [Validators.required, this.wordCountValidator(500)]],
      valueProposition: ['', [Validators.required, this.wordCountValidator(500)]],
      uniqueSellingPoint: ['', [Validators.required, this.wordCountValidator(500)]],
      targetCustomerSegment: ['', [Validators.required, this.wordCountValidator(500)]],
      marketSizeOpportunity: ['', this.wordCountValidator(500)],
      scaleUpAim: ['', this.wordCountValidator(500)],
      revenueModel: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  wordCountValidator(maxWords: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const wordCount = control.value.trim().split(/\s+/).length;
      return wordCount > maxWords ? { wordCountExceeded: { maxWords, actualWords: wordCount } } : null;
    };
  }

  onSubmit() {
    if (this.businessForm.valid) {
      console.log('Form Submitted', this.businessForm.value);
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
