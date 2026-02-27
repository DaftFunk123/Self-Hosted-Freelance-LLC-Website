import React from 'react';
import './Booking.css';

export function Booking({ user }) {
  const [step, setStep] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedService, setSelectedService] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = React.useState(false);

  const services = [
    { id: 'math', name: 'Math Tutoring', price: 50 },
    { id: 'bounce', name: 'Bounce House Rental', price: 200 },
    { id: 'music', name: 'Music Lesson', price: 75 }
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  // Generate next 7 days for date selection
  const dates = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      result.push(date.toISOString().split('T')[0]);
    }
    return result;
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Booking submitted:', {
      user,
      date: selectedDate,
      service: selectedService,
      time: selectedTime,
      ...formData
    });
    setBookingConfirmed(true);
  }

  function resetBooking() {
    setStep(1);
    setSelectedDate('');
    setSelectedService('');
    setSelectedTime('');
    setFormData({ name: '', email: '', phone: '' });
    setBookingConfirmed(false);
  }

  if (bookingConfirmed) {
    return (
      <main className="container mt-5 pt-5">
        <div className="card p-5 text-center">
          <h2 className="text-success mb-4">✅ Booking Confirmed!</h2>
          <p>Thank you, {formData.name || user}!</p>
          <p>Your {services.find(s => s.id === selectedService)?.name} appointment has been booked for {selectedDate} at {selectedTime}.</p>
          <p>A confirmation email has been sent to {formData.email}.</p>
          <button className="btn btn-primary mt-4" onClick={resetBooking}>
            Book Another Appointment
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mt-5 pt-5">
      <h1>Book an Appointment</h1>
      <p className="lead">Welcome, {user}!</p>
      
      {/* Progress Steps */}
      <div className="progress mb-4" style={{ height: '30px' }}>
        <div 
          className="progress-bar progress-bar-striped" 
          style={{ width: `${(step / 3) * 100}%` }}
        >
          Step {step} of 3
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Date */}
        {step === 1 && (
          <section className="border p-4 my-4 rounded">
            <h3>📅 Select Date</h3>
            <div className="row g-3">
              {dates.map(date => (
                <div key={date} className="col-md-3">
                  <div 
                    className={`card p-3 text-center cursor-pointer ${selectedDate === date ? 'border-primary bg-primary text-white' : ''}`}
                    onClick={() => setSelectedDate(date)}
                    style={{ cursor: 'pointer' }}
                  >
                    {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setStep(2)}
                disabled={!selectedDate}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Select Service */}
        {step === 2 && (
          <section className="border p-4 my-4 rounded">
            <h3>🎯 Select Service</h3>
            <div className="row g-3">
              {services.map(service => (
                <div key={service.id} className="col-md-4">
                  <div 
                    className={`card p-3 text-center cursor-pointer ${selectedService === service.id ? 'border-primary bg-primary text-white' : ''}`}
                    onClick={() => setSelectedService(service.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5>{service.name}</h5>
                    <p className="mb-0">${service.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 d-flex gap-2">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                Back
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setStep(3)}
                disabled={!selectedService}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 3: Time and Contact Info */}
        {step === 3 && (
          <section className="border p-4 my-4 rounded">
            <h3>⏰ Select Time</h3>
            <div className="d-flex gap-2 flex-wrap mb-4">
              {timeSlots.map(time => (
                <span 
                  key={time}
                  className={`badge p-3 ${selectedTime === time ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => setSelectedTime(time)}
                  style={{ cursor: 'pointer' }}
                >
                  {time}
                </span>
              ))}
            </div>

            <h3 className="mt-4">📝 Your Information</h3>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mt-4 d-flex gap-2">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                Back
              </button>
              <button 
                type="submit" 
                className="btn btn-success"
                disabled={!selectedTime || !formData.name || !formData.email}
              >
                Confirm Booking
              </button>
            </div>
          </section>
        )}
      </form>
    </main>
  );
}