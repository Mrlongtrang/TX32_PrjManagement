"use client";
import React from "react";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Product</h1>
        <p className="text-lg mb-6">The best solution for your needs.</p>
        <Link href="/login">
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-600">
            Sign Up Now
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Benefit of using this feature</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Another amazing feature</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Improve your workflow</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
