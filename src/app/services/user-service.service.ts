import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';

@Injectable()
export class UserServiceService {

  readonly url = `http://localhost:8080/Shab/user/`;

  constructor(private http: HttpClient) { }

  getUser(username: string) {

    const userUrl = this.url + username;
    return this.http.get<User>(userUrl);

  }

}
