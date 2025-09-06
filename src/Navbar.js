import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add this for styling

const Navbar = ({ notificationCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo/Title */}
      <div className="navbar-brand">
        <Link to="/HomePage" className="brand-link">
          <span className="brand-icon">🚀</span>
          <span className="brand-text">GRISMP</span>
        </Link>
      </div>
      
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/HomePage">Home</Link>
        </li>
        <li className="nav-item">
          <span>Researches</span>
          <ul className="dropdown">
            <li><Link to="/researches">Add researches</Link></li>
            <li><Link to="/ongoing projects">Ongoing projects</Link></li>
            <li><Link to="/ResearchProjects">Research projects</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>IPR</span>
          <ul className="dropdown">
            <li><Link to="/ipr">Manage patents</Link></li>
            <li><Link to="/ipr status">IPR Status</Link></li>
            <li><Link to="/IPRDashboard">Patent Track</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Innovation</span>
          <ul className="dropdown">
            <li><Link to="/innovation projects">Innovation projects</Link></li>
            <li><Link to="/innovation">New innovation</Link></li>
            <li><Link to="/Innovationsupport">Innovation support</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Startups</span>
          <ul className="dropdown">
            <li><Link to="/startups">Add Startup</Link></li>
            <li><Link to="/WorkingStartups">Working Startup</Link></li>
            <li><Link to="/StartupResourcesPage">Startup Resources</Link></li>
            <li><Link to="">Collaboration</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Support</span>
          <ul className="dropdown">
            <li><Link to="/support">Mentor Program</Link></li>
            <li><Link to="/SupportResources">Support resources</Link></li>
            <li><Link to="/FundingOpportunitiesPage">Funding opportunities</Link></li>
            <li><Link to="/funds">Give Funds</Link></li>
          </ul>
        </li>
        
        <li className="nav-item notifications-item">
        <li><Link to="/Notifications">Notifications ({notificationCount})</Link></li>

        
        </li>
         <li className="nav-item notifications-item">
        <li><Link to="/Dashboard">About</Link></li>
        
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;