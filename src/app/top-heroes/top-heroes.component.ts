import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
})
export class TopHeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes() {
    this.heroes = await this.heroService.getTopHeroes()
  }
}
