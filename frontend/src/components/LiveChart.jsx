import React from "react";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { WS_URL } from "../services/api";

const initial = Array.from({ length: 8 }, (_, index) => ({
  time: `${index + 1}s`,
  soilMoisture: 62 + index,
  temperature: 28 + (index % 3),
  humidity: 70 - index,
  diseaseRisk: 20 + (index % 4),
}));

export default function LiveChart({ compact = false }) {
  const [data, setData] = useState(initial);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let timer;
    const socket = new WebSocket(WS_URL);
    socket.onopen = () => setConnected(true);
    socket.onmessage = (event) => {
      const packet = JSON.parse(event.data);
      setData((rows) => [...rows.slice(-11), { ...packet, time: new Date().toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }) }]);
    };
    socket.onerror = () => {
      setConnected(false);
      timer = setInterval(() => {
        setData((rows) => [...rows.slice(-11), {
          time: new Date().toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }),
          soilMoisture: 52 + Math.random() * 28,
          temperature: 24 + Math.random() * 9,
          humidity: 60 + Math.random() * 25,
          diseaseRisk: 12 + Math.random() * 36,
        }]);
      }, 2000);
    };
    socket.onclose = () => setConnected(false);
    return () => {
      socket.close();
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="panel h-full">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-emerald-900/60 dark:text-emerald-50/60">Realtime IoT Stream</p>
          <h3 className="text-xl font-black text-emerald-950 dark:text-white">Farm sensor intelligence</h3>
        </div>
        <span className={`pill ${connected ? "text-emerald-700" : "text-amber-700"}`}>{connected ? "Live WS" : "Simulated"}</span>
      </div>
      <div className={compact ? "h-56" : "h-80"}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="moisture" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.42} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, .16)" />
            <XAxis dataKey="time" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Area type="monotone" dataKey="soilMoisture" stroke="#10b981" fill="url(#moisture)" strokeWidth={3} />
            <Area type="monotone" dataKey="diseaseRisk" stroke="#f59e0b" fill="transparent" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
