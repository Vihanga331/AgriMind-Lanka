import React from "react";
import { Bot, CloudSun, Droplets, PackagePlus, ShieldAlert, Sprout, Tractor, Truck } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import LiveChart from "../../components/LiveChart";
import MetricCard from "../../components/MetricCard";
import { forecast } from "../../data/mock";

const insights = [
  "Disease risk is low, but humidity is rising after 6 PM.",
  "Use light irrigation tonight; water level is sufficient.",
  "Next-season demand signals recommend tomato, capsicum, and carrot over cabbage.",
  "Medium overproduction risk in Nuwara Eliya if too many farms plant the same crop type.",
];

export default function FarmerDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[.22em] text-emerald-600">Farmer Portal</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Farm intelligence dashboard</h1>
          <p className="mt-2 text-emerald-950/65 dark:text-emerald-50/65">AI insights, realtime IoT data, marketplace actions, and delivery requests.</p>
        </div>
        <button className="btn-primary"><PackagePlus size={18} /> Add Crop</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={Sprout} label="Crop health" value="91%" detail="High quality harvest expected" />
        <MetricCard icon={ShieldAlert} label="Disease risk" value="18%" detail="Watch humidity after rainfall" tone="rose" />
        <MetricCard icon={Droplets} label="Soil moisture" value="72%" detail="Irrigation cycle stable" tone="cyan" />
        <MetricCard icon={CloudSun} label="Weather" value="28°C" detail="Partly cloudy in Nuwara Eliya" tone="amber" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
        <LiveChart />
        <div className="panel">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200"><Bot /></span>
            <div>
              <p className="text-sm font-bold text-emerald-900/60 dark:text-emerald-50/60">AI Assistant</p>
          <h2 className="text-xl font-black">Next best actions</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {insights.map((item) => (
              <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50 p-4 text-sm font-semibold leading-6 dark:border-white/10 dark:bg-white/5" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="panel xl:col-span-2">
          <h2 className="text-xl font-black">Next-season crop demand prediction</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-950/65 dark:text-emerald-50/65">
            Advanced analytics compare buyer demand, market patterns, district crop cycles, and overproduction risk so registered farmers know what to plant next season.
          </p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={forecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16,185,129,.16)" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="demand" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid gap-4">
          <ActionCard icon={Tractor} title="Equipment rental" text="Drone sprayer available in Kurunegala tomorrow." />
          <ActionCard icon={Truck} title="Delivery requests" text="3 buyer deliveries need route confirmation." />
          <ActionCard icon={PackagePlus} title="Marketplace management" text="Ceylon Tomato lot is performing 14% above buyer average." />
        </div>
      </div>
    </div>
  );
}

function ActionCard({ icon: Icon, title, text }) {
  return (
    <div className="panel">
      <Icon className="text-emerald-600" />
      <h3 className="mt-3 font-black">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-emerald-950/65 dark:text-emerald-50/65">{text}</p>
    </div>
  );
}
