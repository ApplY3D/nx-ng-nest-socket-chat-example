import { Injectable } from '@angular/core';
import {
  PayloadType,
  client_$send_message,
  server_$send_message,
} from '@socket-chat/api-interfaces';
import { ChatSocket } from './socket/chat-socket';

@Injectable({ providedIn: 'root' })
export class SocketService {
  constructor(private chatSocket: ChatSocket) {}

  sendMessage(msg: string) {
    this.chatSocket.emit(client_$send_message.action, msg);
  }
  getMessage() {
    return this.chatSocket.fromEvent<PayloadType<typeof server_$send_message>>(
      server_$send_message.action
    );
  }
}
