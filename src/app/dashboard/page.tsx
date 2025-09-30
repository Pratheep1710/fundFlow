"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [loading, user, router]);

  // If loading, show a loading indicator
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#1791cf] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-background-dark border-b border-background-dark/10 dark:border-background-light/10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-background-dark dark:text-background-light">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-background-dark/60 dark:text-background-light/60">
              {user?.email}
            </span>
            <button
              onClick={() => router.push("/")}
              className="text-sm px-4 py-2 rounded-md bg-[#1791cf] text-white hover:bg-[#1580b7] transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-background-dark dark:text-background-light">
                Welcome to your Dashboard
              </h2>
              <p className="mt-2 text-background-dark/70 dark:text-background-light/70">
                Manage your chit funds efficiently with FundFlow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-background-dark dark:text-background-light">
                    Active Funds
                  </h3>
                  <p className="text-3xl font-bold text-[#1791cf] mt-2">0</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-background-dark dark:text-background-light">
                    Clients
                  </h3>
                  <p className="text-3xl font-bold text-[#1791cf] mt-2">0</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-background-dark dark:text-background-light">
                    Pending Payments
                  </h3>
                  <p className="text-3xl font-bold text-[#1791cf] mt-2">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
