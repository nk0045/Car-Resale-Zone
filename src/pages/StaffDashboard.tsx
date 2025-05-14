
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { formatPrice } from "../lib/data";

// Sample booking data
const sampleBookings = [
  {
    id: 1,
    carName: "Hyundai Verna",
    modelName: "SX",
    price: 1200000,
    customerName: "Amit Kumar",
    bookingDate: "2023-05-12T10:30:00",
    status: "pending"
  },
  {
    id: 2,
    carName: "Toyota Fortuner",
    modelName: "4x4 AT",
    price: 3500000,
    customerName: "Priya Sharma",
    bookingDate: "2023-05-11T14:15:00",
    status: "pending"
  },
  {
    id: 3,
    carName: "Maruti Swift",
    modelName: "ZXi",
    price: 750000,
    customerName: "Rajesh Singh",
    bookingDate: "2023-05-10T09:45:00",
    status: "pending"
  },
  {
    id: 4,
    carName: "Honda City",
    modelName: "ZX CVT",
    price: 1100000,
    customerName: "Neha Patel",
    bookingDate: "2023-05-09T16:20:00",
    status: "assigned",
    assignedTo: "Rajesh Kumar"
  },
  {
    id: 5,
    carName: "BMW 3 Series",
    modelName: "320d Sport",
    price: 3200000,
    customerName: "Vikram Mehta",
    bookingDate: "2023-05-08T11:10:00",
    status: "assigned",
    assignedTo: "Priya Singh"
  }
];

const StaffDashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState(sampleBookings);
  
  // Redirect if not logged in as staff
  if (!user || !user.isStaff) {
    return <Navigate to="/staff-login" />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const handleTakeJob = (bookingId: number) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === bookingId
          ? { ...booking, status: "assigned", assignedTo: user.username }
          : booking
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h1 className="text-2xl font-bold">Staff Dashboard</h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg">Welcome, {user.username}</p>
            <p className="text-sm opacity-80">
              {/* In a real app, we'd fetch this from the staff profile */}
              Role: Senior Sales Consultant • Experience: 5 years
            </p>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Car Bookings</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Car Details</th>
                  <th className="py-3 px-6 text-left">Customer</th>
                  <th className="py-3 px-6 text-left">Booking Date</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left">
                      <div className="font-medium">{booking.carName}</div>
                      <div className="text-xs text-gray-500">{booking.modelName} Model</div>
                    </td>
                    <td className="py-3 px-6 text-left">{booking.customerName}</td>
                    <td className="py-3 px-6 text-left">{formatDate(booking.bookingDate)}</td>
                    <td className="py-3 px-6 text-left font-medium">{formatPrice(booking.price)}</td>
                    <td className="py-3 px-6 text-left">
                      {booking.status === "pending" ? (
                        <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-xs">
                          Pending
                        </span>
                      ) : (
                        <div>
                          <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">
                            Assigned
                          </span>
                          <div className="text-xs mt-1">To: {booking.assignedTo}</div>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {booking.status === "pending" ? (
                        <button
                          onClick={() => handleTakeJob(booking.id)}
                          className="bg-secondary text-primary py-1 px-3 rounded-md text-sm hover:bg-secondary/90 transition-colors"
                        >
                          Take Job
                        </button>
                      ) : booking.assignedTo === user.username ? (
                        <span className="text-green-600 text-xs font-medium">
                          Assigned to you
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">
                          Already assigned
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
