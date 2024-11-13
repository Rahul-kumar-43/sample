import React, { useState } from 'react';
import './doctor.css';

const DoctorStaff = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Alice', specialty: 'Cardiology', experience: 10 },
    { id: 2, name: 'Dr. Bob', specialty: 'Neurology', experience: 8 }
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Alice', role: 'Nurse', department: 'Emergency' },
    { id: 2, name: 'Bob', role: 'Technician', department: 'Radiology' }
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [doctorForm, setDoctorForm] = useState({ name: '', specialty: '', experience: '' });

  const [staffForm, setStaffForm] = useState({ name: '', role: '', department: '' });

  const [selectedType, setSelectedType] = useState('doctor'); // default to doctor

  const [isEditingDoctor, setIsEditingDoctor] = useState(false);
  const [isEditingStaff, setIsEditingStaff] = useState(false);

  const handleDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm({ ...doctorForm, [name]: value });
  };

  const handleStaffInputChange = (e) => {
    const { name, value } = e.target;
    setStaffForm({ ...staffForm, [name]: value });
  };

  const addDoctor = () => {
    const newDoctor = { ...doctorForm, id: doctors.length + 1 };
    setDoctors([...doctors, newDoctor]);
    setDoctorForm({ name: '', specialty: '', experience: '' });
  };

  const addStaff = () => {
    const newStaff = { ...staffForm, id: staff.length + 1 };
    setStaff([...staff, newStaff]);
    setStaffForm({ name: '', role: '', department: '' });
  };

  const editDoctor = () => {
    setDoctors(doctors.map(d => d.id === selectedDoctor.id ? { ...selectedDoctor, ...doctorForm } : d));
    setIsEditingDoctor(false);
    setSelectedDoctor(null);
    setDoctorForm({ name: '', specialty: '', experience: '' });
  };

  const editStaff = () => {
    setStaff(staff.map(s => s.id === selectedStaff.id ? { ...selectedStaff, ...staffForm } : s));
    setIsEditingStaff(false);
    setSelectedStaff(null);
    setStaffForm({ name: '', role: '', department: '' });
  };

  const handleSelectionChange = (type) => {
    setSelectedType(type);
    if (type === 'doctor') {
      setIsEditingStaff(false);
      setIsEditingDoctor(false);
      setStaffForm({ name: '', role: '', department: '' });
    } else {
      setIsEditingDoctor(false);
      setIsEditingStaff(false);
      setDoctorForm({ name: '', specialty: '', experience: '' });
    }
  };

  return (
    <div className="doctor-staff-container">
      <div className="selection-grid">
        <button 
          className={selectedType === 'doctor' ? 'selected' : ''} 
          onClick={() => handleSelectionChange('doctor')}
        >
          Doctor
        </button>
        <button 
          className={selectedType === 'staff' ? 'selected' : ''} 
          onClick={() => handleSelectionChange('staff')}
        >
          Staff
        </button>
      </div>

      <div className="form-section">
        <h2>{selectedType === 'doctor' ? (isEditingDoctor ? 'Edit Doctor' : 'Add New Doctor') : (isEditingStaff ? 'Edit Staff' : 'Add New Staff')}</h2>
        {selectedType === 'doctor' ? (
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={doctorForm.name} onChange={handleDoctorInputChange} />
            <label>Specialty:</label>
            <input type="text" name="specialty" value={doctorForm.specialty} onChange={handleDoctorInputChange} />
            <label>Experience:</label>
            <input type="number" name="experience" value={doctorForm.experience} onChange={handleDoctorInputChange} />
            {isEditingDoctor ? (
              <button type="button" onClick={editDoctor}>Save Changes</button>
            ) : (
              <button type="button" onClick={addDoctor}>Add Doctor</button>
            )}
          </form>
        ) : (
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={staffForm.name} onChange={handleStaffInputChange} />
            <label>Role:</label>
            <input type="text" name="role" value={staffForm.role} onChange={handleStaffInputChange} />
            <label>Department:</label>
            <input type="text" name="department" value={staffForm.department} onChange={handleStaffInputChange} />
            {isEditingStaff ? (
              <button type="button" onClick={editStaff}>Save Changes</button>
            ) : (
              <button type="button" onClick={addStaff}>Add Staff</button>
            )}
          </form>
        )}
      </div>

      <div className="doctor-section">
        <h2>Doctor List</h2>
        <div className="doctor-card-container">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p><strong>Experience:</strong> {doctor.experience} years</p>
              <button onClick={() => { setSelectedDoctor(doctor); setIsEditingDoctor(true); setDoctorForm({ name: doctor.name, specialty: doctor.specialty, experience: doctor.experience }); }}>Edit</button>
            </div>
          ))}
        </div>
      </div>

      <div className="staff-section">
        <h2>Staff List</h2>
        <div className="staff-card-container">
          {staff.map((staffMember) => (
            <div key={staffMember.id} className="staff-card">
              <h3>{staffMember.name}</h3>
              <p><strong>Role:</strong> {staffMember.role}</p>
              <p><strong>Department:</strong> {staffMember.department}</p>
              <button onClick={() => { setSelectedStaff(staffMember); setIsEditingStaff(true); setStaffForm({ name: staffMember.name, role: staffMember.role, department: staffMember.department }); }}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorStaff;
