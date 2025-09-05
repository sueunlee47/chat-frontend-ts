import ChatRoom from '@/pages/ChatRoom';
import socket from '@/socket';
import { useEffect, useState } from 'react';

export default function ChatRoomList() {
  const [message, setMessage] = useState<string>('');

  // TODO: 채팅방 리스트 가져오기
  // TODO: 채팅방 리스트 항목 표시하기

  useEffect(() => {
    // TODO: 소켓연결 해제하자. 컴포넌트(ChatRoomList.tsx) 사라질떄, 소켓연결 해제
    // return () => {
    //   socket.off("message", () => {
    //   })
    // }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      // TODO: 메시지 타입 지정 any -> 타입변경
      socket.emit('message', message, (response: any) => {
        // TODO console.log 제거
        console.log('메시지 보낸거 응답 확인 가능 ======', response);
      });
      setMessage('');
    }
  };

  return (
    <>
      <h2>채팅방 리스트</h2>
      {/* TODO 채팅방 리스트 가져온거 보여주기 */}
      {/* <ul></ul> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="채팅방 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">입장</button>
      </form>

      <ChatRoom />
    </>
  );
}
