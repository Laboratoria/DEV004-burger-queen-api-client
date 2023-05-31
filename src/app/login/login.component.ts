import { Component } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(
    public userService: AuthLoginService,
    public getUser: UsersService
  ) { }

  logIn() {
    console.log(this.email);
    console.log(this.password);
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((token) => {
      console.log(token);
      this.getUser.getUsers(user).subscribe((res) => {
        console.log(res);


      })

    });
  }

}