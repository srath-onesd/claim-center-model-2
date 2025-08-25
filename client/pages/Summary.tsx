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
  MapPin,
  Calendar,
  Phone,
  Mail,
  FileText,
  Upload,
  Download,
  Search,
  Edit,
  Clock,
  User,
  DollarSign,
  TrendingUp,
  Shield,
  AlertCircle,
  Link,
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
  const [collapsedClaimants, setCollapsedClaimants] = useState<{
    [key: string]: boolean;
  }>({});
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [relatedSortField, setRelatedSortField] =
    useState<SortField>("claimNumber");
  const [relatedSortDirection, setRelatedSortDirection] =
    useState<SortDirection>("asc");

  const toggleClaimantCollapse = (claimantId: string) => {
    setCollapsedClaimants((prev) => ({
      ...prev,
      [claimantId]: !prev[claimantId],
    }));
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

      {/* Search Bar */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search within claim data and logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Full-Width Basic Information Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold">
              Basic Information
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
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
                    className="bg-green-100 text-green-800"
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
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">12/31/2025</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Loss Location
                </label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">
                    1922 Patricia Ave, Arvada, CA
                  </p>
                </div>
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
                      <Phone className="h-3 w-3 mr-1" />
                      <span className="text-xs">(555) 123-4567</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="text-xs">mital@company.com</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Claimant Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Financial Information Panel */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold">
                  Financial Information
                </CardTitle>
                {/*}
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                */}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Total Incurred */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">
                      Total Incurred
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      $15,750.00
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      78% of policy limit
                    </div>
                  </div>

                  {/* Outstanding Reserves */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">
                      Outstanding Reserves
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      $8,250.00
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-gray-600 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Reserve adequacy: Good
                    </div>
                  </div>

                  {/* Amount Paid */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">
                      Amount Paid
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      $7,500.00
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Last payment: Mar 20, 2024
                    </div>
                  </div>

                  {/* Recoveries */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Recoveries</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      $2,100.00
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "33%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Recovery rate: 13.3%
                    </div>
                  </div>

                  {/* Deductible */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Deductible</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      $500.00
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Collected from insured
                    </div>
                  </div>

                  {/* Coverage Limits 
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Coverage Limits</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">$20,000.00</div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Property Damage limit</div>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Claimant: Amy Applegate */}
            <Card>
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleClaimantCollapse("amy-applegate")}
              >
                <CardTitle className="text-lg font-semibold flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Claimant: Amy Applegate
                  </div>
                  {collapsedClaimants["amy-applegate"] ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </CardTitle>
              </CardHeader>
              {!collapsedClaimants["amy-applegate"] && (
                <CardContent className="space-y-6">
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
                        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
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
                              className="text-yellow-700 border-yellow-300"
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
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
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
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bodily Injury Section 
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-md mb-3 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                      Bodily Injury
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-900">Injury Type</label>
                        <p className="text-sm text-gray-600 mt-1">Neck and back strain</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Treatment Status</label>
                        <p className="text-sm text-gray-600 mt-1">Ongoing physical therapy</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Medical Provider</label>
                        <p className="text-sm text-gray-600 mt-1">City General Hospital</p>
                      </div>
                    </div>
                  </div> */}

                  {/* Property Damage Section 
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-md mb-3 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-500" />
                      Property Damage
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-900">Vehicle</label>
                        <p className="text-sm text-gray-600 mt-1">2020 Honda Civic</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Damage Assessment</label>
                        <p className="text-sm text-gray-600 mt-1">Front-end collision damage</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Repair Shop</label>
                        <p className="text-sm text-gray-600 mt-1">ABC Auto Repair</p>
                      </div>
                    </div>
                  </div> */}
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
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Claimant: Bob Pay
                  </div>
                  {collapsedClaimants["bob-pay"] ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </CardTitle>
              </CardHeader>
              {!collapsedClaimants["bob-pay"] && (
                <CardContent className="space-y-4">
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
                        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
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
                              className="text-yellow-700 border-yellow-300"
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
                              <p className="text-sm font-medium">Bob Pay</p>
                              <p className="text-xs text-gray-500">
                                Claimant - Bodily Injury
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
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
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
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

          {/* Right Column - Related Claims, Timeline, Documents, Contacts */}
          <div className="space-y-6">
            {/* Related Claims & Incidents */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Link className="h-5 w-5 mr-2" />
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
                <div className="space-y-6">
                  {/* Related Claims Grid */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Claims
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleRelatedSort("claimNumber")}
                            >
                              <div className="flex items-center">
                                Claim #
                                {getSortIcon(
                                  "claimNumber",
                                  relatedSortField,
                                  relatedSortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleRelatedSort("type")}
                            >
                              <div className="flex items-center">
                                Description
                                {getSortIcon(
                                  "type",
                                  relatedSortField,
                                  relatedSortDirection,
                                )}
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {relatedClaims.map((claim) => (
                            <tr key={claim.id} className="hover:bg-gray-50">
                              <td className="px-3 py-2">
                                <Button
                                  variant="link"
                                  className="p-0 h-auto text-blue-600 font-medium"
                                >
                                  {claim.id}
                                </Button>
                              </td>
                              <td className="px-3 py-2 text-gray-600">
                                {claim.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Related Incidents Grid */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Incidents
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() =>
                                handleRelatedSort("incidentNumber")
                              }
                            >
                              <div className="flex items-center">
                                Incident #
                                {getSortIcon(
                                  "incidentNumber",
                                  relatedSortField,
                                  relatedSortDirection,
                                )}
                              </div>
                            </th>
                            <th
                              className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                              onClick={() => handleRelatedSort("type")}
                            >
                              <div className="flex items-center">
                                Description
                                {getSortIcon(
                                  "type",
                                  relatedSortField,
                                  relatedSortDirection,
                                )}
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {relatedIncidents.map((incident) => (
                            <tr key={incident.id} className="hover:bg-gray-50">
                              <td className="px-3 py-2">
                                <Button
                                  variant="link"
                                  className="p-0 h-auto text-blue-600 font-medium"
                                >
                                  {incident.id}
                                </Button>
                              </td>
                              <td className="px-3 py-2 text-gray-600">
                                {incident.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline/Activity Log */}
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
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
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("date")}
                        >
                          <div className="flex items-center">
                            Date
                            {getSortIcon("date", sortField, sortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("activity")}
                        >
                          <div className="flex items-center">
                            Activity
                            {getSortIcon("activity", sortField, sortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("actionTaker")}
                        >
                          <div className="flex items-center">
                            Action Taken By
                            {getSortIcon(
                              "actionTaker",
                              sortField,
                              sortDirection,
                            )}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {activityData.map((activity, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap">
                            {activity.date}
                          </td>
                          <td className="px-4 py-3">{activity.activity}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {activity.actionTaker}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
