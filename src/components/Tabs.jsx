import { lazy } from "react";

const AllTasks = lazy(() => import("./ContentComponents/AllTasks/AllTasks"));

const Calendar = lazy(() => import("./ContentComponents/Calendar/Calendar"));

const Settings = lazy(() => import("./ContentComponents/Settings/Settings"));

const Statistics = lazy(() =>
  import("./ContentComponents/Statistics/Statistics")
);

const tabs = [
  {
    id: "allTasks",
    path: "/",
    title: "Все задачи",
    element: <AllTasks />,
  },
  {
    id: "calendar",
    path: "/calendar",
    title: "Календарь",
    element: <Calendar />,
  },
  {
    id: "settings",
    path: "/settings",
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
