import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { LoginServiceService } from '../../services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  username: string;
  password: string;

  loginInfo: string;

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    sessionStorage.clear();
  }

  loginUser() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.isAdmin = false;
    this.loginService.loginUser(this.user).subscribe(
      data => this.setUser(data));
  }

  setUser(data: User) {
      this.user = data;
      console.log(data);

      if (this.user != null) {
        this.router.navigate(['/home']);
        sessionStorage.setItem('user', JSON.stringify(this.user));
        location.reload();
      } else {
        this.user = new User();
        this.loginInfo = 'Invalid Credentials';
      }
  }

}
