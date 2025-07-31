import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { AlphabetOnlyDirective } from '../directives/alphabet-only.directive';
import { AlphanumericDirective } from '../directives/alphanumeric.directive';


@Component({
  selector: 'app-startupfundingdetails',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    AlphabetOnlyDirective,
    AlphanumericDirective,
  ],
  templateUrl: './startupfundingdetails.component.html',
  styleUrls: ['./startupfundingdetails.component.css'],
})
export class StartupFundingDetailsComponent {
  isFundingDetailsEnabled: boolean = false;

  startupFundingDetailsForm = new FormGroup({
    schemeName: new FormControl('', [Validators.required]),
    institutionName: new FormControl('', [Validators.required]),
    institutionType: new FormControl('', [Validators.required]),
    formatOfFunding: new FormControl('', [Validators.required]),
    sanctionAmount: new FormControl('', [Validators.required]),
    disbursementAmount: new FormControl('', [Validators.required]),
  });

  fundingRows: {
    schemeName: string;
    institutionName: string;
    institutionType: string;
    formatOfFunding: string;
    sanctionAmount: number;
    disbursementAmount: number;
    edit: boolean;
  }[] = [
    {
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: 0,
      disbursementAmount: 0,
      edit: true,
    },
  ];

  incubatorTypes: string[] = ['Corporate', 'Government', 'Private'];
  fundingFormats: string[] = [
    'Grant',
    'Equity',
    'Debenture',
    'Convertible Debenture',
    'Debt',
  ];

  addRow(): void {
    this.fundingRows.push({
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: 0,
      disbursementAmount: 0,
      edit: true,
    });
    this.fundingRows = [...this.fundingRows];
  }

  onSave(): void {
    const allFieldsFilled = this.fundingRows.every(
      (row) =>
        row.schemeName &&
        row.institutionName &&
        row.institutionType &&
        row.formatOfFunding &&
        row.sanctionAmount &&
        row.disbursementAmount
    );

    console.log('Saved Data:', this.fundingRows);
  }

  back(): void {
    console.log('Back button clicked');
  }

  editRow(index: number) {
    const current = this.fundingRows;
    let updated = [...current];
    updated[index] = { ...updated[index], edit: false };
    this.fundingRows = updated;
  }

  saveRow(index: number) {
    const current = this.fundingRows;
    let updated = [...current];
    updated[index] = { ...updated[index], edit: true };
    this.fundingRows = updated;
  }
}
