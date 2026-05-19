const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
export const WS_URL = import.meta.env.VITE_WS_URL || "ws://127.0.0.1:8000/ws/iot";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) throw new Error(`API error ${response.status}`);
  return response.json();
}

export const api = {
  login: (payload) => request("/api/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  register: (payload) => request("/api/auth/register", { method: "POST", body: JSON.stringify(payload) }),
  dashboard: () => request("/api/analytics/dashboard"),
  crops: () => request("/api/marketplace/crops"),
  equipment: () => request("/api/marketplace/equipment"),
  cropHealth: (payload) => request("/api/ai/crop-health", { method: "POST", body: JSON.stringify(payload) }),
  buyerRecommendation: (payload) => request("/api/ai/buyer-recommendation", { method: "POST", body: JSON.stringify(payload) }),
};
