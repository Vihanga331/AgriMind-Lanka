import React from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("agrimind_user");
    return saved ? JSON.parse(saved) : null;
  });

  async function login(role = "farmer") {
    const email = role === "buyer" ? "buyer@agrimind.lk" : "farmer@agrimind.lk";
    const data = await api.login({ email, password: "demo" }).catch(() => ({
      access_token: "demo-token",
      user: { name: role === "buyer" ? "Demo Buyer" : "Demo Farmer", email, role },
    }));
    localStorage.setItem("agrimind_token", data.access_token);
    localStorage.setItem("agrimind_user", JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }

  function logout() {
    localStorage.removeItem("agrimind_token");
    localStorage.removeItem("agrimind_user");
    setUser(null);
  }

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
