import React from "react";
import { FaBars, FaWifi } from "react-icons/fa";
import Joystick from "./components/JoystickControl";
import MicButton from "./components/MicButton";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import TopSwitch from "./components/TopSwitch";
import ExpandDisplay from "./components/ExpandButton";
import { Separator } from "@/components/ui/separator";
import FlashlightButton from "./components/FlashlightButton";
import BatteryIndicator from "./components/BatteryIndicator";
import AppSidebar from "./components/app-sidebar";
import VideoFeed from "./components/VideoFeed";

const App: React.FC<{ toggleExpand: () => void }> = ({ toggleExpand }) => {
  return (
    <SidebarProvider>
      {/* Sidebar Component */}
      <AppSidebar />
      <div className="w-full h-screen bg-white flex flex-col items-center">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between px-4 py-4 bg-white shadow-md">
          {/* Sidebar Trigger Button */}
          <SidebarTrigger className="hover:bg-gray-100">
            <FaBars className="text-xl text-gray-700 cursor-pointer" />
          </SidebarTrigger>

          <div className="max-w-10 h-auto">
            <img src="/echo_logo_t.png" alt="echo" />
          </div>

          <TopSwitch />
        </div>

        {/* Robot Video Feed */}
        <div className="w-full h-1/3 bg-gray-300 flex justify-center items-center">
          <VideoFeed/>
        </div>

        {/* Connection Status */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
          <div className="flex items-center space-x-2">
            {/* Pinging */}
            <div>
              <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="relative w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <FaWifi className="text-gray-600" />
            <span className="text-sm font-medium text-black">CONNECTED</span>
            <span className="text-sm text-gray-700">
              {window.location.hostname}
            </span>
          </div>
          <BatteryIndicator />
        </div>

        {/* Controls Section */}
        <div className="w-full flex flex-col items-center py-4">
          <Joystick />
        </div>

        <Separator className="my-4 h-1 bg-gray-300" />
        {/* Bottom Buttons */}
        <div className="w-full flex justify-around items-center py-4 bg-white">
          <MicButton />
          <FlashlightButton />
          <ExpandDisplay toggleExpand={toggleExpand} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
