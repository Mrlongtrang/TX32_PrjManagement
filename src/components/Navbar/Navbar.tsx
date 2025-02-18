"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setShowNavbar(false);  // Hide navbar when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="h-screen flex flex-col items-start p-4 space-y-6">
      {showNavbar && (
        <div ref={navbarRef} className="flex flex-col justify-between gap-4">
          <Link
            href="projects"
            className={`font-medium p-2 rounded-sm hover:text-slate-400 transition-all duration-300 transform hover:scale-105 ${
              pathname === "/projects" ? "text-slate-700 bg-slate-200 shadow-md" : "text-slate-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="tasks"
            className={`font-medium p-2 rounded-sm hover:text-slate-400 transition-all duration-300 transform hover:scale-105 ${
              pathname === "/tasks" ? "text-slate-700 bg-slate-200 shadow-md" : "text-slate-400"
            }`}
          >
            Tasks
          </Link>
          <Link
            href="workLogs"
            className={`font-medium p-2 rounded-sm hover:text-slate-400 transition-all duration-300 transform hover:scale-105 ${
              pathname === "/workLogs" ? "text-slate-700 bg-slate-200 shadow-md" : "text-slate-400"
            }`}
          >
            Work Logs
          </Link>
          <Link
            href="performances"
            className={`font-medium p-2 rounded-sm hover:text-slate-400 transition-all duration-300 transform hover:scale-105 ${
              pathname === "/performances" ? "text-slate-700 bg-slate-200 shadow-md" : "text-slate-400"
            }`}
          >
            Performances
          </Link>
          <Link
            href="settings"
            className={`font-medium p-2 rounded-sm hover:text-slate-400 transition-all duration-300 transform hover:scale-105 ${
              pathname === "/settings" ? "text-slate-700 bg-slate-200 shadow-md" : "text-slate-400"
            }`}
          >
            Settings
          </Link>
        </div>
      )}
    </div>
  );
}

