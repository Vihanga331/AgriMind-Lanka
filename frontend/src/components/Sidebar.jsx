import React from "react";
import { BarChart3, Bot, Boxes, LayoutDashboard, PackagePlus, Settings, ShoppingBag, Truck, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const farmerItems = [
  ["Dashboard", "/farmer", LayoutDashboard],
  ["Crop Analytics", "/farmer/analytics", BarChart3],
  ["Marketplace", "/farmer/marketplace", ShoppingBag],
  ["Add Crop", "/farmer/add-crop", PackagePlus],
  ["AI Assistant", "/farmer/assistant", Bot],
  ["Equipment Rentals", "/farmer/equipment", Boxes],
  ["Orders", "/farmer/orders", Truck],
  ["Settings", "/farmer/settings", Settings],
];

const buyerItems = [
  ["Dashboard", "/buyer", LayoutDashboard],
  ["Browse Crops", "/buyer/browse", ShoppingBag],
  ["Crop Analytics", "/buyer/analytics", BarChart3],
  ["Farmer Profiles", "/buyer/farmers", Users],
  ["Orders", "/buyer/orders", Truck],
  ["Delivery Tracking", "/buyer/delivery", Truck],
  ["AI Recommendations", "/buyer/recommendations", Bot],
];

export default function Sidebar({ role }) {
  const items = role === "buyer" ? buyerItems : farmerItems;
  return (
    <aside className="hidden w-64 shrink-0 border-r border-emerald-900/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5 lg:block">
      <div className="space-y-1">
        {items.map(([label, to, Icon]) => (
          <NavLink
            key={to}
            end={to === `/${role}`}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${isActive ? "bg-emerald-600 text-white" : "text-emerald-950 hover:bg-emerald-100 dark:text-emerald-50 dark:hover:bg-white/10"}`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
