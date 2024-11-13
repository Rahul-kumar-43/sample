import React, { useState } from 'react';
import './appointment.css'; 

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newAppointment.patientName && newAppointment.doctorName && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({
        patientName: '',
        doctorName: '',
        date: '',
        time: '',
      });
    }
  };

  return (
    <div className="appointments-page">
      <h1>Appointments Management</h1>
      
      <div className="appointment-form">
        <h2>Schedule a New Appointment</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={newAppointment.patientName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              name="doctorName"
              value={newAppointment.doctorName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Schedule Appointment</button>
        </form>
      </div>

      <div className="appointments-list">
        <h2>Upcoming Appointments</h2>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <strong>Patient:</strong> {appointment.patientName} <br />
                <strong>Doctor:</strong> {appointment.doctorName} <br />
                <strong>Date:</strong> {appointment.date} <br />
                <strong>Time:</strong> {appointment.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
