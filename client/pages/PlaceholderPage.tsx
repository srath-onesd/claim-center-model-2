interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">
          {description || "This page is under construction. Continue prompting to add content here."}
        </p>
        <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
          <div className="text-gray-400 text-sm">
            Ready to build this section? Just ask me to add the specific functionality you need for this page.
          </div>
        </div>
      </div>
    </div>
  );
}
