
import React from "react";
import { useParams, Link } from "react-router-dom";
import { carData, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Find the car with the matching ID
  const car = carData.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
        <p className="mb-6">The car you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back to all cars
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    addToCart(car);
    toast({
      title: "Car Added to Bookings",
      description: `${car.brand} ${car.name} has been added to your bookings.`,
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to all cars
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main car image - Fixed height with object-contain to avoid cropping */}
        <div className="h-[400px] bg-gray-50">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.name}`}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Car information */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                {car.brand} {car.name}
              </h1>
              <p className="text-xl text-gray-700">{car.model} Model</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-2xl font-bold text-primary">
                {formatPrice(car.price)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-3 text-primary">Car Specifications</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Years Used:</span>
                  <span>{car.yearsUsed} {car.yearsUsed > 1 ? 'years' : 'year'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kilometers:</span>
                  <span>{car.kilometers.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage:</span>
                  <span>{car.mileage} kmpl</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fuel Type:</span>
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transmission:</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Previous Owners:</span>
                  <span>{car.owners}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span>{car.location}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-3 text-primary">Description</h2>
              <p className="text-gray-700">{car.description}</p>
              
              <div className="mt-6 space-x-4">
                <button 
                  onClick={handleBookNow}
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </button>
                <Link 
                  to="/emi-calculator"
                  className="bg-secondary text-primary px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Calculate EMI
                </Link>
              </div>
            </div>
          </div>
          
          {/* Additional images - Fixed height with object-contain to avoid cropping */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-primary">More Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {car.additionalImages.map((img, index) => (
                <div key={index} className="h-[250px] rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={img}
                    alt={`${car.brand} ${car.name} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
