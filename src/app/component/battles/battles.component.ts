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

  imageSrc: string;

  characterName: string;

  constructor(private charService: CharacterService) { }

  ngOnInit() {
    this.characterResults = new CharacterResults();
  }

  findCharacter() {
    this.charService.getCharacter(this.name).subscribe(data => this.setCharacter(data));
  }

  setCharacter(data: CharacterResults) {
    this.characterResults = data;
    this.characters = this.characterResults.data.results;
    // this.imageSrc = this.characterResults.data.results[0].thumbnail.path + '.'
    // + this.characterResults.data.results[0].thumbnail.extension;
    // this.characterName = this.characterResults.data.results[0].name;
  }
}
