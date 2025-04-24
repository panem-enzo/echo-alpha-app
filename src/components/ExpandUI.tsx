import { Wifi, User } from "lucide-react"
import Joystick from "./JoystickControl"
import MicButton from "./MicButton"
import FlashlightButton from "./FlashlightButton"
import ExpandDisplay from "./ExpandButton"

const ExpandUI: React.FC<{ toggleExpand: () => void }> = ({
  toggleExpand,
}) => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Stream */}
      <div className="absolute inset-0">
        <img
          src={`http://${window.location.hostname}:81/stream`}
          alt="ECHO Live Feed"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Right Status Indicators */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        <div className="flex items-center py-2 px-3 gap-2 bg-black/20 rounded-full">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <Wifi className="text-white" />
          <User className="text-white" />
        </div>
      </div>

      {/* (Joysticks + Buttons) */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-y-8">
        <Joystick />
        <div className="flex items-center py-4 px-3 gap-x-3 bg-black/20 rounded-full">
          <MicButton />
          <FlashlightButton />
          <ExpandDisplay toggleExpand={toggleExpand} />
        </div>
      </div>
    </div>
  )
}

export default ExpandUI
