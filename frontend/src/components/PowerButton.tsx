import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const PowerButton = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Button
      className={`w-24 h-24 flex items-center justify-center rounded-[30px] shadow ${
        isActive ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-200"
      }`}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)} // Mobile: When finger touches
      onTouchEnd={() => setActive(false)} // Mobile: When finger lifts
    >
      <Power className="size-12 stroke-[3]" color="#394051" />
    </Button>
  );
};

export default PowerButton;