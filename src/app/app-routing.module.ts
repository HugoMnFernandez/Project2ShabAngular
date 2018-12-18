import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { BattlesComponent } from './component/battles/battles.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'battles', component: BattlesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
