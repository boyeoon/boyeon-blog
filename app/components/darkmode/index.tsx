"use client";

import { useEffect, useState } from 'react';

export default function DarkMode() {
  const [activeTheme, setActiveTheme] = useState<string>('system');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setActiveTheme(savedTheme);
    } else {
      setActiveTheme('system');
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        document.documentElement.classList.toggle('dark', mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    setIsOpen(false);
  };

  return (
    <main className="flex items-center justify-center pt-32 p-96">
      <div className="relative inline-block text-left">
        <div>
          <button 
            type="button" 
            onClick={() => setIsOpen(!isOpen)} 
            className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm material-symbols-outlined hover:bg-gray-50 focus:outline-none" 
            id="options-menu" 
            aria-haspopup="true" 
            aria-expanded={isOpen}
          >
            {
              activeTheme === "light" 
              ? "light_mode" 
              : activeTheme === "dark" 
              ? "night_sight_max" 
              : "desktop_mac"
            }
            <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a 
                onClick={() => handleThemeChange("light")} 
                className="block px-4 py-2 text-sm text-gray-700 material-symbols-outlined hover:bg-gray-100" 
                role="menuitem"
              >
                light_mode
              </a>
              <a 
                onClick={() => handleThemeChange("dark")} 
                className="block px-4 py-2 text-sm text-gray-700 material-symbols-outlined hover:bg-gray-100" 
                role="menuitem"
              >
                night_sight_max
              </a>
              <a 
                onClick={() => handleThemeChange('system')} 
                className="block px-4 py-2 text-sm text-gray-700 material-symbols-outlined hover:bg-gray-100" 
                role="menuitem"
              >
                desktop_mac
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
