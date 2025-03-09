import React, { useEffect, useRef } from "react";
import { Joystick } from "react-joystick-component";

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

  const handleMove = (event: { direction: any; distance: any; }) => {
    const { direction, distance } = event;

    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(`joystick:${direction},${distance}`);
    }
  };

  const handleStop = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send("joystick:STOP,0");
    }
  };

  return (
    <div>
      <Joystick
        size={150}
        baseColor="#bddcff"
        stickColor="#51a2ff"
        move={handleMove}
        stop={handleStop}
      />
    </div>
  );
};

export default JoystickControl;
