import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Smartphone } from "lucide-react";

const ExpandDisplay: React.FC<{ toggleExpand: () => void }> = ({
  toggleExpand,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Toggle
      className={`w-18 h-18 rounded-full bg-gray-100 hover:bg-gray-200 ${
        isToggled ? "inset-shadow-sm" : "shadow-sm"
      }`}
      onClick={() => {
        setIsToggled(!isToggled);
        toggleExpand();
      }}
    >
      <Smartphone className="size-12 stroke-2" color="#394051" />
    </Toggle>
  );
};

export default ExpandDisplay;
