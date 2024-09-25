import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartupForm.css'; // External CSS

const StartupForm = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    tagline: "",
    logo: null,
    founders: "",
    startupType: "",
    sector: "",
    email: "",
    phoneNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",
    foundedDate: "",
    employees: "",
    fundingStage: "",
    totalFunding: "",
    revenueModel: "",
    teamMembers: "",
    startDate: "",
    location: "",
    mission: "",
    description: "",
    nextMilestone: "",
    challenge: "",
    opportunities: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('You must be logged in to submit research.');
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch('http://localhost:5000/startup', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        alert('Startup data saved successfully!');
        navigate("/WorkingStartups", { state: formData });
      } else {
        alert('Failed to save startup data!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSave = () => {
    alert('Data saved temporarily!');
  };

  return (
    <form onSubmit={handleSubmit} className="startup-form">
      {currentStep === 1 && (
        <>
          <h2>Basic Startup Information</h2>
          <div className="form-group">
            <label>Startup Name:</label>
            <input type="text" name="startupName" value={formData.startupName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tagline/Slogan:</label>
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Logo:</label>
            <input type="file" name="logo" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label>Founder(s) Name:</label>
            <input type="text" name="founders" value={formData.founders} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Startup Type:</label>
            <select name="startupType" value={formData.startupType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Tech">Tech</option>
              <option value="Healthcare">Healthcare</option>
              <option value="FinTech">FinTech</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sector:</label>
            <select name="sector" value={formData.sector} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Software">Software</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h2>Additional Startup Information</h2>
          <div className="form-group">
            <label>Team Members:</label>
            <input type="text" name="teamMembers" value={formData.teamMembers} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Mission:</label>
            <textarea name="mission" value={formData.mission} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 3 && (
        <>
          <h2>Business Challenges & Opportunities</h2>
          <div className="form-group">
            <label>Next Milestone:</label>
            <textarea name="nextMilestone" value={formData.nextMilestone} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Current Challenge:</label>
            <textarea name="challenge" value={formData.challenge} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Future Opportunities:</label>
            <textarea name="opportunities" value={formData.opportunities} onChange={handleChange}></textarea>
          </div>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="submit" className="submit-btn">Submit</button>
        </>
      )}
    </form>
  );
};

export default StartupForm;
