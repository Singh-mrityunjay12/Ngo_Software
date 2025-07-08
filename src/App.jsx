import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom"; 
import Donors from "./pages/Donors";
import Event from "./pages/EventsPage";
import DashboardOverview from "./pages/DashboardOverview";
import Donations from "./pages/Donation";
import DonationsListPage from "./pages/DonationListPage";
import ExportDonationsPage from "./pages/ExportDonationsPage";
import OfflineDonationsPage from "./pages/OfflineDonationsPage";
import DonationsAnalyticsPage from "./pages/DonationsAnalyticsPage";
import CampaignsPage from "./pages/CampaignsPage";
import DonorInformationPage from "./pages/DonorInformationPage";
import VolunteerManagementPage from "./pages/VolunteerManagementPage";
import VolunteerInfoPage from "./pages/VolunteerInfoPage";
import ContentManagement from "./pages/ContentManagement";
import Reports from "./pages/Reports"; 
import Settings from "./pages/Settings"; 

function App() {
  return (
    <Routes> 
            {/* ✅ Default route */}
      <Route path="/" element={<Navigate to="/dashboardoverview" replace />} />
      {/* ✅ Define all routes */}
      <Route path="/donors" element={<Donors />} />
      <Route path="/dashboardoverview" element={<DashboardOverview />} />
      <Route path="/event" element={<Event />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/donationlistpage" element={<DonationsListPage />} />
      <Route path="/exportdonationspage" element={<ExportDonationsPage />} />
      <Route path="/offlinedonationspage" element={<OfflineDonationsPage />} /> 
      <Route path="/analytics" element={<DonationsAnalyticsPage />} />
      <Route path="/campaignspage" element={<CampaignsPage/>} />  
      <Route path="/donorinformationpage" element={<DonorInformationPage/>} /> 
      <Route path="/volunteermanagementpage" element={<VolunteerManagementPage/>} />
      <Route path="/volunteerinfopage" element={<VolunteerInfoPage/>} /> 
      <Route path="/contentmanagement" element={<ContentManagement/>} />  
      <Route path="/reports" element={<Reports/>} />
      <Route path="/settings" element={<Settings/>} />



    </Routes>
  );
}

export default App;
