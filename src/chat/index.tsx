import { createContext, FC, useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { io } from 'socket.io-client';
import useLocalStorage from '../hooks/use-local-storage';
import { UserRole } from '../models/users/role';

export const websocketContext = createContext(null);

export const WebsocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);
  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  useEffect(() => {
    const socketConnection = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '');
    setSocket(socketConnection);
  }, [setSocket]);

  useEffect(() => {
    socket?.on('connect', () => {
      if (decodedToken) {
        if (decodedToken.role === UserRole.AGENT) {
          socket?.emit('joinAgentRooms', {
            userId: decodedToken._id,
            companyId: decodedToken.companyId,
          });
        } else {
          socket?.emit('joinBackofficeRooms', {
            userId: decodedToken._id,
            companyId: decodedToken.companyId,
          });
        }
      }
    });
    socket?.on('disconnect', () => {});
  }, [socket]);

  return (
    <websocketContext.Provider value={socket}>
      {children}
    </websocketContext.Provider>
  );
};
