import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { id: "overview", label: 'Overview', href: '/', icon: '📋' },
  { id: "claimdetails", label: 'Claim Details', href: '/claimdetails', icon: '📋' },
  {
    id: "claimants",
    label: 'Claimants',
    href: '/claimants',
    icon: '👤',
    expandable: true,
    subItems: [
      {
        id: "claimant1",
        label: "Amy Applegate",
        href: "/claimants/amy-applegate",
        expandable: true,
        subItems: [
          { id: "pc-liability-1", label: "Bodily Injury", href: "/claimants/amy-applegate/bodily-injury" },
          { id: "pd-liability-1", label: "Property Damage", href: "/claimants/amy-applegate/property-damage" }
        ]
      },
      {
        id: "claimant2",
        label: "Bob Pay",
        href: "/claimants/bob-pay",
        expandable: true,
        subItems: [
          { id: "pc-liability-2", label: "Bodily Injury", href: "/exposures/bob-pay/bodily-injury" },
          { id: "pd-liability-2", label: "Property Damage", href: "/exposures/bob-pay/property-damage" }
        ]
      }
    ]
  },
  {
    id: "financials",
    label: 'Financials',
    href: '/financials',
    icon: '💰',
    expandable: true,
    subItems: [
      { id: "reserves", label: 'Reserves', href: '/financials/reserves', icon: '💳' },
      { id: "payments", label: 'Payments', href: '/financials/payments', icon: '💳' },
      {
        id: "recovery",
        label: 'Recovery',
        href: '/financials/recovery',
        icon: '🔄',
        expandable: true,
        subItems: [
          { id: "subrogation", label: "Bodily Injury", href: "/financials/recovery/subrogation" },
          { id: "financialreceipts", label: "Financial Receipts", href: "/financials/recovery/financialreceipts" },
          { id: "pd-liability-2", label: "Property Damage", href: "/financials/recovery/Deductible" }
        ]
      }
    ]
  },
  { id: "subrogation", label: 'Subrogation', href: '/subrogation', icon: '⚖️' },
  { id: "unit-lookup", label: 'Unit Lookup', href: '/unit-lookup', icon: '🔍' },
  { id: "legal", label: 'Legal', href: '/legal', icon: '⚖️' },
  { id: "property-damage", label: 'Property Damage', href: '/property-damage', icon: '🏠' },
  { id: "special", label: 'Special', href: '/special', icon: '⭐' },
  { id: "reserves", label: 'Reserves', href: '/reserves', icon: '💰' },
  { id: "diary", label: 'Diary', href: '/diary', icon: '📅' },
  { id: "notes", label: 'Notes', href: '/notes', icon: '📝' },
  { id: "events", label: 'Events', href: '/events', icon: '📅' },
  { id: "documents", label: 'Documents', href: '/documents', icon: '📄' },
  { id: "claim-history", label: 'Claim History', href: '/claim-history', icon: '📚' }
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
    const isExpanded = expandedItems.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const paddingLeft = level * 16 + 12; // Increase indent for each level

    return (
      <li key={item.id}>
        <div
          className={cn(
            "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
            location.pathname === item.href
              ? "bg-primary text-primary-foreground"
              : "text-gray-700 hover:bg-gray-100"
          )}
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <Link
            to={item.href}
            onClick={() => setSidebarOpen(true)}
            className="flex items-center space-x-3 flex-1"
          >
            {level === 0 && item.icon && <span className="text-lg">{item.icon}</span>}
            <span>{item.label}</span>
          </Link>
          {hasSubItems && item.expandable && (
            <button
              onClick={() => toggleExpanded(item.id)}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        {hasSubItems && isExpanded && (
          <ul className="mt-1 space-y-1">
            {item.subItems!.map((subItem) => renderNavigationItem(subItem, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4" style={{width: "1200px"}}>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded"><p>Open</p></span>
              <div className="hidden sm:flex items-center space-x-4 text-sm" style={{width: "1200px"}}>
                <span><p>Claim: <strong>23E:12345</strong></p></span>
                <span><p>Policy: <strong>54:123456</strong></p></span>
                <span><p>Insured: <strong>Shubham Raut</strong></p></span>
                <span><p>Claimant: <strong>Amy Applegate, Bob Pay</strong></p></span>
                <span><p>DOL: <strong>31/12/2025</strong></p></span>
                <span><p>Adjuster: <strong>Mitali</strong></p></span>
                <button style={{
                  position: "fixed",
                  top: "2%",
                  right: "120px",
                  transform: "translateY(-50%)",
                  padding: "6px 10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  margin: "15px 0 0 auto",
                }}>
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation
        <div className="border-t border-primary-foreground/20">
          <div className="flex px-4 overflow-x-auto">
            {headerTabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={cn(
                  "px-4 py-2 text-sm border-b-2 transition-colors whitespace-nowrap",
                  tab.active || location.pathname === tab.href
                    ? "border-white bg-white/10"
                    : "border-transparent hover:bg-white/5"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div> */}
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn(
          "bg-white border-r border-gray-200 h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300",
          sidebarOpen ? "w-64 block" : "w-0 hidden",
          "lg:relative lg:top-0",
          sidebarOpen && "lg:block fixed lg:relative inset-y-0 left-0 z-50 top-[120px] lg:top-0"
        )}>
          <nav className="p-4">
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
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
