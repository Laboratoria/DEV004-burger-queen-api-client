import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private storage: StorageService,

  ) { } 
  email = this.storage.getEmailUser();
  role = this.storage.getRoleUser();
}
