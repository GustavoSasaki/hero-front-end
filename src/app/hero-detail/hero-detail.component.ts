import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { BACK_END_URL } from '../variables';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero | null | undefined;
  formHero!: Hero;
  editMode = false
  isUpdating = false

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  async getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = await this.heroService.getHero(id)
    this.formHero = { ...this.hero } as Hero
  }

  goBack(): void {
    this.location.back();
  }

  changeMode(): void {
    if (!this.hero)
      return

    this.editMode = !this.editMode
    if (this.editMode) {
      this.formHero = { ...this.hero } as Hero
    }
  }

  async saveChanges() {
    if (this.isUpdating)
      return
    this.isUpdating = true

    const post = await fetch(`${BACK_END_URL}/api/updateHero`,
      { body: JSON.stringify(this.formHero), method: "POST" })
    this.isUpdating = false

    if (post.ok) {
      this.hero = this.formHero
      this.editMode = false
      this.messageService.add(`${this.formHero.name}'s information was updated`)
    }

  }
}