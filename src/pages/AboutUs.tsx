
import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">About NK Resale Zone</h1>
          <p className="text-xl text-gray-600">Preowned, But Prime</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="h-80 overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/top-view-car-dealership-showroom-with-customers-salesmen-modern-glass-building-with-brand-new-cars-inside_116317-22001.jpg"
              alt="NK Resale Zone Showroom"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="mb-4 text-gray-700">
              Founded in 2010, NK Resale Zone has grown from a small dealership to one of the most trusted names in pre-owned luxury and premium cars across Tamil Nadu. With showrooms in Coimbatore, Salem, Madurai, and Chennai, we serve customers all over South India with our curated collection of quality pre-owned vehicles.
            </p>
            <p className="mb-4 text-gray-700">
              Our mission is simple: to provide high-quality pre-owned vehicles at transparent prices with exceptional service. We believe that buying a pre-owned car should be an exciting and stress-free experience, not a compromise.
            </p>
            <p className="text-gray-700">
              Every car in our inventory goes through a rigorous 150-point inspection process, complete documentation verification, and professional detailing before it reaches our showroom floor. This meticulous approach has earned us the trust of over 10,000 satisfied customers and counting.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Certified pre-owned vehicles with warranty</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Transparent pricing with no hidden charges</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Comprehensive 150-point quality inspection</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Complete vehicle history and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Flexible financing options with competitive rates</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>After-sales service and support</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Our Services</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Premium pre-owned car sales</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Car exchange & trade-in programs</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Competitive financing & EMI options</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Extended warranty packages</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Vehicle insurance solutions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary rounded-full p-1 mr-2 mt-1"></span>
                <span>Maintenance & service plans</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Visit Our Showrooms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-md p-4">
              <h3 className="font-semibold mb-2">Coimbatore</h3>
              <p className="text-sm text-gray-700">
                123 Avinashi Road<br />
                R.S. Puram<br />
                Coimbatore - 641002<br />
                Tamil Nadu
              </p>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-semibold mb-2">Salem</h3>
              <p className="text-sm text-gray-700">
                456 Omalur Main Road<br />
                Five Roads<br />
                Salem - 636009<br />
                Tamil Nadu
              </p>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-semibold mb-2">Madurai</h3>
              <p className="text-sm text-gray-700">
                789 Bypass Road<br />
                K.K. Nagar<br />
                Madurai - 625020<br />
                Tamil Nadu
              </p>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-semibold mb-2">Chennai</h3>
              <p className="text-sm text-gray-700">
                321 Mount Road<br />
                T. Nagar<br />
                Chennai - 600017<br />
                Tamil Nadu
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> info@nkresalezone.com
          </p>
          <p className="mb-6">
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
          <p className="text-gray-700">
            Business Hours: Monday to Saturday, 9:30 AM to 7:30 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
