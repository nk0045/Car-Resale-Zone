
import React, { useState, useEffect } from "react";
import { carData, calculateEMI, formatPrice } from "../lib/data";

const EMICalculator = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [carPrice, setCarPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(36); // 3 years in months
  const [emi, setEmi] = useState<number | null>(null);

  const cars = carData.map(car => ({
    id: car.id.toString(),
    name: `${car.brand} ${car.name} (${car.model})`,
    price: car.price
  }));

  // Update car price when selected car changes
  useEffect(() => {
    if (selectedCar) {
      const car = cars.find(c => c.id === selectedCar);
      if (car) {
        setCarPrice(car.price);
        // Set default down payment to 20% of car price
        setDownPayment(Math.round(car.price * 0.2));
      }
    } else {
      setCarPrice(0);
      setDownPayment(0);
    }
    setEmi(null);
  }, [selectedCar]);

  const handleCalculate = () => {
    if (!selectedCar || downPayment >= carPrice) return;
    
    const loanAmount = carPrice - downPayment;
    const calculatedEmi = calculateEMI(loanAmount, interestRate, tenure);
    setEmi(calculatedEmi);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h1 className="text-2xl font-bold text-center">EMI Calculator</h1>
          <p className="text-center opacity-80 mt-1">Plan your car financing</p>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="carSelect">
              Select Car
            </label>
            <select
              id="carSelect"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="">-- Select a car --</option>
              {cars.map(car => (
                <option key={car.id} value={car.id}>
                  {car.name} - {formatPrice(car.price)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="carPrice">
              Car Price
            </label>
            <input
              id="carPrice"
              type="text"
              value={formatPrice(carPrice)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-gray-50"
              readOnly
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="downPayment">
              Down Payment
            </label>
            <input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter down payment"
              min={0}
              max={carPrice}
              disabled={!selectedCar}
            />
            {selectedCar && (
              <p className="text-xs text-gray-500 mt-1">
                {(downPayment / carPrice * 100).toFixed(1)}% of car price
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="interestRate">
              Interest Rate (%)
            </label>
            <input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              step="0.1"
              min="0"
              max="30"
              disabled={!selectedCar}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tenure">
              Loan Tenure (months)
            </label>
            <select
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              disabled={!selectedCar}
            >
              <option value="12">1 Year (12 months)</option>
              <option value="24">2 Years (24 months)</option>
              <option value="36">3 Years (36 months)</option>
              <option value="48">4 Years (48 months)</option>
              <option value="60">5 Years (60 months)</option>
              <option value="72">6 Years (72 months)</option>
              <option value="84">7 Years (84 months)</option>
            </select>
          </div>
          
          <button
            onClick={handleCalculate}
            disabled={!selectedCar || downPayment >= carPrice}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            Calculate EMI
          </button>
          
          {emi !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold text-primary mb-2">EMI Calculation Results</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-medium">{formatPrice(carPrice - downPayment)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span>{tenure} months ({tenure / 12} years)</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span>{interestRate}% per annum</span>
                </div>
                
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-gray-800 font-semibold">Monthly EMI:</span>
                  <span className="text-primary font-bold text-lg">{formatPrice(emi)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount Payable:</span>
                  <span className="font-medium">{formatPrice(emi * tenure)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest Payable:</span>
                  <span className="font-medium">{formatPrice((emi * tenure) - (carPrice - downPayment))}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
