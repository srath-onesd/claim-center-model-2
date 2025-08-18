import { useState } from "react";
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
  ExternalLink
} from "lucide-react";

export function ClaimantDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activityFilter, setActivityFilter] = useState("all");

  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Claims", href: "/claims" },
    { label: "Overview", href: "/" },
    { label: "Amy Applegate", active: true }
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
      {/* Search Bar 
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Overview
            </RouterLink>
          </Button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search claimant information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      */}

      <div className="p-6 space-y-6">
        {/* Full-Width Claimant Information Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <User className="h-5 w-5 mr-2" />
              Claimant Information - Amy Applegate
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status and Claimant Type - Prominent placement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-900">Claimant Status</label>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Active
                  </Badge>
                  <span className="text-sm text-gray-600 ml-2">Third Party Claimant</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Claim Type</label>
                <p className="text-sm text-gray-600 mt-2">
                  Bodily Injury and Property Damage - Motor Vehicle Accident
                </p>
              </div>
            </div>

            {/* Other Claimant Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900">Date of Birth</label>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">**-**-****</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Email Address</label>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">amy.applegate@email.com</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Address</label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">123 Main St, Anytown, CA 90210</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Social Security</label>
                <p className="text-sm text-gray-600 mt-1">***-**-4567</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Driver's License</label>
                <p className="text-sm text-gray-600 mt-1">CA DL123456789</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Employment Status</label>
                <p className="text-sm text-gray-600 mt-1">Full-time Employed</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Attorney</label>
                <p className="text-sm text-gray-600 mt-1">Johnson & Associates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Injury and Vehicle Details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Injury Information */}
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
                    <label className="text-sm font-medium text-gray-900">Injury Type</label>
                    <p className="text-sm text-gray-600 mt-1">Neck and back strain, whiplash</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Injury Severity</label>
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Moderate
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Treatment Status</label>
                    <p className="text-sm text-gray-600 mt-1">Ongoing physical therapy</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Medical Provider</label>
                    <p className="text-sm text-gray-600 mt-1">City General Hospital</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Date of First Treatment</label>
                    <p className="text-sm text-gray-600 mt-1">January 2, 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Expected Recovery Time</label>
                    <p className="text-sm text-gray-600 mt-1">6-8 weeks</p>
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
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Vehicle</label>
                    <p className="text-sm text-gray-600 mt-1">2020 Honda Civic</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">VIN</label>
                    <p className="text-sm text-gray-600 mt-1">1HGCV1F30JA123456</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">License Plate</label>
                    <p className="text-sm text-gray-600 mt-1">ABC-1234</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Damage Assessment</label>
                    <p className="text-sm text-gray-600 mt-1">Front-end collision damage</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Repair Shop</label>
                    <p className="text-sm text-gray-600 mt-1">ABC Auto Repair</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Repair Cost Estimate</label>
                    <p className="text-sm text-gray-600 mt-1">$8,500.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Document Details, Parties Details */}
          <div className="space-y-6">

            {/* Document Details */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Document Details
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">Medical Records</p>
                        <p className="text-xs text-gray-500">5 files • 12.3 MB</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Vehicle Photos</p>
                        <p className="text-xs text-gray-500">8 files • 4.2 MB</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium">Police Report</p>
                        <p className="text-xs text-gray-500">1 file • 2.3 MB</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="text-sm font-medium">Insurance Documentation</p>
                        <p className="text-xs text-gray-500">3 files • 1.8 MB</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium">Legal Documents</p>
                        <p className="text-xs text-gray-500">2 files • 956 KB</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parties Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <UserCheck className="h-5 w-5 mr-2" />
                  Parties Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Claimant */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">AA</AvatarFallback>
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
                        <AvatarFallback className="bg-purple-600 text-white">JA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Johnson & Associates</p>
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
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Medical Provider */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-green-600 text-white">CGH</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">City General Hospital</p>
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

                  {/* Repair Shop */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-orange-600 text-white">ABC</AvatarFallback>
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
                        <AvatarFallback className="bg-blue-600 text-white">MP</AvatarFallback>
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

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Mital Patel</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Updated medical records for Amy Applegate</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">System</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Document verification completed</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Amy Applegate</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Submitted additional medical documentation</p>
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
