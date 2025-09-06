import React, { useState } from 'react';

const districts = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Baroda'];

const industries = [
  'Water Technology', 'Renewable Energy', 'Agriculture Technology', 'Health Technology',
  'Education Technology', 'Fintech', 'Automotive', 'AI & Machine Learning', 'Textile',
  'Biotechnology', 'Tourism', 'E-Commerce',
];

const startupsData = [
  {
    name: "Smart Water Management System",
    teamMembers: ["Harsh Patel", "Priya Shah"],
    startDate: "2023-09-01",
    industry: "Water Technology",
    location: "Ahmedabad, Gujarat",
    district: "Ahmedabad",
    mission: "To address water scarcity...",
    description: "Developing a smart water management system...",
    progress: ["Deployed IoT sensors..."],
    nextMilestone: "Expand deployment to 2,000 homes...",
    challenge: "Scaling sensor production...",
    opportunities: "Collaborating with the Gujarat government...",
  },
  {
    name: "Renewable Energy Solutions",
    teamMembers: ["Ravi Desai", "Suman Patel"],
    startDate: "2022-03-15",
    industry: "Renewable Energy",
    location: "Surat, Gujarat",
    district: "Surat",
    mission: "To make renewable energy more affordable...",
    description: "Working on solar panels that provide energy-efficient solutions...",
    progress: ["Installed 150 solar panels across 20 villages"],
    nextMilestone: "Expand installation to 50 more villages...",
    challenge: "Overcoming technical obstacles in the terrain...",
    opportunities: "Expand to neighboring states...",
  },
  {
    name: "Renewable Energy Solutions",
    teamMembers: ["Ravi Desai", "Suman Patel"],
    startDate: "2022-03-15",
    industry: "Renewable Energy",
    location: "Surat, Gujarat",
    district: "Surat",
    mission: "To make renewable energy more affordable...",
    description: "Working on solar panels that provide energy-efficient solutions...",
    progress: ["Installed 150 solar panels across 20 villages"],
    nextMilestone: "Expand installation to 50 more villages...",
    challenge: "Overcoming technical obstacles in the terrain...",
    opportunities: "Expand to neighboring states...",
  },
  {
    name: "AgriTech Innovations",
    teamMembers: ["Ankit Mehta", "Neha Patel"],
    startDate: "2023-01-10",
    industry: "Agriculture Technology",
    location: "Vadodara, Gujarat",
    district: "Vadodara",
    mission: "To enhance agricultural productivity using advanced technologies...",
    description: "Developing precision farming tools and sensors...",
    progress: ["Piloted precision irrigation in 50 farms"],
    nextMilestone: "Implement across 200 farms by mid-2024...",
    challenge: "Integrating technology with traditional farming practices...",
    opportunities: "Partnerships with agricultural cooperatives...",
  },
  {
    name: "Healthcare AI Solutions",
    teamMembers: ["Pooja Shah", "Raj Kumar"],
    startDate: "2022-07-20",
    industry: "Healthcare",
    location: "Rajkot, Gujarat",
    district: "Rajkot",
    mission: "To improve patient outcomes through AI-powered diagnostic tools...",
    description: "Creating AI-driven tools for early diagnosis of diseases...",
    progress: ["Developed AI model for early cancer detection"],
    nextMilestone: "Launch commercial product by Q4 2024...",
    challenge: "Ensuring data privacy and regulatory compliance...",
    opportunities: "Collaborations with healthcare providers...",
  },
  {
    name: "Fintech Solutions",
    teamMembers: ["Kiran Rao", "Amit Patel"],
    startDate: "2023-06-01",
    industry: "Fintech",
    location: "Gandhinagar, Gujarat",
    district: "Gandhinagar",
    mission: "To revolutionize financial transactions and banking with innovative fintech solutions.",
    description: "Developing a blockchain-based platform for secure and transparent financial transactions.",
    progress: ["Completed beta testing with 100 users", "Secured regulatory approval"],
    nextMilestone: "Scale up to 1,000 users by end of 2024",
    challenge: "Navigating complex financial regulations",
    opportunities: "Potential partnerships with banks and financial institutions",
  },
  {
    name: "Automotive Innovations",
    teamMembers: ["Rajeev Kumar", "Simran Patel"],
    startDate: "2022-09-10",
    industry: "Automotive",
    location: "Baroda, Gujarat",
    district: "Baroda",
    mission: "To advance automotive technology with smart, eco-friendly solutions.",
    description: "Developing electric vehicle components and autonomous driving technologies.",
    progress: ["Completed prototype testing", "Received funding for next development phase"],
    nextMilestone: "Launch first commercial product by Q2 2025",
    challenge: "Meeting safety and regulatory standards",
    opportunities: "Collaboration with automotive manufacturers",
  },
  {
    name: "AI & Machine Learning Labs",
    teamMembers: ["Sanya Rao", "Aditya Shah"],
    startDate: "2023-04-21",
    industry: "AI & Machine Learning",
    location: "Ahmedabad, Gujarat",
    district: "Ahmedabad",
    mission: "To innovate and implement AI and ML solutions across various industries.",
    description: "Building AI models for predictive analytics and machine learning applications.",
    progress: ["Developed AI model for retail analytics", "Conducted successful pilot programs"],
    nextMilestone: "Expand model applications to healthcare and finance sectors",
    challenge: "Handling large datasets and ensuring model accuracy",
    opportunities: "Partnerships with tech companies for model integration",
  },
  {
    name: "Textile Tech Solutions",
    teamMembers: ["Meera Patel", "Nikhil Desai"],
    startDate: "2022-11-25",
    industry: "Textile",
    location: "Surat, Gujarat",
    district: "Surat",
    mission: "To revolutionize the textile industry with innovative and sustainable solutions.",
    description: "Developing eco-friendly textiles and smart fabric technologies.",
    progress: ["Introduced biodegradable fabric", "Collaborated with 5 major brands"],
    nextMilestone: "Scale production and expand to international markets",
    challenge: "Maintaining fabric quality while ensuring sustainability",
    opportunities: "Growing demand for eco-friendly textiles",
  },
  {
    name: "Biotech Innovations",
    teamMembers: ["Amit Mehta", "Rina Shah"],
    startDate: "2023-05-30",
    industry: "Biotechnology",
    location: "Gandhinagar, Gujarat",
    district: "Gandhinagar",
    mission: "To advance biotechnological research and applications for health and agriculture.",
    description: "Developing biotechnological solutions for disease treatment and crop improvement.",
    progress: ["Completed research on gene editing for crops", "Initiated clinical trials for new treatments"],
    nextMilestone: "Commercialize new biotech products by Q3 2024",
    challenge: "Regulatory approvals and ethical considerations",
    opportunities: "Collaboration with research institutions and biotech firms",
  },
  {
    name: "Tourism Tech Ventures",
    teamMembers: ["Nisha Patel", "Arjun Sharma"],
    startDate: "2023-07-15",
    industry: "Tourism",
    location: "Vadodara, Gujarat",
    district: "Vadodara",
    mission: "To enhance tourism experiences through innovative technology solutions.",
    description: "Developing a platform for personalized travel recommendations and smart booking systems.",
    progress: ["Launched alpha version with 200 users", "Partnered with local travel agencies"],
    nextMilestone: "Expand user base and integrate with more travel services",
    challenge: "Creating a seamless user experience across platforms",
    opportunities: "Partnerships with tourism boards and travel agencies",
  },
  {
    name: "E-Commerce Solutions",
    teamMembers: ["Siddharth Patel", "Kavya Sharma"],
    startDate: "2023-03-01",
    industry: "E-Commerce",
    location: "Rajkot, Gujarat",
    district: "Rajkot",
    mission: "To provide innovative e-commerce solutions for online businesses.",
    description: "Developing a platform for small businesses to set up and manage online stores.",
    progress: ["Launched beta version with 50 businesses", "Received positive feedback and testimonials"],
    nextMilestone: "Add advanced features and expand to new markets",
    challenge: "Competing with established e-commerce platforms",
    opportunities: "Growing demand for online retail solutions",
  },
];

