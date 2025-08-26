import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Users,
  CreditCard,
  FileText,
  UserCheck,
  Phone,
  Mail,
  Calendar,
  MapPin,
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { id: "overview", label: "Overview", href: "/" },
  {
    id: "claimdetails",
    label: "Claim Details",
    href: "/claimdetails",
  },
  {
    id: "claimants",
    label: "Claimants",
    href: "#", // Use # to prevent navigation when clicking
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
          },
          {
            id: "bi-payments-1",
            label: "Payments",
            href: "/claimants/amy-applegate/bodily-injury/payments",
          },
          {
            id: "bi-recovery-1",
            label: "Recovery",
            href: "#",
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
            ],
          },
          {
            id: "journal-1",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-1",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-1",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-1",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-1",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
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
          },
          {
            id: "bi-payments-2",
            label: "Payments",
            href: "/claimants/bob-pay/bodily-injury/payments",
          },
          {
            id: "bi-recovery-2",
            label: "Recovery",
            href: "#",
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
              },
            ],
          },
          {
            id: "journal-2",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-2",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-2",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-2",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-2",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
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
    ],
  },
  {
    id: "claim-history",
    label: "Claim History",
    href: "/claim-history",
  },
];

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  expandable?: boolean;
  subItems?: NavigationItem[];
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["claimants"]),
  );

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);

    // Check if this is a claimant item (claimant1, claimant2, etc.)
    const isClaimantItem = /^claimant\d+$/.test(itemId);

    if (isClaimantItem) {
      // Accordion behavior for claimants: only one can be expanded at a time
      if (newExpanded.has(itemId)) {
        // Collapse the clicked claimant
        newExpanded.delete(itemId);
      } else {
        // First collapse all other claimants
        const claimantIds = Array.from(newExpanded).filter((id) =>
          /^claimant\d+$/.test(id),
        );
        claimantIds.forEach((id) => newExpanded.delete(id));

        // Then expand the clicked claimant
        newExpanded.add(itemId);
      }
    } else {
      // Normal toggle behavior for non-claimant items
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
    }

    setExpandedItems(newExpanded);
  };


  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive =
      location.pathname === item.href ||
      location.pathname + location.search === item.href;
    const isExpanded = expandedItems.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const paddingLeft = sidebarCollapsed ? 12 : level * 16 + 12; // Adjust for collapsed state

    // Different styling for top-level items vs nested items
    if (level > 0) {
      // Special styling for claimant level (level 1)
      const isClaimantLevel = level === 1 && /^claimant\d+$/.test(item.id);

      // For claimant level items, create a container with clickable name and expand button
      if (isClaimantLevel) {
        return (
          <li key={item.id}>
            <div className="flex items-center">
              {/* Clickable claimant name */}
              <Link
                to={item.href}
                className={cn(
                  "flex-1 px-3 py-1.5 text-xs rounded transition-colors border-l-2 border-white/20",
                  isActive
                    ? "bg-white/15 text-white border-white/40"
                    : "text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30",
                  "font-medium",
                )}
                style={{
                  paddingLeft: `${level * 16 + 16}px`,
                }}
                role="menuitem"
                aria-label={item.label}
              >
                {item.label}
              </Link>

              {/* Expand/collapse button */}
              <button
                onClick={() => toggleExpanded(item.id)}
                className="px-2 py-1.5 text-white/70 hover:text-white transition-colors"
                aria-label={`Toggle ${item.label} sections`}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <ChevronDown size={12} className="text-white/80" />
                ) : (
                  <ChevronRight size={12} className="text-white/80" />
                )}
              </button>
            </div>

            {/* Sub-items */}
            {isExpanded && item.subItems && (
              <ul className="mt-1 ml-6 space-y-1">
                {item.subItems.map((subItem) =>
                  renderNavigationItem(subItem, level + 1),
                )}
              </ul>
            )}
          </li>
        );
      }

      // For sub-items under claimants (level 2+)
      if (item.expandable && hasSubItems) {
        // Expandable items like Recovery and Journal
        return (
          <li key={item.id}>
            <button
              onClick={() => toggleExpanded(item.id)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-1.5 text-xs rounded transition-colors border-l-2 border-white/20",
                isExpanded
                  ? "bg-white/15 text-white border-white/40"
                  : "text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30",
              )}
              style={{
                paddingLeft: `${level * 16 + 16}px`,
              }}
              role="menuitem"
              aria-label={item.label}
              aria-expanded={isExpanded}
            >
              <span>{item.label}</span>
              {isExpanded ? (
                <ChevronDown size={12} className="text-white/80" />
              ) : (
                <ChevronRight size={12} className="text-white/80" />
              )}
            </button>
            {isExpanded && item.subItems && (
              <ul className="mt-1 ml-6 space-y-1">
                {item.subItems.map((subItem) =>
                  renderNavigationItem(subItem, level + 1),
                )}
              </ul>
            )}
          </li>
        );
      } else {
        // Direct links like Reserves, Payments, and nested items under Recovery/Journal
        return (
          <li key={item.id}>
            <Link
              to={item.href}
              className={cn(
                "block px-3 py-1.5 text-xs rounded transition-colors border-l-2 border-white/20",
                isActive
                  ? "bg-white/15 text-white border-white/40"
                  : "text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30",
              )}
              style={{
                paddingLeft: `${level * 16 + 16}px`,
              }}
              role="menuitem"
              aria-label={item.label}
            >
              {item.label}
            </Link>
          </li>
        );
      }
    }

    // Top-level item styling
    return (
      <li key={item.id}>
        <button
          onClick={(e) => {
            if (hasSubItems && item.expandable && !sidebarCollapsed) {
              e.preventDefault();
              toggleExpanded(item.id);
            } else {
              // Navigate to the route if no sub-items or if collapsed
              window.location.href = item.href;
            }
          }}
          className={cn(
            "flex items-center rounded-lg text-sm transition-colors w-full",
            sidebarCollapsed
              ? "justify-center p-2"
              : "justify-between gap-3 px-3 py-2",
            isActive && !location.search
              ? "bg-white text-[#0054A6]"
              : "text-white/80 hover:bg-white/10 hover:text-white",
          )}
          title={sidebarCollapsed ? item.label : undefined}
          aria-label={item.label}
          aria-expanded={hasSubItems ? isExpanded : undefined}
          aria-haspopup={hasSubItems ? "menu" : undefined}
        >
          {sidebarCollapsed ? (
            <span className="text-xs font-medium">{item.label.charAt(0)}</span>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span>{item.label}</span>
                {item.id === "claimants" && item.subItems && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 text-white/80 text-xs rounded-full">
                    {item.subItems.length}
                  </span>
                )}
              </div>
              {hasSubItems &&
                item.expandable &&
                (isExpanded ? (
                  <ChevronDown size={14} className="text-white/80" />
                ) : (
                  <ChevronRight size={14} className="text-white/80" />
                ))}
            </>
          )}
        </button>

        {hasSubItems &&
          isExpanded &&
          !sidebarCollapsed &&
          item.id !== "claimants" && (
            <ul className="mt-1 ml-6 space-y-1">
              {item.subItems!.map((subItem) =>
                renderNavigationItem(subItem, level + 1),
              )}
            </ul>
          )}
        {hasSubItems &&
          isExpanded &&
          !sidebarCollapsed &&
          item.id === "claimants" && (
            <ul className="mt-1 ml-6 space-y-1">
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
        <div className="bg-[#0054A6] text-primary-foreground px-4 py-2 border-b">
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
              <span>
                Claim: <strong>23E:12345</strong>
              </span>
              <span>
                Policy: <strong>1-672148A</strong>
              </span>
              <span>
                Insured: <strong>Shubham Raut</strong>
              </span>
              <span>
                Claimant: <strong>Amy Applegate, Bob Pay</strong>
              </span>
              <span>
                DOL: <strong>12/31/2025</strong>
              </span>
              <span>
                Adjuster: <strong>Mital Patel</strong>
              </span>
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
        <div className="flex flex-1 overflow-hidden ">
          {/* Claims Center Sidebar */}
          <aside
            className={cn(
              "bg-gradient-to-b from-[#0054A6] to-[#003d7a] text-white shadow-sm h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300 flex flex-col",
              sidebarOpen ? "w-64 block" : "w-0 hidden",
              "lg:relative lg:top-0",
              sidebarOpen &&
                "lg:block fixed lg:relative inset-y-0 left-0 z-50 top-[120px] lg:top-0",
            )}
          >
            {/* Sidebar Header 
            <div className={cn("border-b border-white/20 py-3 flex items-center",
              sidebarCollapsed ? "px-2 justify-center" : "px-4 justify-between"
            )}>
              {!sidebarCollapsed && (
                <div>
                  <h2 className="text-lg font-semibold text-white">Claims Center</h2>
                </div>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-white hover:bg-white/10 p-1 rounded transition-colors"
                title={sidebarCollapsed ? "Expand Claims Center" : "Collapse Claims Center"}
              >
                <ChevronLeft size={16} className={cn("transition-transform", !sidebarCollapsed && "rotate-180")} />
              </button>
            </div> */}

            {/* Navigation */}
            <nav
              className="flex-1 px-3 py-4 overflow-y-auto"
              role="navigation"
              aria-label="Claims Center Navigation"
            >
              <ul className="space-y-1" role="menubar">
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
          <main className="flex-1 overflow-auto">{children}</main>

        </div>
      </div>
    </div>
  );
}
