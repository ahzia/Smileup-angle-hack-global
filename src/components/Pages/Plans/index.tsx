"use client";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import PlansCategories from "./PlansCategories";
import { data } from "../../../../lib/plans";
import { userData } from "../../../../lib/user";
import { useState } from "react";

export default function Plans() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const [user, setUser] = useState(userData);

  return (
    <div className="container mx-auto pt-5 pb-14">
      {/* an image like a cover photo */}
      <MyProfile user={user} />
      <SearchBar onSearch={handleSearch} />
      <PlansCategories categories={data.categories} user={user} setUser={setUser} />
    </div>
  );
}
