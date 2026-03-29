import React from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
}

export function StatCard({ title, value, icon, trend, color = "primary" }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low p-6 shadow-xl backdrop-blur-md">
      {/* Decorative gradient */}
      <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-${color}/10 blur-3xl`} />
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-1">{title}</p>
          <h3 className="text-4xl font-black text-primary font-headline tracking-tighter">{value}</h3>
          {trend && (
            <p className="mt-2 text-xs font-bold text-tertiary">
              <span className="mr-1">↑</span>
              {trend}
            </p>
          )}
        </div>
        <div className={`rounded-xl bg-${color}-container p-3 text-on-${color}-container shadow-inner`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
