import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";

const MicButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Button
      variant={"ghost"}
      size="icon"
      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200"
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? (
        <Mic className="w-12 h-12 text-black stroke-2" />
      ) : (
        <MicOff className="w-12 h-12 stroke-2"
        color="red" />
      )}
    </Button>
  );
};

export default MicButton;
