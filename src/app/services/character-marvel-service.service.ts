import { Injectable } from '@angular/core';
import { CharacterResults } from '../types/character-results';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterMarvelServiceService {

  readonly marvelUrl = `https://gateway.marvel.com/v1/public/characters`;
  suffix = 'ts=1&apikey=bcccf104de12714fe69e04308ff85388&hash=ebf02a46d76b962863c5e42457849c95';

  constructor(private http: HttpClient) { }

  getCharacterByName(name: string) {

    const characterUrl = this.marvelUrl + '?nameStartsWith=' + name + '&' + this.suffix;
    return this.http.get<CharacterResults>(characterUrl);

  }


  getCharacterById(id: number) {

    const characterUrl = this.marvelUrl + '/' + id + '&' + this.suffix;
    return this.http.get<CharacterResults>(characterUrl);

  }

}
