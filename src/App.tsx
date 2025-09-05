import { Route, Routes } from 'react-router';
import Login from '@/pages/Login';
import ChatRoomList from '@/pages/ChatRoomList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<ChatRoomList />} />
    </Routes>
  );
}

export default App;
