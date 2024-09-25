import React from 'react';
import './IPRStatusPage.css'; // Custom CSS for styling

// Sample IPR data (could be fetched from an API in real applications)
const iprData = [
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  },
  {
    id: 1,
    type: 'Patent',
    applicationNumber: 'US1234567A',
    filingDate: '2023-05-10',
    status: 'Under Review',
    nextSteps: 'Respond to office action',
    deadline: '2024-02-15',
    attorney: 'John Doe',
    jurisdiction: 'United States',
    officialLink: 'https://www.uspto.gov/patents-application-status'
  },
  {
    id: 2,
    type: 'Trademark',
    applicationNumber: 'TM987654',
    filingDate: '2022-10-05',
    status: 'Approved',
    nextSteps: 'Submit renewal fee',
    deadline: '2025-10-05',
    attorney: 'Jane Smith',
    jurisdiction: 'European Union',
    officialLink: 'https://euipo.europa.eu/ohimportal/en/trade-marks'
  },
  {
    id: 3,
    type: 'Copyright',
    applicationNumber: 'CR20220401',
    filingDate: '2023-01-12',
    status: 'Pending',
    nextSteps: 'Submit additional documents',
    deadline: '2024-01-12',
    attorney: 'Michael Lee',
    jurisdiction: 'India',
    officialLink: 'https://copyright.gov.in/'
  }
];

const IPRStatusPage = () => {
  return (
    <div className="ipr-status-page">
      <h1>IPR Status</h1>
      <p>Track the status of your ongoing intellectual property rights (IPR) applications.</p>
      <div className="ipr-status-table">
        <table>
          <thead>
            <tr>
              <th>IPR Type</th>
              <th>Application Number</th>
              <th>Filing Date</th>
              <th>Status</th>
              <th>Next Steps</th>
              <th>Deadline</th>
              <th>Attorney</th>
              <th>Jurisdiction</th>
              <th>Official Link</th>
            </tr>
          </thead>
          <tbody>
            {iprData.map((ipr) => (
              <tr key={ipr.id}>
                <td>{ipr.type}</td>
                <td>{ipr.applicationNumber}</td>
                <td>{ipr.filingDate}</td>
                <td>{ipr.status}</td>
                <td>{ipr.nextSteps}</td>
                <td>{ipr.deadline}</td>
                <td>{ipr.attorney}</td>
                <td>{ipr.jurisdiction}</td>
                <td>
                  <a href={ipr.officialLink} target="_blank" rel="noopener noreferrer">
                    Check Status
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPRStatusPage;
