"use client";

import React from "react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { theme } = useTheme();

  const switchToRegister = () => setIsLoginForm(false);
  const switchToLogin = () => setIsLoginForm(true);

  return (
    <div className="min-h-screen bg-white dark:bg-[#262335] flex items-center justify-center transition-colors duration-300">
      <div className="w-full max-w-md px-4">
        <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-8 bg-white dark:bg-[#262335] shadow-lg">
          {isLoginForm ? (
          <>
            {/* BLUR TEXT Heading */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <img
                  src={theme === "light" ? "icons/blur-dark.png" : "icons/blur.png"}
                  alt="logo"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Anonymous Social Platform
              </p>
            </div>

            {/* Credentials Section */}
            <div className="mb-6">
              <p className="text-center text-green-600 dark:text-green-400 font-medium">
                Enter Your Credentials To Login
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Anonymous E-mail
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-0"
                placeholder="Generated email will appear here"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Anonymous Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-0"
                placeholder="Generated password will appear here"
              />
            </div>

            {/* Enter BlurText Button */}
            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-4"
            >
              Enter the BlurText
            </button>

            {/* Create Account Link */}
            <p
              onClick={switchToRegister}
              className="text-center text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 cursor-pointer transition-colors duration-300"
            >
              Not a Member, Create New Account
            </p>
          </>
        ) : (
          // REGISTRATION FORM JSX HERE
          <>
            {/* BLUR TEXT Heading */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <img
                  src={theme === "light" ? "icons/blur-dark.png" : "icons/blur.png"}
                  alt="logo"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Anonymous Social Platform
              </p>
            </div>

            {/* Registration Section */}
            <div className="mb-6">
              <p className="text-center text-green-600 dark:text-green-400 font-medium">
                Create Your Anonymous Account
              </p>
            </div>

            {/* Generate Anonymous Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Anonymous E-mail
              </label>
              <input
                type="email"
                disabled
                className="w-full px-4 py-3 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-0 cursor-not-allowed"
                placeholder="Generated email will appear here"
                readOnly
              />
            </div>

            {/* Generate Anonymous Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Anonymous Password
              </label>
              <input
                type="password"
                disabled
                className="w-full px-4 py-3 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-0 cursor-not-allowed"
                placeholder="Generated password will appear here"
                readOnly
              />
            </div>

            {/* Create Account Button */}
            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-4"
            >
              Create Anonymous Account
            </button>

            {/* Back to Login Link */}
            <p
              onClick={switchToLogin}
              className="text-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              Already have an account? Login here
            </p>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default Login;