
import React from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/data";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const BookingBox: React.FC = () => {
  const { items, removeFromCart, getTotal, clearCart } = useCart();
  
  return (
    <div className="filter-box bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-4 text-primary">My Bookings</h3>
      
      {items.length === 0 ? (
        <div className="text-gray-500 text-center py-6">
          No cars booked yet
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-64 overflow-auto mb-4">
            {items.map((item) => (
              <div key={item.car.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex-1">
                  <p className="font-medium">{item.car.brand} {item.car.name}</p>
                  <p className="text-sm text-gray-600">{formatPrice(item.car.price)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.car.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-3 mb-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Link
              to="/checkout"
              className="flex-1 bg-primary text-white py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
            >
              Confirm
            </Link>
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingBox;
