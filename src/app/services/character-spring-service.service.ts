import { Injectable } from '@angular/core';
import { Character } from '../types/character';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterSpringServiceService {
  readonly springURL = 'http://localhost:8080/Shab/character';

  constructor(private http: HttpClient) { }


  getCharacterById(id: number) {

    const characterUrl = this.springURL + '/' + id;
    return this.http.get<Character>(characterUrl);

  }

  getLadder() {
    return this.http.get<Character[]>(this.springURL + '/ladder');
  }
}
