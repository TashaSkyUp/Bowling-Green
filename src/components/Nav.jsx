import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '', en: 'Home', es: 'Inicio' },
  { path: 'issues', en: 'Issues', es: 'Propuestas' },
  { path: 'events', en: 'Events', es: 'Eventos' },
  { path: 'volunteer', en: 'Volunteer', es: 'Voluntariado' },
  { path: 'voter-info', en: 'Voter Info', es: 'Información para Votantes' },
  { path: 'endorsements', en: 'Endorsements', es: 'Apoyos' },
  { path: 'newsroom', en: 'Newsroom', es: 'Sala de Prensa' },
  { path: 'contact', en: 'Contact', es: 'Contacto' },
  { path: 'donate', en: 'Donate', es: 'Donar' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith('/es');
  const prefix = isSpanish ? '/es' : '';

  return (
    <nav>
      <ul>
        {navItems.map((item) => {
          const to = item.path ? `${prefix}/${item.path}` : prefix || '/';
          return (
            <li key={item.path || 'home'}>
              <Link to={to}>{isSpanish ? item.es : item.en}</Link>
            </li>
          );
        })}
        <li>
          {isSpanish ? <Link to="/">English</Link> : <Link to="/es">Español</Link>}
        </li>
      </ul>
    </nav>
  );
}
