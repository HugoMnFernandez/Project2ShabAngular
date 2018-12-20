import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/types/battle';
import { BattleService } from 'src/app/services/battle.service';
import { CharacterMarvelServiceService } from 'src/app/services/character-marvel-service.service';

@Component({
  selector: 'app-view-battle',
  templateUrl: './view-battle.component.html',
  styleUrls: ['./view-battle.component.css']
})
export class ViewBattleComponent implements OnInit {

  battle: Battle;

  constructor(private battleService: BattleService, private marvelService: CharacterMarvelServiceService) { }

  ngOnInit() {
    this.battleService.getBattleById(18).subscribe(data => {this.battle = data; this.getCharacterInfoForBattle(); } );
    // this.battle = JSON.parse(sessionStorage.getItem('battle'));
  }

  getCharacterInfoForBattle() {

    // add the description, name, and thumbnail of each team1 character from the Marvel API
    this.battle.team1.characters.forEach(char => {
      this.marvelService.getCharacterById(char.characterId).subscribe(data => {
        char.description = data.data.results[0].description;
        char.name = data.data.results[0].name;
        char.thumbnail = data.data.results[0].thumbnail;
      });
    });

    // add the description, name, and thumbnail of each team2 character from the Marvel API
    this.battle.team2.characters.forEach(char => {
      this.marvelService.getCharacterById(char.characterId).subscribe(data => {
        char.description = data.data.results[0].description;
        char.name = data.data.results[0].name;
        char.thumbnail = data.data.results[0].thumbnail;
      });
    });

    console.log(this.battle);
  }

  voteTeam1() {
    this.battle.team1Votes++;
    this.battleService.updateBattle(this.battle).subscribe();
  }

  voteTeam2() {
    this.battle.team2Votes++;
    this.battleService.updateBattle(this.battle).subscribe();
  }
}
