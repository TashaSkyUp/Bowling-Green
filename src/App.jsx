import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

function Nav() {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');
  return (
    <nav>
      {isSpanish ? (
        <>
          <Link to="/es">Inicio</Link> |{' '}
          <Link to="/es/issues">Propuestas</Link> |{' '}
          <Link to="/es/events">Eventos</Link> |{' '}
          <Link to="/es/volunteer">Voluntariado</Link> |{' '}
          <Link to="/es/voter-info">Información para Votantes</Link> |{' '}
          <Link to="/es/endorsements">Apoyos</Link> |{' '}
          <Link to="/es/newsroom">Sala de Prensa</Link> |{' '}
          <Link to="/es/contact">Contacto</Link> |{' '}
          <Link to="/es/donate">Donar</Link> |{' '}
          <Link to="/">English</Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link> |{' '}
          <Link to="/issues">Issues</Link> |{' '}
          <Link to="/events">Events</Link> |{' '}
          <Link to="/volunteer">Volunteer</Link> |{' '}
          <Link to="/voter-info">Voter Info</Link> |{' '}
          <Link to="/endorsements">Endorsements</Link> |{' '}
          <Link to="/newsroom">Newsroom</Link> |{' '}
          <Link to="/contact">Contact</Link> |{' '}
          <Link to="/donate">Donate</Link> |{' '}
          <Link to="/es">Español</Link>
        </>
      )}
    </nav>
  );
}

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
