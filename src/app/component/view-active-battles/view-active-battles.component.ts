import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/types/battle';
import { BattleService } from 'src/app/services/battle.service';
import { CharacterMarvelServiceService } from 'src/app/services/character-marvel-service.service';

@Component({
  selector: 'app-view-active-battles',
  templateUrl: './view-active-battles.component.html',
  styleUrls: ['./view-active-battles.component.css']
})
export class ViewActiveBattlesComponent implements OnInit {

  constructor(private battleService: BattleService, private marvelService: CharacterMarvelServiceService) { }
  battles: Battle[];


  ngOnInit() {
    this.getActiveBattles();
  }

  getActiveBattles() {
    this.battleService.getAllActiveBattles().subscribe(data => { this.battles = data; this.getCharacterInfoForBattles(); });
  }

  getCharacterInfoForBattles() {

    // add the description, name, and thumbnail of each team1 character from the Marvel API
    this.battles.forEach(battle => {
      battle.team1.characters.forEach(char => {
        this.marvelService.getCharacterById(char.characterId).subscribe(data => {
          char.description = data.data.results[0].description;
          char.name = data.data.results[0].name;
          char.thumbnail = data.data.results[0].thumbnail;
        });
      });

      // add the description, name, and thumbnail of each team2 character from the Marvel API
      battle.team2.characters.forEach(char => {
        this.marvelService.getCharacterById(char.characterId).subscribe(data => {
          char.description = data.data.results[0].description;
          char.name = data.data.results[0].name;
          char.thumbnail = data.data.results[0].thumbnail;
        });
      });
    });

    console.log(this.battles);
  }

  battleClick() {

  }

}
