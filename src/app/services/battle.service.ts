import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Battle } from '../types/battle';

@Injectable()
export class BattleService {

  constructor(private http: HttpClient) { }

  readonly url = `http://localhost:8080/Shab/battle`;



  addBattle(battle: Battle) {
    console.log('creating battle: ' + battle);
    return this.http.post<Battle>(this.url, battle);
  }

  getBattleById(id: number) {
    return this.http.get<Battle>(this.url + '/' + id);
  }

  getAllActiveBattles() {
    return this.http.get<Battle>(this.url);
  }
}
