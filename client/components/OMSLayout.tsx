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
  Target
} from "lucide-react";
import { Layout } from "./Layout";

interface OMSLayoutProps {
  children: React.ReactNode;
}

export function OMSLayout({ children }: OMSLayoutProps) {
  const [omsSidebarCollapsed, setOmsSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const omsNavigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "new-submission", label: "New Submission", icon: Plus, href: "/new-submission" },
    { id: "submissions", label: "Submissions", icon: FileText, href: "/submissions" },
    { id: "policies", label: "Policies", icon: Shield, href: "/policies" },
    { id: "new-incident", label: "New Incident", icon: AlertTriangle, href: "/new-incident" },
    { id: "incident", label: "Incident", icon: AlertTriangle, href: "/incident" },
    { id: "admin", label: "Admin", icon: Settings, href: "/admin" },
    { id: "claims", label: "Claims", icon: FileCheck, href: "/", isActive: true },
    { id: "claims-search", label: "Claims Search Beta", icon: Search, href: "/claims-search" },
    { id: "customer-center", label: "Customer Center", icon: Users, href: "/customer-center" },
    { id: "manage-claims", label: "Manage Claims", icon: Target, href: "/manage-claims" },
    { id: "bulk-changes", label: "Bulk Changes/Endorsements", icon: BarChart3, href: "/bulk-changes" },
    { id: "accounting", label: "Accounting", icon: DollarSign, href: "/accounting" },
    { id: "customer-center-beta", label: "Customer Center BETA", icon: Users, href: "/customer-center-beta" },
    { id: "rapid-claims", label: "Rapid Claims Processing", icon: Target, href: "/rapid-claims" },
    { id: "search-center", label: "Search Center", icon: Search, href: "/search-center" },
    { id: "other-utilities", label: "Other Utilities", icon: Settings, href: "/other-utilities" },
    { id: "message-exceptions", label: "Message Exceptions", icon: AlertTriangle, href: "/message-exceptions" },
  ];

  return (
    <div className="h-screen bg-blue flex flex-col">
      {/* OMS Header */}
      <div className="bg-white text-blue px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "rgba(255, 255, 255, 1)", border: "1px solid rgba(74, 144, 226, 1)" }}>
        <div className="flex items-center space-x-4">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad"
            className="w-full h-full object-contain"
            style={{
              aspectRatio: "10.78",
              objectFit: "contain",
              objectPosition: "center",
              marginLeft: "5px",
              minHeight: "40px",
              minWidth: "20px",
              overflow: "hidden",
              width: "150px"
            }}
            alt="Logo"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm" style={{ color: "rgba(74, 144, 226, 1)" }}>David Robbins Single</span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <User className="h-4 w-4" style={{ backgroundColor: "rgba(74, 144, 226, 1)" }} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <Settings className="h-4 w-4" style={{ backgroundColor: "rgba(74, 144, 226, 1)" }} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* OMS Sidebar */}
        <div className={`bg-gray-100 border-r border-gray-200 transition-all duration-300 flex flex-col ${
          omsSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          {/* Sidebar Header with Toggle */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200">
            {!omsSidebarCollapsed && (
              <span className="text-sm font-semibold text-gray-700">OneShield</span>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:bg-gray-200 p-1"
              onClick={() => setOmsSidebarCollapsed(!omsSidebarCollapsed)}
            >
              {omsSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </Button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {omsNavigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    item.isActive
                      ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  } ${omsSidebarCollapsed ? 'justify-center' : ''}`}
                  title={omsSidebarCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${
                    item.isActive ? 'text-blue-700' : 'text-gray-500 group-hover:text-gray-900'
                  } ${omsSidebarCollapsed ? '' : 'mr-3'}`} />
                  {!omsSidebarCollapsed && (
                    <span className="truncate font-medium">{item.label}</span>
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
