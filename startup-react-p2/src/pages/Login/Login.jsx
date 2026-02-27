import React from 'react';
import { Navigate } from 'react-router-dom';

export function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just use the email as the username
    // In a real app, you'd validate against a backend
    if (email.trim()) {
      onLogin(email.split('@')[0]); // Use the part before @ as username
      setSubmitted(true);
    }
  }

  if (submitted) {
    return <Navigate to="/" />;
  }

  return (
    <main className="container mt-5 pt-5" style={{ maxWidth: '400px' }}>
      <h1 className="text-center mb-4">Welcome to ScheduleSync</h1>
      
      <div className="card p-4">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input 
                type="email" 
                className="form-control" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">🔒</span>
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
            <button 
              type="button" 
              className="btn btn-secondary flex-grow-1"
              onClick={() => {
                // For demo, create a demo account with random name
                const demoUser = `user${Math.floor(Math.random() * 1000)}`;
                onLogin(demoUser);
                setSubmitted(true);
              }}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}