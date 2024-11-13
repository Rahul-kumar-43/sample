import React, { useState } from 'react';
import './campaign.css';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newCampaign.title && newCampaign.description && newCampaign.startDate && newCampaign.endDate) {
      setCampaigns([...campaigns, newCampaign]);
      setNewCampaign({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  return (
    <div className="campaign-page">
      <h1>Campaign Management</h1>
      
      <div className="campaign-form">
        <h2>Add a New Campaign</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Campaign Title</label>
            <input
              type="text"
              name="title"
              value={newCampaign.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newCampaign.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={newCampaign.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={newCampaign.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Campaign</button>
        </form>
      </div>

      <div className="campaigns-list">
        <h2>Existing Campaigns</h2>
        {campaigns.length > 0 ? (
          <ul>
            {campaigns.map((campaign, index) => (
              <li key={index} className="campaign-item">
                <strong>Title:</strong> {campaign.title} <br />
                <strong>Description:</strong> {campaign.description} <br />
                <strong>Start Date:</strong> {campaign.startDate} <br />
                <strong>End Date:</strong> {campaign.endDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No existing campaigns.</p>
        )}
      </div>
    </div>
  );
};

export default Campaign;
