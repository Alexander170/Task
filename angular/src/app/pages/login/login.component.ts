import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    login: '',
    password: '',
  }

  userLogin: any = {
    login: '',
    password: '',
  }

  router = inject(Router);

  onRegister() {
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const localArray = JSON.parse(isLocalData)
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray))
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray))
    }
    // alert('Reg success')
  }

  onLogin() {
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const users = JSON.parse(isLocalData)
      const isUserFound = users.find((m:any) => m.login == this.userLogin.login && m.password == this.userLogin.password);
      if(isUserFound != undefined) {
        this.router.navigateByUrl('dashboard')
      } else {
        alert('Error data');
      }
      } else {
        alert('No user');
      }
    }
  }
