import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './InvestorForm.css';

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    profileName: '',
    email: '',
    category: 'IPR',
    projectTitle: '',
    projectDescription: '',
    fundingAmount: '',
    additionalInfo: '',
  });

  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-fund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Form Data Submitted:', result);
        alert('Form data submitted successfully!');
        setFormData({
          profileName: '',
          email: '',
          category: 'IPR',
          projectTitle: '',
          projectDescription: '',
          fundingAmount: '',
          additionalInfo: '',
        });
        navigate('/funding-opportunities'); // Redirect to 'FundingOpportunitiesPage' after successful submission
      } else {
        console.error('Error:', result);
        alert('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form data');
    }
  };

  return (
    <div className="form-container">
      <div className="left-content">
        <h2>Why Funding is Important?</h2>
        <p>
          Funding plays a critical role in supporting innovative ideas and projects in Research, IPR, Startups, and Innovations. Investors help bring these ideas to life by providing financial resources necessary for research, development, and scaling. Here’s why funding is provided:
        </p>
        <ul>
          <li><strong>Research:</strong> Helps in exploring new knowledge, fostering innovation, and solving real-world problems.</li>
          <li><strong>IPR (Intellectual Property Rights):</strong> Supports the protection and commercialization of inventions, ensuring innovators get the credit they deserve.</li>
          <li><strong>Startups:</strong> Provides initial capital to turn ideas into businesses, leading to job creation and economic growth.</li>
          <li><strong>Innovations:</strong> Drives advancements in technology and services that improve lives and change industries.</li>
        </ul>
        <p>Investing in these areas leads to breakthroughs, sustainable business models, and societal progress. Your contribution as an investor accelerates this journey.</p>
      </div>
      <div className="right-content">
        <form onSubmit={handleSubmit}>
          <h2>Investor Funding Form</h2>
          <div className="form-group">
            <label htmlFor="profileName">Name:</label>
            <input
              type="text"
              id="profileName"
              name="profileName"
              value={formData.profileName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Select Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="IPR">IPR</option>
              <option value="Startups">Startups</option>
              <option value="Researches">Researches</option>
              <option value="Innovations">Innovations</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="projectTitle">Project Title:</label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fundingAmount">Funding Amount:</label>
            <input
              type="number"
              id="fundingAmount"
              name="fundingAmount"
              value={formData.fundingAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InvestorForm;
