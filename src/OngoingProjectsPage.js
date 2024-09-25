import React from 'react';
import './OngoingProjectsPage.css'; // Import the custom CSS for styling

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
  // You can add more projects here
];

const OngoingProjectsPage = () => {
  return (
    
    <div className="ongoing-projects-page">
      <h1>Ongoing Research Projects</h1>
      <div className="projects-container">
        {ongoingProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p><strong>Researchers:</strong> {project.researchers}</p>
            <p><strong>Milestones:</strong></p>
            <ul>
              {project.milestones.map((milestone, index) => (
                <li key={index}>{milestone}</li>
              ))}
            </ul>
            <p><strong>Funding & Resources:</strong> {project.funding}</p>
            <p><strong>Collaborations:</strong> {project.collaborations}</p>
            <p><strong>Updates & Publications:</strong> {project.updates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjectsPage;
