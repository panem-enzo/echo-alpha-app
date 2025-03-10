import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Flashlight, FlashlightOff } from "lucide-react";

const FlashlightButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Toggle
      className={`w-24 h-24 rounded-[30px] shadow bg-gray-100 hover:bg-gray-200`}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? (
        <Flashlight className="size-12 stroke-2" color="#394051" />
      ) : (
        <FlashlightOff className="size-12 stroke-2" color="#394051" />
      )}
    </Toggle>
  );
};

export default FlashlightButton;
