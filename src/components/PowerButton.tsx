import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const PowerButton = () => {
  const [isActive, setActive] = useState(false);

    return (
      <Button
        size="icon"
        className={`w-12 h-12 rounded-full border border-gray-400 shadow ${isActive ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-200"}`}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onMouseLeave={() => setActive(false)}
        onTouchStart={() => setActive(true)} // Mobile: When finger touches
        onTouchEnd={() => setActive(false)} // Mobile: When finger lifts
      >
        <Power className="w-12 h-12 text-black stroke-3"/>
      </Button>
    );
  };
  
export default PowerButton;