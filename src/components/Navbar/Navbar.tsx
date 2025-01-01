"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
      <div className="flex flex-col justify-between gap-4">
        <Link
          href="projects"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/projects" ? "text-green-500" : "text-orange-600"
          }`}>
          Projects
        </Link>
        <Link
          href="tasks"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/tasks" ? "text-green-500" : "text-orange-600"
          }`}>
          Tasks
        </Link>
        <Link
          href="workLogs"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/workLogs" ? "text-green-500" : "text-orange-600"
          }`}>
          Work Logs
        </Link>
        <Link
          href="performances"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/performances" ? "text-green-500" : "text-orange-600"
          }`}>
          Performances
        </Link>
        <Link
          href="settings"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/settings" ? "text-green-500" : "text-orange-600"
          }`}>
          Settings
        </Link>
        <Link
          href="login"
          className={`font-bold hover:text-pink-400 transition-all duration-300 transform hover:scale-105 ${
            pathname === "/login" ? "text-green-500" : "text-orange-600"
          }`}>
          Log in
        </Link>
      </div>
  );
}
