import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { id: "overview", label: "Overview", href: "/", icon: "📋" },
  {
    id: "claimdetails",
    label: "Claim Details",
    href: "/claimdetails",
    icon: "📋",
  },
  {
    id: "claimants",
    label: "Claimants",
    href: "#", // Use # to prevent navigation when clicking
    icon: "👤",
    expandable: true,
    subItems: [
      {
        id: "claimant1",
        label: "Amy Applegate",
        href: "/claimants/amy-applegate",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-1",
            label: "Reserves",
            href: "/claimants/amy-applegate/bodily-injury/reserves",
            icon: "💳",
          },
          {
            id: "bi-payments-1",
            label: "Payments",
            href: "/claimants/amy-applegate/bodily-injury/payments",
            icon: "💳",
          },
          {
            id: "bi-recovery-1",
            label: "Recovery",
            href: "/claimants/amy-applegate/bodily-injury/recovery",
            icon: "🔄",
            expandable: true,
            subItems: [
              {
                id: "subrogation-1",
                label: "Subrogation",
                href: "/claimants/amy-applegate/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-1",
                label: "Financial Receipts",
                href: "/claimants/amy-applegate/bodily-injury/recovery/finreceipts",
              },
            ]
          },
          {
            id: "journal-1",
            label: "Journal",
            href: "/journal",
            expandable: true,
            subItems: [
              {
                id: "diary-1",
                label: "Diary",
                href: "/journal/diary",
                icon: "📅",
              },
              {
                id: "notes-1",
                label: "Notes",
                href: "/journal/notes",
                icon: "📝",
              },
              {
                id: "documents-1",
                label: "Documents",
                href: "/journal/documents",
                icon: "📄",
              },
              {
                id: "emails-1",
                label: "Emails",
                href: "/journal/emails",
                icon: "",
              }
            ]
          },
        ],
      },
      {
        id: "claimant2",
        label: "Bob Pay",
        href: "/claimants/bob-pay",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-2",
            label: "Reserves",
            href: "/claimants/bob-pay/bodily-injury/reserves",
            icon: "💳",
          },
          {
            id: "bi-payments-2",
            label: "Payments",
            href: "/claimants/bob-pay/bodily-injury/payments",
            icon: "💳",
          },
          {
            id: "bi-recovery-2",
            label: "Recovery",
            href: "/claimants/bob-pay/bodily-injury/recovery",
            icon: "🔄",
            expandable: true,
            subItems: [
              {
                id: "subrogation-2",
                label: "Subrogation",
                href: "/claimants/bob-pay/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-2",
                label: "Financial Receipts",
                href: "/claimants/bob-pay/bodily-injury/recovery/finreceipts",
              }
            ]
          },
          {
            id: "journal-2",
            label: "Journal",
            href: "/journal",
            expandable: true,
            subItems: [
              {
                id: "diary-2",
                label: "Diary",
                href: "/journal/diary",
                icon: "📅",
              },
              {
                id: "notes-2",
                label: "Notes",
                href: "/journal/notes",
                icon: "📝",
              },
              {
                id: "documents-2",
                label: "Documents",
                href: "/journal/documents",
                icon: "📄",
              },
              {
                id: "emails-2",
                label: "Emails",
                href: "/journal/emails",
                icon: "",
              }
            ]
          },
        ],
      },
    ],
  },
  {
    id: "deductible-1",
    label: "Deductible",
    href: "#", // Use # to prevent navigation when clicking
    expandable: true,
    subItems: [
      {
        id: "adddeductible-1",
        label: "Add Deductible",
        href: "/deductible/add",
      },
      {
        id: "deductiblefin-1",
        label: "Deductible Financials",
        href: "/deductible/financials",
      },
    ]
  },
  {
    id: "claim-history",
    label: "Claim History",
    href: "/claim-history",
    icon: "📚",
  },
];

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  expandable?: boolean;
  subItems?: NavigationItem[];
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive = location.pathname === item.href;
    const isExpanded = expandedItems.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const paddingLeft = sidebarCollapsed ? 12 : (level * 16 + 12); // Adjust for collapsed state
    
    return (
      <li key={item.id}>
        <div
          className={cn(
            "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
            location.pathname === item.href
              ? "bg-primary text-primary-foreground"
              : "text-gray-700 hover:bg-gray-100",
          )}
          style={{ paddingLeft: sidebarCollapsed ? '12px' : `${paddingLeft}px` }}
          title={sidebarCollapsed ? item.label : undefined}
          onClick={() => {
            // If the item has sub-items and is expandable, toggle expansion
            if (hasSubItems && item.expandable) {
              toggleExpanded(item.id);
            }
            // If the item has a real href (not #), navigate to it
            else if (item.href !== '#') {
              // This will be handled by the Link component
            }
          }}
        >
          {/* For items with sub-items, make the whole div clickable, otherwise use Link */}
          {hasSubItems && item.expandable ? (
            <div className={cn(
              "flex items-center flex-1",
              sidebarCollapsed ? "justify-center" : "space-x-3"
            )}>
              {level === 0 && item.icon && (
                <span className="text-lg">{item.icon}</span>
              )}
              {!sidebarCollapsed && <span>{item.label}</span>}
            </div>
          ) : (
            <Link
              to={item.href}
              onClick={() => setSidebarOpen(true)}
              className={cn(
                "flex items-center flex-1",
                sidebarCollapsed ? "justify-center" : "space-x-3"
              )}
            >
              {level === 0 && item.icon && (
                <span className="text-lg">{item.icon}</span>
              )}
              {!sidebarCollapsed && <span>{item.label}</span>}
            </Link>
          )}
          
          {hasSubItems && item.expandable && !sidebarCollapsed && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the parent click
                toggleExpanded(item.id);
              }}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          )}
        </div>
        {hasSubItems && isExpanded && !sidebarCollapsed && (
          <ul className="mt-1 space-y-1">
            {item.subItems!.map((subItem) =>
              renderNavigationItem(subItem, level + 1),
            )}
          </ul>
        )}
      </li>
    );
  };
  

  return (
    <div className="h-full bg-gray-50 flex">
      {/* Claims Center Header Bar */}
      <div className="flex flex-col w-full">
        <div className="bg-primary text-primary-foreground px-4 py-2 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 mr-auto">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded">
                Open
              </span>
              <span>Claim: <strong>23E:12345</strong></span>
              <span>Policy: <strong>1-672148A</strong></span>
              <span>Insured: <strong>Shubham Raut</strong></span>
              <span>Claimant: <strong>Amy Applegate, Bob Pay</strong></span>
              <span>DOL: <strong>12/31/2025</strong></span>
              <span>Adjuster: <strong>Mital Patel</strong></span>
            </div>
            <div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Action
              </Button>
            </div>
          </div>
        </div>

        {/* Content with sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Claims Center Sidebar */}
          <aside className={cn(
            "bg-white border-r border-gray-200 h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300",
            sidebarOpen ? "w-64 block" : "w-0 hidden",
            "lg:relative lg:top-0",
            sidebarOpen && "lg:block fixed lg:relative inset-y-0 left-0 z-50 top-[120px] lg:top-0"
            )} style={{backgroundColor: "white"}}>
            <nav className="p-2">
              <ul className="space-y-1">
                {navigationItems.map((item) => renderNavigationItem(item))}
              </ul>
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
