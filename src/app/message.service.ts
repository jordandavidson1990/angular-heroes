import { Injectable } from '@angular/core';
// import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.push(message)
  }

  clear(){
    this.messages = []
  }

}
