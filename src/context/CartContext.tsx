
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Car } from "../lib/data";

type CartItem = {
  car: Car;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (car: Car) => {
    setItems(prevItems => {
      // Check if the car is already in the cart
      const existingItem = prevItems.find(item => item.car.id === car.id);
      
      if (existingItem) {
        // Update quantity if already in cart
        return prevItems.map(item => 
          item.car.id === car.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { car, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (carId: number) => {
    setItems(prevItems => prevItems.filter(item => item.car.id !== carId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.car.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
