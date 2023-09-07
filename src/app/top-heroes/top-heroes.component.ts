import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SITE_TITLE } from '../variables';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
})
export class TopHeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private readonly titleService: Title) { 
    this.titleService.setTitle(SITE_TITLE)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes() {
    this.heroes = await this.heroService.getTopHeroes()
  }
}
