import { createContext, FC } from 'react';
import { io } from 'socket.io-client';

export const websocketContext = createContext(null);

export const WebsocketProvider: FC = ({ children }) => {
  let socket: any;
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '');

    socket.on('connection', () => {
      socket.on('disconnect', () => {});
    });
  }

  return (
    <websocketContext.Provider value={socket}>
      {children}
    </websocketContext.Provider>
  );
};
