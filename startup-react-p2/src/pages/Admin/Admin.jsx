import React from 'react';
import './Admin.css';

export function Admin({ user }) {
  const [appointments, setAppointments] = React.useState([]);
  const [stats, setStats] = React.useState({
    todayAppointments: 0,
    revenue: 0,
    newClients: 0
  });
  const [loading, setLoading] = React.useState(true);

  // Mock data - simulates an API call
  React.useEffect(() => {
    // Simulate network delay
    setTimeout(() => {
      setAppointments([
        { id: 1, time: '9:00 AM', service: 'Math Tutoring', client: 'John', status: 'confirmed' },
        { id: 2, time: '11:00 AM', service: 'Bounce House', client: 'Sarah', status: 'paid' },
        { id: 3, time: '2:00 PM', service: 'Music Lesson', client: 'Mike', status: 'pending' },
        { id: 4, time: '4:00 PM', service: 'Math Tutoring', client: 'Emily', status: 'confirmed' },
      ]);
      
      setStats({
        todayAppointments: 4,
        revenue: 450,
        newClients: 2
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  function updateAppointmentStatus(id, newStatus) {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  }

  function getStatusBadge(status) {
    const classes = {
      confirmed: 'bg-success',
      paid: 'bg-primary',
      pending: 'bg-warning',
      cancelled: 'bg-danger'
    };
    return `badge ${classes[status] || 'bg-secondary'}`;
  }

  if (loading) {
    return (
      <main className="container mt-5 pt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mt-5 pt-5">
      <h1>Admin Dashboard</h1>
      <p className="lead">Welcome back, {user}!</p>
      
      <div className="row g-4 my-4">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>Today's Appointments</h3>
            <p className="display-4">{stats.todayAppointments}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>Revenue Today</h3>
            <p className="display-4">${stats.revenue}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h3>New Clients</h3>
            <p className="display-4">{stats.newClients}</p>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(apt => (
              <tr key={apt.id}>
                <td>{apt.time}</td>
                <td>{apt.service}</td>
                <td>{apt.client}</td>
                <td>
                  <span className={getStatusBadge(apt.status)}>
                    {apt.status}
                  </span>
                </td>
                <td>
                  <select 
                    className="form-select form-select-sm"
                    value={apt.status}
                    onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                  >
                    <option value="confirmed">Confirmed</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}