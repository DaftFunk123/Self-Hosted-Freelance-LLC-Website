import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Booking } from './pages/Booking/Booking';
import { Admin } from './pages/Admin/Admin';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Page Not Found</main>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <div className="navbar-brand">
              ScheduleSync
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/booking">
                  Book Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
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