import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: [ './messages.component.css' ],
  animations: [
  trigger('addMessage', [
    //transition(':enter', [
    //  style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
    //),
    //transition(':leave',
    //  [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
    //)

  ])
  ]
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
  messageId = 'message'

  close(){
    this.messageId = 'message-closed'
  }
}