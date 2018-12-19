import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterResults } from '../types/character-results';
import { Character } from '../types/character';

@Injectable()
export class CharacterService {

  readonly marvelUrl = `https://gateway.marvel.com/v1/public/characters`;
  suffix = 'ts=1&apikey=bcccf104de12714fe69e04308ff85388&hash=ebf02a46d76b962863c5e42457849c95';

  readonly springURL = 'http://localhost:8080/Shab/character';

  constructor(private http: HttpClient) { }

  getCharacter(name: string) {

    const characterUrl = this.marvelUrl + '?nameStartsWith=' + name + '&' + this.suffix;


    return this.http.get<CharacterResults>(characterUrl);

  }


  getCharacterById(id: number) {

    const characterUrl = this.marvelUrl + '/' + id + '&' + this.suffix;
    return this.http.get<CharacterResults>(characterUrl);

  }

  convertCharacterResultToCharacters(characterResults: CharacterResults) {
    let characters: Character[];
    for (let i = 0; i < characterResults.data.results.length; i++) {
      characters[i].characterId = characterResults.data.results[i].id;
      characters[i].name = characterResults.data.results[i].name;
      characters[i].description = characterResults.data.results[i].description;
      characters[i].thumbnail = characterResults.data.results[i].thumbnail;
    }

    return characters;

  }



}
