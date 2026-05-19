import React from "react";
import { Search, ShoppingCart, SlidersHorizontal, Tractor, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { cropListings } from "../../data/mock";

export default function MarketplacePage({ mode }) {
  const [query, setQuery] = useState("");
  const crops = useMemo(() => cropListings.filter((crop) => `${crop.name} ${crop.district} ${crop.farmer}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-black uppercase tracking-[.22em] text-emerald-600">Marketplace</p>
        <h1 className="mt-2 text-3xl font-black">{mode === "buyer" ? "Browse verified crops" : "Manage crop listings"}</h1>
      </div>
      <div className="panel flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700" size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-2xl border border-emerald-900/10 bg-emerald-50 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10 dark:bg-white/5" placeholder="Search crops, farmers, districts" />
        </div>
        <button className="btn-soft"><SlidersHorizontal size={18} /> Filters</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {crops.map((crop) => (
          <div className="panel" key={crop.id}>
            <div className="flex items-center justify-between">
              <span className="pill">{crop.quality}% quality</span>
              <span className="pill">{crop.quantity} kg</span>
            </div>
            <h2 className="mt-5 text-xl font-black">{crop.name}</h2>
            <p className="mt-1 text-sm text-emerald-950/65 dark:text-emerald-50/65">{crop.farmer} · {crop.district}</p>
            <p className="mt-4 text-2xl font-black">LKR {crop.price}/kg</p>
            <div className="mt-5 flex gap-2">
              <button className="btn-primary flex-1">{mode === "buyer" ? <ShoppingCart size={17} /> : <Truck size={17} />} {mode === "buyer" ? "Order" : "Manage"}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Mini icon={Tractor} title="Equipment rentals" text="Mini tractors, pumps, sprayers, and drones." />
        <Mini icon={Truck} title="Delivery services" text="Buyer pickup, farm dispatch, and ETA tracking." />
        <Mini icon={ShoppingCart} title="Vegetable store" text="Direct customer-ready crop bundles." />
      </div>
    </div>
  );
}

function Mini({ icon: Icon, title, text }) {
  return (
    <div className="panel">
      <Icon className="text-emerald-600" />
      <h3 className="mt-3 font-black">{title}</h3>
      <p className="mt-1 text-sm text-emerald-950/65 dark:text-emerald-50/65">{text}</p>
    </div>
  );
}
