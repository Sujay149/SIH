import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddResearchesPage from './AddResearchesPage';
import OngoingProjectsPage from './OngoingProjectsPage';
import IPRPage from './ManagePatentsPage';
import ManagePatentsPage from './ManagePatentsPage';
import IPRStatusPage from './IPRStatusPage';
import InnovationPage from './InnovationPage';
import SupportResources from './SupportResources';
import FundingOpportunitiesPage from './FundingOpportunitiesPage';
import InnovationProjects from './InnovationProjects';
import InvestorForm from './InvestorForm';
import StartupsPage from './StartupsPage';
import SupportPage from './SupportPage';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ChatbotComponent from "./ChatbotComponent";
import IPRDashboard from './IPRDashboard';
import Login from './Login';
import InnovationSupport from './Innovationsupport';
import WorkingStartups from './WorkingStartups';
import ResearchProjects from './ResearchProjects';
import Register from './Register';
import StartupResourcesPage from './StartupResourcesPage';
import NotificationsPage from './NotificationsPage';
import Dashboard from './Dashboard';
import Footer from './Footer';


const App = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <Router>
      <Navbar notificationCount={notificationCount} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/IPRDashboard" element={<IPRDashboard />} />
          <Route path="/ChatbotComponent" element={<ChatbotComponent />} />
          <Route path="/researches" element={<AddResearchesPage />} />
          <Route path="/ongoing projects" element={<OngoingProjectsPage />} />
          <Route path="/ipr" element={<IPRPage />} />
          <Route path="/manage patents" element={<ManagePatentsPage />} />
          <Route path="/ipr status" element={<IPRStatusPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/innovation projects" element={<InnovationProjects />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/funds" element={<InvestorForm />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/ResearchProjects" element={<ResearchProjects />} />
          <Route path="/Notifications" element={<NotificationsPage setNotificationCount={setNotificationCount} />} />
          <Route path="/StartupResourcesPage" element={<StartupResourcesPage />} />
          <Route path="/FundingOpportunitiesPage" element={<FundingOpportunitiesPage />} />
          <Route path="/SupportResources" element={<SupportResources />} />
          <Route path="/InnovationSupport" element={<InnovationSupport />} />
          <Route path="/WorkingStartups" element={<WorkingStartups />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
