import { createContext, FC, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const websocketContext = createContext(null);

export const WebsocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketConnection = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '');
    setSocket(socketConnection);
  }, [setSocket]);

  useEffect(() => {
    socket?.on('connect', () => {});
    socket?.on('disconnect', () => {});
  }, [socket]);

  return (
    <websocketContext.Provider value={socket}>
      {children}
    </websocketContext.Provider>
  );
};
