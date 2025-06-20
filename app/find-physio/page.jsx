"use client";

import { useState } from "react";
import FilterBar from "./components/FilterBar";
import PhysioGrid from "./components/PhysioGrid";
import StatsSection from "./components/StatsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function FindPhysioPage() {
  const [filters, setFilters] = useState({
    location: "",
    specializations: [],
    visitPreference: "",
    pricing: "",
    rating: "",
    experience: "",
  });

  return (
    <div>
      <Header />
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {/* Filter Bar */}
        <FilterBar filters={filters} setFilters={setFilters} />

        {/* Physio Grid */}
        <div className="mt-8">
          <PhysioGrid filters={filters} />
        </div>

        {/* Stats Section */}
        <StatsSection />
      </div>
    </main>
      <Footer />
    </div>

  );
}
