import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-16 text-black shadow-sm font-mono bg-teal-500 z-30 fixed bottom-0 w-full">
      <ul className="w-full">
        <nav className="flex justify-between items-center w-full text-4xl p-6">
          <Link href="/">🏠 Plans</Link>
          <Link href="/about">😁 Smiles</Link>
        </nav>
      </ul>
    </nav>
  );
}
