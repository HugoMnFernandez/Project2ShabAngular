import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/types/character-results';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/types/character';
import { CharacterMarvelServiceService } from 'src/app/services/character-marvel-service.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  name: string;

  characterResults: CharacterResults;

  characters: Character[];

  selectedCharacters: Character[][];

  selectedTeam: number;

  imageSrc: string;

  characterName: string;

  constructor(private charMarvelService: CharacterMarvelServiceService, private charService: CharacterService) { }

  ngOnInit() {
    this.characterResults = new CharacterResults();
    this.selectedTeam = 0;
    this.selectedCharacters = [[], []];
    this.selectedCharacters[0] = [];
    this.selectedCharacters[1] = [];
  }

  findCharacter() {
    this.charMarvelService.getCharacterByName(this.name).subscribe(data => this.setCharacter(data));
  }

  setCharacter(data: CharacterResults) {
    this.characterResults = data;
    this.characters = this.charService.convertFromResultsToCharacters(this.characterResults);
  }

  selectCharacter(character: Character, team: number) {

    let characterRemoved = false;

    // If the character has already been selected remove them from the array
    this.selectedCharacters[team].forEach((item, index) => {
      if (item.characterId === character.characterId) {
        this.selectedCharacters[team].splice(index, 1);
        characterRemoved = true;
      }
    });

    // If the character has not been selected add them to the array
    if (!characterRemoved) {
      this.selectedCharacters[team].push(character);
    }
  }

}
