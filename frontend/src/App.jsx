import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PortalLayout from "./pages/PortalLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/login" element={<><Navbar /><Login /></>} />
      <Route path="/farmer/*" element={<PortalLayout role="farmer" />} />
      <Route path="/buyer/*" element={<PortalLayout role="buyer" />} />
    </Routes>
  );
}
