import React from 'react';
import './Admin.css';

export function Admin() {
  return (
    <main className="container mt-5 pt-5">
      <h1>Admin Dashboard</h1>
      
      <div className="row g-4 my-4">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>Today's Appointments</h3>
            <p className="display-4">5</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>Revenue Today</h3>
            <p className="display-4">$450</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>New Clients</h3>
            <p className="display-4">2</p>
          </div>
        </div>
      </div>
      
      <section className="my-4">
        <h3>📋 Upcoming Appointments</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Time</th>
              <th>Service</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM</td>
              <td>Math Tutoring</td>
              <td>John</td>
              <td><span className="badge bg-success">Confirmed</span></td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td>Bounce House</td>
              <td>Sarah</td>
              <td><span className="badge bg-primary">Paid</span></td>
            </tr>
            <tr>
              <td>2:00 PM</td>
              <td>Music Lesson</td>
              <td>Mike</td>
              <td><span className="badge bg-warning">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}