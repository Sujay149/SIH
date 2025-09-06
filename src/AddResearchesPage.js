import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    researchUrl: '',
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f7f6',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Submit Your Research
        </h2>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                Research Title
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Enter the research title"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                Research Category
              </label>
              <select
                name="category"
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              >
                <option value="">Select a category</option>
                <option value="Science">Science</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Engineering">Engineering</option>
                <option value="Environment">Environment</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                Research Status
              </label>
              <select
                name="status"
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              >
                <option value="">Select research status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Published">Published</option>
                <option value="In Review">In Review</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                Funding
              </label>
              <input
                type="text"
                name="funding"
                onChange={handleChange}
                placeholder="Enter funding details"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
              Research Abstract
            </label>
            <textarea
              name="abstract"
              rows="4"
              onChange={handleChange}
              placeholder="Provide a brief description"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              onChange={handleChange}
              placeholder="Add relevant keywords"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
              Researcher(s) Name
            </label>
            <input
              type="text"
              name="researchers"
              onChange={handleChange}
              placeholder="Enter the name(s) of researcher(s)"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
              Institution/Organization
            </label>
            <input
              type="text"
              name="institution"
              onChange={handleChange}
              placeholder="Enter affiliated institution"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
              Research URL
            </label>
            <input
              type="url"
              name="researchUrl"
              onChange={handleChange}
              placeholder="Provide a URL link"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
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
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1a252f')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Submit Research
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResearchesPage;