import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

const RotateDisplay: React.FC<{ toggleRotation: () => void }> = ({ toggleRotation }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Button
      className={`w-18 h-18 flex items-center justify-center rounded-full ${
        isActive ? "bg-gray-200 inset-shadow-sm" : "bg-gray-100 hover:bg-gray-200 shadow-sm"
      }`}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)} // Mobile: When finger touches
      onTouchEnd={() => setActive(false)} // Mobile: When finger lifts
      onClick={toggleRotation}
    >
      <RotateCw className="size-9 stroke-[2]" color="#394051" />
    </Button>
  );
};

export default RotateDisplay;