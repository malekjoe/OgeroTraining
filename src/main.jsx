import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Team from "./pages/Team/Team.jsx";
import Invoices from "./pages/Invoices/Invoices.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import BarChart from "./pages/BarChart/BarChart.jsx";
import PieChart from "./pages/PieChart/PieChart.jsx";
import LineChar from "./pages/LineChart/LineChar.jsx";
import Geography from "./pages/GeographyChart/Geography.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />} >
  <Route index element={<Dashboard />} />
  <Route path="Team" element={<Team />} />
  <Route path="Invoices" element={<Invoices />} />
  <Route path="Contacts" element={<Contacts />} />
  <Route path="Profile" element={<Profile />} />
  <Route path="Calendar" element={<Calendar />} />
  <Route path="FAQ" element={<FAQ />} />
  <Route path="BarChart" element={<BarChart />} />
  <Route path="PieChart" element={<PieChart/>} />
  <Route path="LineChart" element={<LineChar />} />
  <Route path="GeographyChart" element={<Geography />} />
  </Route>
)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
