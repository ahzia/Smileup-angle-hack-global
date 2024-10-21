import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  isLoading = false,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center border-b-2 border-[#6e34a7] py-2 mb-4 rounded-md shadow-md">
      <input
        className="appearance-none bg-[#262450] w-full text-white placeholder-gray-500 mr-3 px-3 py-3 leading-tight focus:outline-none rounded-full"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        disabled={isLoading}
      />
      <button
        className={`flex-shrink-0 bg-[#6e34a7] hover:bg-[#532586] border-none text-sm text-white py-3 px-4 rounded-full transition duration-300 ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
        type="button"
        onClick={handleSearch}
        disabled={isLoading}
      >
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
