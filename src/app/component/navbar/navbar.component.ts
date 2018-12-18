import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor( private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user'));

   }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    location.reload();
  }

}
