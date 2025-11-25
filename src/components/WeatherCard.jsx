// src/components/WeatherCard.jsx
import React from 'react';
import { getIconUrl } from '@/api/weatherApi';

export default function WeatherCard({ current }) {
  if (!current) return null;
  const { name, sys, main, weather } = current;
  const w = weather && weather[0];

  return (
    <div className="weather-info p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white">
      <div className="flex flex-col items-center">
        <h2 className="city-name text-4xl font-bold tracking-wide drop-shadow-md">
          {name}, <span className="text-3xl font-light opacity-80">{sys.country}</span>
        </h2>

        <div className="flex items-center justify-center my-4">
          <img
            src={getIconUrl(w.icon)}
            alt={w.main}
            className="w-32 h-32 drop-shadow-lg filter"
          />
        </div>

        <div className="temperature text-7xl font-extrabold tracking-tighter drop-shadow-lg">
          {Math.round(main.temp)}°
        </div>

        <p className="description text-xl font-medium tracking-widest uppercase opacity-90">
          {w.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-8 w-full max-w-xs">
          <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
            <p className="text-xs uppercase tracking-wider opacity-70">Feels Like</p>
            <p className="text-xl font-bold">{Math.round(main.feels_like)}°</p>
          </div>
          <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
            <p className="text-xs uppercase tracking-wider opacity-70">Humidity</p>
            <p className="text-xl font-bold">{main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
