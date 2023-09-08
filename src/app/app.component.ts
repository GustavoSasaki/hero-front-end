import { Component, OnInit } from '@angular/core';

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
export class AppComponent  {
  title = 'hero';

  constructor() { }

}
