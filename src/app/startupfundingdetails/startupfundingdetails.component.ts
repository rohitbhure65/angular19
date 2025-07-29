import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-startupfundingdetails',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './startupfundingdetails.component.html',
  styleUrls: ['./startupfundingdetails.component.css'],
})
export class StartupFundingDetailsComponent {
  isFundingDetailsEnabled: boolean = false;

  displayedColumns: string[] = [
    'sn',
    'schemeName',
    'institutionName',
    'institutionType',
    'formatOfFunding',
    'sanctionAmount',
    'disbursementAmount',
    'action',
  ];

  fundingRows: {
    schemeName: string;
    institutionName: string;
    institutionType: string;
    formatOfFunding: string;
    sanctionAmount: string;
    disbursementAmount: string;
    edit:boolean;
  }[] = [
    {
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: '',
      disbursementAmount: '',
      edit:true
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
      sanctionAmount: '',
      disbursementAmount: '',
      edit:true
    });
    this.fundingRows = [...this.fundingRows]; // Ensure change detection
  }

  removeRow(index: number): void {
    if (this.fundingRows.length > 1) {
      this.fundingRows.splice(index, 1);
      this.fundingRows = [...this.fundingRows]; // Trigger UI update
    }
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

    if (!allFieldsFilled) {
      alert('Please fill all required fields before saving.');
      return;
    }

    console.log('Saved Data:', this.fundingRows);
    alert('Funding details saved successfully!');
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
