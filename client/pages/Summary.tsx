import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ArrowUpDown,
} from "lucide-react";

type SortField =
  | "date"
  | "activity"
  | "actionTaker"
  | "claimNumber"
  | "incidentNumber"
  | "type"
  | "coverage"
  | "incurred"
  | "reserves"
  | "paid"
  | "recovery";
type SortDirection = "asc" | "desc";

export function Summary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activityFilter, setActivityFilter] = useState("all");
  const [expandedClaimant, setExpandedClaimant] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [relatedSortField, setRelatedSortField] =
    useState<SortField>("claimNumber");
  const [relatedSortDirection, setRelatedSortDirection] =
    useState<SortDirection>("asc");

  const toggleClaimantCollapse = (claimantId: string) => {
    setExpandedClaimant((prev) => prev === claimantId ? null : claimantId);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleRelatedSort = (field: SortField) => {
    if (relatedSortField === field) {
      setRelatedSortDirection(relatedSortDirection === "asc" ? "desc" : "asc");
    } else {
      setRelatedSortField(field);
      setRelatedSortDirection("asc");
    }
  };

  const getSortIcon = (
    field: SortField,
    currentField: SortField,
    direction: SortDirection,
  ) => {
    if (field !== currentField) return <ArrowUpDown className="h-3 w-3" />;
    return direction === "asc" ? (
      <ChevronUp className="h-3 w-3" />
    ) : (
      <ChevronDown className="h-3 w-3" />
    );
  };

  const breadcrumbItems = [
    { label: "Claims", href: "/claims" },
    { label: "Overview", active: true },
  ];

  // Sample data for Related Claims & Incidents
  const relatedClaims = [
    {
      id: "23E-1234",
      type: "Claim",
      description: "Property damage - Garage Fire",
      date: "2024-01-15",
    },
    {
      id: "23E-5678",
      type: "Claim",
      description: "Auto accident - Rear end collision",
      date: "2024-02-20",
    },
  ];

  const relatedIncidents = [
    {
      id: "INCIDENT-1234",
      type: "Incident",
      description: "Multi-vehicle collision",
      date: "2024-03-10",
    },
    {
      id: "INCIDENT-5678",
      type: "Incident",
      description: "Weather-related damage",
      date: "2024-03-25",
    },
  ];

  // Sample data for Activity Timeline
  const activityData = [
    {
      date: "07-01-25",
      activity: "Last Premium Paid - $150",
      actionTaker: "System",
    },
    {
      date: "06-30-25",
      activity: "Follow-up on recent claim #C1122 progress.",
      actionTaker: "UW John",
    },
    {
      date: "06-29-25",
      activity: "Confirmation of payment received premium.",
      actionTaker: "System",
    },
    {
      date: "06-28-25",
      activity: "Logged customer preference for email communication.",
      actionTaker: "Agent Johnson",
    },
  ];

  // Sample data for Amy Applegate Financial Summary
  const amyFinancialData = [
    {
      coverage: "Medical Payments",
      incurred: 585.0,
      reserves: 485.0,
      paid: 100.0,
      recovery: 0.0,
    },
    {
      coverage: "Liability - Bodily Injury",
      incurred: 15165.0,
      reserves: 7765.0,
      paid: 7400.0,
      recovery: 2100.0,
    },
    {
      coverage: "Property Damage",
      incurred: 3200.0,
      reserves: 800.0,
      paid: 2400.0,
      recovery: 0.0,
    },
  ];

  return (
    <div className="h-full bg-gray-50">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="p-6 space-y-6">
        {/* Full-Width Basic Information Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold">
              Basic Information
            </CardTitle>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status and Loss Description - Prominent placement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Status
                </label>
                <div className="flex items-center mt-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Open
                  </Badge>
                  <span className="text-sm text-gray-600 ml-2">
                    Open 24 days
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Loss Description
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Insured hit other party's car in the front passenger tire
                  while making a left turn at intersection. Multi-vehicle
                  collision with property damage and potential bodily injury
                  claims.
                </p>
              </div>
            </div>

            {/* Other Basic Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Claim Number
                </label>
                <p className="text-sm text-gray-600 mt-1">23E-12345</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Date of Loss
                </label>
                <p className="text-sm text-gray-600 mt-1">12/31/2025</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Loss Location
                </label>
                <p className="text-sm text-gray-600 mt-1">
                  1922 Patricia Ave, Arvada, CA
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Loss Type
                </label>
                <p className="text-sm text-gray-600 mt-1">Auto Accident</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Line of Business
                </label>
                <p className="text-sm text-gray-600 mt-1">Auto Insurance</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Policy Number
                </label>
                <p className="text-sm text-gray-600 mt-1">1-672148A</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Insured Name
                </label>
                <p className="text-sm text-gray-600 mt-1">Shubham Raut</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Assigned Adjuster
                </label>
                <div className="mt-1">
                  <p className="text-sm text-gray-600">Mital Patel</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <span className="text-xs">(555) 123-4567</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <span className="text-xs">mital@company.com</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Full-Width Financial Summary Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold">
              Financial Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Key Metrics */}
              <div className="space-y-4">
                {/* Total Incurred - Prominent */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-100">
                  <div>
                    <div className="text-sm font-medium text-blue-800 mb-1">
                      Total Incurred
                    </div>
                    <div className="text-3xl font-bold text-blue-900">
                      $13,150.00
                    </div>
                  </div>
                </div>

                {/* Grid of other metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Outstanding Reserves */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-800 mb-1">
                      Outstanding Reserves
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      $8,250
                    </div>
                    <div className="text-xs text-gray-600">
                      Reserve adequacy: Good
                    </div>
                  </div>

                  {/* Amount Paid */}
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-xs text-blue-800 mb-1">
                      Amount Paid
                    </div>
                    <div className="text-xl font-bold text-blue-900 mb-2">
                      $7,500
                    </div>
                    <div className="text-xs text-blue-600">
                      Last: Mar 20, 2024
                    </div>
                  </div>

                  {/* Recoveries */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-800 mb-1">
                      Recoveries
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      $2,100
                    </div>
                    <div className="text-xs text-gray-600">
                      13.3% recovery rate
                    </div>
                  </div>

                  {/* Deductible */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-800 mb-1">
                      Deductible
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      $500
                    </div>
                    <div className="text-xs text-gray-600">Collected</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Pie Chart */}
              <div className="flex flex-col">
                <div className="text-sm font-medium text-gray-700 mb-4 text-center">
                  Financial Breakdown
                </div>
                <div className="flex-1" style={{ minHeight: "250px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Paid", value: 7500, color: "#3b82f6" },
                          {
                            name: "Reserves",
                            value: 8250,
                            color: "#6b7280",
                          },
                          {
                            name: "Recoveries",
                            value: 2100,
                            color: "#64748b",
                          },
                          {
                            name: "Deductible",
                            value: 500,
                            color: "#475569",
                          },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        <Cell fill="#3b82f6" />
                        <Cell fill="#6b7280" />
                        <Cell fill="#64748b" />
                        <Cell fill="#475569" />
                      </Pie>
                      <Tooltip
                        formatter={(value) => [
                          `$${value.toLocaleString()}`,
                          "",
                        ]}
                        labelFormatter={(label) => `${label}`}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        wrapperStyle={{ fontSize: "12px" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Claimant Details */}
          <div className="space-y-6">
            {/* Claimant: Amy Applegate */}
            <Card>
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleClaimantCollapse("amy-applegate")}
            >
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                <div>
                  Claimant: Amy Applegate
                </div>
                {expandedClaimant !== "amy-applegate" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </CardTitle>
            </CardHeader>
            {expandedClaimant === "amy-applegate" && (
              <CardContent className="space-y-4 h-auto">
                {/* Financial Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md font-semibold">
                      Financial Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("coverage")}
                            >
                              <div className="flex items-center">
                                Coverage
                                {getSortIcon(
                                  "coverage",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("incurred")}
                            >
                              <div className="flex items-center justify-end">
                                Incurred
                                {getSortIcon(
                                  "incurred",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("reserves")}
                            >
                              <div className="flex items-center justify-end">
                                Reserves
                                {getSortIcon(
                                  "reserves",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("paid")}
                            >
                              <div className="flex items-center justify-end">
                                Paid
                                {getSortIcon(
                                  "paid",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("recovery")}
                            >
                              <div className="flex items-center justify-end">
                                Recovery
                                {getSortIcon(
                                  "recovery",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {amyFinancialData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-3 py-2">{item.coverage}</td>
                              <td className="px-3 py-2 text-right">
                                ${item.incurred.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.reserves.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.paid.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.recovery.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Diaries Card */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-md font-semibold">
                      Diaries
                    </CardTitle>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 text-sm"
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Follow up with medical provider
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              Due: 07-15-25
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-gray-700 border-gray-300"
                          >
                            Pending
                          </Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Review settlement documentation
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              Due: 07-20-25
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-blue-700 border-blue-300"
                          >
                            Scheduled
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Parties Card */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-md font-semibold">
                      Parties
                    </CardTitle>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 text-sm"
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>AA</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Amy Applegate
                            </p>
                            <p className="text-xs text-gray-500">
                              Claimant - Bodily Injury
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Phone
                          </Button>
                          <Button variant="ghost" size="sm">
                            Email
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Dr. Jane Doe
                            </p>
                            <p className="text-xs text-gray-500">
                              Medical Provider
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Phone
                          </Button>
                          <Button variant="ghost" size="sm">
                            Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>

            {/* Claimant: Bob Pay */}
            <Card>
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleClaimantCollapse("bob-pay")}
            >
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                <div>
                  Claimant: Bob Pay
                </div>
                {expandedClaimant !== "bob-pay" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </CardTitle>
            </CardHeader>
            {expandedClaimant === "bob-pay" && (
              <CardContent className="space-y-4 h-auto">
                {/* Financial Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md font-semibold">
                      Financial Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("coverage")}
                            >
                              <div className="flex items-center">
                                Coverage
                                {getSortIcon(
                                  "coverage",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("incurred")}
                            >
                              <div className="flex items-center justify-end">
                                Incurred
                                {getSortIcon(
                                  "incurred",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("reserves")}
                            >
                              <div className="flex items-center justify-end">
                                Reserves
                                {getSortIcon(
                                  "reserves",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("paid")}
                            >
                              <div className="flex items-center justify-end">
                                Paid
                                {getSortIcon(
                                  "paid",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-right font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleSort("recovery")}
                            >
                              <div className="flex items-center justify-end">
                                Recovery
                                {getSortIcon(
                                  "recovery",
                                  sortField,
                                  sortDirection,
                                )}
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {amyFinancialData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-3 py-2">{item.coverage}</td>
                              <td className="px-3 py-2 text-right">
                                ${item.incurred.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.reserves.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.paid.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-right">
                                ${item.recovery.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Diaries Card */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-md font-semibold">
                      Diaries
                    </CardTitle>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 text-sm"
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Follow up with medical provider
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              Due: 07-15-25
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-gray-700 border-gray-300"
                          >
                            Pending
                          </Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Review settlement documentation
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              Due: 07-20-25
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-blue-700 border-blue-300"
                          >
                            Scheduled
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Parties Card */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-md font-semibold">
                      Parties
                    </CardTitle>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 text-sm"
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>BP</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Bob Pay</p>
                            <p className="text-xs text-gray-500">
                              Claimant - Bodily Injury
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Phone
                          </Button>
                          <Button variant="ghost" size="sm">
                            Email
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Dr. Jane Doe
                            </p>
                            <p className="text-xs text-gray-500">
                              Medical Provider
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Phone
                          </Button>
                          <Button variant="ghost" size="sm">
                            Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>
          </div>

          {/* Right Column - Additional Cards */}
          <div className="space-y-6">

            {/* Related Claims & Incidents */}
            <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-semibold">
                Related Claims & Incidents
              </CardTitle>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-600"
                asChild
              >
                <RouterLink to="/related">View All</RouterLink>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Related Claims */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Claims (2)
                  </h4>
                  <div className="space-y-2">
                    {relatedClaims.map((claim) => (
                      <div key={claim.id} className="p-2 bg-gray-50 rounded text-sm">
                        <div className="font-medium text-blue-600">{claim.id}</div>
                        <div className="text-gray-600 text-xs">{claim.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Incidents */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Incidents (2)
                  </h4>
                  <div className="space-y-2">
                    {relatedIncidents.map((incident) => (
                      <div key={incident.id} className="p-2 bg-gray-50 rounded text-sm">
                        <div className="font-medium text-blue-600">{incident.id}</div>
                        <div className="text-gray-600 text-xs">{incident.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

            {/* Activity Timeline */}
            <Card>
            <CardHeader>
              <div className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold">
                  Activity Timeline
                </CardTitle>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600"
                  asChild
                >
                  <RouterLink to="/claim-history">View All</RouterLink>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityData.slice(0, 4).map((activity, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.activity}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {activity.date} • {activity.actionTaker}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

            {/* Vehicle Information */}
            <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-500" />
                Vehicle Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <label className="font-medium text-gray-900">Vehicle</label>
                    <p className="text-gray-600">2020 Honda Civic</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-900">VIN</label>
                    <p className="text-gray-600">1HGBH41JXMN109186</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-900">Damage</label>
                    <p className="text-gray-600">Front-end collision</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-900">Repair Shop</label>
                    <p className="text-gray-600">ABC Auto Repair</p>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated Repair:</span>
                    <span className="font-medium">$3,200</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

            {/* Document Management 
            <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <FileText className="h-5 w-5 mr-2 text-orange-500" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Police Report</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Medical Records</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Repair Estimates</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </CardContent>
          </Card> */}

            {/* Legal & Litigation Status */}
            <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                Legal Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Litigation Status</span>
                    <Badge variant="destructive">Active</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Suit filed on 03/15/2024</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Attorney</span>
                  <p className="text-sm text-gray-600">Smith & Associates Law</p>
                  <p className="text-xs text-gray-500">(555) 987-6543</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Next Hearing</span>
                  <p className="text-sm text-gray-600">August 15, 2025</p>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Legal Reserves:</span>
                    <span className="font-medium text-red-600">$25,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Bottom Section - Detailed Tables */}
        <div className="space-y-6">
          <Tabs defaultValue="reserves" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reserves">Reserve Analysis</TabsTrigger>
              <TabsTrigger value="coverage">Coverage Limits</TabsTrigger>
            </TabsList>

            <TabsContent value="coverage">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Coverage Detail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Coverage
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Limit
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Effective
                          </th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Expiration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">
                            Liability - Bodily Injury
                          </td>
                          <td className="px-4 py-3 text-right">$100,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">
                            Liability - Property Damage
                          </td>
                          <td className="px-4 py-3 text-right">$20,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Medical Payments</td>
                          <td className="px-4 py-3 text-right">$5,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Comprehensive</td>
                          <td className="px-4 py-3 text-right">$50,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Collision</td>
                          <td className="px-4 py-3 text-right">$50,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reserves">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Remaining Per Claim/Per Aggregate by Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Policy Coverage
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Remaining (Paid)
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Remaining (Incurred)
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Aggregate (Paid)
                          </th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Aggregate (Incurred)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">
                            Medical Payments
                          </td>
                          <td className="px-4 py-3 text-right">
                            $1,000,000.00
                          </td>
                          <td className="px-4 py-3 text-right">
                            $1,000,000.00
                          </td>
                          <td className="px-4 py-3 text-right">
                            $2,000,000.00
                          </td>
                          <td className="px-4 py-3 text-right">
                            $2,000,000.00
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">
                            Liability Coverage
                          </td>
                          <td className="px-4 py-3 text-right">$250,000.00</td>
                          <td className="px-4 py-3 text-right">$250,000.00</td>
                          <td className="px-4 py-3 text-right">$250,000.00</td>
                          <td className="px-4 py-3 text-right">$250,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
