import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/types/character-results';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  name: string;

  characterResults: CharacterResults;

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
    this.imageSrc = this.characterResults.data.results[0].thumbnail.path + '.' + this.characterResults.data.results[0].thumbnail.extension;
    this.characterName = this.characterResults.data.results[0].name;
  }
}
