import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-white border-b px-6 py-3">
      <div className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )}
            {item.href && !item.active ? (
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span 
                className={item.active ? "text-gray-900 font-medium" : "text-gray-600"}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
