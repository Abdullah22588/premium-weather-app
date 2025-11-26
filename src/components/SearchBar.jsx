// src/components/SearchBar.jsx
import React, { useState } from "react";
import "../App.css"; 

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim());
    setQ("");
  }

  return (
    <form onSubmit={submit} className="search-bar">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
