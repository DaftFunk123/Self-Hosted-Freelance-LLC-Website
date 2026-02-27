import React from 'react';
import { AuthState, saveAuth } from '../utils/auth';

export function Login({ userName, authState, onAuthChange }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const mockUsers = {
    'admin': 'admin123',
    'jason': 'password',
    'demo': 'demo'
  };

  function handleLogin(e) {
    e.preventDefault();
    
    if (mockUsers[username] && mockUsers[username] === password) {
      saveAuth(username);
      onAuthChange(username, AuthState.Authenticated);
      setMessage('');
    } else {
      setMessage('Invalid username or password');
    }
  }

  if (authState === AuthState.Authenticated) {
    return (
      <main className="container mt-5 pt-5" style={{ maxWidth: '400px' }}>
        <div className="card p-4">
          <h2 className="text-center mb-4">Welcome back, {userName}!</h2>
          <p className="text-center">You are successfully logged in.</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => onAuthChange('', AuthState.Unauthenticated)}
          >
            Logout
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mt-5 pt-5" style={{ maxWidth: '400px' }}>
      <h1 className="text-center mb-4">Welcome to ScheduleSync</h1>
      
      <div className="card p-4">
        <h3>Login</h3>
        {message && <div className="alert alert-danger">{message}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">í´’</span>
              <input 
                type="password" 
                className="form-control" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary flex-grow-1">Login</button>
          </div>
        </form>
        <div className="mt-3 text-muted small">
          <p>Demo users: admin/admin123, jason/password, demo/demo</p>
        </div>
      </div>
    </main>
  );
}
