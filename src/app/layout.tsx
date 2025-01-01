import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <header className="flex flex-row justify-between p-4 bg-gray-800">
            <h1 className="text-2xl font-bold text-white">
              Project Management
            </h1>
            <div className="flex flex-row gap-4">
              <Link
                href="login"
                className="font-bold text-white hover:text-green-400">
                Log in
              </Link>
              <Link
                href="signup"
                className="font-bold text-white hover:text-green-400">
                Sign up
              </Link>
            </div>
          </header>
        </div>
        <div className="flex flex-row justify-between gap-4 p-2 w-full">
          <div className="flex flex-col justify-center w-1/6 p-5 border-2 border-gray-500 gap-4 rounded-md">
            <Navbar />
          </div>
          <main className="w-5/6 pl-10 border-2 border-gray-400 rounded-md">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
