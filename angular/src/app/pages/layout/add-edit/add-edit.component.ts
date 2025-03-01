import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent {
  educations: Education[] = [
    {value: 'Среднее школьное', viewValue: 'Среднее школьное'},
    {value: 'Среднее специальное', viewValue: 'Среднее специальное'},
    {value: 'Высшее', viewValue: 'Высшее'},
  ]
}
