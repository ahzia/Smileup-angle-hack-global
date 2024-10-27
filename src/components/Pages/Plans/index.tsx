"use client";

import { useState } from "react";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import PlansCategories from "./PlansCategories";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AIChat from "../Messages/AiChat";
import { MdChat } from "react-icons/md";

export default function Plans() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const categories = useSelector((state: RootState) => state.plans.categories);
  const [aiChatOpen, setAiChatOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto pb-14">
      {!aiChatOpen && (
        <>
          <div className="relative profile-background">
            {/* Profile Section */}
            <div className="relative z-10 p-5">
              <MyProfile user={user} />
            </div>
            {/* SearchBar with partial overlay effect */}
            <div className="relative z-10 px-5 -mt-8">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          <div className="px-4 pt-5">
            <PlansCategories categories={categories} />
          </div>
          <div
            onClick={() => setAiChatOpen(true)}
            className="fixed bottom-28 right-5 z-50 p-3 bg-highlight text-white rounded-full shadow-lg hover:bg-highlight-dark focus:outline-none focus:ring-2 focus:ring-highlight"
          >
            <MdChat size={30} />
          </div>
        </>
      )}
      <AIChat aiChatOpen={aiChatOpen} setAiChatOpen={setAiChatOpen} />
    </div>
  );
}
