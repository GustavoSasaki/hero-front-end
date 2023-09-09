import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FormHeroComponent } from './form-hero/form-hero.component';
import { GetImgUrlPipe } from './get-img-url.pipe';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeroCreationComponent } from './hero-creation/hero-creation.component';
import { AboutComponent } from './about/about.component';
import { GetBgHeroNamePipe } from './get-bg-hero-name.pipe';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    FormHeroComponent,
    GetImgUrlPipe,
    HeroCreationComponent,
    AboutComponent,
    GetBgHeroNamePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
