const BASE = "https://api.openweathermap.org/data/2.5";
const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const DEFAULT_UNIT = "metric";

if (!KEY) throw new Error("OpenWeatherMap API key is missing in .env");

export async function fetchCurrentWeatherByCity(city, units = DEFAULT_UNIT) {
  const url = `${BASE}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${KEY}`;
  console.log("Fetching:", url);
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch current weather by city");
  return data;
}

export async function fetchForecastByCity(city, units = DEFAULT_UNIT) {
  const url = `${BASE}/forecast?q=${encodeURIComponent(city)}&units=${units}&appid=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch forecast by city");
  return data;
}

export async function fetchCurrentWeatherByCoords(lat, lon, units = DEFAULT_UNIT) {
  const url = `${BASE}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch current weather by coordinates");
  return data;
}

export async function fetchForecastByCoords(lat, lon, units = DEFAULT_UNIT) {
  const url = `${BASE}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch forecast by coordinates");
  return data;
}

export function getIconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
