
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { sampleStaffData } from "../lib/data";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { success, isStaff } = await login(username, password);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: `Welcome back, ${username.split('@')[0]}!`,
        });
        
        // Redirect based on user type
        if (isStaff) {
          navigate("/staff-dashboard");
        } else {
          navigate("/");
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Determine if the entered username looks like a staff email
  const isStaffEmail = username.toLowerCase().endsWith('@nk.ac.in');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className={`p-6 ${isStaffEmail ? 'bg-primary' : 'bg-white'}`}>
          <h1 className={`text-2xl font-bold text-center ${isStaffEmail ? 'text-white' : 'text-primary'} mb-6`}>
            {isStaffEmail ? "Staff Login" : "Customer Login"}
          </h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className={`block text-sm font-medium ${isStaffEmail ? 'text-white' : 'text-gray-700'} mb-1`}
              >
                Email
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
              {username && (
                <p className={`text-xs mt-1 ${isStaffEmail ? 'text-white/70' : 'text-gray-500'}`}>
                  {isStaffEmail ? 'Logging in as staff (@nk.ac.in)' : 'Logging in as customer'}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${isStaffEmail ? 'text-white' : 'text-gray-700'} mb-1`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${isStaffEmail ? 'bg-white text-primary' : 'bg-primary text-white'} py-2 rounded-md hover:opacity-90 transition-colors disabled:opacity-50`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          
          {!isStaffEmail && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/customer-signup" className="text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
