import React, { useEffect, useRef } from "react";
import Joystick, {
  Direction,
  DirectionCount,
  IJoystickChangeValue,
} from "rc-joystick";

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
    const { distance, angle, direction } = event;
    const angleInDegrees = angle ?? 0;
    const radians = (angleInDegrees * Math.PI) / 180;

    const x = distance * Math.cos(radians);
    const y = distance * Math.sin(radians);
    console.log(JSON.stringify({ "direction": direction, "x": x, "y": y }));

    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ "direction": direction, "x": x, "y": y }));
    }
  };

  const handleDirectionChange = (direction: Direction) => {
    if (direction === "Center") {
      console.log("Joystick released");

      if (
        socketRef.current &&
        socketRef.current.readyState === WebSocket.OPEN
      ) {
        socketRef.current.send(JSON.stringify({ "direction": "Stop", "x": 0, "y": 0 }));
      }
    }
  };

  return (
    <div>
      <Joystick
        baseRadius={80}
        controllerRadius={40}
        directionCount={DirectionCount.Nine} // Uses directions (Top, RightTop, TopLeft, Bottom, RightBottom, LeftBottom, Left, Right, Center)
        onChange={handleChange}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
};

export default JoystickControl;
