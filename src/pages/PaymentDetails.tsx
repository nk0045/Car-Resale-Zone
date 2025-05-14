
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length > 2) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Limit CVV to 3 digits
    if (name === "cvv") {
      const formatted = value.replace(/\D/g, "").slice(0, 3);
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid 16-digit card number",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.expiryDate.length !== 5) {
      toast({
        title: "Invalid Expiry Date",
        description: "Please enter a valid expiry date (MM/YY)",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.cvv.length !== 3) {
      toast({
        title: "Invalid CVV",
        description: "Please enter a valid 3-digit CVV code",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Your booking has been confirmed. Thank you for choosing NK Resale Zone!",
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Card Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  placeholder="John Smith"
                  value={formData.cardName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    name="cvv"
                    type="password"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
            
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 mt-6"
              >
                {loading ? "Processing Payment..." : "Confirm Payment"}
              </button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-gray-500">
            Your card information is secure and encrypted
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PaymentDetails;
