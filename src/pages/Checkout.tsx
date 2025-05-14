
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { formatPrice } from "../lib/data";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: user?.username || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "creditCard"
  });
  
  const [loading, setLoading] = useState(false);

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your booking cart is empty</h1>
            <p className="mb-6">Please add some cars to your bookings before checkout.</p>
            <button 
              onClick={() => navigate("/")}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Browse Cars
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ["name", "email", "phone", "address", "city", "state", "pincode"];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // For credit/debit card, redirect to payment details page
    if (formData.paymentMethod === "creditCard") {
      navigate("/payment-details");
      return;
    }
    
    // For other payment methods, process directly
    setTimeout(() => {
      toast({
        title: "Booking Successful!",
        description: "Your booking has been confirmed. Thank you for choosing NK Resale Zone!",
      });
      clearCart();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Delivery and Payment Details */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        value="creditCard"
                        checked={formData.paymentMethod === "creditCard"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="creditCard">Credit/Debit Card</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === "upi"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="upi">UPI</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="netBanking"
                        name="paymentMethod"
                        value="netBanking"
                        checked={formData.paymentMethod === "netBanking"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="netBanking">Net Banking</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="emi"
                        name="paymentMethod"
                        value="emi"
                        checked={formData.paymentMethod === "emi"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="emi">EMI</label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Processing..." : "Complete Booking"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="max-h-64 overflow-auto mb-4 space-y-3">
                {items.map((item) => (
                  <div key={item.car.id} className="flex justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">{item.car.brand} {item.car.name}</p>
                      <p className="text-sm text-gray-600">{item.car.model} Model</p>
                    </div>
                    <p className="font-semibold">{formatPrice(item.car.price)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Booking Amount:</span>
                  <span className="font-semibold">{formatPrice(getTotal())}</span>
                </div>
                
                <div className="flex justify-between mt-2">
                  <span className="font-medium">GST (18%):</span>
                  <span className="font-semibold">{formatPrice(getTotal() * 0.18)}</span>
                </div>
                
                <div className="flex justify-between mt-2 text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-primary">{formatPrice(getTotal() * 1.18)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
