import React, { useState } from 'react';
import './patient.css';

const Patient = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', diagnosis: 'Flu' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', diagnosis: 'Cold' }
  ]);
  
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  const [patientForm, setPatientForm] = useState({ name: '', age: '', gender: '', diagnosis: '' });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientForm({ ...patientForm, [name]: value });
  };
  
  const addPatient = () => {
    const newPatient = { ...patientForm, id: patients.length + 1 };
    setPatients([...patients, newPatient]);
    setPatientForm({ name: '', age: '', gender: '', diagnosis: '' });
  };
  
  const selectPatient = (patient) => {
    setSelectedPatient(patient);
  };
  
  const editPatient = () => {
    setPatients(patients.map(p => p.id === selectedPatient.id ? { ...selectedPatient, ...patientForm } : p));
    setIsEditing(false);
    setSelectedPatient(null);
    setPatientForm({ name: '', age: '', gender: '', diagnosis: '' });
  };
  
  const startEditing = (patient) => {
    setIsEditing(true);
    setSelectedPatient(patient);
    setPatientForm({ name: patient.name, age: patient.age, gender: patient.gender, diagnosis: patient.diagnosis });
  };

  return (
    <div className="patient-container">
      <div className="patient-list">
        <h2>Patient List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Diagnosis</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.diagnosis}</td>
                <td>
                  <button onClick={() => selectPatient(patient)}>View</button>
                  <button onClick={() => startEditing(patient)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-section">
        <h2>{isEditing ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={patientForm.name} onChange={handleInputChange} />
          <label>Age:</label>
          <input type="number" name="age" value={patientForm.age} onChange={handleInputChange} />
          <label>Gender:</label>
          <input type="text" name="gender" value={patientForm.gender} onChange={handleInputChange} />
          <label>Diagnosis:</label>
          <input type="text" name="diagnosis" value={patientForm.diagnosis} onChange={handleInputChange} />
          {isEditing ? (
            <button type="button" onClick={editPatient}>Save Changes</button>
          ) : (
            <button type="button" onClick={addPatient}>Add Patient</button>
          )}
        </form>
      </div>

      {selectedPatient && (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <p><strong>Name:</strong> {selectedPatient.name}</p>
          <p><strong>Age:</strong> {selectedPatient.age}</p>
          <p><strong>Gender:</strong> {selectedPatient.gender}</p>
          <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
          <button onClick={() => setSelectedPatient(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Patient;
