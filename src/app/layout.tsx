import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Link
          href="projects"
          className="font-bold text-orange-600 hover:text-pink-400">
          Projects
        </Link>
        <Link
          href="tasks"
          className="font-bold text-orange-600 hover:text-pink-400">
          Tasks
        </Link>
        <Link
          href="workLogs"
          className="font-bold text-orange-600 hover:text-pink-400">
          Work Logs
        </Link>
        <Link
          href="performances"
          className="font-bold text-orange-600 hover:text-pink-400">
          Performances
        </Link>
        <Link
          href="settings"
          className="font-bold text-orange-600 hover:text-pink-400">
          Settings
        </Link>
        <Link
          href="login"
          className="font-bold text-orange-600 hover:text-pink-400">
          Log in
        </Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
