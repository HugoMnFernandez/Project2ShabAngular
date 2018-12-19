import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterResults } from '../types/character-results';
import { Character } from '../types/character';
import { CharacterMarvelServiceService } from './character-marvel-service.service';
import { CharacterSpringServiceService } from './character-spring-service.service';

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient,
     private marvelService: CharacterMarvelServiceService,
     private springService: CharacterSpringServiceService) { }



  getCharacterById(id: number) {
    let character = new Character();
    character = this.springService.getCharacterById(id);
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
