// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Home />
      </div>
    </ThemeProvider>
  );
}
