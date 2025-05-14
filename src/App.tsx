
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import CustomerSignup from "./pages/CustomerSignup";
import StaffDashboard from "./pages/StaffDashboard";
import EMICalculator from "./pages/EMICalculator";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import PaymentDetails from "./pages/PaymentDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Header />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/customer-login" element={<Login />} />
                <Route path="/staff-login" element={<Login />} />
                <Route path="/customer-signup" element={<CustomerSignup />} />
                <Route path="/staff-dashboard" element={<StaffDashboard />} />
                <Route path="/emi-calculator" element={<EMICalculator />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-details" element={<PaymentDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
