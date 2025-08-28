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
  | "available";
type SortDirection = "asc" | "desc";

export function AmyApplegateDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("dueDate");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
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

  const claimantData = {
    name: "Amy Applegate",
    displayName: "Amy Applegate",
    initials: "AA",
    role: "Third Party Claimant",
    totalIncurred: "$12,450.00",
    reserves: "$7,250.00",
    paid: "$5,200.00",
    medicalPayments: "$3,850.00",
    bodilyInjury: "$8,600.00",
  };

  const customerData = {
    name: "Amy Applegate",
    role: "Lawyer",
    status: "Active",
    dateOfBirth: "••••••••",
    gender: "Female",
    lso: "123AA",
    phone: "(416) 555-0123",
    email: "rose.greenthumb@example.com",
    address: "1508 - 141 Lyon Court, Toronto, ON M5B 3H2",
    memberSince: "2019",
    satisfactionScore: 4.8
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
        {/* Full-Width Claimant Information Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              Claimant Information
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            {/* Profile-style layout matching screenshot */}
            <div className="flex items-start space-x-6">
              {/* Avatar section */}
              <div className="flex-shrink-0">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-600 text-white text-lg font-semibold">
                    AA
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Information section */}
              <div className="flex-1">
                {/* Name and Status row */}
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Amy Applegate
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Active
                  </Badge>
                </div>

                {/* Role */}
                <p className="text-sm text-gray-600 mb-4">
                  Third Party Claimant
                </p>

                {/* Information grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">DOB</span>
                    <span className="text-sm text-gray-900">**-**-****</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Gender</span>
                    <span className="text-sm text-gray-900">Female</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">SSN</span>
                    <span className="text-sm text-gray-900">***-**-4567</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Phone</span>
                    <span className="text-sm text-gray-900">
                      (555) 123-4567
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="text-sm text-gray-900">
                      amy.applegate@email.com
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Address</span>
                    <span className="text-sm text-gray-900">
                      123 Main St, Anytown, CA 90210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Information Card */}
        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0054A6] to-[#003d7a] rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-lg">
                    RK
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0054A6] rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-900">{customerData.name}</h2>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      <CheckCircle size={10} className="mr-1" />
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
              Financial Information - {claimantData.displayName}
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
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
                    style={{ width: "62%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  62% of available coverage
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
                    style={{ width: "70%" }}
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
                    style={{ width: "42%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Last payment: Mar 15, 2024
                </div>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-4">
                Coverage Breakdown - {claimantData.displayName}
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
                      <td className="px-4 py-3 text-right">$3,850.00</td>
                      <td className="px-4 py-3 text-right">$2,850.00</td>
                      <td className="px-4 py-3 text-right">$1,000.00</td>
                      <td className="px-4 py-3 text-right">$150.00</td>
                      <td className="px-4 py-3 text-right text-blue-600">
                        $1,150.00
                      </td>
                    </tr>
                    <tr>
                      <td className="flex px-4 py-3 font-medium items-center justify-between">
                        Bodily Injury Liability
                        <Eye className="h-4 w-4" />
                      </td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$8,600.00</td>
                      <td className="px-4 py-3 text-right">$2,350.00</td>
                      <td className="px-4 py-3 text-right">$6,250.00</td>
                      <td className="px-4 py-3 text-right">$500.00</td>
                      <td className="px-4 py-3 text-right text-blue-600">
                        $41,400.00
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Injury and Vehicle Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Timeline */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Activity Timeline
                </CardTitle>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  View All
                </Button>
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
                            {getSortIcon("date")}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("activity")}
                        >
                          <div className="flex items-center">
                            Activity
                            {getSortIcon("activity")}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("actionby")}
                        >
                          <div className="flex items-center">
                            Action Taken By
                            {getSortIcon("actionby")}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          07-01-25
                        </td>
                        <td className="px-4 py-3">Last Premium Paid - $150</td>
                        <td className="px-4 py-3 whitespace-nowrap">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-30-25
                        </td>
                        <td className="px-4 py-3">
                          Follow-up on recent claim #C1122 progress.
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">UW John</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-29-25
                        </td>
                        <td className="px-4 py-3">
                          Confirmation of payment received premium.
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-28-25
                        </td>
                        <td className="px-4 py-3">
                          Logged customer preference for email communication.
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          Agent Johnson
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
                  <UserCheck className="h-5 w-5 mr-2" />
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
                      <Avatar>
                        <AvatarFallback className="bg-gray-600 text-white">
                          AA
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Amy Applegate</p>
                        <p className="text-xs text-gray-500">Claimant</p>
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
                      <Avatar>
                        <AvatarFallback>SR</AvatarFallback>
                      </Avatar>
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
                      <Avatar>
                        <AvatarFallback className="bg-gray-600 text-white">
                          JA
                        </AvatarFallback>
                      </Avatar>
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
                      <Avatar>
                        <AvatarFallback>ABC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">ABC Auto Repair</p>
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
                      <Avatar>
                        <AvatarFallback className="bg-gray-600 text-white">
                          MP
                        </AvatarFallback>
                      </Avatar>
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
            
            {/* Add Coverage Button
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Coverage
              </Button>
            </div>
            */}
            {/* Injury Information 
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  Bodily Injury Information
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Injury Type
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Neck and back strain, whiplash
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Injury Severity
                    </label>
                    <div className="flex items-center mt-1">
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-800"
                      >
                        Moderate
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Treatment Status
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Ongoing physical therapy
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Date of First Treatment
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      January 2, 2024
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Expected Recovery Time
                    </label>
                    <p className="text-sm text-gray-600 mt-1">6-8 weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            */}
            {/* Vehicle Information 
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-500" />
                  Vehicle & Property Damage
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Vehicle
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      2020 Honda Civic
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      VIN
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      1HGCV1F30JA123456
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      License Plate
                    </label>
                    <p className="text-sm text-gray-600 mt-1">ABC-1234</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Damage Assessment
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Front-end collision damage
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Repair Shop
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      ABC Auto Repair
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Repair Cost Estimate
                    </label>
                    <p className="text-sm text-gray-600 mt-1">$8,500.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            */}
          </div>

          {/* Right Column - Activity Timeline, Diaries, Documents, Parties Details */}
          <div className="space-y-6">
            

            {/* Diaries */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  Diaries
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    View All
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
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
                          onClick={() => handleSort("dueDate")}
                        >
                          <div className="flex items-center">
                            Due Date
                            {getSortIcon("dueDate")}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("title")}
                        >
                          <div className="flex items-center">
                            Title
                            {getSortIcon("title")}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("priority")}
                        >
                          <div className="flex items-center">
                            Priority
                            {getSortIcon("priority")}
                          </div>
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                          onClick={() => handleSort("actions")}
                        >
                          <div className="flex items-center">
                            Actions
                            {getSortIcon("actions")}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          08-15-25
                        </td>
                        <td className="px-4 py-3">
                          Policy Renewal Review - Auto
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800"
                          >
                            High
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-blue-600"
                          >
                            Close
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          08-20-25
                        </td>
                        <td className="px-4 py-3">
                          Annual Policy Audit – Rose K
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            Medium
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-blue-600"
                          >
                            Close
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          08-25-25
                        </td>
                        <td className="px-4 py-3">
                          Review & Approve Claim #C1189
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800"
                          >
                            High
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-blue-600"
                          >
                            Close
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          09-01-25
                        </td>
                        <td className="px-4 py-3">
                          Financial Statement Review – Rose K
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                          >
                            Low
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-blue-600"
                          >
                            Close
                          </Button>
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
