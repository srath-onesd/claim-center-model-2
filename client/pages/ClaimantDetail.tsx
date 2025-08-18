import { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
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
  ArrowDownRight
} from "lucide-react";

export function ClaimantDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activityFilter, setActivityFilter] = useState("all");
  const { claimantName } = useParams();

  // Dynamic claimant data based on URL parameter
  const claimants = {
    "amy-applegate": {
      name: "Amy Applegate",
      displayName: "Amy Applegate",
      initials: "AA",
      role: "Third Party Claimant",
      totalIncurred: "$12,450.00",
      reserves: "$7,250.00",
      paid: "$5,200.00",
      medicalPayments: "$3,850.00",
      bodilyInjury: "$8,600.00"
    },
    "bob-pay": {
      name: "Bob Pay",
      displayName: "Bob Pay",
      initials: "BP",
      role: "Third Party Claimant",
      totalIncurred: "$8,750.00",
      reserves: "$4,500.00",
      paid: "$4,250.00",
      medicalPayments: "$2,100.00",
      bodilyInjury: "$6,650.00"
    }
  };

  const currentClaimant = claimants[claimantName as keyof typeof claimants] || claimants["amy-applegate"];

  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Claims", href: "/claims" },
    { label: "Overview", href: "/" },
    { label: currentClaimant.displayName, active: true }
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
              Claimant Information - {currentClaimant.displayName}
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

        {/* Claimant Financial Information Panel */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Financial Information - {currentClaimant.displayName}
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Claimant Total Incurred */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Total Incurred (This Claimant)</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{currentClaimant.totalIncurred}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
                <div className="text-xs text-gray-500">62% of available coverage</div>
              </div>

              {/* Outstanding Reserves */}
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Outstanding Reserves</div>
                <div className="text-2xl font-bold text-yellow-600 mb-2">$7,250.00</div>
                <div className="w-full bg-yellow-200 rounded-full h-2 mb-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="text-xs text-gray-500">Reserve adequacy: Good</div>
              </div>

              {/* Amount Paid to Claimant */}
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                <div className="text-2xl font-bold text-green-600 mb-2">$5,200.00</div>
                <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <div className="text-xs text-gray-500">Last payment: Mar 15, 2024</div>
              </div>

              {/* Medical Payments */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Medical Payments</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$3,850.00</div>
                <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '77%' }}></div>
                </div>
                <div className="text-xs text-gray-500">77% of medical limit</div>
              </div>

              {/* Bodily Injury Liability */}
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Bodily Injury Liability</div>
                <div className="text-2xl font-bold text-red-600 mb-2">$8,600.00</div>
                <div className="w-full bg-red-200 rounded-full h-2 mb-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '17%' }}></div>
                </div>
                <div className="text-xs text-gray-500">17% of BI limit used</div>
              </div>

              {/* Available Coverage */}
              <div className="p-4 bg-indigo-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Available Coverage</div>
                <div className="text-2xl font-bold text-indigo-600 mb-2">$87,550.00</div>
                <div className="w-full bg-indigo-200 rounded-full h-2 mb-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <div className="text-xs text-gray-500">Remaining coverage available</div>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-4">Coverage Breakdown - Amy Applegate</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage Type</th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900">Limit</th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900">Incurred</th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900">Paid</th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900">Outstanding</th>
                      <th className="px-4 py-3 text-right font-medium text-gray-900">Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Medical Payments</td>
                      <td className="px-4 py-3 text-right">$5,000.00</td>
                      <td className="px-4 py-3 text-right">$3,850.00</td>
                      <td className="px-4 py-3 text-right">$2,850.00</td>
                      <td className="px-4 py-3 text-right">$1,000.00</td>
                      <td className="px-4 py-3 text-right text-green-600">$1,150.00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Bodily Injury Liability</td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$8,600.00</td>
                      <td className="px-4 py-3 text-right">$2,350.00</td>
                      <td className="px-4 py-3 text-right">$6,250.00</td>
                      <td className="px-4 py-3 text-right text-green-600">$41,400.00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Property Damage</td>
                      <td className="px-4 py-3 text-right">$50,000.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right">$0.00</td>
                      <td className="px-4 py-3 text-right text-green-600">$50,000.00</td>
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

            {/* Reserves Management */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-500" />
                  Reserves Management
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Adjust Reserves
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Medical Reserves</h4>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">Active</Badge>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">$4,500.00</div>
                    <div className="text-sm text-gray-600 mb-3">Outstanding medical treatment</div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Indemnity Reserves</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">$2,750.00</div>
                    <div className="text-sm text-gray-600 mb-3">Pain and suffering settlement</div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-3">Reserve History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Reserve increase - Medical</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">+$1,500.00</div>
                        <div className="text-xs text-gray-500">Mar 10, 2024</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Reserve decrease - Indemnity</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">-$750.00</div>
                        <div className="text-xs text-gray-500">Feb 28, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Receipt className="h-5 w-5 mr-2 text-green-500" />
                  Payment History
                </CardTitle>
                <Button variant="outline" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  New Payment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Medical Payment - City General Hospital</p>
                        <p className="text-sm text-gray-600">Check #123456 • Ref: MED-2024-001</p>
                        <p className="text-xs text-gray-500">March 15, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$1,850.00</div>
                      <Badge variant="outline" className="text-xs">Cleared</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Settlement Payment - Interim</p>
                        <p className="text-sm text-gray-600">ACH Transfer • Ref: SETTLE-2024-002</p>
                        <p className="text-xs text-gray-500">February 28, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">$2,500.00</div>
                      <Badge variant="outline" className="text-xs">Cleared</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Medical Payment - Physical Therapy</p>
                        <p className="text-sm text-gray-600">Check #123457 • Ref: MED-2024-003</p>
                        <p className="text-xs text-gray-500">January 20, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">$850.00</div>
                      <Badge variant="outline" className="text-xs">Processing</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Payments to Date:</span>
                    <span className="text-xl font-bold text-gray-900">$5,200.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settlement Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-purple-500" />
                  Settlement Information
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Settlement
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Settlement Status</label>
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        In Negotiation
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Settlement Authority</label>
                    <p className="text-sm text-gray-600 mt-1">$15,000.00</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Demand Amount</label>
                    <p className="text-sm text-gray-600 mt-1">$18,500.00</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Last Offer</label>
                    <p className="text-sm text-gray-600 mt-1">$12,000.00</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Attorney Representation</label>
                    <p className="text-sm text-gray-600 mt-1">Yes - Johnson & Associates</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Expected Settlement Date</label>
                    <p className="text-sm text-gray-600 mt-1">April 30, 2024</p>
                  </div>
                </div>

                <div className="mt-4 p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Settlement Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Medical Expenses:</span>
                      <span>$8,500.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lost Wages:</span>
                      <span>$2,800.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pain & Suffering:</span>
                      <span>$7,200.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total Demand:</span>
                      <span>$18,500.00</span>
                    </div>
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

            {/* Coverage Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Coverage Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-blue-900">Bodily Injury Liability</h4>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Primary</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Per Person:</span>
                        <span className="float-right font-medium">$50,000</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Per Accident:</span>
                        <span className="float-right font-medium">$100,000</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Used:</span>
                        <span className="float-right font-medium">$8,600</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Available:</span>
                        <span className="float-right font-medium text-green-600">$41,400</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-green-900">Medical Payments</h4>
                      <Badge variant="outline" className="bg-green-100 text-green-800">No-Fault</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Limit:</span>
                        <span className="float-right font-medium">$5,000</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Used:</span>
                        <span className="float-right font-medium">$3,850</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Available:</span>
                        <span className="float-right font-medium text-green-600">$1,150</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-purple-900">Umbrella Coverage</h4>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">Excess</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Limit:</span>
                        <span className="float-right font-medium">$1,000,000</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Used:</span>
                        <span className="float-right font-medium">$0</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Available:</span>
                        <span className="float-right font-medium text-green-600">$1,000,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Litigation Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Litigation Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Litigation Status:</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Pre-Litigation
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-900">Attorney</label>
                      <p className="text-sm text-gray-600">Johnson & Associates</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900">Attorney Contact</label>
                      <p className="text-sm text-gray-600">(555) 987-6543</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900">Date Represented</label>
                      <p className="text-sm text-gray-600">February 10, 2024</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900">Statute of Limitations</label>
                      <p className="text-sm text-gray-600">December 31, 2025</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900">Defense Counsel</label>
                      <p className="text-sm text-gray-600">Smith, Wilson & Partners</p>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-900 mb-2">Important Dates</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Demand Letter Sent:</span>
                        <span>March 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discovery Deadline:</span>
                        <span>September 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mediation Scheduled:</span>
                        <span>June 20, 2024</span>
                      </div>
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
                <div className="space-y-4 max-h-80 overflow-y-auto">
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

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Johnson & Associates</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Submitted settlement demand of $18,500</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-yellow-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Mital Patel</p>
                        <p className="text-xs text-gray-500">5 days ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Increased medical reserves by $1,500</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">System Alert</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Reserve adequacy review required</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Mital Patel</p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Phone call with claimant regarding treatment progress</p>
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
