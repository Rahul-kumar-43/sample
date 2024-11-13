import React, { useState } from 'react';
import './ModelLab2.css';
import axios from 'axios';
const FeedbackForm = () => {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [feedback, setFeedback] = useState('');
 const [loading, setLoading] = useState(false);
 const [successMessage, setSuccessMessage] = useState('');
 const [errorMessage, setErrorMessage] = useState('');


 const validateForm = () => {
 if (!name || !email || !feedback) {
 return 'All fields are required!';
 }
 if (!/\S+@\S+\.\S+/.test(email)) {
 return 'Please enter a valid email address.';
 }
 return null;
 };
 
 const handleSubmit = async (e) => {
 e.preventDefault();
 
 setSuccessMessage('');
 setErrorMessage('');
 
 const validationError = validateForm();
 if (validationError) {
 setErrorMessage(validationError);
 return;
 }
 setLoading(true);
 
 try {
 const response = await axios.post('http://localhost:5001/feedback', {
 name,
 email,
 feedback
 });
  if (response.status === 201) {
        alert("Registration successful!");
      }
 
 setSuccessMessage('Feedback submitted successfully!');
 } catch (error) {
 
 setErrorMessage('An error occurred while submitting feedback.');
 } finally {
 setLoading(false);
 }
 };
 return (
 <div className="feedback-form-container">
 <h2>Feedback Form</h2>

 
 {successMessage && <div className="success-message">{successMessage}</div>}
 
 {errorMessage && <div className="error-message">{errorMessage}</div>}

 <form onSubmit={handleSubmit}>
 <div className="form-group">
 <label htmlFor="name">Name:</label>
 <input
 type="text"
 id="name"
 value={name}
 onChange={(e) => setName(e.target.value)}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="email">Email:</label>
 <input
 type="email"
 id="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="feedback">Feedback:</label>
 <textarea
 id="feedback"
 value={feedback}
 onChange={(e) => setFeedback(e.target.value)}
 required
 />
 </div>

 {loading ? (
 <button type="submit" disabled>
 Submitting...
 </button>
 ) : (
 <button type="submit">Submit Feedback</button>
 )}
 </form>
 </div>
 );
};
export default FeedbackForm;