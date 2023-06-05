import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCurrentUserService {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('login-token');
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-rol');
    this.router.navigate(['/login'])
  }
}
