import { useState } from "react";
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
  Link
} from "lucide-react";

export function Summary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activityFilter, setActivityFilter] = useState("all");

  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Claims", href: "/claims" },
    { label: "Claim #CLM-2024-001", active: true }
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
            <CardTitle className="text-lg font-semibold">Basic Information</CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status and Loss Description - Prominent placement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-900">Status</label>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Open
                  </Badge>
                  <span className="text-sm text-gray-600 ml-2">Open 24 days</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Loss Description</label>
                <p className="text-sm text-gray-600 mt-2">
                  Insured hit other party's car in the front passenger tire while making a left turn at intersection.
                  Multi-vehicle collision with property damage and potential bodily injury claims.
                </p>
              </div>
            </div>

            {/* Other Basic Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900">Claim Number</label>
                <p className="text-sm text-gray-600 mt-1">CLM-2024-001</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Date of Loss</label>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">01/10/2024</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Loss Location</label>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">1922 Patricia Ave, Arvada, CA</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Loss Type</label>
                <p className="text-sm text-gray-600 mt-1">Auto Accident</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Line of Business</label>
                <p className="text-sm text-gray-600 mt-1">Auto Insurance</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Policy Number</label>
                <p className="text-sm text-gray-600 mt-1">POL-2024-0001</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Insured Name</label>
                <p className="text-sm text-gray-600 mt-1">Bluedown Bowl</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Assigned Adjuster</label>
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
                <CardTitle className="text-lg font-semibold">Financial Information</CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Total Incurred */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Total Incurred</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">$15,750.00</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-gray-800 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">78% of policy limit</div>
                  </div>

                  {/* Outstanding Reserves */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Outstanding Reserves</div>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">$8,250.00</div>
                    <div className="w-full bg-yellow-200 rounded-full h-2 mb-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Reserve adequacy: Good</div>
                  </div>

                  {/* Amount Paid */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">$7,500.00</div>
                    <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Last payment: Mar 20, 2024</div>
                  </div>

                  {/* Recoveries */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Recoveries</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">$2,100.00</div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Recovery rate: 13.3%</div>
                  </div>

                  {/* Deductible */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Deductible</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">$500.00</div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Collected from insured</div>
                  </div>

                  {/* Coverage Limits */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Coverage Limits</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">$20,000.00</div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Property Damage limit</div>
                  </div>
                </div>

                {/* Financial Breakdown Table 
                <div className="mt-6">
                  <h3 className="text-md font-semibold mb-4">Breakdown by Claimant-Coverage</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Claimant Name</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage Type</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Incurred</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Paid</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Outstanding</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Recovery</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">Amy Applegate</td>
                          <td className="px-4 py-3">Medical Payments</td>
                          <td className="px-4 py-3 text-right">$585.00</td>
                          <td className="px-4 py-3 text-right">$100.00</td>
                          <td className="px-4 py-3 text-right">$485.00</td>
                          <td className="px-4 py-3 text-right">$0.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Amy Applegate</td>
                          <td className="px-4 py-3">Liability - Bodily Injury</td>
                          <td className="px-4 py-3 text-right">$15,165.00</td>
                          <td className="px-4 py-3 text-right">$7,400.00</td>
                          <td className="px-4 py-3 text-right">$7,765.00</td>
                          <td className="px-4 py-3 text-right">$2,100.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
              </CardContent>
            </Card>
            {/* Claimant: Amy Applegate */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Claimant: Amy Applegate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                {/* Bodily Injury Section */}
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

                  {/* Financial Sub-tabs for Bodily Injury */}
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                      Financial Details
                    </h4>
                    <Tabs defaultValue="reserves" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="reserves">Reserves</TabsTrigger>
                        <TabsTrigger value="payments">Payments</TabsTrigger>
                        <TabsTrigger value="recovery">Recovery</TabsTrigger>
                        <TabsTrigger value="deductible">Deductible</TabsTrigger>
                      </TabsList>
                      <TabsContent value="reserves" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-yellow-50 rounded border">
                            <div className="text-xs text-gray-600">Outstanding</div>
                            <div className="text-lg font-bold text-yellow-600">$7,765.00</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded border">
                            <div className="text-xs text-gray-600">Initial Reserve</div>
                            <div className="text-lg font-bold text-blue-600">$15,000.00</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="payments" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-green-50 rounded border">
                            <div className="text-xs text-gray-600">Total Paid</div>
                            <div className="text-lg font-bold text-green-600">$7,400.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Last Payment</div>
                            <div className="text-sm text-gray-600">Mar 20, 2024</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="recovery" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-purple-50 rounded border">
                            <div className="text-xs text-gray-600">Recovered</div>
                            <div className="text-lg font-bold text-purple-600">$2,100.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Recovery Rate</div>
                            <div className="text-sm text-gray-600">13.3%</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="deductible" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-indigo-50 rounded border">
                            <div className="text-xs text-gray-600">Amount</div>
                            <div className="text-lg font-bold text-indigo-600">$500.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Status</div>
                            <div className="text-sm text-gray-600">Collected</div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* Property Damage Section */}
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

                  {/* Financial Sub-tabs for Property Damage */}
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                      Financial Details
                    </h4>
                    <Tabs defaultValue="reserves" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="reserves">Reserves</TabsTrigger>
                        <TabsTrigger value="payments">Payments</TabsTrigger>
                        <TabsTrigger value="recovery">Recovery</TabsTrigger>
                        <TabsTrigger value="deductible">Deductible</TabsTrigger>
                      </TabsList>
                      <TabsContent value="reserves" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-yellow-50 rounded border">
                            <div className="text-xs text-gray-600">Outstanding</div>
                            <div className="text-lg font-bold text-yellow-600">$485.00</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded border">
                            <div className="text-xs text-gray-600">Initial Reserve</div>
                            <div className="text-lg font-bold text-blue-600">$1,000.00</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="payments" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-green-50 rounded border">
                            <div className="text-xs text-gray-600">Total Paid</div>
                            <div className="text-lg font-bold text-green-600">$100.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Last Payment</div>
                            <div className="text-sm text-gray-600">Mar 15, 2024</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="recovery" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-purple-50 rounded border">
                            <div className="text-xs text-gray-600">Recovered</div>
                            <div className="text-lg font-bold text-purple-600">$0.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Recovery Rate</div>
                            <div className="text-sm text-gray-600">0%</div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="deductible" className="mt-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-indigo-50 rounded border">
                            <div className="text-xs text-gray-600">Amount</div>
                            <div className="text-lg font-bold text-indigo-600">$500.00</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded border">
                            <div className="text-xs text-gray-600">Status</div>
                            <div className="text-sm text-gray-600">Waived</div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

              </CardContent>
            </Card>
            {/* Claimant: Bob Pay */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Claimant: Bob Pay
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                {/* Bodily Injury Section */}
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
                </div>

                {/* Property Damage Section */}
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
                </div>
              </CardContent>
            </Card>
            {/* Claimant: Amy Applegate */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Claimant: Amy Applegate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                {/* Bodily Injury Section */}
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
                </div>

                {/* Property Damage Section */}
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Related Claims, Timeline, Documents, Contacts */}
          <div className="space-y-6">

            {/* Related Claims & Incidents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Link className="h-5 w-5 mr-2" />
                  Related Claims & Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Claim #CLM-2024-002</h4>
                        <p className="text-sm text-gray-600">Same policy holder, 12/15/2023</p>
                        <p className="text-sm text-gray-600">Property damage claim - garage fire</p>
                      </div>
                      <Button variant="outline" size="sm">View Claim</Button>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Incident #INC-2024-001</h4>
                        <p className="text-sm text-gray-600">Same location, 01/10/2024</p>
                        <p className="text-sm text-gray-600">Multi-vehicle collision at intersection</p>
                      </div>
                      <Button variant="outline" size="sm">View Incident</Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      View all related claims and incidents (4 total) →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline/Activity Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Activity Timeline
                </CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant={activityFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActivityFilter("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={activityFilter === "notes" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActivityFilter("notes")}
                  >
                    Notes
                  </Button>
                  <Button
                    variant={activityFilter === "payments" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActivityFilter("payments")}
                  >
                    Payments
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
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
                      <p className="text-sm text-gray-600">Updated reserve amount to $14,485</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">System</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Payment of $20,000 issued to Amy Applegate</p>
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
                        <p className="text-sm font-medium">John Smith</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Uploaded medical report: "MRI_Results_01_15_2024.pdf"</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-yellow-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Mital Patel</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                      <p className="text-sm text-gray-600">Phone call with claimant regarding treatment progress</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Documents
                </CardTitle>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">Police Report</p>
                        <p className="text-xs text-gray-500">2.3 MB • PDF</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Medical Report</p>
                        <p className="text-xs text-gray-500">1.8 MB • PDF</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium">Vehicle Estimate</p>
                        <p className="text-xs text-gray-500">956 KB • PDF</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacts & Parties Involved */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Contacts & Parties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>BI</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Bluedown Bowl</p>
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

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>AA</AvatarFallback>
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

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>MP</AvatarFallback>
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

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>AR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">ABC Auto Repair</p>
                        <p className="text-xs text-gray-500">Service Provider</p>
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

        {/* Bottom Section - Detailed Tables */}
        <div className="space-y-6">
          <Tabs defaultValue="financial" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="financial">Financial Details</TabsTrigger>
              <TabsTrigger value="coverage">Policy Coverage</TabsTrigger>
              <TabsTrigger value="reserves">Reserve Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="financial">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Claimant</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Adjuster</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Outstanding Reserves</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Paid</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Recovery</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">Medical Payments</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:underline">Amy Applegate</button>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:underline">Mital</button>
                          </td>
                          <td className="px-4 py-3 text-right">$485.00</td>
                          <td className="px-4 py-3 text-right">$100.00</td>
                          <td className="px-4 py-3 text-right">$0.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Liability - Bodily Injury and Property Damage</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:underline">Amy Applegate</button>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:underline">Mital</button>
                          </td>
                          <td className="px-4 py-3 text-right">$14,000.00</td>
                          <td className="px-4 py-3 text-right">$20,000.00</td>
                          <td className="px-4 py-3 text-right">$0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
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
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Limit</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Effective</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Expiration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">Liability - Bodily Injury</td>
                          <td className="px-4 py-3 text-right">$100,000</td>
                          <td className="px-4 py-3">01/01/2024</td>
                          <td className="px-4 py-3">01/01/2025</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Liability - Property Damage</td>
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
                  <CardTitle>Remaining Per Claim/Per Aggregate by Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Policy Coverage</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Remaining (Paid)</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Remaining (Incurred)</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Aggregate (Paid)</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Aggregate (Incurred)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Medical Payments</td>
                          <td className="px-4 py-3 text-right">$1,000,000.00</td>
                          <td className="px-4 py-3 text-right">$1,000,000.00</td>
                          <td className="px-4 py-3 text-right">$2,000,000.00</td>
                          <td className="px-4 py-3 text-right">$2,000,000.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Liability Coverage</td>
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
