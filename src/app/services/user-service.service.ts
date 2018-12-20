import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { CharacterService } from '../services/character.service';

@Injectable()
export class UserServiceService {

  readonly url = `http://localhost:8080/Shab/user/`;

  constructor(private http: HttpClient, private characterService: CharacterService) { }

  getUser(username: string) {
    const userUrl = this.url + username;
    return this.http.get<User>(userUrl);
  }

  fillCharacterList(user: User) {
    for (let i: number; i < user.followedCharacters.length; i++) {
      user.followedCharacters[i] = this.characterService.getCharacterById(user.followedCharacters[i].characterId);

    }


  }

}
