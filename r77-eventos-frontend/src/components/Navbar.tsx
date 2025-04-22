import { Link } from 'react-router-dom';
import styles from "../styles/components/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>R77 Eventos</h1>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to="/sobre" className={styles.navLink}>Sobre</Link>
        </li>
        <li>
          <Link to="/login" className={styles.navLink}>Login</Link>
        </li>
        <li>
          <Link to="/register" className={styles.navLink}>Cadastre-se</Link>
        </li>
      </ul>
    </nav>
  );
};
