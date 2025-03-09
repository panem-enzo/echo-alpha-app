import React, { useState } from 'react';
import { Drawer } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button'; 
import { Menu } from 'lucide-react'; 

const MobileDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="flex flex-col items-center">
      {/* Button to open drawer */}
      <Button onClick={toggleDrawer} className="p-3">
        <Menu size={24} /> {/* Menu Icon */}
      </Button>

      {/* Drawer Component */}
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="flex flex-col p-4">
          <Button onClick={toggleDrawer} className="mb-4">Close</Button>
          <nav>
            <ul>
              <li className="mb-4">
                <Button onClick={() => alert('Option 1')}>Option 1</Button>
              </li>
              <li className="mb-4">
                <Button onClick={() => alert('Option 2')}>Option 2</Button>
              </li>
              <li className="mb-4">
                <Button onClick={() => alert('Option 3')}>Option 3</Button>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
