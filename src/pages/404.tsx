import { Link } from 'react-router-dom';
import './404.scss'
const NotFound = () => {
  return (
    <div className='not-found'>
      <div>
        <h2>404 Not Found</h2>
        <p>La pagina richiesta non è stata trovata.</p>
        <Link to="/">Torna alla pagina principale</Link>
      </div>
    </div>
  );
};
export default NotFound;
