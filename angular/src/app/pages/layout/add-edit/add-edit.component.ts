import { Component, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { EmployeeService } from '../../../services/employee.service';

interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent {
  empForm: FormGroup;


  educations: Education[] = [
    {value: 'Среднее школьное', viewValue: 'Среднее школьное'},
    {value: 'Среднее специальное', viewValue: 'Среднее специальное'},
    {value: 'Высшее', viewValue: 'Высшее'},
  ]

  constructor(private _fb: FormBuilder, private _dialogRef: DialogRef, private _empService: EmployeeService) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
    })
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      // console.log(this.empForm.value)
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Пользователь создан');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }
}
