"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Load theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    // Add scroll listener with larger threshold
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <style jsx global>{`
        .nav-link {
          position: relative;
          display: inline-block;
          font-weight: 500;
          transition: all 0.3s ease !important;
        }

        .nav-link:hover {
          transform: translateY(-3px) scale(1.05) !important;
        }

        .nav-link:active {
          transform: translateY(0px) scale(0.95) !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: ${theme === "dark" ? "#fff" : "#000"};
          transition: width 0.3s ease, left 0.3s ease, background-color 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        .logo-link {
          display: inline-block;
          font-weight: 900;
          transition: transform 0.3s ease, letter-spacing 0.3s ease !important;
        }

        .logo-link:hover {
          transform: scale(1.08) rotate(-2deg) !important;
          letter-spacing: 1px;
        }

        .logo-link:active {
          transform: scale(0.95) !important;
        }
      `}</style>

      {/* Navbar - Punchout Style */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${!isScrolled ? 'py-8' : 'py-3'}`}>
        <nav className="container mx-auto px-6">
          <div className={`bg-card/90 backdrop-blur-lg border-[0.5px] border-border/50 rounded-full shadow-lg transition-all duration-300 ${!isScrolled ? 'px-8 py-5' : 'px-6 py-3'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/" className={`logo-link transition-all duration-300 ${!isScrolled ? 'text-2xl' : 'text-xl'}`} style={{ color: theme === "dark" ? '#fff' : '#000' }}>
                  MoAds
                </Link>
                <div className="hidden md:flex items-center gap-6">
                  <Link href="/" className="nav-link" style={{ color: theme === "dark" ? '#fff' : '#000' }}>
                    Home
                  </Link>
                  <Link href="/features" className="nav-link" style={{ color: theme === "dark" ? '#fff' : '#000' }}>
                    Features
                  </Link>
                  <Link href="/dashboard" className="nav-link" style={{ color: theme === "dark" ? '#fff' : '#000' }}>
                    Dashboard
                  </Link>
                  <Link href="/pricing" className="nav-link" style={{ color: theme === "dark" ? '#fff' : '#000' }}>
                    Pricing
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className={`group relative bg-blue-600 rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg hover:scale-105 active:scale-95 ${!isScrolled ? 'px-6 py-2.5 text-base' : 'px-5 py-2 text-sm'}`}
                  style={{ color: '#ffffff' }}
                >
                  <span className="relative z-10 flex items-center gap-2" style={{ color: '#ffffff' }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>

                <Link
                  href="/moads/create"
                  className={`group relative bg-white text-black border-2 border-gray-200 rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg hover:scale-105 active:scale-95 hover:border-blue-600 ${!isScrolled ? 'px-6 py-2.5 text-base' : 'px-5 py-2 text-sm'}`}
                >
                  <span className="relative z-10">Create Ad</span>
                  <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Floating Theme Toggle Switch */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleTheme}
          className="bg-card/90 backdrop-blur-lg border-[0.5px] border-border/50 rounded-full shadow-lg px-1.5 py-1.5 flex items-center gap-0.5 transition-all hover:shadow-xl"
          aria-label="Toggle theme"
        >
          {/* Light Mode Side */}
          <div
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
              theme === "light"
                ? "bg-primary"
                : "bg-transparent opacity-40"
            }`}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-colors ${
                theme === "light" ? "stroke-white" : "stroke-foreground"
              }`}
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" strokeLinecap="round" />
              <line x1="12" y1="1" x2="12" y2="3" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round" />
              <line x1="1" y1="12" x2="3" y2="12" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round" />
            </svg>
          </div>

          {/* Dark Mode Side */}
          <div
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-primary"
                : "bg-transparent opacity-40"
            }`}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-colors ${
                theme === "dark" ? "stroke-white" : "stroke-foreground"
              }`}
              strokeWidth="2"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}
