import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-baseline">
      <header>
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>

      <main className="container px-2 py-3">{children}</main>
    </div>
  );
}
