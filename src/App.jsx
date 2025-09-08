import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Issues from './pages/Issues.jsx';
import Events from './pages/Events.jsx';
import Volunteer from './pages/Volunteer.jsx';
import VoterInfo from './pages/VoterInfo.jsx';
import Endorsements from './pages/Endorsements.jsx';
import Newsroom from './pages/Newsroom.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import HomeEs from './pages/HomeEs.jsx';
import IssuesEs from './pages/IssuesEs.jsx';
import EventsEs from './pages/EventsEs.jsx';
import VolunteerEs from './pages/VolunteerEs.jsx';
import VoterInfoEs from './pages/VoterInfoEs.jsx';
import EndorsementsEs from './pages/EndorsementsEs.jsx';
import NewsroomEs from './pages/NewsroomEs.jsx';
import ContactEs from './pages/ContactEs.jsx';
import DonateEs from './pages/DonateEs.jsx';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';

export default function App() {
  return (
    <Router basename="/Bowling-Green/">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/voter-info" element={<VoterInfo />} />
        <Route path="/endorsements" element={<Endorsements />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/es" element={<HomeEs />} />
        <Route path="/es/issues" element={<IssuesEs />} />
        <Route path="/es/events" element={<EventsEs />} />
        <Route path="/es/volunteer" element={<VolunteerEs />} />
        <Route path="/es/voter-info" element={<VoterInfoEs />} />
        <Route path="/es/endorsements" element={<EndorsementsEs />} />
        <Route path="/es/newsroom" element={<NewsroomEs />} />
        <Route path="/es/contact" element={<ContactEs />} />
        <Route path="/es/donate" element={<DonateEs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
