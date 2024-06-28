// lib/socket.ts
import { io, Socket } from 'socket.io-client';

let socket: Socket;

const initializeSocket = (): Socket => {
  if (!socket) {
    socket = io('https://websocket-red.vercel.app/');
  }
  return socket;
};

export { initializeSocket };
