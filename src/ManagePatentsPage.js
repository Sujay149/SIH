import React from 'react';

const toolsForManagingPatents = [
  {
    id: 1,
    name: 'Innography',
    description: 'Innography provides advanced patent analysis and portfolio management tools, helping you assess the commercial value of patents and track IP trends.',
    features: ['Patent Analytics', 'Portfolio Management', 'Competitive Analysis', 'Technology Landscape'],
    website: 'https://www.innography.com',
  },
  {
    id: 2,
    name: 'Anaqua',
    description: 'Anaqua offers solutions for managing patents, trademarks, and other IP rights, including docketing, maintenance, and portfolio analytics.',
    features: ['IP Portfolio Management', 'Renewal Services', 'Document Management', 'Patent Filing Support'],
    website: 'https://www.anaqua.com',
  },
  {
    id: 3,
    name: 'PatSnap',
    description: 'PatSnap provides a platform to manage patents, analyze IP landscapes, and track innovation trends across various industries.',
    features: ['Patent Search', 'IP Analytics', 'Innovation Insights', 'Patent Licensing Support'],
    website: 'https://www.patsnap.com',
  },
  {
    id: 4,
    name: 'CPA Global',
    description: 'CPA Global helps manage your IP portfolio by providing tools for patent renewals, monitoring, and strategic planning.',
    features: ['Patent Renewals', 'Portfolio Management', 'Patent Docketing', 'Litigation Support'],
    website: 'https://www.cpaglobal.com',
  },
  // Removed duplicate entries to keep the list unique
];

const ManagePatentsPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        animation: 'fadeIn 1s ease-in'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.5rem',
          marginBottom: '15px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Manage Patents
        </h1>
        <p style={{
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Effective patent management involves using the right tools and strategies to protect, monitor, and
          commercialize your intellectual property. Explore these premium tools below.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {toolsForManagingPatents.map((tool, index) => (
          <div key={tool.id} style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            animation: `slideUp 0.5s ease ${index * 0.1}s both`,
            ':hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
            }
          }}>
            <h2 style={{
              color: '#007bff',
              fontSize: '1.8rem',
              marginBottom: '15px',
              borderBottom: '2px solid #007bff',
              paddingBottom: '8px'
            }}>
              {tool.name}
            </h2>
            <p style={{
              color: '#444',
              fontSize: '1rem',
              lineHeight: '1.5',
              marginBottom: '20px'
            }}>
              {tool.description}
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '20px'
            }}>
              <li style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '5px' }}>
                Features:
              </li>
              {tool.features.map((feature, index) => (
                <li key={index} style={{
                  color: '#666',
                  padding: '5px 0',
                  position: 'relative',
                  paddingLeft: '20px',
                  ':before': {
                    content: '"✓"',
                    color: '#28a745',
                    position: 'absolute',
                    left: '0'
                  }
                }}>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={tool.website} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              background: '#007bff',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background 0.3s ease',
              ':hover': {
                background: '#0056b3'
              }
            }}>
              Visit {tool.name}
            </a>
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

export default ManagePatentsPage;