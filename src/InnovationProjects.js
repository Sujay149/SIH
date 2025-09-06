import React, { useEffect, useRef } from 'react';

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
    // Removed duplicate entries for brevity
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        animation: 'fadeIn 1s ease-in'
      }}>
        <h1 style={{
          color: '#1a3c34',
          fontSize: '2.8rem',
          marginBottom: '15px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          Current Innovation Projects in Gujarat
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
              transition: 'all 0.4s ease',
              opacity: '0',
              transform: 'translateY(50px)',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }
            }}
          >
            <h2 style={{
              color: '#007bff',
              fontSize: '1.6rem',
              marginBottom: '10px',
              borderBottom: '2px solid #007bff',
              paddingBottom: '5px'
            }}>
              {project.name}
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1rem',
              marginBottom: '15px',
              lineHeight: '1.5'
            }}>
              {project.description}
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 15px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '15px',
              backgroundColor: project.status === 'Ongoing' ? '#28a745' : '#ffc107',
              color: 'white'
            }}>
              {project.status}
            </span>
            <div style={{
              color: '#666',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              background: 'rgba(240, 248, 255, 0.7)',
              padding: '15px',
              borderRadius: '10px',
              borderLeft: '4px solid #007bff'
            }}>
              {project.details}
            </div>
          </div>
        ))}
      </div>

      {/* Inline keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default InnovationProjects;