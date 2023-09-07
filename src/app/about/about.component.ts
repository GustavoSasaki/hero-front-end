import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getTitle } from '../getTitle';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private readonly titleService: Title){
    const title = getTitle('About')
    this.titleService.setTitle(title)
  }
}
