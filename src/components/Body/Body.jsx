import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import MainNavigaton from "../MainNavigation/MainNavigation";
import tabs from "../Tabs";
import styles from "./Body.module.css";

export default function Body() {
  return (
    <Router>
      <MainNavigaton />

      <main className={`${styles.contentArea}`}>
        {/* <Suspense fallback={<div>Загрузка...</div>} /> */}
        <Routes>
          {tabs.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </main>
    </Router>
  );
}
