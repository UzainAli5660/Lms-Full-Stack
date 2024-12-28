import { Book, Home, CalendarDays, User, UserPen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"  
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"


const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",  
    icon: Home,
  },
  {
    title: "Teachers",
    url: "/admin/teachers",  
    icon: User,
  },
  {
    title: "Students",
    url: "/admin/students", 
    icon: UserPen,
  },
  {
    title: "Courses",
    url: "/admin/courses", 
    icon: Book,
  },
  {
    title: "Batches",
    url: "/admin/batches", 
    icon: CalendarDays,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image src="/images/images.png.png" alt="Your Logo" width={140} className="mt-10 p-2" height={120} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-12 gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Using Next.js Link component for client-side navigation */}
                    <Link href={item.url}>
                      
                        <item.icon />
                        <span className="font-bold">{item.title}</span>
                    
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
