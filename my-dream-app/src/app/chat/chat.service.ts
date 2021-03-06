import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  url = "http://"+window.location.hostname+":5000";
  socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message) {
    this.socket.emit("new-message", message);
  }

 getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('emit-message', (message) => {
          console.log(message);
            observer.next(message);
        });
    });
}

}
