import React from "react";
import Link from "next/link";
import { SiNginxproxymanager } from "react-icons/si";

export default function Topbar() {
  return (
    <div className="w-full">
      <header className="flex flex-row justify-between p-4 bg-gray-800 shadow-lg">
        <div className="flex flex-row gap-4">
          <SiNginxproxymanager className="text-4xl text-green-400" />
          <p className="text-2xl font-serif font-thin text-white translate-y-0.5">
            tx32 Project Management
          </p>
        </div>
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
  );
}
