import React from 'react';
import './Home.css';

export function Home({ user }) {
  // Load count from localStorage, or start at 0
  const [count, setCount] = React.useState(() => {
    const saved = localStorage.getItem('homeCount');
    return saved ? parseInt(saved) : 0;
  });

  // Save to localStorage whenever count changes
  React.useEffect(() => {
    localStorage.setItem('homeCount', count);
  }, [count]);

  return (
    <main className="container mt-5 pt-5">
      <h1>ScheduleSync</h1>
      <h2>Smart scheduling assistant for family-run businesses</h2>
      <p><strong>Created by Jason Funk</strong></p>
      
      {/* Welcome message for logged-in users */}
      {user && (
        <div className="alert alert-success text-center mb-4">
          Welcome back, {user}!
        </div>
      )}
      
      <div className="alert alert-info text-center mb-4">
        <p>You've visited this page {count} times (across all sessions).</p>
        <button 
          className="btn btn-primary btn-sm" 
          onClick={() => setCount(count + 1)}
        >
          Click to increment
        </button>
      </div>
      
      <section className="mt-4">
        <h3>🚀 Elevator Pitch</h3>
        <p>ScheduleSync is the smart scheduling assistant for family-run businesses. Imagine having a personal secretary who manages your appointments, sends automatic reminders, enforces your policies, and processes payments—all while you focus on delivering exceptional service.</p>
      </section>
      
      <section className="mt-4">
        <h3>🌤️ Weather Integration</h3>
        <div className="placeholder p-3 bg-light text-dark rounded">
          <p><strong>OpenWeatherMap API Placeholder</strong></p>
          <p>Weather data will display here to help outdoor businesses plan.</p>
          <p><em>Sample: "Tomorrow: ☀️ Sunny, 72°F - Perfect for outdoor rentals!"</em></p>
        </div>
      </section>
    </main>
  );
}