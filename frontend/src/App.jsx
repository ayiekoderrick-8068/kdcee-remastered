import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Donate from './pages/Donate'
import Crafts from './pages/Crafts'
import Contact from './pages/Contact'
import BecomeAVolunteer from './pages/BecomeAVolunteer'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

import AdminShell from './components/admin/AdminShell'
import ElderlyManager from './pages/admin/ElderlyManager'
import OpaManager from './pages/admin/OpaManager'
import AttendanceManager from './pages/admin/AttendanceManager'
import ActivitiesManager from './pages/admin/ActivitiesManager'
import HealthManager from './pages/admin/HealthManager'
import MedicationManager from './pages/admin/MedicationManager'
import DonationsManager from './pages/admin/DonationsManager'
import InventoryManager from './pages/admin/InventoryManager'
import FeedingManager from './pages/admin/FeedingManager'
import HomeVisitManager from './pages/admin/HomeVisitManager'
import AssistanceManager from './pages/admin/AssistanceManager'
import VolunteerManager from './pages/admin/VolunteerManager'
import InboxManager from './pages/admin/InboxManager'
import IncidentManager from './pages/admin/IncidentManager'
import FollowupsManager from './pages/admin/FollowupsManager'
import BlogManager from './pages/admin/BlogManager'
import GalleryManager from './pages/admin/GalleryManager'
import CraftsManager from './pages/admin/CraftsManager'
import TeamManager from './pages/admin/TeamManager'
import ReportsManager from './pages/admin/ReportsManager'
import AnalyticsDashboard from './pages/admin/AnalyticsDashboard'

import VolunteerShell from './components/volunteer/VolunteerShell'
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard'
import MyVolunteerProfile from './pages/volunteer/MyVolunteerProfile'
import MyAssignments from './pages/volunteer/MyAssignments'
import MyAssistanceRequests from './pages/volunteer/MyAssistanceRequests'
import MyElderlyMembers from './pages/volunteer/MyElderlyMembers'
import MyActivity from './pages/volunteer/MyActivity'
import MyPerformance from './pages/volunteer/MyPerformance'
import VolunteerMessages from './pages/volunteer/VolunteerMessages'
import ReportConcern from './pages/volunteer/ReportConcern'
import VolunteerNotifications from './pages/volunteer/VolunteerNotifications'

// SHARED INTEGRATION FILE — coordinate before editing. Adding a route here
// for a page that already exists on your branch is fine; changing someone
// else's route is not.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/become-a-volunteer" element={<BecomeAVolunteer />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>

      <Route path="/admin" element={<AdminShell />}>
        <Route index element={<AdminDashboard />} />
        <Route path="elderly" element={<ElderlyManager />} />
        <Route path="opa" element={<OpaManager />} />
        <Route path="attendance" element={<AttendanceManager />} />
        <Route path="activities" element={<ActivitiesManager />} />
        <Route path="health" element={<HealthManager />} />
        <Route path="medication" element={<MedicationManager />} />
        <Route path="donations" element={<DonationsManager />} />
        <Route path="inventory" element={<InventoryManager />} />
        <Route path="feeding" element={<FeedingManager />} />
        <Route path="home-visits" element={<HomeVisitManager />} />
        <Route path="assistance" element={<AssistanceManager />} />
        <Route path="volunteers" element={<VolunteerManager />} />
        <Route path="inbox" element={<InboxManager />} />
        <Route path="incidents" element={<IncidentManager />} />
        <Route path="followups" element={<FollowupsManager />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="gallery" element={<GalleryManager />} />
        <Route path="crafts" element={<CraftsManager />} />
        <Route path="team" element={<TeamManager />} />
        <Route path="reports" element={<ReportsManager />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
      </Route>

      <Route path="/volunteer" element={<VolunteerShell />}>
        <Route index element={<VolunteerDashboard />} />
        <Route path="profile" element={<MyVolunteerProfile />} />
        <Route path="assignments" element={<MyAssignments />} />
        <Route path="assistance-requests" element={<MyAssistanceRequests />} />
        <Route path="elderly-members" element={<MyElderlyMembers />} />
        <Route path="activity" element={<MyActivity />} />
        <Route path="performance" element={<MyPerformance />} />
        <Route path="messages" element={<VolunteerMessages />} />
        <Route path="report-concern" element={<ReportConcern />} />
        <Route path="notifications" element={<VolunteerNotifications />} />
      </Route>
    </Routes>
  )
}
