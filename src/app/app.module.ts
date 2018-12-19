// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { BattlesComponent } from './component/battles/battles.component';

// Services
import { UserServiceService } from './services/user-service.service';
import { LoginServiceService } from './services/login-service.service';
import { FollowHeroComponent } from './component/follow-hero/follow-hero.component';

import { CharacterService } from './services/character.service';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FollowHeroComponent,
    BattlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService, UserServiceService, CharacterService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

