import React, { useState, useEffect } from 'react';
import './AddResearchPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AddResearchesPage = () => {
  const [researchData, setResearchData] = useState({
    title: '',
    category: '',
    abstract: '',
    keywords: '',
    researchers: '',
    institution: '',
    startDate: '',
    endDate: '',
    status: '',
    funding: '',
    researchUrl: ''
  });

  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      alert('You must be logged in to submit research.');
      navigate('/researches'); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setResearchData({
      ...researchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(researchData)
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/'); // Redirect to homepage after successful submission
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  
  return (
    <div className="form-container">
      {/* Left info section */}
     
      {/* Right form section */}
      <div className="form-section">
        <h2>Submit Your Research</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label>Research Title</label>
              <input type="text" name="title" onChange={handleChange} placeholder="Enter the research title" required />
            </div>

            <div>
              <label>Research Category</label>
              <select name="category" onChange={handleChange} required>
                <option value="">Select a category</option>
                <option value="Science">Science</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Engineering">Engineering</option>
                <option value="Environment">Environment</option>
              </select>
            </div>

            <div>
              <label>Start Date</label>
              <input type="date" name="startDate" onChange={handleChange} required />
            </div>

            <div>
              <label>End Date</label>
              <input type="date" name="endDate" onChange={handleChange} />
            </div>

            <div>
              <label>Research Status</label>
              <select name="status" onChange={handleChange} required>
                <option value="">Select research status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Published">Published</option>
                <option value="In Review">In Review</option>
              </select>
            </div>

            <div>
              <label>Funding</label>
              <input type="text" name="funding" onChange={handleChange} placeholder="Enter funding details" />
            </div>
          </div>

          <label>Research Abstract</label>
          <textarea name="abstract" rows="4" onChange={handleChange} placeholder="Provide a brief description" required />

          <label>Keywords</label>
          <input type="text" name="keywords" onChange={handleChange} placeholder="Add relevant keywords" />

          <label>Researcher(s) Name</label>
          <input type="text" name="researchers" onChange={handleChange} placeholder="Enter the name(s) of researcher(s)" required />

          <label>Institution/Organization</label>
          <input type="text" name="institution" onChange={handleChange} placeholder="Enter affiliated institution" required />

          <label>Research URL</label>
          <input type="url" name="researchUrl" onChange={handleChange} placeholder="Provide a URL link" />

          <button type="submit">Submit Research</button>
        </form>
      </div>
    </div>
  );
};

export default AddResearchesPage;
