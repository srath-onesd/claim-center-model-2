import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  MapPin,
  Calendar,
  Phone,
  Mail,
  Edit,
  User,
  ArrowLeft,
  DollarSign,
} from "lucide-react";

export function DavidWilliamsDetail() {
  const claimantData = {
    name: "David Williams",
    displayName: "David Williams",
    totalIncurred: "$11,250.00",
    reserves: "$5,800.00",
    paid: "$5,450.00",
  };

  const breadcrumbItems = [
    { label: "Claims", href: "/claims" },
    { label: "Claimants", href: "/" },
    { label: claimantData.displayName, active: true },
  ];

  return (
    <div className="h-full bg-gray-50">
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
                <p className="text-sm text-gray-600 mt-2">Bodily Injury</p>
                <p className="text-sm text-gray-600 mt-2">
                  Property Damage - Motor Vehicle Accident
                </p>
              </div>
            </div>

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
                  <p className="text-sm text-gray-600">(555) 345-6789</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Email Address
                </label>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">
                    david.williams@email.com
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Address
                </label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">
                    987 Birch St, Seattle, WA 98101
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Social Security
                </label>
                <p className="text-sm text-gray-600 mt-1">***-**-6789</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Driver's License
                </label>
                <p className="text-sm text-gray-600 mt-1">WA DL567890123</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Employment Status
                </label>
                <p className="text-sm text-gray-600 mt-1">Accountant</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Attorney
                </label>
                <p className="text-sm text-gray-600 mt-1">
                  Williams & Partners
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Financial Information - {claimantData.displayName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">
                  Total Incurred (This Claimant)
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {claimantData.totalIncurred}
                </div>
                <div className="text-xs text-gray-500">
                  45% of available coverage
                </div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">
                  Outstanding Reserves
                </div>
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {claimantData.reserves}
                </div>
                <div className="text-xs text-gray-500">
                  Reserve adequacy: Good
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {claimantData.paid}
                </div>
                <div className="text-xs text-gray-500">
                  Last payment: Apr 02, 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
