import socket from '@/socket';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function ChatRoom() {
  // TODO: 내 로그인 정보 가져오기 localStorage.getItem('user', username.trim());
  // TODO: 접속한 채팅방 이름 가져오고, h2 에 표시하기
  // TODO: 채팅 내용 가져오기

  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      socket.emit('message', message, (response: any) => {
        // TODO: 메시지 보낸 후 프론트에 표시하기
        // TODO: 다른 계정으로 로그인되어 있는 경우, 메시지 받은거 프론트에 표시하기
        // console.log('메시지 보낸거 응답 확인 가능 ======', response);
      });

      setMessage('');
    }
  };

  return (
    <>
      {/* TODO: 채팅방 이름 표시 */}
      <h2>채팅방 블라블라</h2>

      {/* TODO: 채팅방 메시지 리스트 표시 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="메시지 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
