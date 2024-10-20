import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-baseline bg-slate-900">
      <header>
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>

      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
}
