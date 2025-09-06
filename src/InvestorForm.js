import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [step, setStep] = useState(1); // Progress bar step tracker
  const totalSteps = 3; // Total steps in the form
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-fund', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        navigate('/funding-opportunities');
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 0.8s ease-in'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        gap: '30px',
        alignItems: 'stretch'
      }}>
        {/* Left Side Content Card */}
        <div style={{
          flex: '1',
          background: '#ffffff',
          color: '#1e293b',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          animation: 'slideInLeft 0.5s ease-out',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#1e293b'
          }}>
            Why Invest in Innovation?
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '20px',
            color: '#4b5563'
          }}>
            Your investment fuels groundbreaking ideas that shape the future. From cutting-edge research to transformative startups, every dollar makes a difference.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: '🔬', text: '<strong>Research:</strong> Drive scientific breakthroughs' },
              { icon: '📝', text: '<strong>IPR:</strong> Protect innovative concepts' },
              { icon: '🚀', text: '<strong>Startups:</strong> Launch the next big thing' },
              { icon: '💡', text: '<strong>Innovations:</strong> Create future solutions' },
            ].map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '15px',
                fontSize: '1rem',
                color: '#4b5563'
              }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Form with Progress Bar */}
        <div style={{
          flex: '1.5',
          background: '#ffffff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          animation: 'slideInRight 0.5s ease-out'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#1e293b'
          }}>
            Funding Application
          </h2>

          {/* Progress Bar */}
          <div style={{
            marginBottom: '30px',
            position: 'relative'
          }}>
            <div style={{
              height: '8px',
              background: '#e5e7eb',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progressPercentage}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                transition: 'width 0.5s ease'
              }}></div>
            </div>
            <p style={{
              textAlign: 'center',
              marginTop: '10px',
              color: '#6b7280',
              fontSize: '0.9rem'
            }}>
              Step {step} of {totalSteps}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Step 1 */}
            {step === 1 && (
              <>
                <div style={{ animation: 'fadeInUp 0.5s ease' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Name<span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="profileName"
                    value={formData.profileName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                <div style={{ animation: 'fadeInUp 0.5s ease 0.1s' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Email<span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: '#4f46e5',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    ':hover': { background: '#4338ca' }
                  }}
                >
                  Next
                </button>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <div style={{ animation: 'fadeInUp 0.5s ease' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      background: '#fff',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                  >
                    <option value="IPR">IPR</option>
                    <option value="Startups">Startups</option>
                    <option value="Researches">Research</option>
                    <option value="Innovations">Innovations</option>
                  </select>
                </div>
                <div style={{ animation: 'fadeInUp 0.5s ease 0.1s' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="Enter project title"
                  />
                </div>
                <div style={{ animation: 'fadeInUp 0.5s ease 0.2s' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      minHeight: '100px',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="Describe your project..."
                  />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      flex: '1',
                      background: '#6b7280',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                      ':hover': { background: '#4b5563' }
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      flex: '1',
                      background: '#4f46e5',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                      ':hover': { background: '#4338ca' }
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <div style={{ animation: 'fadeInUp 0.5s ease' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Funding Amount ($)
                  </label>
                  <input
                    type="number"
                    name="fundingAmount"
                    value={formData.fundingAmount}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="Enter amount"
                    min="0"
                    step="1000"
                  />
                </div>
                <div style={{ animation: 'fadeInUp 0.5s ease 0.1s' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '600' }}>
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      minHeight: '100px',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease',
                      ':focus': { borderColor: '#4f46e5', outline: 'none' }
                    }}
                    placeholder="Any additional details..."
                  />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      flex: '1',
                      background: '#6b7280',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                      ':hover': { background: '#4b5563' }
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: '1',
                      background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      ':hover': { transform: 'scale(1.05)' }
                    }}
                  >
                    Submit Application
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default InvestorForm;