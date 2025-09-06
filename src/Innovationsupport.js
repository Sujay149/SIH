import React from 'react';

const InnovationSupport = () => {
  const supportData = [
    {
      title: 'Prototype Development and Testing',
      description: 'Assistance with building functional prototypes, testing innovations in real-world environments, and access to labs and skilled professionals.',
    },
    {
      title: 'Funding and Investment Support',
      description: 'Access to seed funding, grants, or venture capital, and connecting innovators with investors and government funding programs.',
    },
    {
      title: 'Mentorship and Advisory',
      description: 'Providing mentors and advisory services on business strategies, product development, and navigating challenges.',
    },
    {
      title: 'Market Access and Scaling',
      description: 'Connecting with distribution channels, manufacturers, and helping scale innovations through partnerships.',
    },
    {
      title: 'Regulatory and Compliance Assistance',
      description: 'Ensuring compliance with industry standards and legal support for regulatory approvals.',
    },
    {
      title: 'Intellectual Property (IP) Protection and Licensing',
      description: 'Helping manage patents and exploring licensing opportunities for new revenue streams.',
    },
    {
      title: 'Partnerships and Collaborations',
      description: 'Facilitating collaborations with research institutions and companies for further development.',
    },
    {
      title: 'Commercialization Support',
      description: 'Assistance in transitioning from prototype to full-scale production with a go-to-market strategy.',
    },
    {
      title: 'Innovation Hubs and Incubators',
      description: 'Providing workspaces, resources, and networking opportunities through innovation hubs or incubators.',
    },
    {
      title: 'Government Support Programs',
      description: 'Guidance on government initiatives that support innovation, such as grants, subsidies, and tax incentives.',
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeIn 1s ease-in'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          borderBottom: '3px solid #3498db',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          Innovation Support
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {supportData.map((item, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            animation: `slideUp 0.5s ease ${index * 0.1}s both`,
            ':hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }
          }}>
            <h2 style={{
              color: '#3498db',
              fontSize: '1.6rem',
              marginBottom: '15px',
              fontWeight: '600',
              position: 'relative',
              paddingLeft: '25px',
              ':before': {
                content: '"➤"',
                position: 'absolute',
                left: '0',
                color: '#2ecc71',
                fontSize: '1.2rem'
              }
            }}>
              {item.title}
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1rem',
              lineHeight: '1.6',
              padding: '10px',
              background: 'rgba(240, 248, 255, 0.5)',
              borderRadius: '8px'
            }}>
              {item.description}
            </p>
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
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
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

export default InnovationSupport;