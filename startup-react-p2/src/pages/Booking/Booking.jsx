import React from 'react';
import './Booking.css';

export function Booking() {
  return (
    <main className="container mt-5 pt-5">
      <h1>Book an Appointment</h1>
      
      <section className="border p-4 my-4 rounded">
        <h3>📅 Select Date</h3>
        <div className="calendar-grid">
          {/* Calendar placeholder */}
          <p>Interactive calendar will go here</p>
        </div>
      </section>
      
      <section className="border p-4 my-4 rounded">
        <h3>🎯 Select Service</h3>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-primary">Math Tutoring</button>
          <button className="btn btn-outline-primary">Bounce House Rental</button>
          <button className="btn btn-outline-primary">Music Lesson</button>
        </div>
      </section>
      
      <section className="border p-4 my-4 rounded">
        <h3>⏰ Available Times</h3>
        <div className="d-flex gap-2 flex-wrap">
          <span className="badge bg-secondary p-3">9:00 AM</span>
          <span className="badge bg-secondary p-3">10:00 AM</span>
          <span className="badge bg-secondary p-3">2:00 PM</span>
          <span className="badge bg-secondary p-3">3:00 PM</span>
        </div>
      </section>
      
      <section className="border p-4 my-4 rounded">
        <h3>📝 Client Information</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="your@email.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" placeholder="(123) 456-7890" />
          </div>
          <button className="btn btn-primary">Book Appointment</button>
        </form>
      </section>
    </main>
  );
}