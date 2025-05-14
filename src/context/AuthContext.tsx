
import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
  username: string;
  email: string;
  isStaff: boolean;
} | null;

type AuthContextType = {
  user: User;
  login: (username: string, password: string) => Promise<{success: boolean, isStaff: boolean}>;
  logout: () => void;
  signup: (userData: { username: string; email: string; password: string }) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  // In a real app, these would connect to a backend
  const login = async (username: string, password: string): Promise<{success: boolean, isStaff: boolean}> => {
    // This is a mock login - in a real app, you would validate credentials with a backend
    if (username && password) {
      // Check if it's a staff email (ends with @nk.ac.in)
      const isStaff = username.toLowerCase().endsWith('@nk.ac.in');
      
      // For staff, we would validate against staff database in a real app
      if (isStaff) {
        // Here we would check staff credentials in a real application
        setUser({
          username: username.split('@')[0],
          email: username,
          isStaff: true
        });
        return { success: true, isStaff: true };
      } else {
        // Regular customer login
        setUser({
          username: username.split('@')[0],
          email: username,
          isStaff: false
        });
        return { success: true, isStaff: false };
      }
    }
    return { success: false, isStaff: false };
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (userData: { username: string; email: string; password: string }): Promise<boolean> => {
    // This is a mock signup - in a real app, you would send this data to your backend
    if (userData.username && userData.email && userData.password) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
