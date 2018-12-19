import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/types/character-results';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/types/character';

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

  imageSrc: string;

  characterName: string;

  constructor(private charService: CharacterService) { }

  ngOnInit() {
    this.characterResults = new CharacterResults();
    this.selectedCharacters = [];
  }

  findCharacter() {
    this.charService.getCharacter(this.name).subscribe(data => this.setCharacter(data));
  }

  setCharacter(data: CharacterResults) {
    this.characterResults = data;
    this.characters = this.characterResults.data.results;
  }

  selectCharacter(character: Character, team: number) {

    let characterRemoved = false;

    // If the character has already been selected remove them from the array
    this.selectedCharacters.forEach((item, index) => {
      if (item[team].id === character.id) {
        this.selectedCharacters.splice(index, 1);
        characterRemoved = true;
      }
    });

    // If the character has not been selected add them to the array
    if (!characterRemoved) {
      this.selectedCharacters[team].push(character);
    }
  }

}
