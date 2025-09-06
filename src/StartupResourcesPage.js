import React from 'react';

const StartupResourcesPage = () => {
  const resources = [
    {
      category: 'Business Planning and Validation Tools',
      tools: [
        { name: 'Lean Canvas', description: 'One-page business plan template.', link: 'https://leanstack.com/leancanvas' },
        { name: 'Business Model Canvas', description: 'Strategic management tool to develop new or existing business models.', link: 'https://www.strategyzer.com/canvas/business-model-canvas' }
      ]
    },
    {
      category: 'Funding and Investment Resources',
      tools: [
        { name: 'AngelList', description: 'Platform for startups to find investors.', link: 'https://angel.co/' },
        { name: 'SeedInvest', description: 'Crowdfunding platform for startups.', link: 'https://www.seedinvest.com/' },
        { name: 'Y Combinator', description: 'Startup accelerator providing seed funding and mentorship.', link: 'https://www.ycombinator.com/' }
      ]
    },
    {
      category: 'Legal and Intellectual Property (IP) Support',
      tools: [
        { name: 'Clerky', description: 'Legal documentation assistance.', link: 'https://www.clerky.com/' },
        { name: 'LegalZoom', description: 'Resource for legal services.', link: 'https://www.legalzoom.com/' }
      ]
    },
    {
      category: 'Startup Incubators and Accelerators',
      tools: [
        { name: 'Techstars', description: 'Startup accelerator offering mentorship and funding.', link: 'https://www.techstars.com/' },
        { name: '500 Startups', description: 'Early-stage venture fund and seed accelerator.', link: 'https://500.co/' }
      ]
    },
    {
      category: 'Mentorship and Networking Platforms',
      tools: [
        { name: 'SCORE', description: 'Free mentorship for small business owners.', link: 'https://www.score.org/' },
        { name: 'Founders Network', description: 'Private community for startup founders.', link: 'https://foundersnetwork.com/' }
      ]
    }
  ];

  // Inline CSS with enhanced card UI
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      fontFamily: "'Inter', sans-serif",
      color: '#2d3748',
    },
    header: {
      textAlign: 'center',
      fontSize: '2.75rem',
      marginBottom: '3rem',
      background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight: '800',
      animation: 'fadeIn 0.8s ease-in',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(226, 232, 240, 0.7)',
      animation: 'slideUp 0.6s ease-out',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    cardHeader: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1.25rem',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    cardHeaderIcon: {
      width: '28px',
      height: '28px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '16px',
    },
    toolList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    toolItem: {
      padding: '1rem',
      marginBottom: '0.75rem',
      borderRadius: '8px',
      background: 'rgba(241, 245, 249, 0.6)',
      transition: 'all 0.2s ease',
    },
    toolItemHover: {
      background: 'rgba(224, 231, 255, 0.7)',
      transform: 'translateX(5px)',
    },
    toolLink: {
      textDecoration: 'none',
      color: '#4338ca',
      fontWeight: '600',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
    },
    toolLinkHover: {
      color: '#3730a3',
    },
    toolIcon: {
      fontSize: '1rem',
      opacity: '0.7',
    },
    toolDescription: {
      marginTop: '0.5rem',
      color: '#64748b',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    // Keyframes and global styles
    globalStyles: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      * {
        box-sizing: border-box;
      }
    `,
  };

  // Icons for categories (using emoji for simplicity)
  const categoryIcons = {
    'Business Planning and Validation Tools': '📊',
    'Funding and Investment Resources': '💰',
    'Legal and Intellectual Property (IP) Support': '⚖️',
    'Startup Incubators and Accelerators': '🚀',
    'Mentorship and Networking Platforms': '🤝',
  };

  return (
    <>
      <style>{styles.globalStyles}</style>
      <div style={styles.container}>
        <h1 style={styles.header}>Startup Resources</h1>
        <div style={styles.grid}>
          {resources.map((section, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <div style={styles.cardHeader}>
                <span style={styles.cardHeaderIcon}>{categoryIcons[section.category]}</span>
                {section.category}
              </div>
              <ul style={styles.toolList}>
                {section.tools.map((tool, toolIndex) => (
                  <li
                    key={toolIndex}
                    style={styles.toolItem}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.toolItemHover)}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = styles.toolItem.background;
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.toolLink}
                      onMouseEnter={(e) => e.currentTarget.style.color = styles.toolLinkHover.color}
                      onMouseLeave={(e) => e.currentTarget.style.color = styles.toolLink.color}
                    >
                      <span style={styles.toolIcon}>🔗</span>
                      {tool.name}
                    </a>
                    <p style={styles.toolDescription}>{tool.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StartupResourcesPage;