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


  getCharacterById(id: number) {
    this.character = new Character();
    // Get Spring info
    this.findSingleCharacter(id);
    // Get Marvel info
    // Get character result and fill in the blanks!



    // return full character
    return this.character;

  }

  findSingleCharacter(id: number) {
    this.springService.getCharacterById(id).subscribe(data => this.character = data);
  }



}
