import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private _dialog: MatDialog) {

  }

  openAddEditEmpForm() {
    this._dialog.open(AddEditComponent)
  }

}
