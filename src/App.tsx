import React from "react";
import {
  FaCog,
  FaBars,
  FaWifi,
  FaCamera,
} from "react-icons/fa";
import Joystick from "./components/JoystickControl";
import PowerButton from "./components/PowerButton";
import MicButton from "./components/MicButton";
import { SidebarProvider, Sidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <div className="p-4 w-64 h-full bg-gray-100 border-r">
        <h2 className="text-lg font-bold">Sidebar Menu</h2>
        <ul className="mt-4 space-y-2">
          <li><Button variant="ghost">Dashboard</Button></li>
          <li><Button variant="ghost">Settings</Button></li>
          <li><Button variant="ghost">Logout</Button></li>
        </ul>
      </div>
    </Sidebar>
  );
};

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="w-full h-screen bg-white flex flex-col items-center">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-md">
          {/* Sidebar Trigger Button */}
          <SidebarTrigger>
            <FaBars className="text-xl text-gray-700 cursor-pointer" />
          </SidebarTrigger>

          <div className="max-w-10 h-auto">
            <img src="/echo.png" alt="echo" />
          </div>
          <FaCog className="text-xl text-gray-700" />
        </div>

        {/* Sidebar Component */}
        <AppSidebar />

        {/* Robot Video Feed */}
        <div className="w-full h-1/3 bg-gray-300 flex justify-center items-center"></div>

        {/* Connection Status */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
          <div className="flex items-center space-x-2">
            {/* Pinging */}
            <div>
              <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="relative w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <FaWifi className="text-gray-600" />
            <span className="text-sm font-medium">CONNECTED</span>
          </div>
          <span className="text-sm text-gray-700">
            {window.location.hostname}
          </span>
        </div>

        {/* Controls Section */}
        <div className="w-full flex flex-col items-center py-4">
          <Joystick />

          {/* Sliders */}
          <div className="w-full flex justify-around mt-4 px-8">
            <div className="flex flex-col items-center">
              <span className="text-gray-600 mb-2">🔊</span>
              <input
                type="range"
                min="0"
                max="100"
                className="slider w-12 rotate-[-90deg]"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600 mb-2">↕️</span>
              <input
                type="range"
                min="0"
                max="100"
                className="slider w-12 rotate-[-90deg]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="w-full flex justify-around py-4 border-t bg-white">
          <MicButton />
          <PowerButton />
          <button className="p-3 bg-gray-100 rounded-full text-gray-700">
            <FaCamera size={24} />
          </button>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
