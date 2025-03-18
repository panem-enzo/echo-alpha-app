import { Wifi, User } from "lucide-react";
import Joystick from "./JoystickControl";
import MicButton from "./MicButton";
import FlashlightButton from "./FlashlightButton";
import RotateDisplay from "./RotateButton";

const LandscapeUI: React.FC<{ toggleRotation: () => void }> = ({
  toggleRotation,
}) => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Stream */}
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/test_footage.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top Right Status Indicators */}
      <div className="absolute top-2 right-2 flex items-center gap-3">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
        <Wifi className="text-white" />
        <User className="text-white" />
      </div>

      {/* Centered Vertical Stack (Joysticks + Buttons) */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-y-12">
        <Joystick />
        <div className="flex flex-col items-center py-4 px-2 gap-y-2 bg-black/20 rounded-full">
        <div className="rotate-90 opacity-100">
          <MicButton />
        </div>
        <div className="rotate-90 opacity-100">
          <FlashlightButton />
        </div>
        <div className="rotate-90 opacity-100">
          <RotateDisplay toggleRotation={toggleRotation} />
        </div>
        </div>
       
        <Joystick />
      </div>
    </div>
  );
};

export default LandscapeUI;
