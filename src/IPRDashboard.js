import React, { useEffect, useState } from 'react';
import './IPRDashboard.css'; // Your CSS file for styling

const IPRDashboard = () => {
  const [iprData, setIprData] = useState([]);

  useEffect(() => {
    // Demo data for IPR statuses
    const xData = [
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 1,
        patent_title: 'AI-based Traffic Control System',
        applicant_name: 'Tech Innovators Ltd.',
        filing_date: '2022-05-10T00:00:00Z',
        status: 'Under Review',
        last_updated: '2023-08-15T00:00:00Z',
        next_due: '2024-05-10T00:00:00Z'
      },
      {
        ipr_id: 2,
        patent_title: 'Quantum Encryption for IoT Devices',
        applicant_name: 'FutureSecure Corp.',
        filing_date: '2021-11-23T00:00:00Z',
        status: 'Granted',
        last_updated: '2023-01-10T00:00:00Z',
        next_due: '2025-11-23T00:00:00Z'
      },
      {
        ipr_id: 3,
        patent_title: 'Autonomous Delivery Drone',
        applicant_name: 'AeroLogistics Inc.',
        filing_date: '2023-03-01T00:00:00Z',
        status: 'Pending',
        last_updated: '2023-09-05T00:00:00Z',
        next_due: '2024-03-01T00:00:00Z'
      }
    ];

    // Simulating API response by setting demo data
    setIprData(xData);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>IPR Tracking Dashboard</h2>
      <table className="ipr-table">
        <thead>
          <tr>
            <th>Patent Title</th>
            <th>Applicant Name</th>
            <th>Filing Date</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Next Due</th>
          </tr>
        </thead>
        <tbody>
          {iprData.map((ipr) => (
            <tr key={ipr.ipr_id}>
              <td>{ipr.patent_title}</td>
              <td>{ipr.applicant_name}</td>
              <td>{new Date(ipr.filing_date).toLocaleDateString()}</td>
              <td>{ipr.status}</td>
              <td>{new Date(ipr.last_updated).toLocaleDateString()}</td>
              <td>{new Date(ipr.next_due).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPRDashboard;
