import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { name: 'Claim Details', href: '/', icon: '📋' },
  { name: 'Claimant', href: '/claimant', icon: '👤' },
  { name: 'Any Applicable', href: '/any-applicable', icon: '📄' },
  { name: 'Bodily Injury', href: '/bodily-injury', icon: '🏥' },
  { name: 'Fault Key', href: '/fault-key', icon: '🔑' },
  { name: 'Financials', href: '/financials', icon: '💰' },
  { name: 'Recovery', href: '/recovery', icon: '🔄' },
  { name: 'Payments', href: '/payments', icon: '💳' },
  { name: 'Recovery Analysis', href: '/recovery-2', icon: '📊' },
  { name: 'Subrogation', href: '/subrogation', icon: '⚖️' },
  { name: 'Unit Lookup', href: '/unit-lookup', icon: '🔍' },
  { name: 'Legal', href: '/legal', icon: '⚖️' },
  { name: 'Property Damage', href: '/property-damage', icon: '🏠' },
  { name: 'Special', href: '/special', icon: '⭐' },
  { name: 'Reserves', href: '/reserves', icon: '💰' },
  { name: 'Diary', href: '/diary', icon: '📅' },
  { name: 'Notes', href: '/notes', icon: '📝' },
  { name: 'Events', href: '/events', icon: '📅' },
  { name: 'Documents', href: '/documents', icon: '📄' },
  { name: 'Claim History', href: '/claim-history', icon: '📚' }
];

const headerTabs = [
  { name: 'Claim', href: '/', active: true },
  { name: 'Claimant', href: '/claimant', active: false },
  { name: 'Related Incidents and Claims', href: '/related', active: false },
  { name: 'Coverage Details', href: '/coverage', active: false },
  { name: 'Deductible Financials', href: '/deductible', active: false },
  { name: 'Audit Log', href: '/audit', active: false },
  { name: 'Journal', href: '/journal', active: false }
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="px-4 py-2" style={{width: "100vw"}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded"><p>Open</p></span>
              <div className="hidden sm:flex items-center space-x-4 text-sm">
                <span><p>Claim: <strong>23E:12345</strong></p></span>
                <span><p>Policy: <strong>54:123456</strong></p></span>
                <span><p>Insured: <strong>Shubham Raut</strong></p></span>
                <span><p>Claimant: <strong>Amy Applegate, Bob Pay</strong></p></span>
                <span><p>DOL: <strong>31/12/2025</strong></p></span>
                <span><p>Adjuster: <strong>Mitali</strong></p></span>
                <button style={{
                  top: "32%",
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
                  zIndex: 1000
                }}>
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation }
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
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setSidebarOpen(true)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
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
