import Image from "next/image"
import Layout from "@/components/common/Layout";
import Profile from "@/components/Pages/Profile";
import React from 'react';

export default function ProfilePage() {
  return (
    <Layout>
      <Profile />
      {/* New section for avatar */}
      <div className="flex flex-col items-center"> {/* Centering the avatar and text */}
        <Image 
          src="/avatars/avatar1.avif" // Assuming the image is named avatar1.png in the public folder
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full object-cover" // Tailwind classes for size and circular shape
        />
        <div className="flex items-center"> {/* Flex container for name and age */}
          <h2 className="text-textPrimary mr-2">Ishimwe</h2> {/* Name in white */}
          <span className="text-textSecondary">22</span> {/* Age in secondary color */}
        </div>
      </div>
      {/* New section for bio */}
      <p className="text-textPrimary">Bio: A brief description about John Doe.</p>
      {/* New section for characteristics */}
      <div className="flex overflow-x-auto whitespace-nowrap text-white space-x-2"> {/* Flex container for characteristics */}
        <span className="bg-card text-white rounded-full px-2 py-1">Dancer</span> {/* Characteristic styled as an oval */}
        <span className="bg-card text-white rounded-full px-2 py-1">Open-minded</span>
        <span className="bg-card text-white rounded-full px-2 py-1">Adventurous</span>
        <span className="bg-card text-white rounded-full px-2 py-1">Creative</span>
        <span className="bg-card text-white rounded-full px-2 py-1">Empathetic</span>
      </div>
      {/* New section for daily quests */}
      <div className="text-textPrimary">
        <h3>Daily Quests</h3>
        <ul>
          <li>Challenge 1: Complete a workout</li>
          <li>Challenge 2: Read a chapter of a book</li>
        </ul>
      </div>
      {/* New section for weekly challenges */}
      <div className="text-textPrimary">
        <h3>Weekly Challenges</h3>
        <ul>
          <li>Challenge 1: Try a new recipe</li>
          <li>Challenge 2: Go for a hike</li>
        </ul>
      </div>
    </Layout>
  );
}
