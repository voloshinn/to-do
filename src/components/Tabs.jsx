import { lazy } from "react";

const Settings = lazy(() => import("./Settings/Settings"));
const Statistics = lazy(() => import("./Statistics/Statistics"));

const tabs = [
  {
    id: "settings",
    path: "/",
    title: "Настройки",
    element: <Settings />,
  },
  {
    id: "statistics",
    path: "/statistics",
    title: "Статистика",
    element: <Statistics />,
  },
];

export default tabs;
