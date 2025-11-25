import React from "react";
import { formatDateHuman } from "../utils/helpers";
import { getIconUrl } from '@/api/weatherApi';

export default function ForecastCard({ daily }) {
  if (!daily || daily.length === 0) return null;

  // Take only first 5 days if more are provided
  const forecastDays = daily.slice(0, 5);

  return (
    <div className="grid grid-cols-1 gap-3 mt-6 w-full">
      <h3 className="text-xl font-semibold mb-2 ml-1 opacity-90">5-Day Forecast</h3>
      {forecastDays.map((d) => (
        <div
          key={d.date}
          className="flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
        >
          <div className="font-medium text-lg w-24">{formatDateHuman(d.date)}</div>

          <div className="flex items-center gap-2 flex-1 justify-center">
            <img src={getIconUrl(d.weather.icon)} alt={d.weather.main} className="w-10 h-10 drop-shadow-sm" />
            <span className="text-sm opacity-80 capitalize hidden sm:block">{d.weather.main}</span>
          </div>

          <div className="flex items-center gap-4 w-24 justify-end">
            <span className="font-bold text-lg">{Math.round(d.tempMax)}°</span>
            <span className="opacity-60 text-sm">{Math.round(d.tempMin)}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}
