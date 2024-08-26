import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import { SocketConfig } from "../Constants";

interface SocketContextProps {
    socket: any;
    online: boolean;
  }

  export const SocketContext = createContext<SocketContextProps>({
    socket: null,
    online: false,
  });

export const SocketProvider = ({ children }:any) => {
  const { socket, online } = useSocket(SocketConfig); //Aqui va una constante :D

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
