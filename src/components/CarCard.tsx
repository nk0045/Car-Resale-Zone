
import React from "react";
import { Link } from "react-router-dom";
import { Car, formatPrice } from "../lib/data";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { AspectRatio } from "./ui/aspect-ratio";

type CarCardProps = {
  car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleBookNow = () => {
    addToCart(car);
    toast({
      title: "Car Added to Bookings",
      description: `${car.brand} ${car.name} has been added to your bookings.`,
      duration: 3000,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.01] animate-fadeIn card-hover">
      <div className="overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.name}`}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">
          {car.brand} {car.name}
        </h3>
        <p className="text-gray-600 mb-2">{car.model} Model</p>
        
        <div className="flex flex-col space-y-1 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold">{formatPrice(car.price)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Years Used:</span>
            <span>{car.yearsUsed} {car.yearsUsed > 1 ? 'years' : 'year'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Location:</span>
            <span>{car.location}</span>
          </div>
        </div>
        
        <div className="flex space-x-2 mt-2">
          <button 
            onClick={handleBookNow}
            className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Book Now
          </button>
          <Link 
            to={`/car/${car.id}`}
            className="flex-1 bg-secondary text-primary py-2 rounded-md text-center hover:bg-secondary/90 transition-colors"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
