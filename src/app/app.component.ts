import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: [`
  :host {
    margin-left:auto;
    margin-right:auto;
  }
`]
})
export class AppComponent implements OnInit {
  title = 'hero';

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'og:title', content: 'Hero Creation' });
    this.meta.addTag({ name: 'keywords', content: 'hero, creation, ia' });
    this.meta.addTag({ name: 'description', content: 'Create you hero with a click' });
    this.meta.addTag({ name: 'og:description', content: 'Create you hero with a click' });
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'author', content: 'Gustavo Sasaki Roncaglia' });
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.addTag({ name: 'og:url', content: 'https://hero-front-end.vercel.app/' });
    this.meta.addTag({ name: 'og:image', content: 'https://hero-front-end.vercel.app/detail/44' });
  }
}
