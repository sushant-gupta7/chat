import { Component } from '@angular/core';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  messages: string[] = [];

  constructor(private chatService: ChatService) {
    this.getAllMessages();
  }

  ngOnInit() {}

  getAllMessages() {
    this.chatService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
      console.log(this.messages);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }
}
