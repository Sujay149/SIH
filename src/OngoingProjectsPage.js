import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ongoingProjects = [
  {
    id: 1,
    title: 'AI-Based Climate Prediction',
    researchers: 'Dr. Jane Doe, Dr. John Smith',
    milestones: ['Phase 1 - Data Collection', 'Phase 2 - Model Training'],
    funding: 'Government Grant - $500,000',
    collaborations: 'University of California, Stanford University',
    updates: 'Preliminary results published in Nature, March 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  {
    id: 1,
    title: 'AI-Based Climate Prediction',
    researchers: 'Dr. Jane Doe, Dr. John Smith',
    milestones: ['Phase 1 - Data Collection', 'Phase 2 - Model Training'],
    funding: 'Government Grant - $500,000',
    collaborations: 'University of California, Stanford University',
    updates: 'Preliminary results published in Nature, March 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  {
    id: 1,
    title: 'AI-Based Climate Prediction',
    researchers: 'Dr. Jane Doe, Dr. John Smith',
    milestones: ['Phase 1 - Data Collection', 'Phase 2 - Model Training'],
    funding: 'Government Grant - $500,000',
    collaborations: 'University of California, Stanford University',
    updates: 'Preliminary results published in Nature, March 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  {
    id: 1,
    title: 'AI-Based Climate Prediction',
    researchers: 'Dr. Jane Doe, Dr. John Smith',
    milestones: ['Phase 1 - Data Collection', 'Phase 2 - Model Training'],
    funding: 'Government Grant - $500,000',
    collaborations: 'University of California, Stanford University',
    updates: 'Preliminary results published in Nature, March 2024',
  },
  {
    id: 2,
    title: 'Quantum Computing for Healthcare',
    researchers: 'Dr. Alan Turing, Dr. Ada Lovelace',
    milestones: ['Phase 1 - Algorithm Design', 'Phase 2 - Testing'],
    funding: 'Private Sector Investment - $750,000',
    collaborations: 'MIT, Google Research',
    updates: 'First results presented at IEEE conference, July 2024',
  },
  // Add more projects here...
];

const OngoingProjectsPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: '#f4f7f6',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '40px',
        }}
      >
        Ongoing Research Projects
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {ongoingProjects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '16px',
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '12px',
              }}
            >
              <strong>Researchers:</strong> {project.researchers}
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '12px',
              }}
            >
              <strong>Milestones:</strong>
            </p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                marginBottom: '12px',
              }}
            >
              {project.milestones.map((milestone, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '14px',
                    color: '#555',
                    marginBottom: '8px',
                  }}
                >
                  {milestone}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '12px',
              }}
            >
              <strong>Funding & Resources:</strong> {project.funding}
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '12px',
              }}
            >
              <strong>Collaborations:</strong> {project.collaborations}
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '12px',
              }}
            >
              <strong>Updates & Publications:</strong> {project.updates}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjectsPage;