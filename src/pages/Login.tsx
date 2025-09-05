import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim()) {
      // TODO: 로그인 이후에, 소켓 연결하자
      // socket.connect();

      localStorage.setItem('user', username.trim());
      navigate('/chat');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
