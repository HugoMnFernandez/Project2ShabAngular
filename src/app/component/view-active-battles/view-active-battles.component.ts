import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/types/battle';
import { BattleService } from 'src/app/services/battle.service';

@Component({
  selector: 'app-view-active-battles',
  templateUrl: './view-active-battles.component.html',
  styleUrls: ['./view-active-battles.component.css']
})
export class ViewActiveBattlesComponent implements OnInit {

  constructor(private battleService: BattleService) { }
  battles: Battle[];

  ngOnInit() {
    this.getActiveBattles();
  }

  getActiveBattles() {
    this.battleService.getAllActiveBattles().subscribe(data => this.battles);
  }

}
