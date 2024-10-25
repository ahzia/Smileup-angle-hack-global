"use client";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import PlansCategories from "./PlansCategories";
import { useSelector } from "react-redux"; // Import useSelector hook
import { RootState } from "@/redux/store"; // Import RootState type

export default function Plans() {
  // Access the user and plans data from the Redux store
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const categories = useSelector((state: RootState) => state.plans.categories);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto pt-5 pb-14">
      {/* an image like a cover photo */}
      <MyProfile user={user} />
      <SearchBar onSearch={handleSearch} />
      <PlansCategories categories={categories} />
    </div>
  );
}
