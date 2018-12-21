import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CreateBattlesComponent } from './component/create-battles/create-battles.component';
import { ViewActiveBattlesComponent } from './component/view-active-battles/view-active-battles.component';
import { ViewBattleComponent } from './component/view-battle/view-battle.component';
import { LadderComponent } from './component/ladder/ladder.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'create-battle', component: CreateBattlesComponent},
{path: 'battles', component: ViewActiveBattlesComponent},
{path: 'view-battle', component: ViewBattleComponent},
{path: 'ladder', component: LadderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
