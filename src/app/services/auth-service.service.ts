import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthServiceService {

  constructor( private router: Router) { }

  checkUser() {
    if (sessionStorage.length > 0) {
      if (sessionStorage.getItem('user') == null) {
        this.router.navigate(['/login']);
      } else {
        return JSON.parse(sessionStorage.getItem('user'));
      }
    } else {
      this.router.navigate(['/login']);
    }
  }




}
