import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/types/character-results';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/types/character';
import { CharacterMarvelServiceService } from 'src/app/services/character-marvel-service.service';
import { BattleService } from 'src/app/services/battle.service';
import { Battle } from 'src/app/types/battle';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-battles',
  templateUrl: './create-battles.component.html',
  styleUrls: ['./create-battles.component.css']
})
export class CreateBattlesComponent implements OnInit {

  name: string;

  characterResults: CharacterResults;

  characters: Character[];

  location: string;

  startDate: string;

  endDate: string;

  selectedCharacters: Character[][];

  selectedTeam: number;

  imageSrc: string;

  characterName: string;

  styleState1 = {
    border: '5px solid black'
  };

  styleState2 = {
    border: '0px solid black'
  };

  constructor(private battleService: BattleService,
              private charMarvelService: CharacterMarvelServiceService,
              private charService: CharacterService) { }

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

  // When a character is clicked on they are added to or removed from a team
  selectCharacter(character: Character, team: number) {

    console.log('select character ' + character.characterId);

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

  team1Click() {
    if (this.styleState1.border === '0px solid black') {
      this.styleState1.border = '5px solid black';
      this.styleState2.border = '0px solid black';
    }

    // Team 1 is index 0
    this.selectedTeam = 0;
  }

  team2Click() {
    if (this.styleState2.border === '0px solid black') {
      this.styleState2.border = '5px solid black';
      this.styleState1.border = '0px solid black';
    }

    // Team 2 is index 1
    this.selectedTeam = 1;
  }

  createBattle() {
    let battle: Battle;
    battle = new Battle();
    battle.location = this.location;
    battle.result = 0;
    battle.startDate = this.startDate;
    battle.endDate = this.endDate;
    battle.team1Votes = 0;
    battle.team2Votes = 0;
    battle.team1 = new Team(this.selectedCharacters[0]);
    battle.team2 = new Team(this.selectedCharacters[1]);

    console.log(battle);
    this.battleService.addBattle(battle).subscribe();
  }
}
