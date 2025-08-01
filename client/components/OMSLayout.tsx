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
    <div className="h-screen bg-white flex flex-col">
      {/* OMS Header */}
      <div className="bg-white-600 text-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2F6d9901e033b045faa8c6a785a9b741ad"
                className="w-full h-full object-contain"
                style={{
                  aspectRatio: "2.78",
                  objectFit: "contain",
                  objectPosition: "center",
                  marginLeft: "20px",
                  minHeight: "20px",
                  minWidth: "20px",
                  overflow: "hidden"
                }}
                alt="Logo"
              />
            </div>
          </div>
          <div className="text-sm">
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">David Robbins Single</span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* OMS Sidebar */}
        <div className={`bg-gray-100 border-r transition-all duration-300 ${
          omsSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          <div className="p-2">
            <div style={{ position: "relative", marginTop: "20px", height: "auto" }}>
              Enter some text...
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOmsSidebarCollapsed(!omsSidebarCollapsed)}
              className="w-full justify-start mb-2"
            >
              <p>
                <br />
              </p>
            </Button>
          </div>
          
          <nav className="px-2 pb-4 space-y-1">
            {omsNavigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    item.isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  title={omsSidebarCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-4 w-4 ${omsSidebarCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
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