const WorkingStartups = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [expandedStartup, setExpandedStartup] = useState(null);
  const [filteredStartups, setFilteredStartups] = useState(startupsData);

  const handleSearch = () => {
    const filtered = startupsData.filter((startup) => {
      const matchesIndustry = selectedIndustry === '' || startup.industry === selectedIndustry;
      const matchesDistrict = selectedDistrict === '' || startup.district === selectedDistrict;
      return matchesIndustry && matchesDistrict;
    });
    setFilteredStartups(filtered);
  };

  const handleCardClick = (index) => {
    setExpandedStartup(expandedStartup === index ? null : index);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f6fa 0%, #dcdde1 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeIn 1s ease-in'
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px',
          textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          borderBottom: '3px solid #3498db',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          Working Startups
        </h1>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginBottom: '40px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '250px' }}>
            <label style={{ color: '#34495e', fontWeight: '500', fontSize: '1.1rem' }}>
              Industry:
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #bdc3c7',
                fontSize: '1rem',
                background: '#fff',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                ':focus': {
                  borderColor: '#3498db',
                  outline: 'none'
                }
              }}
            >
              <option value="">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '250px' }}>
            <label style={{ color: '#34495e', fontWeight: '500', fontSize: '1.1rem' }}>
              District:
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #bdc3c7',
                fontSize: '1rem',
                background: '#fff',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                ':focus': {
                  borderColor: '#3498db',
                  outline: 'none'
                }
              }}
            >
              <option value="">All Districts</option>
              {districts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            style={{
              background: 'linear-gradient(90deg, #3498db 0%, #2980b9 100%)',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '25px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              alignSelf: 'flex-end',
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)'
              }
            }}
          >
            Search
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px'
        }}>
          {filteredStartups.map((startup, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: `slideUp 0.5s ease ${index * 0.1}s both`,
                ...(expandedStartup === index ? {
                  transform: 'scale(1.02)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                } : {
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
                  }
                })
              }}
            >
              <h2 style={{
                color: '#2c3e50',
                fontSize: '1.6rem',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                {startup.name}
              </h2>
              <p style={{ color: '#555', fontSize: '1rem', marginBottom: '5px' }}>
                <strong>Industry:</strong> {startup.industry}
              </p>
              <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>
                <strong>Location:</strong> {startup.location}
              </p>

              {expandedStartup === index && (
                <div style={{
                  background: 'rgba(240, 248, 255, 0.7)',
                  padding: '15px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #3498db',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    <strong>Mission:</strong> {startup.mission}
                  </p>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    <strong>Description:</strong> {startup.description}
                  </p>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    <strong>Progress:</strong> {startup.progress.join(', ')}
                  </p>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    <strong>Next Milestone:</strong> {startup.nextMilestone}
                  </p>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    <strong>Challenge:</strong> {startup.challenge}
                  </p>
                  <p style={{ color: '#666' }}>
                    <strong>Opportunities:</strong> {startup.opportunities}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
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

export default WorkingStartups;