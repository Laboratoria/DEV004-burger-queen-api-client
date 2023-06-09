import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getEmailUser(): string {
    const email = localStorage.getItem('user-email');
    return JSON.stringify(email).replace(/['"]+/g, '');
  }

  getRoleUser(): string {
    const role = localStorage.getItem('user-rol');
    return JSON.stringify(role).replace(/['"]+/g, '');
  }

  getIdUser(): string {
    const id = localStorage.getItem('user-id');
    return JSON.stringify(id).replace(/['"]+/g, '');
  }
}
