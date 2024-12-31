import { useState, useEffect } from "react";

export const SearchBar = ({
  onSearch,
  fetchSuggestions,
}: {
  onSearch: (query: string) => void;
  fetchSuggestions: (query: string) => Promise<string[]>;
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const loadSuggestions = async () => {
      if (query.trim().length > 1) {
        try {
          const fetchedSuggestions = await fetchSuggestions(query.trim());
          setSuggestions(fetchedSuggestions);
          setShowSuggestions(true);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(loadSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, fetchSuggestions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      setShowSuggestions(false);
      onSearch(query.trim());
      setQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery("");
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  return (
    <div className="relative">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 border border-gray-300 rounded"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onFocus={() => setShowSuggestions(true)}
      />
      {/* Search button */}
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded shadow-md z-10 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
