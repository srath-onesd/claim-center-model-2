import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
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

export function BobPayDetail() {
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
    name: "Bob Pay",
    displayName: "Bob Pay",
    initials: "BP",
    role: "Third Party Claimant",
    totalIncurred: "$8,750.00",
    reserves: "$4,500.00",
    paid: "$4,250.00",
    medicalPayments: "$2,100.00",
    bodilyInjury: "$6,650.00",
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
          <RouterLink to="/">
            Back to Overview
          </RouterLink>
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Full-Width Claimant Information Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold">
              Claimant Information - {claimantData.displayName}
            </CardTitle>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status and Claimant Type - Prominent placement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Claimant Status
                </label>
                <div className="flex items-center mt-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Active
                  </Badge>
                  <span className="text-sm text-gray-600 ml-2">
                    Third Party Claimant
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Claim Type
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Bodily Injury
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Property Damage - Motor Vehicle Accident
                </p>
              </div>
            </div>

            {/* Other Claimant Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Date of Birth
                </label>
                <p className="text-sm text-gray-600 mt-1">**-**-****</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">(555) 987-6543</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Email Address
                </label>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">bob.pay@email.com</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Address
                </label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">
                    456 Oak St, Hometown, CA 90211
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Social Security
                </label>
                <p className="text-sm text-gray-600 mt-1">***-**-7890</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Driver's License
                </label>
                <p className="text-sm text-gray-600 mt-1">CA DL987654321</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Employment Status
                </label>
                <p className="text-sm text-gray-600 mt-1">Self-Employed</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Attorney
                </label>
                <p className="text-sm text-gray-600 mt-1">Smith Legal Group</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claimant Financial Information Panel */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Financial Information - {claimantData.displayName}
            </CardTitle>
            <Button variant="ghost" size="sm">
              Edit
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
                    style={{ width: "44%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  44% of available coverage
                </div>
              </div>

              {/* Outstanding Reserves */}
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">
                  Outstanding Reserves
                </div>
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {claimantData.reserves}
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: "51%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Reserve adequacy: Good
                </div>
              </div>

              {/* Amount Paid to Claimant */}
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {claimantData.paid}
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "49%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Last payment: Mar 10, 2024
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
                      <th className="px-4 py-3 text-left font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('coverage')}>
                        <div className="flex items-center">
                          Coverage Type
                          {getSortIcon('coverage')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('limit')}>
                        <div className="flex items-center justify-end">
                          Limit
                          {getSortIcon('limit')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('incurred')}>
                        <div className="flex items-center justify-end">
                          Incurred
                          {getSortIcon('incurred')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('paid')}>
                        <div className="flex items-center justify-end">
                          Paid
                          {getSortIcon('paid')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('reserve')}>
                        <div className="flex items-center justify-end">
                          Reserve
                          {getSortIcon('reserve')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('recovery')}>
                        <div className="flex items-center justify-end">
                          Recovery
                          {getSortIcon('recovery')}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900 cursor-pointer" onClick={() => handleSort('available')}>
                        <div className="flex items-center justify-end">
                          Available
                          {getSortIcon('available')}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Medical Payments
                      </td>
                      <td className="px-4 py-3 text-right">$5,000.00</td>
                      <td className="px-4 py-3 text-right">$2,100.00</td>
                      <td className="px-4 py-3 text-right">$1,500.00</td>
                      <td className="px-4 py-3 text-right">$600.00</td>
                      <td className="px-4 py-3 text-right">$100.00</td>
                      <td className="px-4 py-3 text-right text-green-600">
                        $2,900.00
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Bodily Injury Liability
                      </td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$6,650.00</td>
                      <td className="px-4 py-3 text-right">$2,750.00</td>
                      <td className="px-4 py-3 text-right">$3,900.00</td>
                      <td className="px-4 py-3 text-right">$300.00</td>
                      <td className="px-4 py-3 text-right text-green-600">
                        $43,350.00
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Property Damage</td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right text-green-600">
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
            {/* Add Coverage Button */}
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Coverage
              </Button>
            </div>

            {/* Injury Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  Bodily Injury Information
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Injury Type
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Lower back strain, knee contusion
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Injury Severity
                    </label>
                    <div className="flex items-center mt-1">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        Minor
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Treatment Status
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Completed treatment
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Medical Provider
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Westside Medical Center
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Date of First Treatment
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      January 5, 2024
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Expected Recovery Time
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      2-3 weeks (Completed)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-500" />
                  Vehicle & Property Damage
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Vehicle
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      2019 Toyota Camry
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      VIN
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      4T1C11AK5KU123456
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      License Plate
                    </label>
                    <p className="text-sm text-gray-600 mt-1">XYZ-9876</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Damage Assessment
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Rear bumper damage
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Repair Shop
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Quality Auto Body
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      Repair Cost Estimate
                    </label>
                    <p className="text-sm text-gray-600 mt-1">$3,200.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity Timeline, Diaries, Documents, Parties Details */}
          <div className="space-y-6">
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
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('date')}>
                          <div className="flex items-center">
                            Date
                            {getSortIcon('date')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('activity')}>
                          <div className="flex items-center">
                            Activity
                            {getSortIcon('activity')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('actionby')}>
                          <div className="flex items-center">
                            Action Taken By
                            {getSortIcon('actionby')}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          07-01-25
                        </td>
                        <td className="px-4 py-3">
                          Medical treatment completed - Final bill $1,850
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-28-25
                        </td>
                        <td className="px-4 py-3">
                          Follow-up appointment scheduled with Westside Medical
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">UW John</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-25-25
                        </td>
                        <td className="px-4 py-3">
                          Payment issued for vehicle repairs
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">System</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          06-20-25
                        </td>
                        <td className="px-4 py-3">
                          Repair estimate approved by adjuster
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          Agent Smith
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Diaries */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  Diaries
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="link" className="p-0 h-auto text-blue-600">View All</Button>
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
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('dueDate')}>
                          <div className="flex items-center">
                            Due Date
                            {getSortIcon('dueDate')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('title')}>
                          <div className="flex items-center">
                            Title
                            {getSortIcon('title')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('priority')}>
                          <div className="flex items-center">
                            Priority
                            {getSortIcon('priority')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer" onClick={() => handleSort('actions')}>
                          <div className="flex items-center">
                            Actions
                            {getSortIcon('actions')}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          08-10-25
                        </td>
                        <td className="px-4 py-3">
                          Final Settlement Review - Bob Pay
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800"
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
                          08-18-25
                        </td>
                        <td className="px-4 py-3">Vehicle Repair Inspection</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-800"
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
                          08-22-25
                        </td>
                        <td className="px-4 py-3">
                          Medical Records Review - Westside
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800"
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
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          09-05-25
                        </td>
                        <td className="px-4 py-3">
                          Final Documentation Review
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800"
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
                <Button variant="link" className="p-0 h-auto text-blue-600">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Claimant */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">
                          BP
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Bob Pay</p>
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
                        <AvatarFallback className="bg-purple-600 text-white">
                          SLG
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Smith Legal Group</p>
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

                  {/* Medical Provider 
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-green-600 text-white">WMC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Westside Medical Center</p>
                        <p className="text-xs text-gray-500">Medical Provider</p>
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
                  */}

                  {/* Repair Shop */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-orange-600 text-white">
                          QAB
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Quality Auto Body</p>
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
                        <AvatarFallback className="bg-blue-600 text-white">
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
          </div>
        </div>
      </div>
    </div>
  );
}
