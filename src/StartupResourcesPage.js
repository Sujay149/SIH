import React from 'react';
import './StartupResourcesPage.css';

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

  return (
    <div className="startup-resources">
      <h1>Startup Resources</h1>
      {resources.map((section, index) => (
        <div key={index} className="resource-section">
          <h2>{section.category}</h2>
          <ul>
            {section.tools.map((tool, toolIndex) => (
              <li key={toolIndex}>
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  <h3>{tool.name}</h3>
                </a>
                <p>{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StartupResourcesPage;
