import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Mic, MicOff } from "lucide-react";

const MicButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Toggle
      className={`w-18 h-18 rounded-full shadow ${
        isToggled
          ? "bg-gray-100 hover:bg-gray-200"
          : "bg-red-50 hover:bg-red-100 border-red-400"
      }`}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? (
        <Mic className="size-9 stroke-2" color="#394051" />
      ) : (
        <MicOff className="size-9 stroke-2" color="red" />
      )}
    </Toggle>
  );
};

export default MicButton;
