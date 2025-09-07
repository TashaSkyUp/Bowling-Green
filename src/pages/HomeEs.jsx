import { Link } from 'react-router-dom';

export default function HomeEs() {
  return (
    <section>
      <h1>Inicio</h1>
      <p>
        Nuestro sitio ayuda a informar y persuadir a los votantes con lenguaje claro. Ofrecemos acceso rápido a
        resúmenes de propuestas, eventos, oportunidades de voluntariado, enlaces para donar e información para votantes.
      </p>
      <ul>
        <li>Revisa las propuestas y soluciones.</li>
        <li>Consulta eventos y confirma tu asistencia.</li>
        <li>Únete como voluntariado.</li>
        <li>Obtén información para votantes.</li>
        <li>Apoya la campaña con una donación.</li>
      </ul>
      <p>
        <Link to="/">English</Link>
      </p>
    </section>
  );
}
