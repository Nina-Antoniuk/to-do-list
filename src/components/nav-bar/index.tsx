import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <ul className={`${styles.navList} list`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bin"
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Deleted
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
