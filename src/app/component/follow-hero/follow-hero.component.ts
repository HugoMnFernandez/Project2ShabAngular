import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { Character } from '../../types/character';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-follow-hero',
  templateUrl: './follow-hero.component.html',
  styleUrls: ['./follow-hero.component.css']
})
export class FollowHeroComponent implements OnInit {


  characters: Character[];
  title = 'Followed SuperHeroes!';
  constructor(private authServ: AuthServiceService) { }

  ngOnInit() {
    this.characters = this.authServ.checkUser().followedCharacters;
  }



}
