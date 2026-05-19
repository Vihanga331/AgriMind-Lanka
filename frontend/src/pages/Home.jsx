import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  CalendarDays,
  CheckCircle2,
  CloudSun,
  Cpu,
  Leaf,
  LineChart,
  PackageCheck,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Tractor,
  Truck,
  Users,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import LiveChart from "../components/LiveChart";
import MetricCard from "../components/MetricCard";
import { cropListings, forecast, testimonials } from "../data/mock";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const farmerFeatures = [
  "Live IoT sensor dashboard",
  "AI crop health analysis",
  "Disease prediction",
  "Weather monitoring",
  "Water usage analytics",
  "Seasonal crop recommendations",
  "Marketplace selling",
  "Tool and machine rental system",
];

const buyerFeatures = [
  "Crop quality analytics",
  "Crop growth history",
  "Farmer rating system",
  "AI assisted crop purchasing",
  "Delivery system",
  "Marketplace browsing",
];

const problemCards = [
  ["Excess crop reduction", "Demand forecasting flags overproduction before harvest windows."],
  ["Better selling opportunities", "Direct listings connect verified crop lots with serious buyers."],
  ["Healthier crops", "Sensor trends and AI alerts guide irrigation and fertilizer decisions."],
  ["Direct farmer-to-buyer connection", "Ratings, crop history, and delivery requests reduce middle friction."],
  ["Smart crop planning", "Seasonal recommendations align crop choice with future market demand."],
  ["Transparent quality tracking", "Buyers see growth timelines, disease risk, and quality scores."],
];

