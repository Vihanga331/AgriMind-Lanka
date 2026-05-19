import React from "react";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [role, setRole] = useState("farmer");
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const user = await login(role);
    setLoading(false);
    navigate(user.role === "buyer" ? "/buyer" : "/farmer");
  }

  return (
    <main className="grid min-h-[calc(100vh-68px)] place-items-center bg-emerald-50 px-4 py-12 dark:bg-night">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-[2rem] p-6">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-white">
          <Leaf />
        </div>
        <h1 className="mt-5 text-center text-3xl font-black text-emerald-950 dark:text-white">{mode === "login" ? "Welcome back" : "Create account"}</h1>
        <p className="mt-2 text-center text-sm text-emerald-950/65 dark:text-emerald-50/65">Demo JWT auth with farmer and buyer role access.</p>

        <div className="mt-6 grid grid-cols-2 rounded-full bg-emerald-100 p-1 dark:bg-white/10">
          {["farmer", "buyer"].map((item) => (
            <button type="button" key={item} onClick={() => setRole(item)} className={`rounded-full px-4 py-2 text-sm font-black capitalize ${role === item ? "bg-white text-emerald-700 shadow-sm dark:bg-emerald-500 dark:text-white" : "text-emerald-950/60 dark:text-white/60"}`}>
              {item}
            </button>
          ))}
        </div>

        <label className="mt-6 block text-sm font-bold text-emerald-950 dark:text-white">Email</label>
        <input className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none ring-emerald-500 focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" value={role === "buyer" ? "buyer@agrimind.lk" : "farmer@agrimind.lk"} readOnly />
        <label className="mt-4 block text-sm font-bold text-emerald-950 dark:text-white">Password</label>
        <input className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none ring-emerald-500 focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" type="password" defaultValue="demo" />
        {mode === "register" && (
          <input className="mt-4 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none ring-emerald-500 focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="Full name" />
        )}
        <button className="btn-primary mt-6 w-full" disabled={loading}>{loading ? "Signing in..." : mode === "login" ? "Login to Portal" : "Register Demo Account"}</button>
        <button type="button" className="mt-4 w-full text-sm font-bold text-emerald-700 dark:text-emerald-200" onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login" ? "Need a demo account?" : "Already have an account?"}
        </button>
      </form>
    </main>
  );
}
