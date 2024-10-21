"use client";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";

export default function Plans() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Plans</h1>
      <MyProfile />
      <SearchBar onSearch={(query) => console.log(query)} />
    </div>
  );
}
