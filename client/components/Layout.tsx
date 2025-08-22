import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { id: "overview", label: "Overview", href: "/", icon: "" },
  {
    id: "claimdetails",
    label: "Claim Details",
    href: "/claimdetails",
    icon: "",
  },
  {
    id: "claimants",
    label: "Claimants",
    href: "#", // Use # to prevent navigation when clicking
    icon: "",
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
      {
        id: "claimant3",
        label: "Sarah Johnson",
        href: "/claimants/sarah-johnson",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-3",
            label: "Reserves",
            href: "/claimants/sarah-johnson/bodily-injury/reserves",
          },
          {
            id: "bi-payments-3",
            label: "Payments",
            href: "/claimants/sarah-johnson/bodily-injury/payments",
          },
          {
            id: "bi-recovery-3",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-3",
                label: "Subrogation",
                href: "/claimants/sarah-johnson/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-3",
                label: "Financial Receipts",
                href: "/claimants/sarah-johnson/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-3",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-3",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-3",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-3",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-3",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant4",
        label: "Michael Chen",
        href: "/claimants/michael-chen",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-4",
            label: "Reserves",
            href: "/claimants/michael-chen/bodily-injury/reserves",
          },
          {
            id: "bi-payments-4",
            label: "Payments",
            href: "/claimants/michael-chen/bodily-injury/payments",
          },
          {
            id: "bi-recovery-4",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-4",
                label: "Subrogation",
                href: "/claimants/michael-chen/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-4",
                label: "Financial Receipts",
                href: "/claimants/michael-chen/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-4",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-4",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-4",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-4",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-4",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant5",
        label: "Lisa Rodriguez",
        href: "/claimants/lisa-rodriguez",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-5",
            label: "Reserves",
            href: "/claimants/lisa-rodriguez/bodily-injury/reserves",
          },
          {
            id: "bi-payments-5",
            label: "Payments",
            href: "/claimants/lisa-rodriguez/bodily-injury/payments",
          },
          {
            id: "bi-recovery-5",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-5",
                label: "Subrogation",
                href: "/claimants/lisa-rodriguez/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-5",
                label: "Financial Receipts",
                href: "/claimants/lisa-rodriguez/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-5",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-5",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-5",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-5",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-5",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant6",
        label: "David Williams",
        href: "/claimants/david-williams",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-6",
            label: "Reserves",
            href: "/claimants/david-williams/bodily-injury/reserves",
          },
          {
            id: "bi-payments-6",
            label: "Payments",
            href: "/claimants/david-williams/bodily-injury/payments",
          },
          {
            id: "bi-recovery-6",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-6",
                label: "Subrogation",
                href: "/claimants/david-williams/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-6",
                label: "Financial Receipts",
                href: "/claimants/david-williams/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-6",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-6",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-6",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-6",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-6",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant7",
        label: "Jennifer Davis",
        href: "/claimants/jennifer-davis",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-7",
            label: "Reserves",
            href: "/claimants/jennifer-davis/bodily-injury/reserves",
          },
          {
            id: "bi-payments-7",
            label: "Payments",
            href: "/claimants/jennifer-davis/bodily-injury/payments",
          },
          {
            id: "bi-recovery-7",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-7",
                label: "Subrogation",
                href: "/claimants/jennifer-davis/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-7",
                label: "Financial Receipts",
                href: "/claimants/jennifer-davis/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-7",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-7",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-7",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-7",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-7",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant8",
        label: "Robert Miller",
        href: "/claimants/robert-miller",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-8",
            label: "Reserves",
            href: "/claimants/robert-miller/bodily-injury/reserves",
          },
          {
            id: "bi-payments-8",
            label: "Payments",
            href: "/claimants/robert-miller/bodily-injury/payments",
          },
          {
            id: "bi-recovery-8",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-8",
                label: "Subrogation",
                href: "/claimants/robert-miller/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-8",
                label: "Financial Receipts",
                href: "/claimants/robert-miller/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-8",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-8",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-8",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-8",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-8",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant9",
        label: "Emily Thompson",
        href: "/claimants/emily-thompson",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-9",
            label: "Reserves",
            href: "/claimants/emily-thompson/bodily-injury/reserves",
          },
          {
            id: "bi-payments-9",
            label: "Payments",
            href: "/claimants/emily-thompson/bodily-injury/payments",
          },
          {
            id: "bi-recovery-9",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-9",
                label: "Subrogation",
                href: "/claimants/emily-thompson/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-9",
                label: "Financial Receipts",
                href: "/claimants/emily-thompson/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-9",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-9",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-9",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-9",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-9",
                label: "Emails",
                href: "/journal/emails",
              },
            ],
          },
        ],
      },
      {
        id: "claimant10",
        label: "James Anderson",
        href: "/claimants/james-anderson",
        expandable: true,
        subItems: [
          {
            id: "bi-reserves-10",
            label: "Reserves",
            href: "/claimants/james-anderson/bodily-injury/reserves",
          },
          {
            id: "bi-payments-10",
            label: "Payments",
            href: "/claimants/james-anderson/bodily-injury/payments",
          },
          {
            id: "bi-recovery-10",
            label: "Recovery",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "subrogation-10",
                label: "Subrogation",
                href: "/claimants/james-anderson/bodily-injury/recovery/Subrogation",
              },
              {
                id: "finreceipts-10",
                label: "Financial Receipts",
                href: "/claimants/james-anderson/bodily-injury/recovery/finreceipts",
              },
            ],
          },
          {
            id: "journal-10",
            label: "Journal",
            href: "#",
            expandable: true,
            subItems: [
              {
                id: "diary-10",
                label: "Diary",
                href: "/journal/diary",
              },
              {
                id: "notes-10",
                label: "Notes",
                href: "/journal/notes",
              },
              {
                id: "documents-10",
                label: "Documents",
                href: "/journal/documents",
              },
              {
                id: "emails-10",
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
  icon?: string;
  expandable?: boolean;
  subItems?: NavigationItem[];
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['claimants']));

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
        const claimantIds = Array.from(newExpanded).filter(id => /^claimant\d+$/.test(id));
        claimantIds.forEach(id => newExpanded.delete(id));

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
    const isActive = location.pathname === item.href || location.pathname + location.search === item.href;
    const isExpanded = expandedItems.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const paddingLeft = sidebarCollapsed ? 12 : level * 16 + 12; // Adjust for collapsed state

    // Different styling for top-level items vs nested items
    if (level > 0) {
      // Special styling for claimant level (level 1)
      const isClaimantLevel = level === 1 && /^claimant\d+$/.test(item.id);

      // Nested item styling (like CustomerCenterSidebar)
      return (
        <li key={item.id}>
          <div className={cn(
            "flex items-center justify-between",
            isClaimantLevel && isExpanded && "bg-white/5 rounded-lg p-1"
          )}>
            <Link
              to={item.href}
              className={cn(
                "block px-3 py-1.5 text-xs rounded transition-colors border-l-2 border-white/20 flex-1",
                isActive
                  ? "bg-white/15 text-white border-white/40"
                  : isClaimantLevel && isExpanded
                  ? "text-white/90 hover:bg-white/10 hover:text-white hover:border-white/30"
                  : "text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30",
                isClaimantLevel && "font-medium"
              )}
              style={{
                paddingLeft: `${level * 16 + 16}px`,
              }}
              role="menuitem"
              aria-label={item.label}
            >
              {isClaimantLevel && isExpanded && "📋 "}{item.label}
            </Link>
            {hasSubItems && item.expandable && !sidebarCollapsed && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleExpanded(item.id);
                }}
                className={cn(
                  "p-1 hover:bg-white/10 rounded mr-2",
                  isClaimantLevel ? "text-white/90" : "text-white/80"
                )}
                title={isClaimantLevel ? "Click to expand (closes other claimants)" : "Expand/collapse"}
              >
                {isExpanded ? (
                  <ChevronDown size={isClaimantLevel ? 14 : 12} />
                ) : (
                  <ChevronRight size={isClaimantLevel ? 14 : 12} />
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
            sidebarCollapsed ? "justify-center p-2" : "justify-between gap-3 px-3 py-2",
            isActive && !location.search
              ? "bg-white text-[#0054A6]"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          )}
          title={sidebarCollapsed ? item.label : undefined}
          aria-label={item.label}
          aria-expanded={hasSubItems ? isExpanded : undefined}
          aria-haspopup={hasSubItems ? "menu" : undefined}
        >
          {sidebarCollapsed ? (
            item.icon && (
              item.id === "deductible-1" ? (
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00"
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00"
                  alt="Deductible icon"
                  className="w-4.5 h-4.5 object-cover"
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span className="text-lg">{item.icon}</span>
              )
            )
          ) : (
            <>
              <div className="flex items-center gap-3">
                {item.icon && (
                  item.id === "deductible-1" ? (
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00"
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdcea8f7c76214c969c15d3192f8848fc%2Fcab0ba5ef99146c6bf07272f360d9b00"
                      alt="Deductible icon"
                      className="w-4.5 h-4.5 object-cover"
                      style={{
                        width: "18px",
                        height: "18px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span className="text-lg">{item.icon}</span>
                  )
                )}
                <span>{item.label}</span>
                {item.id === "claimants" && item.subItems && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 text-white/80 text-xs rounded-full">
                    {item.subItems.length}
                  </span>
                )}
              </div>
              {hasSubItems && item.expandable && (
                isExpanded ?
                  <ChevronDown size={14} className="text-white/80" /> :
                  <ChevronRight size={14} className="text-white/80" />
              )}
            </>
          )}
        </button>

        {hasSubItems && isExpanded && !sidebarCollapsed && (
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
            <nav className="flex-1 px-3 py-4 overflow-y-auto" role="navigation" aria-label="Claims Center Navigation">
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
