import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-baseline bg-slate-900">
      <header className="bg-blue-600 text-white py-4 w-full">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">The header of the SmileUp</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">{children}</main>

      <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SmileUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}