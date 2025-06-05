import { NavLink } from "react-router-dom";

import styles from "../MainNavigation/MainNavigation.module.css";

import tabs from "../Tabs";

export default function MainNavigaton() {
  return (
    <aside className={`${styles.sidebar}`}>
      <nav className={`${styles.tabsList}`}>
        <ul>
          {tabs.map((item) => (
            <li key={item.id} className={`${styles.tab}`}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${styles.activeLink}` : ""
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
