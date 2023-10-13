import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>La pagina richiesta non è stata trovata.</p>
      <Link to="/">Torna alla pagina principale</Link>
    </div>
  );
};
export default NotFound;
