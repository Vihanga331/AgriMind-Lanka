import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyerDashboard from "./buyer/BuyerDashboard";
import FarmerDashboard from "./farmer/FarmerDashboard";
import MarketplacePage from "./shared/MarketplacePage";
import SimplePage from "./shared/SimplePage";

export default function PortalLayout({ role }) {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950 dark:bg-night dark:text-white">
      <Navbar />
      <div className="flex min-h-[calc(100vh-68px)]">
        <Sidebar role={role} />
        <div className="min-w-0 flex-1 p-4 lg:p-6">
          <Routes>
            <Route index element={role === "buyer" ? <BuyerDashboard /> : <FarmerDashboard />} />
            <Route path="marketplace" element={<MarketplacePage mode="farmer" />} />
            <Route path="browse" element={<MarketplacePage mode="buyer" />} />
            <Route path="analytics" element={<SimplePage title="Crop Analytics" type="analytics" />} />
            <Route path="add-crop" element={<SimplePage title="Add Crop" type="form" />} />
            <Route path="assistant" element={<SimplePage title="AI Assistant" type="assistant" />} />
            <Route path="equipment" element={<SimplePage title="Equipment Rentals" type="equipment" />} />
            <Route path="orders" element={<SimplePage title="Orders" type="orders" />} />
            <Route path="settings" element={<SimplePage title="Settings" type="settings" />} />
            <Route path="farmers" element={<SimplePage title="Farmer Profiles" type="farmers" />} />
            <Route path="delivery" element={<SimplePage title="Delivery Tracking" type="delivery" />} />
            <Route path="recommendations" element={<SimplePage title="AI Recommendations" type="assistant" />} />
            <Route path="*" element={<Navigate to={`/${role}`} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
