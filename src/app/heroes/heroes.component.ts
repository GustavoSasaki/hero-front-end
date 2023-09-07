import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getTitle } from '../getTitle';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html'
  ,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService, private messageService: MessageService, private readonly titleService: Title) {
    const title = getTitle('Heroes List')
    this.titleService.setTitle(title)
  }

  async ngOnInit() {
    this.heroes = await this.heroService.getHeroes()
  }

}
