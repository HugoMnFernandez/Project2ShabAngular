import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


export class AuthServiceService {

  constructor( private router: Router) { }

  checkUser() {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/login']);
    }
  }




}
