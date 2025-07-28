import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-comments-section',
  standalone: true,
   imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.css'
})

export class CommentsSectionComponent {
  commentSectionForm: FormGroup;

  constructor() {
    this.commentSectionForm = new FormGroup({
      comment: new FormControl('', [Validators.required,Validators.maxLength(500)])
    });
  }

  onSubmit() {
    if (this.commentSectionForm.valid) {
      console.log('Form Submitted', this.commentSectionForm.value);
    } else {
      console.error('Form Error');
    }
  }
}

