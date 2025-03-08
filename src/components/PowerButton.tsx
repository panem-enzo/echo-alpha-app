import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const PowerButton = () => {
    return (
      <Button
        size="icon"
        className="w-12 h-12 rounded-full border border-gray-400 shadow bg-gray-100 hover:bg-gray-200"
      >
        <Power className="w-12 h-12 text-black stroke-3"/>
      </Button>
    );
  };
  
  export default PowerButton;