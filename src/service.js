import React from 'react';
import './service.css'; 
import { Link } from 'react-router-dom';

const HomeLog = () => {
  return (
    <div className="home-log">
      <h1>Home Log Dashboard</h1>
      
      <div className="component-grid">
        <Patient />
        <Appoint />
        <Doctors />
        <Campaign />
      </div>
    </div>
  );
}

const Patient = () => {
  return (
    <div className="component-box">
      <h2>Patient</h2>
      <p>Details about patients will go here.</p>
      <Link to="/patient">
      <button type='submit'>Go</button>
      </Link>
    </div>
  );
}

const Appoint = () => {
  return (
    <div className="component-box">
      <h2>Appointments</h2>
      <p>Upcoming appointments will be there.</p>
     
      <Link to="/appointment">
       <button type='submit'>Go</button>
      </Link>
    </div>
  );
}

const Doctors = () => {
  return (
    <div className="component-box">
      <h2>Doctors</h2>
      <p>List of doctors will be displayed here.</p>
      <Link to ="/doctor">
      <button type='submit'>Go</button>
      </Link>
    </div>
  );
}

const Campaign = () => {
  return (
    <div className="component-box">
      <h2>Campaign</h2>
      <p>Current campaigns will be displayed here.</p>
      <Link to ="/campaign">
      <button type='submit'>Go</button>
      </Link>
    </div>
  );
}

export default HomeLog
