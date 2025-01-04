import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs } from "../components/Tabs";

export const Layout = ({
  fetchSuggestions,
}: {
  fetchSuggestions: (query: string, tab: string) => Promise<string[]>;
}) => {
  const [selectedTab, setSelectedTab] = useState("movie");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    navigate("/"); // Redirect to Home
  };

  useEffect(() => {
    setSearchQuery("");

    navigate("/");
  }, [selectedTab]);

  return (
    <div className="min-h-screen w-max-[1280px] m-auto p-10 bg-gray-800">
      <Tabs
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
        handleSearch={handleSearch}
        fetchSuggestions={fetchSuggestions}
      />

      <Outlet
        context={{
          selectedTab,
          searchQuery,
          currentPage,
          setSearchQuery,
          setCurrentPage,
        }}
      />
    </div>
  );
};
