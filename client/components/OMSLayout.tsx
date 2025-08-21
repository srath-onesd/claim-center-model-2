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
  Bell
} from "lucide-react";
import { Layout } from "./Layout";

interface OMSLayoutProps {
  children: React.ReactNode;
}

export function OMSLayout({ children }: OMSLayoutProps) {
  const [omsSidebarCollapsed, setOmsSidebarCollapsed] = useState(false);

  const omsNavigationItems = [
    { id: "home", label: "Home", icon: Home, href: "/home" },
    { id: "new-submission", label: "New Submission", icon: Plus, href: "/new-submission" },
    { id: "submissions", label: "Submissions", icon: FileText, href: "/submissions" },
    { id: "policies", label: "Policies", icon: Shield, href: "/policies" },
    { id: "claims", label: "Claims", icon: FileCheck, href: "/", isActive: true },
    { id: "customer-center", label: "Customer Center", icon: Users, href: "/customer-center"},
    { id: "accounting", label: "Accounting", icon: DollarSign, href: "/accounting" },
    { id: "search-center", label: "Search Center", icon: Search, href: "/search-center" },
    { id: "other-utilities", label: "Other Utilities", icon: Settings, href: "/other-utilities" },
  ];

  const quickLinks = [
    { id: "bulk-changes", label: "Bulk Change Endorsements", href: "/bulk-changes" },
    { id: "manage-users", label: "Manage Users", href: "/manage-users" },
    { id: "analytics-reports", label: "Analytics Reports", href: "/analytics-reports" },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* OMS Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-base font-medium text-gray-900">OneShield</span>
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
          <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center text-[10px]">
              1
            </span>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">JM</span>
            </div>
            <span className="text-sm text-gray-700">JM John</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* OMS Sidebar */}
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          omsSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {omsNavigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm transition-colors rounded ${
                    item.isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${omsSidebarCollapsed ? 'justify-center' : ''}`}
                  title={omsSidebarCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${
                    item.isActive ? 'text-white' : 'text-gray-500'
                  } ${omsSidebarCollapsed ? '' : 'mr-3'}`} />
                  {!omsSidebarCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </a>
              );
            })}

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
                    href={item.href}
                    className="group flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    <span className="truncate">{item.label}</span>
                  </a>
                ))}
              </>
            )}
          </nav>

          {/* Footer */}
          {!omsSidebarCollapsed && (
            <div className="px-3 py-4 border-t border-gray-200">
              <span className="text-xs text-gray-500">© 2024 OneShield Software</span>
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
