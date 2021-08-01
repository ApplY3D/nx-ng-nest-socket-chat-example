export interface Message {
  message: string;
}

class SocketMessage<T> {
  public payload!: T;
  constructor(public action: string) {}
}

export type PayloadType<T> = T extends { payload: unknown }
  ? T['payload']
  : unknown;

export const NAMESPACES = { CHAT: 'chat' };
export const SOCKET_PORT = 80;

// [from]_$[emit type]
export const client_$send_message = new SocketMessage<string>(
  'client_$send_message'
);
export const server_$send_message = new SocketMessage<string>(
  'server_$send_message'
);
