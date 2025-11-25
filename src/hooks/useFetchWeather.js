// src/hooks/useFetchWeather.js
import { useState, useEffect } from "react";
import {
  fetchCurrentWeatherByCity,
  fetchForecastByCity,
  fetchCurrentWeatherByCoords,
  fetchForecastByCoords,
} from "@/api/weatherApi"; // Works because of the alias
import { groupForecastByDay } from "@/utils/helpers";

export default function useFetchWeather(defaultCity = "Karachi") {
  const [data, setData] = useState({ current: null, daily: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data when component mounts
  useEffect(() => {
    if (defaultCity) fetchByCity(defaultCity);
  }, [defaultCity]);

  // Fetch weather by city name
  async function fetchByCity(city) {
    setLoading(true);
    setError(null);
    try {
      const current = await fetchCurrentWeatherByCity(city);
      const forecast = await fetchForecastByCity(city);
      const daily = groupForecastByDay(forecast);
      setData({ current, daily });
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch weather by city");
      setData({ current: null, daily: [] });
    } finally {
      setLoading(false);
    }
  }

  // Fetch weather by coordinates
  async function fetchByCoords(lat, lon) {
    setLoading(true);
    setError(null);
    try {
      const current = await fetchCurrentWeatherByCoords(lat, lon);
      const forecast = await fetchForecastByCoords(lat, lon);
      const daily = groupForecastByDay(forecast);
      setData({ current, daily });
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch weather by coordinates");
      setData({ current: null, daily: [] });
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    fetchByCity,
    fetchByCoords,
    setError,
  };
}
