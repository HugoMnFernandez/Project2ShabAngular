import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { Character } from '../../types/character';

@Component({
  selector: 'app-follow-hero',
  templateUrl: './follow-hero.component.html',
  styleUrls: ['./follow-hero.component.css']
})
export class FollowHeroComponent implements OnInit {


  characters = Character[];
  title = 'Followed SuperHeroes!';
  constructor() { }

  ngOnInit() {
  }



}
