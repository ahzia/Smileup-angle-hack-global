"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome, MdCardGiftcard, MdMail } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";

export default function Navbar() {
  const pathName = usePathname();

  const isActive = (path: string) => pathName === path;

  return (
    <nav className="flex justify-center items-center text-white shadow-lg font-sans bg-gradient-to-r bg-[#262450] z-30 fixed bottom-0 w-full px-2 py-2.5 rounded-t-3xl border-t-2 border-[#6e34a7]">
      <ul className="w-full flex justify-around items-center text-lg relative">
        <li className="relative flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <div className="transition-transform duration-300">
              <MdHome
                className={`text-5xl ${
                  isActive("/") ? "text-[#cbb1e6]" : "text-white"
                } transition-colors duration-300`}
              />
            </div>
          </Link>
        </li>

        <li className="relative flex flex-col items-center">
          <Link
            href="/rewards"
            className="flex flex-col items-center space-y-1"
          >
            <div className="transition-transform duration-300">
              <MdCardGiftcard
                className={`text-5xl ${
                  isActive("/rewards") ? "text-[#cbb1e6]" : "text-white"
                } transition-colors duration-300`}
              />
            </div>
          </Link>
        </li>

        <li className="relative flex flex-col items-center">
          <Link
            href="/messages"
            className="flex flex-col items-center space-y-1"
          >
            <div className="transition-transform duration-300">
              <MdMail
                className={`text-5xl ${
                  isActive("/messages") ? "text-[#cbb1e6]" : "text-white"
                } transition-colors duration-300`}
              />
            </div>
          </Link>
        </li>

        <li className="relative flex flex-col items-center">
          <Link
            href="/missions"
            className="flex flex-col items-center space-y-1"
          >
            <div className="transition-transform duration-300">
              <TbDeviceGamepad2
                className={`text-5xl ${
                  isActive("/missions") ? "text-[#cbb1e6]" : "text-white"
                } transition-colors duration-300`}
              />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
