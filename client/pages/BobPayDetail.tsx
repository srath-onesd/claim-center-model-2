import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  Shield,
  AlertCircle,
  ArrowLeft,
  Eye,
  Building,
  UserCheck,
  CheckCircle,
  ExternalLink,
  DollarSign,
  TrendingUp,
  CreditCard,
  Target,
  BarChart3,
  PieChart,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
  CalendarDays,
  Flag,
  Plus,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  Edit3,
} from "lucide-react";

type SortField =
  | "dueDate"
  | "title"
  | "priority"
  | "actions"
  | "coverage"
  | "limit"
  | "incurred"
  | "paid"
  | "reserve"
  | "recovery"
  | "available"
  | "date"
  | "activity"
  | "actionTaker";
type SortDirection = "asc" | "desc";

export function BobPayDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("dueDate");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [activitySortField, setActivitySortField] = useState<SortField>("date");
  const [activitySortDirection, setActivitySortDirection] = useState<SortDirection>("desc");
  const [diariesSortField, setDiariesSortField] = useState<SortField>("dueDate");
  const [diariesSortDirection, setDiariesSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleActivitySort = (field: SortField) => {
    if (activitySortField === field) {
      setActivitySortDirection(activitySortDirection === "asc" ? "desc" : "asc");
    } else {
      setActivitySortField(field);
      setActivitySortDirection("asc");
    }
  };

  const handleDiariesSort = (field: SortField) => {
    if (diariesSortField === field) {
      setDiariesSortDirection(diariesSortDirection === "asc" ? "desc" : "asc");
    } else {
      setDiariesSortField(field);
      setDiariesSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (field !== sortField) return <ArrowUpDown className="h-3 w-3" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="h-3 w-3" />
    ) : (
      <ChevronDown className="h-3 w-3" />
    );
  };

  const getActivitySortIcon = (
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

  const getDiariesSortIcon = (
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

  const claimantData = {
    name: "Bob Pay",
    displayName: "Bob Pay",
    initials: "BP",
    role: "Third Party Claimant",
    totalIncurred: "$8,450.00",
    reserves: "$4,500.00",
    paid: "$4,250.00",
    medicalPayments: "$2,000.00",
    bodilyInjury: "$6,450.00",
  };

  const customerData = {
    name: "Bob Pay",
    role: "Third Party Claimant",
    status: "Active",
    dateOfBirth: "••••••••",
    gender: "Male",
    lso: "456BB",
    phone: "(555) 987-6543",
    email: "bob.pay@example.com",
    address: "789 Oak Street, Los Angeles, CA 90210",
    memberSince: "2020",
    satisfactionScore: 4.5
  };

  const navigateToProfile = () => {
    // Handle navigation to profile
    console.log("Navigate to profile");
  };

  const breadcrumbItems = [
    { label: "Claims", href: "/claims" },
    { label: "Claimants", href: "/" },
    { label: claimantData.displayName, active: true },
  ];

  return (
    <div className="h-full bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-row items-center justify-between space-y-0 pb-4">
        <Breadcrumb items={breadcrumbItems} />
        <Button variant="ghost" size="sm" asChild>
          <RouterLink to="/" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Overview
          </RouterLink>
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Customer Information Card */}
        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0054A6] to-[#003d7a] rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-lg">
                    BP
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-900">{customerData.name}</h2>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {customerData.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-medium">{customerData.role}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={12} />
                      Customer since {customerData.memberSince}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 p-0 text-blue-600 hover:bg-blue-50"
                  onClick={navigateToProfile}
                >
                  <Edit3 size={12} />
                </Button>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-gray-400" />
                  <div>
                    <span className="text-xs text-gray-500">DOB</span>
                    <p className="text-sm font-medium">{customerData.dateOfBirth}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className="text-gray-400" />
                  <div>
                    <span className="text-xs text-gray-500">Gender</span>
                    <p className="text-sm font-medium">{customerData.gender}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-gray-400" />
                  <div>
                    <span className="text-xs text-gray-500">LSO#</span>
                    <p className="text-sm font-medium">{customerData.lso}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gray-400" />
                  <div className="min-w-0">
                    <span className="text-xs text-gray-500">Phone</span>
                    <p className="text-sm font-medium whitespace-nowrap">{customerData.phone}</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Mail size={14} className="text-gray-400" />
                  <div>
                    <span className="text-xs text-gray-500">Email</span>
                    <p className="text-sm font-medium">{customerData.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-gray-400" />
              <span className="text-gray-500">Address:</span>
              <span className="font-medium">{customerData.address}</span>
            </div>
          </CardContent>
        </Card>

        {/* Claimant Financial Information Panel */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              Financial Information
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
              <Edit3 size={12} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Claimant Total Incurred */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">
                  Total Incurred (This Claimant)
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {claimantData.totalIncurred}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gray-800 h-2 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  55% of available coverage
                </div>
              </div>

              {/* Outstanding Reserves */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">
                  Outstanding Reserves
                </div>
                <div className="text-2xl font-bold text-gray-600 mb-2">
                  {claimantData.reserves}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Reserve adequacy: Good
                </div>
              </div>

              {/* Amount Paid to Claimant */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                <div className="text-2xl font-bold text-gray-600 mb-2">
                  {claimantData.paid}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: "48%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Last payment: Feb 28, 2024
                </div>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-4 flex flex-row items-center justify-between space-y-0 pb-4">
                Coverage Breakdown
                <div className="flex justify-end">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Coverage
                  </Button>
                </div>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        className="px-4 py-3 text-left font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("coverage")}
                      >
                        <div className="flex items-center">
                          Coverage Type
                          {getSortIcon("coverage")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("limit")}
                      >
                        <div className="flex items-center justify-end">
                          Limit
                          {getSortIcon("limit")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("incurred")}
                      >
                        <div className="flex items-center justify-end">
                          Incurred
                          {getSortIcon("incurred")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("paid")}
                      >
                        <div className="flex items-center justify-end">
                          Paid
                          {getSortIcon("paid")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("reserve")}
                      >
                        <div className="flex items-center justify-end">
                          Reserve
                          {getSortIcon("reserve")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("recovery")}
                      >
                        <div className="flex items-center justify-end">
                          Recovery
                          {getSortIcon("recovery")}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer"
                        onClick={() => handleSort("available")}
                      >
                        <div className="flex items-center justify-end">
                          Available
                          {getSortIcon("available")}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="flex px-4 py-3 font-medium items-center justify-between">
                        Medical Payments
                        <Eye className="h-4 w-4" />
                      </td>
                      <td className="px-4 py-3 text-right">$5,000.00</td>
                      <td className="px-4 py-3 text-right">$2,000.00</td>
                      <td className="px-4 py-3 text-right">$1,800.00</td>
                      <td className="px-4 py-3 text-right">$300.00</td>
                      <td className="px-4 py-3 text-right">$100.00</td>
                      <td className="px-4 py-3 text-right text-blue-600">
                        $3,000.00
                      </td>
                    </tr>
                    <tr>
                      <td className="flex px-4 py-3 font-medium items-center justify-between">
                        Bodily Injury Liability
                        <Eye className="h-4 w-4" />
                      </td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$6,450.00</td>
                      <td className="px-4 py-3 text-right">$2,450.00</td>
                      <td className="px-4 py-3 text-right">$4,200.00</td>
                      <td className="px-4 py-3 text-right">$200.00</td>
                      <td className="px-4 py-3 text-right text-blue-600">
                        $43,550.00
                      </td>
                    </tr>
                    <tr>
                      <td className="flex px-4 py-3 font-medium items-center justify-between">Property Damage
                        <Eye className="h-4 w-4" />
                      </td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right text-blue-600">
                        $50,000.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Injury and Vehicle Details */}
          <div className="space-y-6">
            {/* Activity Timeline */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  Activity Timeline
                </CardTitle>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600 text-sm"
                  asChild
                >
                  <RouterLink to="/claim-history">View All</RouterLink>
                </Button>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleActivitySort("date")}
                        >
                          <div className="flex items-center">
                            Date
                            {getActivitySortIcon("date", activitySortField, activitySortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleActivitySort("activity")}
                        >
                          <div className="flex items-center">
                            Activity
                            {getActivitySortIcon("activity", activitySortField, activitySortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleActivitySort("actionTaker")}
                        >
                          <div className="flex items-center">
                            Action Taken By
                            {getActivitySortIcon("actionTaker", activitySortField, activitySortDirection)}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">07-05-25</td>
                        <td className="px-3 py-2">Medical payment processed - $800</td>
                        <td className="px-3 py-2">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">07-01-25</td>
                        <td className="px-3 py-2">
                          Follow-up call with claimant Bob Pay on treatment.
                        </td>
                        <td className="px-3 py-2">Mital Patel</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">06-28-25</td>
                        <td className="px-3 py-2">
                          Medical records received from treating physician.
                        </td>
                        <td className="px-3 py-2">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">06-25-25</td>
                        <td className="px-3 py-2">
                          Initial settlement demand received from claimant.
                        </td>
                        <td className="px-3 py-2">
                          Legal Dept
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Parties Details */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  Parties
                </CardTitle>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Claimant */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">Bob Pay</p>
                        <p className="text-xs text-gray-500">Third Party Claimant</p>
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

                  {/* Insured */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">Shubham Raut</p>
                        <p className="text-xs text-gray-500">Insured</p>
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

                  {/* Attorney */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">
                          Johnson & Associates
                        </p>
                        <p className="text-xs text-gray-500">Attorney</p>
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

                  {/* Repair Shop */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">Quick Repair</p>
                        <p className="text-xs text-gray-500">Repair Shop</p>
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

                  {/* Adjuster */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">Mital Patel</p>
                        <p className="text-xs text-gray-500">Adjuster</p>
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
          </div>

          {/* Right Column - Activity Timeline, Diaries, Documents, Parties Details */}
          <div className="space-y-6">
            

            {/* Diaries */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  Diaries
                </CardTitle>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600 text-sm"
                  asChild
                >
                  <RouterLink to="/diaries">View All</RouterLink>
                </Button>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleDiariesSort("dueDate")}
                        >
                          <div className="flex items-center">
                            Due Date
                            {getDiariesSortIcon("dueDate", diariesSortField, diariesSortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleDiariesSort("title")}
                        >
                          <div className="flex items-center">
                            Title
                            {getDiariesSortIcon("title", diariesSortField, diariesSortDirection)}
                          </div>
                        </th>
                        <th
                          className="px-3 py-2 text-left font-medium text-gray-900 cursor-pointer"
                          onClick={() => handleDiariesSort("priority")}
                        >
                          <div className="flex items-center">
                            Priority
                            {getDiariesSortIcon("priority", diariesSortField, diariesSortDirection)}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">08-12-25</td>
                        <td className="px-3 py-2">
                          Follow up on medical treatment completion - Bob Pay
                        </td>
                        <td className="px-3 py-2">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            High
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">08-18-25</td>
                        <td className="px-3 py-2">
                          Review settlement demand from Bob Pay's attorney
                        </td>
                        <td className="px-3 py-2">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            Medium
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">08-22-25</td>
                        <td className="px-3 py-2">
                          Schedule IME for Bob Pay claim evaluation
                        </td>
                        <td className="px-3 py-2">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            High
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">08-28-25</td>
                        <td className="px-3 py-2">
                          Process final medical payment - Bob Pay
                        </td>
                        <td className="px-3 py-2">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            Low
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
