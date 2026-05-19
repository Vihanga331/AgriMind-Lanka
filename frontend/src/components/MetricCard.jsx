import React from "react";

export default function MetricCard({ icon: Icon, label, value, detail, tone = "emerald" }) {
  const tones = {
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-200",
    cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-200",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-200",
  };
  return (
    <div className="panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-emerald-900/60 dark:text-emerald-50/60">{label}</p>
          <p className="mt-2 text-3xl font-black text-emerald-950 dark:text-white">{value}</p>
        </div>
        {Icon && <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[tone]}`}><Icon size={20} /></span>}
      </div>
      {detail && <p className="mt-3 text-sm text-emerald-900/65 dark:text-emerald-50/65">{detail}</p>}
    </div>
  );
}
