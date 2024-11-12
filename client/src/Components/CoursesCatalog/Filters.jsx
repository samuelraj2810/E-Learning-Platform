import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";

const Filters = ({
  searchTerm = "",
  setSearchTerm,
  category = "",
  setCategory,
  instructor = "",
  setInstructor,
  priceRange = [0, 1000],
  setPriceRange,
  ratingRange = [0, 5],
  setRatingRange,
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [localRatingRange, setLocalRatingRange] = useState(ratingRange);

  useEffect(() => {
    setSearchTerm(localSearchTerm);
    setCategory(category);
    setInstructor(instructor);
    setPriceRange(priceRange);
    setRatingRange(ratingRange);
  }, [
    localSearchTerm,
    category,
    instructor,
    priceRange,
    ratingRange,
    setSearchTerm,
    setCategory,
    setInstructor,
    setPriceRange,
    setRatingRange,
  ]);

  const debounceSearch = useCallback(
    debounce((value) => setSearchTerm(value), 500),
    [setSearchTerm]
  );

  const handleSearchChange = (e) => {
    setLocalSearchTerm(e.target.value);
    debounceSearch(e.target.value); 
  };

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...localPriceRange];
    newRange[index] = Number(e.target.value);
    if (newRange[0] > newRange[1]) newRange[1] = newRange[0]; 
    setLocalPriceRange(newRange);
    setPriceRange(newRange);
  };

  const handleRatingChange = (e, index) => {
    const newRange = [...localRatingRange];
    newRange[index] = Math.min(Math.max(Number(e.target.value), 0), 5);
    if (newRange[0] > newRange[1]) newRange[1] = newRange[0]; 
    setLocalRatingRange(newRange);
    setRatingRange(newRange);
  };

  const resetFilters = () => {
    setLocalSearchTerm("");
    setCategory("");
    setInstructor("");
    setLocalPriceRange([0, 1000]);
    setLocalRatingRange([0, 5]);
    setSearchTerm("");
    setCategory("");
    setInstructor("");
    setPriceRange([0, 1000]);
    setRatingRange([0, 5]);
  };

  return (
    <div className="md:w-1/4 p-6 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>

      <input
        type="text"
        placeholder="Search by course title"
        value={localSearchTerm}
        onChange={handleSearchChange}
        className="p-3 border rounded-lg w-full mb-4 shadow-sm"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 border rounded-lg w-full mb-4 shadow-sm"
      >
        <option value="">All Categories</option>
        <option value="Frontend Development">Frontend Development</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Programming">Programming</option>
      </select>

      <select
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        className="p-3 border rounded-lg w-full mb-4 shadow-sm"
      >
        <option value="">All Instructors</option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Smith">Jane Smith</option>
        <option value="Alex Brown">Alex Brown</option>
        <option value="Emily Davis">Emily Davis</option>
        <option value="Michael Clark">Michael Clark</option>
      </select>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Price Range: ₹{localPriceRange[0]} - ₹{localPriceRange[1]}
        </label>
        <div className="flex space-x-4 mt-2">
          <input
            type="number"
            min="0"
            max="1000"
            value={localPriceRange[0]}
            onChange={(e) => handlePriceRangeChange(e, 0)}
            className="w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            min="0"
            max="1000"
            value={localPriceRange[1]}
            onChange={(e) => handlePriceRangeChange(e, 1)}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">
          Rating Range: {localRatingRange[0]} - {localRatingRange[1]}
        </label>
        <div className="flex space-x-4 mt-2">
          <input
            type="number"
            min="0"
            max="5"
            value={localRatingRange[0]}
            onChange={(e) => handleRatingChange(e, 0)}
            className="w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            min="0"
            max="5"
            value={localRatingRange[1]}
            onChange={(e) => handleRatingChange(e, 1)}
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="mt-4 py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600 transition w-full"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
