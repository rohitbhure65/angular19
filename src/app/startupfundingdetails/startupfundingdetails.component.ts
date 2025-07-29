import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ],
  templateUrl: './startupfundingdetails.component.html',
  styleUrl: './startupfundingdetails.component.css',
})
export class StartupfundingdetailsComponent {
  isFundingDetailsEnabled = false;

  fundingRows = [
    {
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: '',
      disbursementAmount: ''
    }
  ];

  incubatorTypes = ['Private', 'Government', 'Academic'];
  fundingFormats = ['Equity', 'Grant', 'Loan', 'Convertible Note'];

  addRow() {
    this.fundingRows.push({
      schemeName: '',
      institutionName: '',
      institutionType: '',
      formatOfFunding: '',
      sanctionAmount: '',
      disbursementAmount: ''
    });
  }

  removeRow(index: number) {
    this.fundingRows.splice(index, 1);
  }

  onSave() {
    if (this.fundingRows.some(row =>
      !row.schemeName ||
      !row.institutionName ||
      !row.institutionType ||
      !row.formatOfFunding ||
      !row.sanctionAmount ||
      !row.disbursementAmount
    )) {
      alert('Please fill all required fields before saving.');
      return;
    }

    console.log('Saved Data:', this.fundingRows);
  }

  back(){

  }

  editRow(){
    
  }
}
