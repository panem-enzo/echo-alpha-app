import { Mic, RotateCcw, Wifi, User, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Joystick from "./JoystickControl";
import MicButton from "./MicButton";
import FlashlightButton from "./FlashlightButton";
import RotateDisplay from "./RotateButton";

export default function LandscapeUI() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Stream */}
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/video-feed.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Top Right Status Indicators */}
      <div className="absolute top-2 right-2 flex items-center gap-3">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
        <Wifi className="text-white" />
        <User className="text-white" />
      </div>
      
      {/* Left Joystick */}
      <div className="absolute left-4 bottom-8">
        <Joystick />
      </div>

      {/* Right Joystick */}
      <div className="absolute right-4 bottom-8">
        <Joystick />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6">
        <MicButton/>
        <FlashlightButton/>
        <RotateDisplay/>
      </div>
    </div>
  );
}
