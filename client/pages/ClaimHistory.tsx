import React, { useState, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ArrowLeft,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Calendar,
  User,
  FileText,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  Edit,
  Phone,
  Mail,
  Upload,
  Download,
  Eye,
  Settings
} from "lucide-react";

interface HistoryEvent {
  id: string;
  type: string;
  relatedTo: string;
  user: string;
  timestamp: string;
  description: string;
  details: {
    previousValue?: string;
    newValue?: string;
    amount?: string;
    reference?: string;
    additionalInfo?: string;
    attachments?: string[];
  };
}

export function ClaimHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [relatedToFilter, setRelatedToFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Sample claim history data
  const historyEvents: HistoryEvent[] = [
    {
      id: "1",
      type: "Payment",
      relatedTo: "Claim",
      user: "Mital Patel",
      timestamp: "2024-03-20T14:30:00Z",
      description: "Medical payment issued to City General Hospital",
      details: {
        amount: "$1,850.00",
        reference: "CHECK-123456",
        additionalInfo: "Payment for emergency room treatment and diagnostic tests",
        attachments: ["payment_voucher.pdf", "medical_receipt.pdf"]
      }
    },
    {
      id: "2",
      type: "Reserve Change",
      relatedTo: "Exposure - Bodily Injury",
      user: "Mital Patel",
      timestamp: "2024-03-15T10:45:00Z",
      description: "Medical reserve increased based on new treatment plan",
      details: {
        previousValue: "$3,000.00",
        newValue: "$4,500.00",
        additionalInfo: "Increased reserve due to extended physical therapy requirements",
        reference: "RSV-2024-003"
      }
    },
    {
      id: "3",
      type: "Document Upload",
      relatedTo: "Claim",
      user: "Amy Applegate",
      timestamp: "2024-03-12T16:20:00Z",
      description: "Additional medical records submitted",
      details: {
        additionalInfo: "MRI results and physician report uploaded by claimant",
        attachments: ["mri_results_03122024.pdf", "physician_report.pdf", "treatment_plan.pdf"]
      }
    },
    {
      id: "4",
      type: "Status Change",
      relatedTo: "Claim",
      user: "System",
      timestamp: "2024-03-10T09:15:00Z",
      description: "Claim status updated to Under Investigation",
      details: {
        previousValue: "Reported",
        newValue: "Under Investigation",
        additionalInfo: "Status automatically updated after initial review completion"
      }
    },
    {
      id: "5",
      type: "Communication",
      relatedTo: "Claim",
      user: "Mital Patel",
      timestamp: "2024-03-08T11:30:00Z",
      description: "Phone call with claimant regarding treatment progress",
      details: {
        additionalInfo: "Discussed ongoing physical therapy progress and pain management. Claimant reported improvement in mobility.",
        reference: "CALL-2024-015"
      }
    },
    {
      id: "6",
      type: "Settlement Demand",
      relatedTo: "Exposure - Bodily Injury",
      user: "Johnson & Associates",
      timestamp: "2024-03-05T13:45:00Z",
      description: "Settlement demand received from claimant attorney",
      details: {
        amount: "$18,500.00",
        additionalInfo: "Demand includes medical expenses, lost wages, and pain & suffering",
        reference: "DEMAND-2024-002",
        attachments: ["settlement_demand.pdf", "medical_summary.pdf"]
      }
    },
    {
      id: "7",
      type: "Assignment",
      relatedTo: "Claim",
      user: "System",
      timestamp: "2024-03-01T08:00:00Z",
      description: "Claim assigned to adjuster",
      details: {
        previousValue: "Unassigned",
        newValue: "Mital Patel",
        additionalInfo: "Automatic assignment based on workload and expertise"
      }
    },
    {
      id: "8",
      type: "Claim Creation",
      relatedTo: "Claim",
      user: "System",
      timestamp: "2024-02-28T15:30:00Z",
      description: "New claim created from incident report",
      details: {
        reference: "CLM-23E-12345",
        additionalInfo: "Claim created automatically from incident IR-2024-001"
      }
    },
    {
      id: "9",
      type: "Reserve Establishment",
      relatedTo: "Reserve Line - Medical",
      user: "Mital Patel",
      timestamp: "2024-02-28T16:00:00Z",
      description: "Initial medical reserve established",
      details: {
        amount: "$3,000.00",
        additionalInfo: "Initial reserve based on preliminary medical evaluation",
        reference: "RSV-2024-001"
      }
    },
    {
      id: "10",
      type: "Contact Update",
      relatedTo: "Claim",
      user: "Amy Applegate", 
      timestamp: "2024-02-25T12:15:00Z",
      description: "Contact information updated",
      details: {
        previousValue: "(555) 123-0000",
        newValue: "(555) 123-4567",
        additionalInfo: "Phone number updated by claimant through online portal"
      }
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Claims", href: "/claims" },
    { label: "Claim #23E-12345", href: "/" },
    { label: "Claim History", active: true }
  ];

  const toggleRowExpansion = (eventId: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(eventId)) {
      newExpandedRows.delete(eventId);
    } else {
      newExpandedRows.add(eventId);
    }
    setExpandedRows(newExpandedRows);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Payment":
        return <DollarSign className="h-4 w-4 text-green-600" />;
      case "Reserve Change":
      case "Reserve Establishment":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "Document Upload":
        return <FileText className="h-4 w-4 text-blue-600" />;
      case "Status Change":
        return <CheckCircle className="h-4 w-4 text-purple-600" />;
      case "Communication":
        return <Phone className="h-4 w-4 text-indigo-600" />;
      case "Settlement Demand":
        return <Edit className="h-4 w-4 text-red-600" />;
      case "Assignment":
        return <User className="h-4 w-4 text-orange-600" />;
      case "Claim Creation":
        return <Settings className="h-4 w-4 text-gray-600" />;
      case "Contact Update":
        return <User className="h-4 w-4 text-teal-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Payment":
        return "bg-green-100 text-green-800";
      case "Reserve Change":
      case "Reserve Establishment":
        return "bg-yellow-100 text-yellow-800";
      case "Document Upload":
        return "bg-blue-100 text-blue-800";
      case "Status Change":
        return "bg-purple-100 text-purple-800";
      case "Communication":
        return "bg-indigo-100 text-indigo-800";
      case "Settlement Demand":
        return "bg-red-100 text-red-800";
      case "Assignment":
        return "bg-orange-100 text-orange-800";
      case "Claim Creation":
        return "bg-gray-100 text-gray-800";
      case "Contact Update":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  // Get unique values for filters
  const uniqueTypes = [...new Set(historyEvents.map(event => event.type))];
  const uniqueRelatedTo = [...new Set(historyEvents.map(event => event.relatedTo))];
  const uniqueUsers = [...new Set(historyEvents.map(event => event.user))];

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return historyEvents.filter(event => {
      const matchesSearch = searchQuery === "" || 
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === "all" || event.type === typeFilter;
      const matchesRelatedTo = relatedToFilter === "all" || event.relatedTo === relatedToFilter;
      const matchesUser = userFilter === "all" || event.user === userFilter;
      
      return matchesSearch && matchesType && matchesRelatedTo && matchesUser;
    });
  }, [historyEvents, searchQuery, typeFilter, relatedToFilter, userFilter]);

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
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">Claim History</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {uniqueTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Related To Filter */}
              <Select value={relatedToFilter} onValueChange={setRelatedToFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Related To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Related</SelectItem>
                  {uniqueRelatedTo.map(related => (
                    <SelectItem key={related} value={related}>{related}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* User Filter */}
              <Select value={userFilter} onValueChange={setUserFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by User" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  {uniqueUsers.map(user => (
                    <SelectItem key={user} value={user}>{user}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setTypeFilter("all");
                  setRelatedToFilter("all");
                  setUserFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredEvents.length} of {historyEvents.length} events
            </div>
          </CardContent>
        </Card>

        {/* History Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Event History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                      {/* Expand column */}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Related To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEvents.map((event, index) => {
                    const isExpanded = expandedRows.has(event.id);
                    const { date, time } = formatTimestamp(event.timestamp);
                    
                    return (
                      <React.Fragment key={event.id}>
                        {/* Main Row */}
                        <tr className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1"
                              onClick={() => toggleRowExpansion(event.id)}
                            >
                              {isExpanded ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </Button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getEventIcon(event.type)}
                              <Badge variant="secondary" className={getTypeBadgeColor(event.type)}>
                                {event.type}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {event.relatedTo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {event.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div>
                              <div className="font-medium">{date}</div>
                              <div className="text-gray-500">{time}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {event.description}
                          </td>
                        </tr>
                        
                        {/* Expanded Details Row */}
                        {isExpanded && (
                          <tr>
                            <td colSpan={6} className="px-6 py-4 bg-gray-50">
                              <div className="space-y-4">
                                <h4 className="font-medium text-gray-900">Event Details</h4>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {event.details.previousValue && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Previous Value</label>
                                      <p className="text-sm text-gray-600">{event.details.previousValue}</p>
                                    </div>
                                  )}
                                  
                                  {event.details.newValue && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">New Value</label>
                                      <p className="text-sm text-gray-600">{event.details.newValue}</p>
                                    </div>
                                  )}
                                  
                                  {event.details.amount && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Amount</label>
                                      <p className="text-sm text-gray-600 font-medium">{event.details.amount}</p>
                                    </div>
                                  )}
                                  
                                  {event.details.reference && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Reference</label>
                                      <p className="text-sm text-gray-600">{event.details.reference}</p>
                                    </div>
                                  )}
                                </div>
                                
                                {event.details.additionalInfo && (
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Additional Information</label>
                                    <p className="text-sm text-gray-600 mt-1">{event.details.additionalInfo}</p>
                                  </div>
                                )}
                                
                                {event.details.attachments && event.details.attachments.length > 0 && (
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Attachments</label>
                                    <div className="mt-2 space-y-2">
                                      {event.details.attachments.map((attachment, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border">
                                          <div className="flex items-center space-x-2">
                                            <FileText className="h-4 w-4 text-blue-600" />
                                            <span className="text-sm text-gray-900">{attachment}</span>
                                          </div>
                                          <div className="flex space-x-1">
                                            <Button variant="ghost" size="sm">
                                              <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                              <Download className="h-4 w-4" />
                                            </Button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
              
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                  <p className="text-gray-600">No events match your current filter criteria.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
