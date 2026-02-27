import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Booking } from './pages/Booking/Booking';
import { Admin } from './pages/Admin/Admin';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Page Not Found</main>;
}

export default function App() {
  const [user, setUser] = React.useState(() => {
    const saved = localStorage.getItem('user');
    return saved || null;
  });

  function login(username) {
    setUser(username);
    localStorage.setItem('user', username);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <div className="navbar-brand">
              ScheduleSync {user && <span className="ms-2">- {user}</span>}
            </div>
            <div className="navbar-nav ms-auto flex-row gap-3">
              <NavLink className="nav-link" to="/">Home</NavLink>
              
              {user ? (
                <>
                  <NavLink className="nav-link" to="/booking">Book</NavLink>
                  <NavLink className="nav-link" to="/admin">Admin</NavLink>
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  <button className="btn btn-outline-light btn-sm" onClick={logout}>
                    Logout ({user})
                  </button>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">Login</NavLink>
              )}
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route 
            path='/login' 
            element={<Login onLogin={login} />} 
          />
          <Route 
            path='/booking' 
            element={user ? <Booking user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/admin' 
            element={user ? <Admin user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/profile' 
            element={user ? <Profile user={user} /> : <Navigate to="/login" />} 
          />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50 mt-auto py-3">
          <div className="container-fluid text-center">
            <span className="text-white me-3">Jason Funk</span>
            <a className="text-white" href="https://github.com/DaftFunk123/Self-Hosted-Freelance-LLC-Website" target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}