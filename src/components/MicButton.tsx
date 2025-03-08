import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Mic, MicOff } from "lucide-react";

const MicButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Toggle
      className={`w-12 h-12 rounded-full border shadow ${
        isToggled
          ? "bg-gray-100 hover:bg-gray-200 border-gray-400"
          : "bg-red-50 hover:bg-red-100 border-red-400"
      }`}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? (
        <Mic className="w-12 h-12 text-black stroke-2" />
      ) : (
        <MicOff className="w-12 h-12 stroke-2" color="red" />
      )}
    </Toggle>
  );
};

export default MicButton;
