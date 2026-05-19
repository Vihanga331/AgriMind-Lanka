import React from "react";
import { Bot, CalendarClock, CheckCircle2, PackageCheck, Settings, Star, Tractor, Truck } from "lucide-react";
import LiveChart from "../../components/LiveChart";

export default function SimplePage({ title, type }) {
  if (type === "analytics") return <Analytics title={title} />;
  if (type === "form") return <AddCrop title={title} />;
  if (type === "assistant") return <Assistant title={title} />;
  if (type === "equipment") return <Equipment title={title} />;
  return <Generic title={title} type={type} />;
}

function Header({ title }) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[.22em] text-emerald-600">AgriMind Lanka</p>
      <h1 className="mt-2 text-3xl font-black">{title}</h1>
    </div>
  );
}

function Analytics({ title }) {
  return (
    <div className="space-y-6">
      <Header title={title} />
      <LiveChart />
      <div className="grid gap-4 md:grid-cols-3">
        {["Crop growth score 91%", "Disease risk 18%", "Future harvest quality high"].map((text) => <Tile key={text} icon={CheckCircle2} text={text} />)}
      </div>
    </div>
  );
}

function AddCrop({ title }) {
  return (
    <div className="space-y-6">
      <Header title={title} />
      <div className="panel max-w-3xl">
        <div className="grid gap-4 md:grid-cols-2">
          {["Crop name", "Variety", "District", "Quantity kg", "Price per kg", "Expected harvest date"].map((label) => (
            <label className="block text-sm font-bold" key={label}>
              {label}
              <input className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-emerald-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10 dark:bg-white/5" />
            </label>
          ))}
        </div>
        <button className="btn-primary mt-6"><PackageCheck size={18} /> Publish Crop Listing</button>
      </div>
    </div>
  );
}

function Assistant({ title }) {
  const prompts = [
    "What crop should I plant next season based on demand patterns?",
    "Estimate disease risk from current humidity and soil moisture.",
    "Recommend fertilizer and irrigation for carrot crop.",
    "Compare buyer options for high-quality chilli lots.",
  ];
  return (
    <div className="space-y-6">
      <Header title={title} />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="panel">
          <Bot className="text-emerald-600" />
          <h2 className="mt-3 text-xl font-black">AI modules</h2>
          <div className="mt-4 space-y-3">
            {["Crop Health Analyzer", "Disease Risk Predictor", "Seasonal Crop Recommendation", "Buyer Recommendation AI", "Yield Prediction System", "Smart Irrigation Recommendation", "Market Demand Forecasting"].map((item) => <Tile key={item} icon={CheckCircle2} text={item} />)}
          </div>
        </div>
        <div className="panel">
          <h2 className="text-xl font-black">Chat assistant</h2>
          <div className="mt-4 space-y-3">
            {prompts.map((prompt) => (
              <button className="w-full rounded-2xl border border-emerald-900/10 bg-emerald-50 p-4 text-left text-sm font-bold dark:border-white/10 dark:bg-white/5" key={prompt}>{prompt}</button>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-emerald-600 p-5 text-white">
            AI: Current demand patterns suggest planting tomato or capsicum next season. Avoid expanding cabbage acreage because regional supply is trending high and excess crop loss risk is increasing.
          </div>
        </div>
      </div>
    </div>
  );
}

function Equipment({ title }) {
  return (
    <div className="space-y-6">
      <Header title={title} />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Mini Tractor", "LKR 8,500/day"],
          ["Drone Sprayer", "LKR 12,000/day"],
          ["Water Pump Kit", "LKR 3,200/day"],
        ].map(([name, rate]) => <Tile key={name} icon={Tractor} text={`${name} · ${rate}`} />)}
      </div>
    </div>
  );
}

function Generic({ title, type }) {
  const icon = type === "settings" ? Settings : type === "farmers" ? Star : type === "delivery" || type === "orders" ? Truck : CalendarClock;
  return (
    <div className="space-y-6">
      <Header title={title} />
      <div className="grid gap-4 md:grid-cols-3">
        <Tile icon={icon} text={`${title} workflow ready for demo`} />
        <Tile icon={CheckCircle2} text="Notifications and status indicators enabled" />
        <Tile icon={Bot} text="AI summaries available for investor walkthroughs" />
      </div>
    </div>
  );
}

function Tile({ icon: Icon, text }) {
  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50 p-4 font-bold dark:border-white/10 dark:bg-white/5">
      <Icon className="mb-3 text-emerald-600" size={20} />
      {text}
    </div>
  );
}
