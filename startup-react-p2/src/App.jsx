import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Booking } from './pages/Booking/Booking';
import { Admin } from './pages/Admin/Admin';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { AuthState, loadAuth, clearAuth } from './utils/auth';

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Page Not Found</main>;
}

export default function App() {
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    const { userName: savedUser, authState: savedState } = loadAuth();
    setUserName(savedUser || '');
    setAuthState(savedState);
  }, []);

  function handleAuthChange(userName, newAuthState) {
    setUserName(userName);
    setAuthState(newAuthState);
  }

  function handleLogout() {
    clearAuth();
    setAuthState(AuthState.Unauthenticated);
    setUserName('');
  }

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <div className="navbar-brand">
              ScheduleSync {userName && <span className="ms-2">- {userName}</span>}
            </div>
            <div className="navbar-nav ms-auto flex-row gap-3">
              <NavLink className="nav-link" to="/">Home</NavLink>
              {authState === AuthState.Authenticated && (
                <>
                  <NavLink className="nav-link" to="/booking">Book</NavLink>
                  <NavLink className="nav-link" to="/admin">Admin</NavLink>
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
                </>
              )}
              {authState !== AuthState.Authenticated && (
                <NavLink className="nav-link" to="/login">Login</NavLink>
              )}
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home userName={userName} authState={authState} />} />
          <Route path='/login' element={
            <Login 
              userName={userName} 
              authState={authState} 
              onAuthChange={handleAuthChange} 
            />
          } />
          <Route path='/booking' element={
            authState === AuthState.Authenticated ? 
            <Booking userName={userName} /> : 
            <Navigate to="/login" />
          } />
          <Route path='/admin' element={
            authState === AuthState.Authenticated ? 
            <Admin userName={userName} /> : 
            <Navigate to="/login" />
          } />
          <Route path='/profile' element={
            authState === AuthState.Authenticated ? 
            <Profile userName={userName} /> : 
            <Navigate to="/login" />
          } />
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
