// lib/socket.ts
import { io, Socket } from 'socket.io-client';

let socket: Socket;

const initializeSocket = (): Socket => {
  if (!socket) {
    socket = io('http://localhost:3000');
  }
  return socket;
};

export { initializeSocket };
