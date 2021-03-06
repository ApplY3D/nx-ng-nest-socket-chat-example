import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import {
  PayloadType,
  client_$send_message,
  server_$send_message,
  NAMESPACES,
  SOCKET_PORT,
} from '@socket-chat/api-interfaces';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(SOCKET_PORT, {
  namespace: NAMESPACES.CHAT,
  cors: { origin: '*' },
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  @SubscribeMessage(client_$send_message.action)
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: PayloadType<typeof client_$send_message>
  ) {
    // emit to all people, include sender
    this.server.emit(server_$send_message.action, message);
  }

  afterInit(server: Server) {
    // console.log('afterInit');
  }
  handleConnection(client: Socket, ...args: any[]) {
    // console.log('handleConnection');
  }
  handleDisconnect(client: Socket) {
    // console.log('handleDisconnect');
  }
}
