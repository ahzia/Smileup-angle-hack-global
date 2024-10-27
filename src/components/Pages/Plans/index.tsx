"use client";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import PlansCategories from "./PlansCategories";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Plans() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const categories = useSelector((state: RootState) => state.plans.categories);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto pb-14">
      {/* Profile and SearchBar Section with background */}
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

      {/* Plans List Section */}
      <div className="px-4 pt-5">
        <PlansCategories categories={categories} />
      </div>
    </div>
  );
}
