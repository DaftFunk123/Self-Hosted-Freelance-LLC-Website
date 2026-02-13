import React from 'react';
import './Home.css';

export function Home() {
  return (
    <main className="container mt-5 pt-5">
      <h1>ScheduleSync</h1>
      <h2>Smart scheduling assistant for family-run businesses</h2>
      <p><strong>Created by Jason Funk</strong></p>
      
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