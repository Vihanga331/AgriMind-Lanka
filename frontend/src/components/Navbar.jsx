import React from "react";
import { Leaf, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-emerald-600 text-white" : "text-emerald-950 hover:bg-emerald-100 dark:text-emerald-50 dark:hover:bg-white/10"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-night/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-black text-emerald-950 dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-white"><Leaf size={21} /></span>
          AgriMind Lanka
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/farmer" className={linkClass}>Farmer Portal</NavLink>
          <NavLink to="/buyer" className={linkClass}>Buyer Portal</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          {user && <span className="hidden text-xs font-bold text-emerald-800 dark:text-emerald-100 sm:block">{user.role}</span>}
          <ThemeToggle />
          {user && <button className="btn-soft h-11 w-11 px-0" onClick={logout} aria-label="Logout"><LogOut size={18} /></button>}
        </div>
      </div>
    </header>
  );
}
