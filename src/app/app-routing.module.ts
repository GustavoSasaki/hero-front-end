import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: '', component: TopHeroesComponent, pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
