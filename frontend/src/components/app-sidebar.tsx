import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Gauge, Info, Logs, Settings } from "lucide-react"


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Gauge,
  },
  {
    title: "Logs",
    url: "#",
    icon: Logs
  }, 
  {
    title: "Help",
    url: "#",
    icon: Info,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const AppSidebar: React.FC = () => {
  return (
    <Sidebar className="border-none shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ECHO-ALPHA V1.0.0</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;