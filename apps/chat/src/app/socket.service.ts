import { Injectable } from '@angular/core';
import {
  client_$message,
  PayloadType,
  server_$message,
} from '@socket-chat/api-interfaces';
import { ChatSocket } from './socket/chat-socket';

@Injectable({ providedIn: 'root' })
export class SocketService {
  constructor(private chatSocket: ChatSocket) {}

  sendMessage(msg: string) {
    this.chatSocket.emit(client_$message.action, msg);
  }
  getMessage() {
    return this.chatSocket.fromEvent<PayloadType<typeof server_$message>>(
      server_$message.action
    );
  }
}
