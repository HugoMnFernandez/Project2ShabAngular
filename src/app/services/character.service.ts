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

    character: Character;
    results: CharacterResults;


  getCharacterById(id: number) {
    this.character = new Character();
    // Get Spring info
    this.findSingleCharacter(id);
    // Get Marvel info
    // Get character result and fill in the blanks!
    this.marvelService.getCharacterById(id);

    // return full character
    return this.character;

  }

  findSingleCharacter(id: number) {
    return this.springService.getCharacterById(id).subscribe(data => { this.character = data; return this.addApiInfo(id); });
  }

  addApiInfo(id: number) {
    this.marvelService.getCharacterById(id).subscribe(data => {this.results = data; return this.updateCharacter(); });
  }

  updateCharacter(): Character {
    this.character.name = this.results.data.results[0].name;
    this.character.description = this.results.data.results[0].description;
    this.character.thumbnail = this.results.data.results[0].thumbnail;
    return this.character;
  }

  convertFromResultsToCharacters(charResults: CharacterResults): Character[] {

    let characters: Character[];
    characters = [];

    charResults.data.results.forEach(char => {
      let character: Character;
      character = new Character();

      character.characterId = char.id;
      character.description = char.description;
      character.name = char.name;
      character.thumbnail = char.thumbnail;

      characters.push(character);
    });

    return characters;

  }


}
