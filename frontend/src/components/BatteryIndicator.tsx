import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { BatteryFull, BatteryMedium, BatteryLow, PlugZap } from "lucide-react";

const BatteryIndicator: React.FC = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (): string => {
    if (progress > 66) return "text-green-500/70";
    if (progress > 32) return "text-yellow-400";
    if (progress > 0) return "text-red-400/70";
    return "text-white";
  };

  const Icon = () => {
    if (progress > 66) return <BatteryFull className={iconClass} />;
    if (progress > 32) return <BatteryMedium className={iconClass} />;
    if (progress > 0) return <BatteryLow className={iconClass} />;
    return "";
  };

  const colorClass = getColorClass();
  const iconClass = `absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 ${colorClass}`;

  return (
    <div>
      <div className="relative w-24 md:w-32 lg:w-48">
        <Progress value={progress} className="h-6 shadow-sm inset-shadow-sm" />
        <Icon />
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium ${colorClass}`}
        >
          {progress === 0 ? (
            <PlugZap className={`animate-pulse`} />
          ) : (
            `${progress}%`
          )}
        </span>
      </div>
    </div>
  );
};

export default BatteryIndicator;
