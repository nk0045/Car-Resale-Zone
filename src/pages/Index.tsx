
import React, { useState, useEffect } from "react";
import CarCard from "@/components/CarCard";
import FilterBox, { FilterState } from "@/components/FilterBox";
import BookingBox from "@/components/BookingBox";
import { carData, Car } from "@/lib/data";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const locationFilter = searchParams.get("location");
  
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  
  // Extract unique brands for filter dropdown
  const brands = Array.from(new Set(carData.map(car => car.brand)));

  useEffect(() => {
    // Initialize with cars, possibly filtered by location from URL
    let initialCars = carData;
    if (locationFilter) {
      initialCars = initialCars.filter(car => car.location === locationFilter);
    }
    
    setCars(initialCars);
    setFilteredCars(initialCars);
  }, [locationFilter]);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = cars;
    
    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        car => 
          car.brand.toLowerCase().includes(term) || 
          car.name.toLowerCase().includes(term) ||
          car.model.toLowerCase().includes(term)
      );
    }
    
    // Filter by brand
    if (filters.selectedBrand) {
      filtered = filtered.filter(car => car.brand === filters.selectedBrand);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      car => car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    
    setFilteredCars(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left sidebar with filters - sticky on desktop */}
        <div className="w-full md:w-1/6 mb-6 md:mb-0">
          <FilterBox onFilterChange={handleFilterChange} brands={brands} />
        </div>
        
        {/* Main content */}
        <div className="w-full md:flex-1">
          <h1 className="text-2xl font-bold mb-6">
            {locationFilter ? `Available Cars in ${locationFilter}` : "Available Cars"}
          </h1>
          
          {filteredCars.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No cars found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
        
        {/* Right sidebar with bookings - sticky on desktop */}
        <div className="w-full md:w-1/6 mt-6 md:mt-0">
          <BookingBox />
        </div>
      </div>
    </div>
  );
};

export default Index;
