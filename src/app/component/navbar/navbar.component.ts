import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor( private router: Router, private authService: AuthServiceService) {

    this.user = authService.checkUser();

   }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    location.reload();
  }

}
