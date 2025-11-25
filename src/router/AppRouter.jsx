import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages
import Dashboard from "../pages/Dashboard";
import Invoices from "../pages/sales/Invoices";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Sales */}
        <Route path="/sales/invoices" element={<Invoices />} />

        {/* Add more routes as you build pages */}
      </Route>
    </Routes>
  );
}
