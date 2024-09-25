import React from 'react';
import './InnovationSupport.css';

const InnovationSupport = () => {
    const supportData = [
        {
            title: 'Prototype Development and Testing',
            description: 'Assistance with building functional prototypes, testing innovations in real-world environments, and access to labs and skilled professionals.'
        },
        {
            title: 'Funding and Investment Support',
            description: 'Access to seed funding, grants, or venture capital, and connecting innovators with investors and government funding programs.'
        },
        {
            title: 'Mentorship and Advisory',
            description: 'Providing mentors and advisory services on business strategies, product development, and navigating challenges.'
        },
        {
            title: 'Market Access and Scaling',
            description: 'Connecting with distribution channels, manufacturers, and helping scale innovations through partnerships.'
        },
        {
            title: 'Regulatory and Compliance Assistance',
            description: 'Ensuring compliance with industry standards and legal support for regulatory approvals.'
        },
        {
            title: 'Intellectual Property (IP) Protection and Licensing',
            description: 'Helping manage patents and exploring licensing opportunities for new revenue streams.'
        },
        {
            title: 'Partnerships and Collaborations',
            description: 'Facilitating collaborations with research institutions and companies for further development.'
        },
        {
            title: 'Commercialization Support',
            description: 'Assistance in transitioning from prototype to full-scale production with a go-to-market strategy.'
        },
        {
            title: 'Innovation Hubs and Incubators',
            description: 'Providing workspaces, resources, and networking opportunities through innovation hubs or incubators.'
        },
        {
            title: 'Government Support Programs',
            description: 'Guidance on government initiatives that support innovation, such as grants, subsidies, and tax incentives.'
        }
    ];

    return (
        <div className="innovation-support-container">
            <h1 className="page-title">Innovation Support</h1>
            <div className="support-section">
                {supportData.map((item, index) => (
                    <div key={index} className="support-card">
                        <h2 className="support-title">{item.title}</h2>
                        <p className="support-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InnovationSupport;