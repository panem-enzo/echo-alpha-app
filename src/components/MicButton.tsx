import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Mic, MicOff } from "lucide-react";

const MicButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Toggle
      variant="outline"
      className="w-12 h-12 rounded-full bg-gray-100"
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
