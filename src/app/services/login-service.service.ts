import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';

@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  readonly url = `http://localhost:8080/Shab/login`;



  loginUser(user: User) {
    return this.http.post<User>(this.url, user);
  }


}
