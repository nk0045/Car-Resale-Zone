
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const StaffLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This would be replaced with actual authentication logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication
      if (username && password) {
        // Staff login successful
        login({ 
          name: username.split('@')[0], 
          email: username,
          role: 'staff'
        });
        
        // Redirect to staff dashboard
        navigate("/staff-dashboard");
        
        toast({
          title: "Login Successful",
          description: "Welcome back to NK Resale Zone staff portal!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid username or password. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Error",
        description: "An error occurred during login. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Staff Login</CardTitle>
          <CardDescription>
            Access the staff portal of NK Resale Zone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text" 
                placeholder="staff@nk.ac.in"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Staff access only. For customer login, use a customer account.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StaffLogin;
