import React from 'react';

export function Login() {
  return (
    <main className="container mt-5 pt-5" style={{ maxWidth: '400px' }}>
      <h1 className="text-center mb-4">Welcome to ScheduleSync</h1>
      
      <div className="card p-4">
        <h3>Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">🔒</span>
              <input type="password" className="form-control" placeholder="password" />
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary flex-grow-1">Login</button>
            <button className="btn btn-secondary flex-grow-1">Create Account</button>
          </div>
        </form>
      </div>
    </main>
  );
}