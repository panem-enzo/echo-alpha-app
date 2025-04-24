import React, { useEffect } from "react";
import Joystick, {
  Direction,
  DirectionCount,
  IJoystickChangeValue,
} from "rc-joystick";
import wsManager from "../utils/wsManager";
import { startMicStream } from "../audio/mic-audio-stream";

const JoystickControl: React.FC = () => {
  useEffect(() => {
    wsManager.connect();

    return () => {
      wsManager.close();
    };
  }, []);

  const handleChange = (event: IJoystickChangeValue) => {
    const { distance, angle, direction } = event;
    const angleInDegrees = angle ?? 0;
    const radians = (angleInDegrees * Math.PI) / 180;

    const x = distance * Math.cos(radians);
    const y = distance * Math.sin(radians);

    wsManager.send(JSON.stringify({ direction, x, y }));
  };

  const handleDirectionChange = (direction: Direction) => {
    if (direction === "Center") {
      wsManager.send(JSON.stringify({ direction: "Stop", x: 0, y: 0 }));
    }
  };

  const handleStartMic = () => {
    startMicStream();
  };

  return (
    <div>
      <Joystick
        baseRadius={100}
        controllerRadius={60}
        directionCount={DirectionCount.Nine}
        onChange={handleChange}
        onDirectionChange={handleDirectionChange}
        throttle={0}
      />
      <button onClick={handleStartMic}>Start Microphone</button>
    </div>
  );
};

export default JoystickControl;
