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
    MatTableModule
  ],
  templateUrl: './startupfundingdetails.component.html',
  styleUrls: ['./startupfundingdetails.component.css'],
})
export class StartupFundingDetailsComponent {
  isFundingDetailsEnabled = false;

  fundingRows: {
    schemeName: string;
    institutionName: string;
    institutionType: string;
    formatOfFunding: string;
    sanctionAmount: string;
    disbursementAmount: string;
  }[] = [
    {
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: '',
      disbursementAmount: ''
    }
  ];

  incubatorTypes: string[] = ['Corporate', 'Government', 'Private'];
  fundingFormats: string[] = ['Grant','Equity', 'Debenture', 'Convertible Debenture','Debt'];

  addRow(): void {
    this.fundingRows.push({
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: '',
      disbursementAmount: ''
    });
    this.fundingRows = [...this.fundingRows];
  }

  removeRow(index: number): void {
    this.fundingRows.splice(index, 1);
  }

  onSave(): void {
    const allFieldsFilled = this.fundingRows.every(row =>
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
  }

  back(): void {
    console.log('Back button clicked');
  }

  editRow(index: number): void {
    console.log('Edit row', index);
  }
}
