import React from 'react';
import './ManagePatentsPage.css'; // Custom CSS for styling

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
  }
];

const ManagePatentsPage = () => {
  return (
    <div className="manage-patents-page">
      <h1>Manage Patents</h1>
      <p>
        Effective patent management involves using the right tools and strategies to protect, monitor, and
        commercialize your intellectual property. Below are some leading tools that can help you manage your
        patent portfolio efficiently.
      </p>
      <div className="tools-container">
        {toolsForManagingPatents.map((tool) => (
          <div key={tool.id} className="tool-card">
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <ul>
              <li><strong>Features:</strong></li>
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={tool.website} target="_blank" rel="noopener noreferrer" className="tool-link">
              Visit {tool.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePatentsPage;
