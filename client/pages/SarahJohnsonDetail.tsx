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

export function SarahJohnsonDetail() {
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
    name: "Sarah Johnson",
    displayName: "Sarah Johnson",
    initials: "SJ",
    role: "First Party Claimant",
    totalIncurred: "$12,450.00",
    reserves: "$6,800.00",
    paid: "$5,650.00",
    medicalPayments: "$3,200.00",
    bodilyInjury: "$9,250.00",
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
              <User className="h-5 w-5 mr-2" />
              Claimant Information - {claimantData.displayName}
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
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
                    First Party Claimant
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
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">**-**-****</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">(555) 456-7890</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Email Address
                </label>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">sarah.johnson@email.com</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Address
                </label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">
                    789 Pine St, Springfield, IL 62701
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Social Security
                </label>
                <p className="text-sm text-gray-600 mt-1">***-**-2345</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Driver's License
                </label>
                <p className="text-sm text-gray-600 mt-1">IL DL234567890</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Employment Status
                </label>
                <p className="text-sm text-gray-600 mt-1">Teacher</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Attorney
                </label>
                <p className="text-sm text-gray-600 mt-1">Johnson & Associates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rest of the component follows the same pattern as BobPayDetail but with Sarah Johnson's data */}
        {/* Financial Information Panel */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
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
                    style={{ width: "56%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  56% of available coverage
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
                    style={{ width: "55%" }}
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
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Last payment: Mar 15, 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
