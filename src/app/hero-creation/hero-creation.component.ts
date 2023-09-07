import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { getTitle } from '../getTitle';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { BACK_END_URL } from '../variables';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.css']
})
export class HeroCreationComponent {
  hero: Omit<Hero, 'id' | 'description' | 'backstory'> = {
    gender: 'male',
    name: '',
    alter_ego: '',
    power: '',
    age: '',
    color: ''

  }
  isAdditing = false
  tryAdded = false

  bgTitleColors = ['bg-green-700','bg-purple-700','bg-red-700']


  constructor(private messageService: MessageService,
    private router: Router,
    private readonly titleService: Title) {
    const title = getTitle('Create')
    this.titleService.setTitle(title)
  }


  async addHero() {
    this.tryAdded = true

    if (this.isAdditing && !this.isHeroValid()) return
    this.isAdditing = true

    const post = await fetch(`${BACK_END_URL}/api/createHero`,
      { body: JSON.stringify(this.hero), method: "POST" })

    if (post.ok) {
      this.messageService.add(`${this.hero.name} was added to the database`)
      await this.redirect(post)
    } else {
      this.isAdditing = false
    }
  }

  isHeroValid() {
    return this.hero.name.length > 0 && this.hero.alter_ego.length > 0 && this.hero.power.length > 0
  }
  async redirect(post: Response) {
    const response = await post.json()
    const id = response?.id
    const router = this.router

    setTimeout(function () {
      if (!!id) {
        router.navigateByUrl(`/detail/${id}`)
      }
      else {
        router.navigateByUrl('/')
      }
    }, 10_000);
  }

  cancelAddition() {
    this.router.navigateByUrl('/')
  }
}
