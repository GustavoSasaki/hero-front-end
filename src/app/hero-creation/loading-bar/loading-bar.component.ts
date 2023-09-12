import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent {
  barWidth : '100%' | '0' = '0';

  @Input()
  set loading(value: boolean){
    this.barWidth = !value ? '100%' : '0'
  }
}
