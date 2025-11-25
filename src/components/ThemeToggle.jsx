import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`w-20 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 flex items-center p-1 cursor-pointer hover:bg-white/20 ${className}`}
            aria-label="Toggle Theme"
        >
            {/* Sliding Circle */}
            <div
                className={`w - 8 h - 8 rounded - full shadow - md transform transition - transform duration - 500 flex items - center justify - center ${isDark ? 'translate-x-10 bg-slate-700' : 'translate-x-0 bg-yellow-400'
                    } `}
            >
                {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
            </div>

            {/* Background Icons (Optional subtle hints behind the toggle) */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                {!isDark && <span className="text-xs font-bold text-yellow-200">Light</span>}
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                {isDark && <span className="text-xs font-bold text-slate-300">Dark</span>}
            </div>
        </button>
    );
}
