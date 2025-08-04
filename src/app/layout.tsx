"use client";

import React, { useState, useEffect } from "react";
import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TranslationProvider } from "@/contexts/TranslationContext";

//export const metadata = {
//title: "BLUR TEXT",
//description: "Anonymous app.",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(children);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInitialLoading, setShowInitialLoading] = useState(true);
  const [user, setUser] = useState<{
    username: string;
    id: string;
  } | null>(null);

  // Check if user is logged in when component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const userData = await response.json();
        setIsLoggedIn(true);
        setUser({
          username: userData.user.username,
          id: userData.user.id,
        });
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  // Initial loading effect - shows before login
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowInitialLoading(false);
    }, 2000);

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  // Loading effect - only run after login
  useEffect(() => {
    if (!isLoggedIn) return; // Don't run loading effect if not logged in

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isLoggedIn) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isLoggedIn]);

  const handleMenuClick = (content: React.ReactNode) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveContent(content);
      setIsLoading(false);
    }, 300);
  };

  const handleLogin = (userData?: { username: string; id: string }) => {
    setIsLoggedIn(true);
    if (userData) {
      // Set user data directly from login response
      setUser(userData);
    } else {
      // Fallback to checking auth status
      setTimeout(() => {
        checkAuthStatus();
      }, 100);
    }
    setIsLoading(true); // Reset loading state when logging in
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Logout successful");
        setIsLoggedIn(false);
        setUser(null);
      } else {
        console.error("Logout failed");
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  // Show initial loading screen first
  if (showInitialLoading) {
    return (
      <html lang="en">
        <head>
          <title>BlurText - Anonymous Social Platform</title>
          <meta
            name="description"
            content="Anonymous social interaction through unique credentials. Share thoughts freely without revealing your identity."
          />
          <link rel="icon" href="icons/icone.png" />
        </head>
        <body>
          <ThemeProvider>
            <TranslationProvider>
              <Loading />
            </TranslationProvider>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return (
      <html lang="en">
        <head>
          <title>BlurText - Anonymous Social Platform</title>
          <meta
            name="description"
            content="Anonymous social interaction through unique credentials. Share thoughts freely without revealing your identity."
          />
          <link rel="icon" href="icons/icone.png" />
        </head>
        <body>
          <ThemeProvider>
            <TranslationProvider>
              <Login onLogin={handleLogin} />
            </TranslationProvider>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  if (isLoading) {
    return (
      <html lang="en">
        <head>
          <title>BlurText - Anonymous Social Platform</title>
          <meta
            name="description"
            content="Anonymous social interaction through unique credentials. Share thoughts freely without revealing your identity."
          />
          <link rel="icon" href="icons/icone.png" />
        </head>
        <body>
          <ThemeProvider>
            <TranslationProvider>
              <Loading />
            </TranslationProvider>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  // Show main app
  return (
    <html lang="en">
      <head>
        <title>BlurText - Anonymous Social Platform</title>
        <meta
          name="description"
          content="Anonymous social interaction through unique credentials. Share thoughts freely without revealing your identity."
        />
        <link rel="icon" href="icons/icone.png" />
      </head>
      <body>
        <ThemeProvider>
          <TranslationProvider>
            <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between bg-white dark:bg-[#262335] text-black dark:text-[#ededed] transition-colors duration-300">
              <div className="px-3 xsm:px-4 xxl:px-8">
                <LeftBar
                  onMenuClick={handleMenuClick}
                  onLogout={handleLogout}
                  user={user}
                />
              </div>
              <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-200 dark:border-borderGray">
                {activeContent}
              </div>
              <div className="hidden ml-4 md:ml-8 h-screen lg:flex flex-1">
                <RightBar onMenuClick={handleMenuClick} />
              </div>
            </div>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
