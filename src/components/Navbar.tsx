
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  Home,
  User,
  Calculator,
  ChevronDown,
  LogIn
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4 md:space-x-8">
            <Link to="/" className="flex items-center text-primary hover:text-secondary transition-colors">
              <Home className="mr-1" size={18} />
              <span>Home</span>
            </Link>
            
            {!user && (
              <Link to="/login" className="flex items-center text-primary hover:text-secondary transition-colors">
                <User className="mr-1" size={18} />
                <span>Login</span>
              </Link>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-primary hover:text-secondary transition-colors">
                <span>Location</span>
                <ChevronDown className="ml-1" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/?location=Coimbatore" className="w-full">Coimbatore</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/?location=Salem" className="w-full">Salem</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/?location=Madurai" className="w-full">Madurai</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/?location=Chennai" className="w-full">Chennai</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/emi-calculator" className="flex items-center text-primary hover:text-secondary transition-colors">
              <Calculator className="mr-1" size={18} />
              <span>EMI Calculator</span>
            </Link>
            
            <Link to="/about-us" className="flex items-center text-primary hover:text-secondary transition-colors">
              <span>About Us</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-primary font-medium">Hi, {user.username}</span>
                <button 
                  onClick={logout} 
                  className="text-sm bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Logout
                </button>
                
                {user.isStaff && (
                  <Link 
                    to="/staff-dashboard" 
                    className="text-sm bg-secondary text-primary px-3 py-1 rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center text-primary hover:text-secondary transition-colors"
              >
                <LogIn className="mr-1" size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
