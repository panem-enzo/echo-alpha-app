import React, { useEffect, useRef } from "react";
import Joystick, { Direction, DirectionCount, IJoystickChangeValue } from "rc-joystick";

const JoystickControl: React.FC = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const gateway = `ws://${window.location.hostname}/ws`;

  useEffect(() => {
    socketRef.current = new WebSocket(gateway);

    socketRef.current.onopen = () => console.log("WebSocket Connected");
    socketRef.current.onclose = () => console.log("WebSocket Disconnected");

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const handleChange = (event: IJoystickChangeValue) => {
    const { direction, distance } = event;
    console.log(`Joystick moved: ${direction}, Distance: ${distance}`);

    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(`joystick:${direction},${distance}`);
    }
  };

  const handleDirectionChange = (direction: Direction) => {
    if (direction === "Center") {
      console.log("Joystick released");

      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send("joystick:STOP,0");
      }
    }
  };

  return (
    <div>
      <Joystick
        baseRadius={80} // Adjust joystick base size
        controllerRadius={40} // Adjust joystick knob size
        directionCount={DirectionCount.Nine} // Uses directions (Top, Bottom, Left, Right, Center)
        onChange={handleChange} // Handle movement
        onDirectionChange={handleDirectionChange} // Detect stop (Center)
      />
    </div>
  );
};

export default JoystickControl;
