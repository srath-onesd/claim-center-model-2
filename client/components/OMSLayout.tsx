import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  Menu,
  X
} from "lucide-react";
import { Layout } from "./Layout";

interface OMSLayoutProps {
  children: React.ReactNode;
}

export function OMSLayout({ children }: OMSLayoutProps) {
  const [omsSidebarCollapsed, setOmsSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const omsNavigationItems = [
    { id: "home", label: "Home", icon: Home, href: "/home" },
    { id: "new-submission", label: "New Submission", icon: Plus, href: "/new-submission" },
    { id: "submissions", label: "Submissions", icon: FileText, href: "/submissions" },
    { id: "policies", label: "Policies", icon: Shield, href: "/policies" },
    { id: "claims", label: "Claims", icon: FileCheck, href: "/", isActive: true },
    { id: "customer-center", label: "Customer Center", icon: Users, href: "/customer-center" },
    { id: "accounting", label: "Accounting", icon: DollarSign, href: "/accounting" },
    { id: "search-center", label: "Search Center", icon: Search, href: "/search-center" },
    { id: "other-utilities", label: "Other Utilities", icon: Settings, href: "/other-utilities" },
    { id: "customer-center-beta", label: "Customer Center BETA", icon: Users, href: "/customer-center-beta" },
    { id: "analytics-reports", label: "Analytics Reports", icon: BarChart3, href: "/analytics-reports" },
  ];

  return (
    <div className="h-screen bg-blue flex flex-col">
      {/* OMS Header */}
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-blue-600">OneShield</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setSidebarOpen(!sidebarOpen)}
           >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">admin admin</span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
              <span className="text-xs">×</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* OMS Sidebar */}
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          omsSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          {/* Sidebar Header */}
          {!omsSidebarCollapsed && (
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">Choose</span>
              </div>
            </div>
          )}

          <nav className="flex-1 px-2 py-2 space-y-1 overflow-y-auto">
            {omsNavigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm transition-colors ${
                    item.isActive
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } ${omsSidebarCollapsed ? 'justify-center' : ''}`}
                  title={omsSidebarCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${
                    item.isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                  } ${omsSidebarCollapsed ? '' : 'mr-3'}`} />
                  {!omsSidebarCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Claims Center Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Embedded Claims Center with its own layout */}
          <Layout>
            {children}
          </Layout>
        </div>
      </div>
    </div>
  );
}
