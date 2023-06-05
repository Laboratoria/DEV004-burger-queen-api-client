import { Component } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    public loginServ: AuthLoginService,
    private router: Router
  ) { }

  logIn() {
    let role: string;
    // declare the user
    const user = { email: this.email, password: this.password };
    // make http request
    this.loginServ.login(user).subscribe({
      next: (data) => {
        role = data.user.role
        // save data in local storage
        localStorage.setItem('login-token', (data.accessToken))
        localStorage.setItem('user-id', (data.user.id))
        localStorage.setItem('user-email', (data.user.email))
        localStorage.setItem('user-rol', (data.user.role))
        // role defines where to navigate
        if (role === 'waiter') {
          this.router.navigate(['/food-menu'])
        } else if (role === 'admin') {
          this.router.navigate(['/workers-list'])
        } else if (role === 'chef') {
          this.router.navigate(['/workers-list'])
        }
      },
      // get any error of the request
      error: (err) => {
      this.errorMessage = err.error
      }
    });



  }



}