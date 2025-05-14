
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FilterBoxProps {
  onFilterChange: (filters: FilterState) => void;
  brands: string[];
}

export interface FilterState {
  searchTerm: string;
  selectedBrand: string;
  priceRange: [number, number];
}

const FilterBox: React.FC<FilterBoxProps> = ({ onFilterChange, brands }) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedBrand: "",
    priceRange: [400000, 10000000] // 4 lakhs to 1 crore
  });

  const handleChange = (field: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const formatPriceLabel = (value: number) => {
    if (value >= 10000000) {
      return `₹${value / 10000000} Cr`;
    } else if (value >= 100000) {
      return `₹${value / 100000} L`;
    } else {
      return `₹${value}`;
    }
  };

  return (
    <div className="filter-box bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-4 text-primary">Filter Cars</h3>
      
      <div className="mb-4">
        <Label htmlFor="search" className="mb-2 block">Search</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search cars..."
          value={filters.searchTerm}
          onChange={(e) => handleChange("searchTerm", e.target.value)}
          className="w-full"
        />
      </div>
      
      <div className="mb-4">
        <Label htmlFor="brand" className="mb-2 block">Brand</Label>
        <select
          id="brand"
          value={filters.selectedBrand}
          onChange={(e) => handleChange("selectedBrand", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <Label className="mb-2 block">Price Range</Label>
        <div className="px-2">
          <Slider
            defaultValue={filters.priceRange}
            min={400000}
            max={10000000}
            step={100000}
            onValueChange={(value) => handleChange("priceRange", value)}
            className="my-6"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>{formatPriceLabel(filters.priceRange[0])}</span>
          <span>{formatPriceLabel(filters.priceRange[1])}</span>
        </div>
      </div>
      
      <button
        onClick={() => {
          setFilters({
            searchTerm: "",
            selectedBrand: "",
            priceRange: [400000, 10000000]
          });
          onFilterChange({
            searchTerm: "",
            selectedBrand: "",
            priceRange: [400000, 10000000]
          });
        }}
        className="w-full bg-secondary text-primary py-2 rounded-md hover:bg-secondary/90 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBox;
