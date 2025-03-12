import { Sidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";

const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <div className="p-4 w-64 h-full bg-gray-100 shadow-sm">
        <h2 className="text-lg font-bold">ECHO-ALPHA V1.0.0</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Button variant="ghost">Dashboard</Button>
          </li>
          <li>
            <Button variant="ghost">Settings</Button>
          </li>
          <li>
            <Button variant="ghost">Logout</Button>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;