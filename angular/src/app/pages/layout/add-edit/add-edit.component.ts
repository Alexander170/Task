import { Component, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  empForm: FormGroup;

  educations: Education[] = [
    { value: 'Среднее школьное', viewValue: 'Среднее школьное' },
    { value: 'Среднее специальное', viewValue: 'Среднее специальное' },
    { value: 'Высшее', viewValue: 'Высшее' },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef,
    private http: HttpClient
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
    });
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this.addEmployee(this.empForm.value).subscribe({ 
        next: () => {
          alert('Пользователь создан');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}