import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Summary } from "./pages/Summary";
import { ClaimsDetail } from "./pages/ClaimsDetail";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/claims-detail" element={<ClaimsDetail />} />
            <Route path="/claimant" element={<PlaceholderPage title="Claimant Information" />} />
            <Route path="/any-applicable" element={<PlaceholderPage title="Any Applicable" />} />
            <Route path="/bodily-injury" element={<PlaceholderPage title="Bodily Injury" />} />
            <Route path="/fault-key" element={<PlaceholderPage title="Fault Key" />} />
            <Route path="/financials" element={<PlaceholderPage title="Financials" />} />
            <Route path="/recovery" element={<PlaceholderPage title="Recovery" />} />
            <Route path="/payments" element={<PlaceholderPage title="Payments" />} />
            <Route path="/recovery-2" element={<PlaceholderPage title="Recovery Details" />} />
            <Route path="/subrogation" element={<PlaceholderPage title="Subrogation" />} />
            <Route path="/unit-lookup" element={<PlaceholderPage title="Unit Lookup" />} />
            <Route path="/legal" element={<PlaceholderPage title="Legal" />} />
            <Route path="/property-damage" element={<PlaceholderPage title="Property Damage" />} />
            <Route path="/special" element={<PlaceholderPage title="Special" />} />
            <Route path="/reserves" element={<PlaceholderPage title="Reserves" />} />
            <Route path="/diary" element={<PlaceholderPage title="Diary" />} />
            <Route path="/notes" element={<PlaceholderPage title="Notes" />} />
            <Route path="/events" element={<PlaceholderPage title="Events" />} />
            <Route path="/documents" element={<PlaceholderPage title="Documents" />} />
            <Route path="/claim-history" element={<PlaceholderPage title="Claim History" />} />
            <Route path="/related" element={<PlaceholderPage title="Related Incidents and Claims" />} />
            <Route path="/coverage" element={<PlaceholderPage title="Coverage Details" />} />
            <Route path="/deductible" element={<PlaceholderPage title="Deductible Financials" />} />
            <Route path="/audit" element={<PlaceholderPage title="Audit Log" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
