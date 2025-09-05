import { io, Socket } from 'socket.io-client';

const SERVER_URL = 'http://localhost:3001/chat';
const socket: Socket = io(SERVER_URL, {
  /* Manager options - https://socket.io/docs/v4/client-options/#manager-options */

  // TODO: 소켓 자동 연결 해제 autoConnect: false. 로그인(Login.tsx) 이후에 socket 연결 설정
  autoConnect: true, // 자동 연결
  transports: ['websocket'], // 실시간 성능 최적화
});

export default socket;
