import React from 'react';
import './InnovationProjects.css';

const InnovationProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Solar Energy Optimization',
      description: 'Developing efficient solar panels for rural areas.',
      status: 'Ongoing',
      details: 'This project aims to create solar panels that are more cost-effective and suitable for remote locations. The goal is to improve energy access in rural communities and reduce dependency on non-renewable energy sources.',
    },
    {
      id: 2,
      name: 'Water Conservation Techniques',
      description: 'Innovative water-saving techniques in agriculture.',
      status: 'Ongoing',
      details: 'The project focuses on developing new irrigation methods and water-saving technologies to optimize water use in agriculture. This includes smart irrigation systems and soil moisture sensors to reduce water waste and increase crop productivity.',
    },
    {
      id: 3,
      name: 'Smart City Initiatives',
      description: 'Integrating smart technology to enhance urban infrastructure.',
      status: 'Ongoing',
      details: 'This initiative aims to transform urban areas into smart cities by implementing technologies such as smart traffic management, energy-efficient buildings, and enhanced public services. The goal is to create more connected and sustainable urban environments.',
    },
    {
      id: 4,
      name: 'Electric Vehicle Charging Stations',
      description: 'Establishing a network of EV charging stations across the state.',
      status: 'Upcoming',
      details: 'This project is focused on setting up a comprehensive network of electric vehicle charging stations to support the growing adoption of EVs. The aim is to provide convenient and accessible charging options throughout Gujarat.',
    },
    {
      id: 5,
      name: 'Green Building Standards',
      description: 'Developing and implementing green building standards for new constructions.',
      status: 'Ongoing',
      details: 'The project involves creating and enforcing standards for green buildings to promote energy efficiency, water conservation, and sustainable construction practices in new developments across Gujarat.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },{
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
    {
      id: 6,
      name: 'AI-Based Health Monitoring',
      description: 'Developing AI systems for real-time health monitoring and diagnostics.',
      status: 'Upcoming',
      details: 'This initiative focuses on leveraging artificial intelligence to develop advanced health monitoring systems that can provide real-time diagnostics and predictive insights, improving healthcare delivery and patient outcomes.',
    },
  ];

  return (
    <div className="innovation-projects">
      <h1>Current Innovation Projects in Gujarat</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* Corrected the className interpolation */}
            <span className={`status ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
            <div className="project-details">{project.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovationProjects;
