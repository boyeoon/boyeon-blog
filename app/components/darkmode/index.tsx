"use client";

import { useEffect, useState } from "react";

export default function DarkMode() {
  const [activeTheme, setActiveTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setActiveTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", activeTheme === "dark");
    }
  }, [activeTheme]);

  const handleThemeChange = () => {
    const newTheme = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button 
      type="button" 
      onClick={handleThemeChange} 
      className="flex items-center p-1 rounded hover:bg-slate-400"
    >
      <span className="material-symbols-outlined">
        {activeTheme === "light" ? "light_mode" : "nights_stay"}
      </span>
      <span className="ml-2">{activeTheme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
