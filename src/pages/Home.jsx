// src/pages/Home.jsx
import React, { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import useFetchWeather from "@/hooks/useFetchWeather";
import ThemeToggle from "@/components/ThemeToggle";
import "../App.css";

export default function Home() {
  const { data, loading, error, fetchByCity } = useFetchWeather();

  useEffect(() => {
    fetchByCity("Karachi"); // default city on load
  }, []);

  return (
    <div className="app-container">
      <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center mb-6">
        <SearchBar onSearch={fetchByCity} />
        <ThemeToggle />
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {data.current && <WeatherCard current={data.current} />}

      {data.daily.length > 0 && (
        <div className="forecast-container">
          <ForecastCard daily={data.daily} />
        </div>
      )}

      <div className="mt-8 text-center opacity-60 text-sm font-light tracking-wider hover:opacity-100 transition-opacity duration-300">
       Designed & Created by <em>Abdullah Khan</em>
      </div>
    </div>
  );
}