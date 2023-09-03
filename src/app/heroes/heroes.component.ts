import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  template: `
  <ol>
    <li *ngFor="let hero of heroes">
      <a routerLink="/detail/{{hero.id}}">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </a>
    </li>
  </ol>

    `
  ,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = []

  constructor(private heroService: HeroService, private messageService : MessageService) {

  }

  async ngOnInit(){
    this.heroes = await this.heroService.getHeroes() 
  }

}
