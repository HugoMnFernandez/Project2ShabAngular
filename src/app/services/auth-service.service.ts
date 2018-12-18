import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


export class AuthServiceService {

  constructor( private router: Router) { }

  checkUser() {
    if (sessionStorage.length > 0) {
      if (sessionStorage.getItem('user') == null) {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }




}
