import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterResults } from '../types/character-results';

@Injectable()
export class CharacterService {

  readonly url = `https://gateway.marvel.com/v1/public/characters?`;
  suffix = 'ts=1&apikey=bcccf104de12714fe69e04308ff85388&hash=ebf02a46d76b962863c5e42457849c95';

  constructor(private http: HttpClient) { }

  getCharacter(name: string) {

    const characterUrl = this.url + 'nameStartsWith=' + name + '&' + this.suffix;


    return this.http.get<CharacterResults>(characterUrl);

  }
}
