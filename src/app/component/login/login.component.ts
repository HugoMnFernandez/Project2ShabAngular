import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  username: string;
  password: string;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
    this.user = new User();
  }

  loginUser() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.isAdmin = false;
    this.loginService.loginUser(this.user).subscribe(
      data => {this.user = data; console.log(data); });
  }
}
