/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InnovationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    keywords: '',
    dateOfInnovation: '',
    researchStage: '',
    image: null,
    documents: null,
    contactName: '',
    contactEmail: '',
    organization: '',
    collaborators: '',
    fundingSupport: '',
    impactBenefits: '',
    iprStatus: '',
    demoLink: '',
    approvalStatus: '',
    additionalNotes: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/submit-innovation', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Innovation submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting innovation form:', error.response?.data || error.message);
      alert('Error submitting the innovation form. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeIn 1s ease-in'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '30px',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Post a New Innovation
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Form Fields */}
          {[
            { label: 'Innovation Title', name: 'title', type: 'text', required: true },
            { label: 'Category', name: 'category', type: 'text', required: true },
            { label: 'Keywords/Tags', name: 'keywords', type: 'text' },
            { label: 'Date of Innovation', name: 'dateOfInnovation', type: 'date' },
            { label: 'Research/Development Stage', name: 'researchStage', type: 'text' },
            { label: 'Innovation Image', name: 'image', type: 'file' },
            { label: 'Supporting Documents', name: 'documents', type: 'file' },
            { label: 'Contact Name', name: 'contactName', type: 'text' },
            { label: 'Contact Email', name: 'contactEmail', type: 'email', required: true },
            { label: 'Organization', name: 'organization', type: 'text' },
            { label: 'Collaborators', name: 'collaborators', type: 'text' },
            { label: 'Funding/Support', name: 'fundingSupport', type: 'text' },
            { label: 'IPR Status', name: 'iprStatus', type: 'text' },
            { label: 'Demo/Link', name: 'demoLink', type: 'url' },
            { label: 'Approval Status', name: 'approvalStatus', type: 'text' },
          ].map((field, index) => (
            <div key={field.name} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              animation: `slideIn 0.5s ease ${index * 0.1}s both`
            }}>
              <label style={{
                color: '#34495e',
                fontWeight: '500',
                fontSize: '1.1rem'
              }}>
                {field.label} {field.required && <span style={{ color: '#e74c3c' }}>*</span>}
              </label>
              {field.type !== 'file' ? (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #bdc3c7',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    ':focus': {
                      borderColor: '#3498db',
                      boxShadow: '0 0 5px rgba(52, 152, 219, 0.3)',
                      outline: 'none'
                    }
                  }}
                />
              ) : (
                <input
                  type="file"
                  name={field.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #bdc3c7',
                    background: '#f9f9f9',
                    cursor: 'pointer'
                  }}
                />
              )}
            </div>
          ))}

          {/* Textareas */}
          {[
            { label: 'Impact and Benefits', name: 'impactBenefits' },
            { label: 'Additional Notes', name: 'additionalNotes' },
          ].map((field, index) => (
            <div key={field.name} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              animation: `slideIn 0.5s ease ${(index + 15) * 0.1}s both`
            }}>
              <label style={{
                color: '#34495e',
                fontWeight: '500',
                fontSize: '1.1rem'
              }}>
                {field.label}
              </label>
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #bdc3c7',
                  fontSize: '1rem',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  ':focus': {
                    borderColor: '#3498db',
                    boxShadow: '0 0 5px rgba(52, 152, 219, 0.3)',
                    outline: 'none'
                  }
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #3498db 0%, #2980b9 100%)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              marginTop: '20px',
              alignSelf: 'center',
              animation: 'slideIn 0.5s ease 2s both',
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)'
              }
            }}
          >
            Submit Innovation
          </button>
        </form>
      </div>

      {/* Inline keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default InnovationForm;