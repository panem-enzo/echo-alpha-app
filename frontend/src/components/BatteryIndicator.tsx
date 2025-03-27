import React, { useState, useEffect } from "react";
import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
} from "lucide-react";

const BatteryIndicator: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    setBatteryLevel(3); // Default value for now
  }, []);

  const renderBatteryIcon = () => {
    if (batteryLevel === 0) {
      return <BatteryFull className="size-7" />;
    } else if (batteryLevel === 1) {
      return <BatteryMedium className="size-7" />;
    } else if (batteryLevel === 2) {
      return <BatteryLow className="size-7" />;
    } else {
      return <BatteryWarning className="size-7" />;
    }
  };

  return renderBatteryIcon();
};

export default BatteryIndicator;
