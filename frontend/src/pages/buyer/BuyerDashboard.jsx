import React from "react";
import { Bot, PackageCheck, Search, ShieldCheck, Star, Truck, Users } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import MetricCard from "../../components/MetricCard";
import { cropListings } from "../../data/mock";

const comparison = [
  { metric: "Quality", value: 94 },
  { metric: "Freshness", value: 89 },
  { metric: "History", value: 92 },
  { metric: "Low Risk", value: 84 },
  { metric: "Delivery", value: 87 },
];

export default function BuyerDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[.22em] text-emerald-600">Buyer Portal</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Crop sourcing command center</h1>
          <p className="mt-2 text-emerald-950/65 dark:text-emerald-50/65">Browse quality crops, compare farmer analytics, and track delivery readiness.</p>
        </div>
        <button className="btn-primary"><Search size={18} /> Browse Crops</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={PackageCheck} label="Verified crop lots" value="342" detail="With growth histories" />
        <MetricCard icon={Star} label="Avg farmer rating" value="4.8" detail="Across active sellers" tone="amber" />
        <MetricCard icon={ShieldCheck} label="Quality confidence" value="92%" detail="AI-scored lots" tone="cyan" />
        <MetricCard icon={Truck} label="Active deliveries" value="18" detail="Islandwide routes" tone="rose" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[.85fr_1.15fr]">
        <div className="panel">
          <h2 className="text-xl font-black">AI crop quality comparison</h2>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={comparison}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis />
                <Tooltip />
                <Radar dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="panel">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200"><Bot /></span>
            <div>
              <p className="text-sm font-bold text-emerald-900/60 dark:text-emerald-50/60">AI Buying Assistant</p>
              <h2 className="text-xl font-black">Recommended purchases</h2>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {cropListings.slice(0, 3).map((crop) => (
              <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50 p-4 dark:border-white/10 dark:bg-white/5" key={crop.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-black">{crop.name}</h3>
                    <p className="text-sm text-emerald-950/65 dark:text-emerald-50/65">{crop.farmer} · {crop.district}</p>
                  </div>
                  <span className="pill">{crop.quality}%</span>
                </div>
                <p className="mt-3 text-sm leading-6">AI recommends this lot for retail freshness and low disease-risk history.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <InfoCard icon={Users} title="Farmer profiles" text="Ratings, district history, crop quality, and previous delivery performance." />
        <InfoCard icon={PackageCheck} title="Crop history timeline" text="Planting, irrigation, disease alerts, and harvest quality milestones." />
        <InfoCard icon={Truck} title="Delivery tracking" text="Track scheduled pickups, route status, and ETA for each confirmed order." />
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="panel">
      <Icon className="text-emerald-600" />
      <h3 className="mt-3 font-black">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-emerald-950/65 dark:text-emerald-50/65">{text}</p>
    </div>
  );
}
