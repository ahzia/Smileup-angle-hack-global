"use client";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import PlansCategories from "./PlansCategories";
import { data } from "../../../../lib/plans";
import { userData } from "../../../../lib/user";

export default function Plans() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto py-8">
      <MyProfile user={userData} />
      <SearchBar onSearch={handleSearch} />
      <PlansCategories categories={data.categories} />
    </div>
  );
}
