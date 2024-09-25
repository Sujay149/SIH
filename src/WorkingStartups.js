import React, { useState } from 'react';
import './WorkingStartups.css';

const districts = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Baroda'];

const industries = [
  'Water Technology',
  'Renewable Energy',
  'Agriculture Technology',
  'Health Technology',
  'Education Technology',
  'Fintech',
  'Automotive',
  'AI & Machine Learning',
  'Textile',
  'Biotechnology',
  'Tourism',
  'E-Commerce',
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
    <div className="container">
      <h1>Working Startups</h1>
      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="industry" className="industry">Industry:</label>
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="district" className="district">District:</label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="startup-cards">
        {filteredStartups.map((startup, index) => (
          <div
            key={index}
            className={`startup-card ${expandedStartup === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <h2>{startup.name}</h2>
            <p><strong>Industry:</strong> {startup.industry}</p>
            <p><strong>Location:</strong> {startup.location}</p>
            {expandedStartup === index && (
              <div className="startup-details">
                <p><strong>Mission:</strong> {startup.mission}</p>
                <p><strong>Description:</strong> {startup.description}</p>
                <p><strong>Progress:</strong> {startup.progress.join(', ')}</p>
                <p><strong>Next Milestone:</strong> {startup.nextMilestone}</p>
                <p><strong>Challenge:</strong> {startup.challenge}</p>
                <p><strong>Opportunities:</strong> {startup.opportunities}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingStartups;
