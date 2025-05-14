
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Header = () => {
  return (
    <div className="bg-primary text-white py-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
            <AspectRatio ratio={1/1}>
              <img 
                src="/NK_NewLogo.png" 
                alt="NK Resale Zone Logo" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="text-3xl md:text-4xl font-bold">NK Auto Resale Zone</div>
        </div>
        <div className="text-xl md:text-2xl italic text-secondary font-medium">
          Preowned, But Prime
        </div>
      </div>
    </div>
  );
};

export default Header;