const analyticsProcess = [
  ["Demand Signals", "We analyze buyer orders, district demand, seasonal pricing, and marketplace activity."],
  ["Pattern Detection", "Advanced analytics identify crop cycles, oversupply risk, weather effects, and planting trends."],
  ["Next-Season Advice", "Registered farmers receive clear crop recommendations for what to plant next season."],
  ["Loss Prevention", "The system warns when a crop type may become excess, low-demand, or likely to be wasted."],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,#DDFBE4,transparent_34%),linear-gradient(180deg,#F6FBF7,#FFFFFF_45%,#F0FFF8)] text-emerald-950 dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.18),transparent_35%),linear-gradient(180deg,#07130F,#0C1A15_52%,#07130F)] dark:text-white">
      <section className="mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1fr_.92fr]">
        <motion.div initial="hidden" animate="show" variants={fade}>
          <span className="pill"><Leaf size={14} /> Sri Lanka smart agriculture MVP</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            AI Powered Smart Agriculture Ecosystem
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-950/70 dark:text-emerald-50/70">
            Helping Sri Lankan farmers grow healthier crops, predict future harvests, and sell directly to buyers using AI and IoT analytics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" to="/login">Get Started <ArrowRight size={18} /></Link>
            <Link className="btn-soft" to="/farmer">Farmer Portal</Link>
            <Link className="btn-soft" to="/buyer">Buyer Portal</Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <MetricCard icon={Sprout} label="Demo farms" value="128" detail="Realtime farm intelligence" />
            <MetricCard icon={PackageCheck} label="Quality lots" value="342" detail="Buyer-ready crops" tone="cyan" />
            <MetricCard icon={LineChart} label="Forecast lift" value="+31%" detail="Planning confidence" tone="amber" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="glass rounded-[2rem] p-4">
          <div className="rounded-[1.5rem] bg-emerald-950 p-4 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">AgriMind Command</p>
                <h2 className="text-2xl font-black">Live crop intelligence</h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">AI Online</span>
            </div>
            <LiveChart compact />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Soil 72%", "Disease 18%", "Growth 91%"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold">{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Section eyebrow="System overview" title="From farm sensors to transparent market decisions">
        <div className="grid gap-4 md:grid-cols-5">
          {[
            [Cpu, "IoT devices collect farm data"],
            [Brain, "AI analyzes crop health"],
            [Bot, "Farmers receive predictions"],
            [ShieldCheck, "Buyers view crop history"],
            [ShoppingBasket, "Marketplace connects both sides"],
          ].map(([Icon, text]) => (
            <div className="panel" key={text}>
              <Icon className="text-emerald-600" size={26} />
              <p className="mt-4 font-bold">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Features" title="Two portals, one connected agriculture network">
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureList title="Farmer Features" icon={Tractor} items={farmerFeatures} />
          <FeatureList title="Buyer Features" icon={Users} items={buyerFeatures} />
        </div>
      </Section>

      <Section eyebrow="Problem solving" title="Designed for real Sri Lankan agriculture pain points">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map(([title, text]) => (
            <div className="panel" key={title}>
              <CheckCircle2 className="text-emerald-600" />
              <h3 className="mt-4 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-950/65 dark:text-emerald-50/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Data analytics process" title="Helping registered farmers decide what to plant next season">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="panel">
            <CalendarDays className="text-emerald-600" size={30} />
            <h3 className="mt-4 text-2xl font-black">Crop planning intelligence</h3>
            <p className="mt-3 leading-7 text-emerald-950/70 dark:text-emerald-50/70">
              AgriMind Lanka uses advanced data analytics and demand patterns to guide farmers before they plant. Registered farmers can see which crops are expected to be in demand next season, which crop types may become oversupplied, and where losses can be avoided through smarter planning.
            </p>
            <div className="mt-6 rounded-2xl bg-emerald-600 p-5 text-white">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-100">Core promise</p>
              <p className="mt-2 text-xl font-black">No crop should be grown blindly, wasted unnecessarily, or lost because farmers lacked market data.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {analyticsProcess.map(([title, text]) => (
              <div className="panel" key={title}>
                <LineChart className="text-emerald-600" />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-950/65 dark:text-emerald-50/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="AI analytics" title="Predict crop risk, harvest quality, and future demand">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard icon={Waves} label="Soil moisture" value="72%" detail="Healthy root-zone level" />
            <MetricCard icon={CloudSun} label="Temperature" value="28.6°C" detail="Stable for tomato growth" tone="amber" />
            <MetricCard icon={LineChart} label="Growth score" value="91%" detail="Harvest quality trending high" tone="cyan" />
            <MetricCard icon={ShieldCheck} label="Disease risk" value="18%" detail="Low risk, monitor humidity" tone="rose" />
          </div>
          <div className="panel h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecast}>
                <defs>
                  <linearGradient id="yield" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.42} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16,185,129,.16)" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area dataKey="yield" stroke="#10b981" strokeWidth={3} fill="url(#yield)" />
                <Area dataKey="demand" stroke="#0ea5e9" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      <Section eyebrow="Marketplace" title="Crops, equipment rentals, delivery, and buyer trust">
        <div className="grid gap-4 lg:grid-cols-4">
          {cropListings.map((crop) => (
            <div className="panel" key={crop.id}>
              <div className="flex items-center justify-between">
                <ShoppingBasket className="text-emerald-600" />
                <span className="pill">{crop.quality}% quality</span>
              </div>
              <h3 className="mt-5 text-xl font-black">{crop.name}</h3>
              <p className="text-sm text-emerald-950/65 dark:text-emerald-50/65">{crop.district} · {crop.farmer}</p>
              <p className="mt-4 text-2xl font-black">LKR {crop.price}/kg</p>
              <p className="mt-1 text-sm">{crop.quantity} kg available</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [Tractor, "Farm equipment rentals"],
            [Truck, "Delivery service matching"],
            [ShoppingBasket, "Customer vegetable store"],
          ].map(([Icon, text]) => (
            <div className="panel flex items-center gap-4" key={text}>
              <Icon className="text-emerald-600" />
              <span className="font-black">{text}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust" title="Demo testimonials for the agriculture ecosystem">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div className="panel" key={item.name}>
              <p className="leading-7 text-emerald-950/75 dark:text-emerald-50/75">"{item.text}"</p>
              <p className="mt-5 font-black">{item.name}</p>
              <p className="text-sm text-emerald-950/55 dark:text-emerald-50/55">{item.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[.25em] text-emerald-600">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function FeatureList({ title, icon: Icon, items }) {
  return (
    <div className="panel">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200"><Icon /></span>
        <h3 className="text-2xl font-black">{title}</h3>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-900/10 bg-emerald-50/70 p-3 text-sm font-bold dark:border-white/10 dark:bg-white/5" key={item}>
            <CheckCircle2 size={16} className="text-emerald-600" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
