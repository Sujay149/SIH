import React from 'react';
import './FundingOpportunitiesPage.css'; // Add custom styles here

const FundingOpportunitiesPage = () => {
  return (
    <div className="funding-page">
      <h1>Funding Opportunities</h1>
      <p>Explore various funding programs, grants, and investment opportunities available for researchers, startups, and innovators.</p>
      
      <section className="funding-category">
        <h2>Government Grants</h2>
        <p>Find grants and funding programs offered by local, state, and national governments to support your projects.</p>
        <ul>
          <li><strong>Program Name:</strong> [Government Grant 1]</li>
          <li><strong>Eligibility:</strong> Open to startups in [sector]</li>
          <li><strong>Funding Amount:</strong> Up to [Amount]</li>
          <li><strong>Deadline:</strong> [Date]</li>
        </ul>
        <button>Learn More</button>
      </section>

      <section className="funding-category">
        <h2>Private Investors and VCs</h2>
        <p>Discover investment opportunities from venture capital firms and angel investors looking to fund startups and innovation projects.</p>
        <ul>
          <li><strong>Investor Name:</strong> [VC Firm]</li>
          <li><strong>Focus:</strong> Tech startups, Innovators</li>
          <li><strong>Investment Amount:</strong> Up to [Amount]</li>
          <li><strong>Deadline:</strong> Ongoing</li>
        </ul>
        <button>Explore Investors</button>
      </section>

      <section className="funding-category">
        <h2>International Funding Programs</h2>
        <p>Global funding programs and grants from international organizations for startups and research projects worldwide.</p>
        <ul>
          <li><strong>Program Name:</strong> [International Grant]</li>
          <li><strong>Eligibility:</strong> Researchers, Innovators</li>
          <li><strong>Funding Amount:</strong> Up to [Amount]</li>
          <li><strong>Deadline:</strong> [Date]</li>
        </ul>
        <button>View Details</button>
      </section>
      
      <section className="funding-category">
        <h2>Sector-Specific Funding</h2>
        <p>Find funding opportunities that are specific to sectors such as technology, healthcare, education, and more.</p>
        <ul>
          <li><strong>Program Name:</strong> [Sector-Specific Grant]</li>
          <li><strong>Eligibility:</strong> Startups in [sector]</li>
          <li><strong>Funding Amount:</strong> Up to [Amount]</li>
          <li><strong>Deadline:</strong> [Date]</li>
        </ul>
        <button>Get Sector Funding</button>
      </section>
  
    </div>
  );
};

export default FundingOpportunitiesPage;