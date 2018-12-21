import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/types/character';

import { CharacterSpringServiceService } from 'src/app/services/character-spring-service.service';
import { CharacterMarvelServiceService } from 'src/app/services/character-marvel-service.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  characters: Character[];

  constructor(private springService: CharacterSpringServiceService, private marvelService: CharacterMarvelServiceService) { }

  ngOnInit() {
    this.getActiveBattles();
  }

  getActiveBattles() {
    this.springService.getLadder().subscribe(data => { this.characters = data; this.getCharacterInfo(); });
  }

  getCharacterInfo() {
    this.characters.forEach(char => {
      this.marvelService.getCharacterById(char.characterId).subscribe(data => {
        char.description = data.data.results[0].description;
        char.name = data.data.results[0].name;
        char.thumbnail = data.data.results[0].thumbnail;
      });

    });
  }

}
