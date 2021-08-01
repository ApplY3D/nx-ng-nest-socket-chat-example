import { Injectable } from '@angular/core';
import { NAMESPACES, SOCKET_PORT } from '@socket-chat/api-interfaces';
import { Socket } from 'ngx-socket-io';

@Injectable({ providedIn: 'root' })
export class ChatSocket extends Socket {
  constructor() {
    super({
      url: `http://localhost:${SOCKET_PORT}/${NAMESPACES.CHAT}`,
      options: {},
    });
  }
}
