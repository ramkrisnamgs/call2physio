"use client";

export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <label htmlFor="sort" className="font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border px-3 py-1 rounded-md focus:outline-none"
      >
        <option value="relevance">Relevance</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="experience">Experience</option>
      </select>
    </div>
  );
}
