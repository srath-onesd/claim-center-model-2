import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Shield,
  Users,
  Settings,
  Home,
  Plus,
  Search,
  User,
  Building2,
  AlertTriangle,
  DollarSign,
  BarChart3,
  FileCheck,
  Calendar,
  Target,
  Bell,
  LogOut,
  ChevronDown,
  HelpCircle,
  Menu,
  X,
  Briefcase,
  BarChart,
  TrendingUp,
  Link as LinkIcon
} from "lucide-react";
import { Layout } from "./Layout";

interface OMSLayoutProps {
  children: React.ReactNode;
}

interface SubItem {
  label: string;
  path: string;
}

interface SidebarItem {
  icon: any;
  label: string;
  path: string;
  subItems?: SubItem[];
  isActive?: boolean;
}

export function OMSLayout({ children }: OMSLayoutProps) {
  const [omsSidebarCollapsed, setOmsSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const omsNavigationItems: SidebarItem[] = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Plus, label: "New Submission", path: "/new-submission" },
    { icon: FileText, label: "Submissions", path: "/submissions" },
    { icon: Shield, label: "Policies", path: "/policies" },
    { icon: FileCheck, label: "Claims", path: "/claims", isActive: true },
    { icon: Users, label: "Customer Center", path: "/customer-center"},
    { icon: DollarSign, label: "Accounting", path: "/accounting" },
    { icon: Search, label: "Search Center", path: "/search-center" },
    { icon: Settings, label: "Other Utilities", path: "/other-utilities" },
  ];

  const quickLinks = [
    { id: "bulk-changes", label: "Bulk Change Endorsements", path: "/bulk-changes" },
    { id: "manage-users", label: "Manage Users", path: "/manage-users" },
    { id: "analytics-reports", label: "Analytics Reports", path: "/analytics-reports" },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Policy Renewal Due',
      message: 'Auto policy A9876 renewal due in 7 days',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      title: 'Claim Update',
      message: 'Claim C1122 has been approved for processing',
      time: '4 hours ago',
      unread: true
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'Premium payment of $150 has been processed',
      time: '1 day ago',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const toggleExpanded = (itemPath: string) => {
    setExpandedItems(prev =>
      prev.includes(itemPath)
        ? prev.filter(path => path !== itemPath)
        : [...prev, itemPath]
    );
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return window.location.pathname === '/';
    }
    return window.location.pathname === path || window.location.pathname + window.location.search === path;
  };

  const isMainPageActive = (item: SidebarItem) => {
    if (item.path === '/' && item.label === 'Customer Center') {
      return window.location.pathname === '/';
    }
    if (item.path === '/' && item.label === 'Home') {
      return false; // Don't highlight Home when on Customer Center
    }
    return item.isActive || window.location.pathname === item.path;
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Enhanced OMS Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <DropdownMenuLabel>
              <div>
                <p className="font-medium">JM John</p>
                <p className="text-sm text-gray-500">jm.john@oneshield.com</p>
              </div>
            </DropdownMenuLabel>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search policies, claims, customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="relative p-2 text-gray-600 hover:bg-gray-100">
                <Bell size={18} />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">{unreadCount} unread notifications</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Settings */}
          <Button variant="ghost" size="sm" className="p-2 text-gray-600 hover:bg-gray-100">
            <Settings size={18} />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-3 text-gray-600 hover:bg-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0054A6] to-[#003d7a] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    J
                  </div>
                  <span className="hidden lg:block text-sm font-medium">JM John</span>
                  <ChevronDown size={14} />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">JM John</p>
                  <p className="text-sm text-gray-500">jm.john@oneshield.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User size={16} className="mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings size={16} className="mr-2" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle size={16} className="mr-2" />
                  Help & Support
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut size={16} className="mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-lg"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Enhanced OMS Sidebar */}
        <div className={cn(
          "h-screen bg-white border-r border-gray-200 text-gray-700 flex flex-col transition-all duration-300 z-40 shadow-sm",
          "lg:translate-x-0 lg:static lg:z-auto",
          omsSidebarCollapsed ? "w-16" : "w-64",
          sidebarOpen ? "fixed translate-x-0" : "fixed -translate-x-full lg:translate-x-0"
        )}>
          <div className={cn("p-4 border-b border-gray-200 flex items-center", omsSidebarCollapsed ? "justify-center" : "justify-between")}>
            {!omsSidebarCollapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0054A6] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OS</span>
                </div>
                <span className="text-[#0054A6] font-semibold text-lg">OneShield</span>
              </div>
            )}
            {omsSidebarCollapsed && (
              <div className="w-8 h-8 bg-[#0054A6] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
            )}
            <button
              onClick={() => setOmsSidebarCollapsed(!omsSidebarCollapsed)}
              className="text-gray-500 hover:bg-gray-100 p-1 rounded transition-colors"
            >
              <ChevronLeft size={16} className={cn("transition-transform", omsSidebarCollapsed && "rotate-180")} />
            </button>
          </div>
          
          <nav className="flex-1 px-2 overflow-y-auto">
            <ul className="space-y-1">
              {omsNavigationItems.map((item) => {
                const Icon = item.icon;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = expandedItems.includes(item.path);
                const isMainActive = isMainPageActive(item);
                
                return (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={(e) => {
                        if (hasSubItems) {
                          e.preventDefault();
                          toggleExpanded(item.path);
                        } else {
                          setSidebarOpen(false);
                        }
                      }}
                      className={cn(
                        "flex items-center rounded-lg text-sm transition-colors w-full",
                        omsSidebarCollapsed ? "justify-center p-2" : "gap-3 px-3 py-2",
                        isMainActive
                          ? "bg-[#0054A6] text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      )}
                      title={omsSidebarCollapsed ? item.label : undefined}
                    >
                      <Icon size={16} />
                      {!omsSidebarCollapsed && item.label}
                    </a>
                    
                    {hasSubItems && isExpanded && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {item.subItems!.map((subItem) => (
                          <li key={subItem.path}>
                            <a
                              href={subItem.path}
                              onClick={() => setSidebarOpen(false)}
                              className={cn(
                                "block px-3 py-1.5 text-xs rounded transition-colors border-l-2 border-white/20 pl-4",
                                isActive(subItem.path)
                                  ? "bg-white/15 text-white border-white/40" 
                                  : "text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30"
                              )}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {!omsSidebarCollapsed && (
              <>
                <div className="pt-4 pb-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3">
                    Quick Links
                  </span>
                </div>
                {quickLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className="group flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-lg"
                  >
                    <span className="truncate">{item.label}</span>
                  </a>
                ))}
              </>
            )}
          </nav>

          {/* Footer */}
          {!omsSidebarCollapsed && (
            <div className="p-3 border-t border-gray-200">
              <div className="text-xs text-gray-500 text-center">
                © 2024 OneShield Software
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden bg-white">
          <Layout>
            {children}
          </Layout>
        </div>
      </div>
    </div>
  );
}
