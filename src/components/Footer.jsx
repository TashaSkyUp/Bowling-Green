import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith('/es');
  return (
    <footer>
      <p>
        {isSpanish
          ? 'Pagado por el Comité de Bowling Green. Tesorera: Jane Doe.'
          : 'Paid for by Bowling Green Committee. Treasurer: Jane Doe.'}
      </p>
    </footer>
  );
}

