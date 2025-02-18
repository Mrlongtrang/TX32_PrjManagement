"use client";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">{isLogin ? "Log In" : "Sign Up"}</h1>
        
        {isLogin && (
          <div className="flex flex-col space-y-4 mb-4">
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded flex items-center justify-center">
              Continue With Phone Number
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded flex items-center justify-center">
              Continue with Google
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded flex items-center justify-center">
              Continue with Apple
            </button>
          </div>
        )}

        <div className="border-t border-gray-600 my-4" />

        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm">Email or Username</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded font-bold text-white w-full"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {isLogin && (
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <a href="#" className="hover:underline">Forgot password?</a>
            <button
              onClick={() => setIsLogin(false)}
              className="hover:underline"
            >
              New to the site? Sign Up
            </button>
          </div>
        )}

        {!isLogin && (
          <button
            onClick={() => setIsLogin(true)}
            className="mt-4 text-sm text-gray-400 hover:underline"
          >
            Already have an account? Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
