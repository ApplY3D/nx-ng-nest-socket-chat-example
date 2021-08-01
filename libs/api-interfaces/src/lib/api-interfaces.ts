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
export const client_$message = new SocketMessage<string>('client_$message');
export const server_$message = new SocketMessage<string>('MESSAGE_FROM_CLIENT');
