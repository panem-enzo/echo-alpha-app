import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { BatteryFull, BatteryMedium, BatteryLow, PlugZap } from "lucide-react";

const BatteryIndicator: React.FC = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    if (progress <= 100 && progress > 66) {
      return "green-500/70";
    } else if (progress <= 66 && progress > 32) {
      return "yellow-400";
    } else if (progress <= 32 && progress > 0) {
      return "red-400/70";
    } else {
      return "black";
    }
  };

  const getBatteryLevel = () => {
    const classPos = `absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 text-${getColor()}`;
    if (progress <= 100 && progress > 66) {
      return <BatteryFull className={`${classPos}`} />;
    } else if (progress <= 66 && progress > 32) {
      return <BatteryMedium className={`${classPos}`} />;
    } else if (progress <= 32 && progress > 0) {
      return <BatteryLow className={`${classPos}`} />;
    } else {
      return <PlugZap className={`animate-pulse ${classPos}`} />;
    }
  };

  return (
    <div>
      <div className="relative w-24 md:w-32 lg:w-48">
        <Progress value={progress} className="h-8 shadow-sm inset-shadow-sm" />

        {getBatteryLevel()}

        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-${getColor()}`}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default BatteryIndicator;
