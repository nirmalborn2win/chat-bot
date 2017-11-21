import { Component, OnInit } from '@angular/core';
import { ChatingService, Message } from '../chating.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  
  constructor(public chat: ChatingService) { }
  ngOnInit() {
    // appends to array after each new message is added to feedSource

    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
   
  }
  sendMessage() {
    if(this.formValue !== ""){
      this.chat.converse(this.formValue.trim());
      this.formValue = '';
    }
   
  }
}