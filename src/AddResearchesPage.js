import React, { useState } from 'react';

const AddResearchesPage = () => {
  const [step, setStep] = useState(1);
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
    researchUrl: '',
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setResearchData({
      ...researchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(researchData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Redirect or reset form as needed
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const progressBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const progressStepStyle = {
    flex: 1,
    height: '4px',
    backgroundColor: step >= 1 ? '#2c3e50' : '#ddd',
    margin: '2px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
    padding: '20px',
  };

  const formCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
  };

  const formTitleStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={formContainerStyle}>
      <div style={formCardStyle}>
        <h2 style={formTitleStyle}>Submit Your Research</h2>
        <div style={progressBarStyle}>
          <div style={{ ...progressStepStyle, backgroundColor: step >= 1 ? '#2c3e50' : '#ddd' }}></div>
          <div style={{ ...progressStepStyle, backgroundColor: step >= 2 ? '#2c3e50' : '#ddd' }}></div>
          <div style={{ ...progressStepStyle, backgroundColor: step >= 3 ? '#2c3e50' : '#ddd' }}></div>
        </div>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Research Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Enter the research title"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Research Category</label>
                <select
                  name="category"
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select a category</option>
                  <option value="Science">Science</option>
                  <option value="Technology">Technology</option>
                  <option value="Health">Health</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Environment">Environment</option>
                </select>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Research Status</label>
                <select
                  name="status"
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select research status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Published">Published</option>
                  <option value="In Review">In Review</option>
                </select>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Funding</label>
                <input
                  type="text"
                  name="funding"
                  onChange={handleChange}
                  placeholder="Enter funding details"
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Research Abstract</label>
                <textarea
                  name="abstract"
                  rows="4"
                  onChange={handleChange}
                  placeholder="Provide a brief description"
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Keywords</label>
                <input
                  type="text"
                  name="keywords"
                  onChange={handleChange}
                  placeholder="Add relevant keywords"
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Researcher(s) Name</label>
                <input
                  type="text"
                  name="researchers"
                  onChange={handleChange}
                  placeholder="Enter the name(s) of researcher(s)"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Institution/Organization</label>
                <input
                  type="text"
                  name="institution"
                  onChange={handleChange}
                  placeholder="Enter affiliated institution"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Research URL</label>
                <input
                  type="url"
                  name="researchUrl"
                  onChange={handleChange}
                  placeholder="Provide a URL link"
                  style={inputStyle}
                />
              </div>
            </>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                style={{ ...buttonStyle, backgroundColor: '#3498db' }}
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                style={{ ...buttonStyle, backgroundColor: '#2ecc71' }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                style={{ ...buttonStyle, backgroundColor: '#e74c3c' }}
              >
                Submit Research
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResearchesPage;
