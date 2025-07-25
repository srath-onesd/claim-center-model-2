export function Summary() {
  return (
    <div className="space-y-3 h-[calc(100vh-140px)] overflow-y-auto">
      {/* Summary Header */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Summary</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Column - Basic Info and Financial Info */}
        <div className="space-y-3">
          {/* Basic Info */}
          <div className="bg-white rounded border p-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium">Basic Info</h2>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Open
              </div>
              <div className="text-gray-600 text-xs">
                Open 24 days
              </div>
            </div>
          </div>

          {/* Financial Info */}
          <div className="bg-white rounded border p-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium">Financial Info</h2>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between">
              {/* Pie Chart */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16" cy="16" r="14"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="16" cy="16" r="14"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeDasharray="60 40"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="16" cy="16" r="14"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeDasharray="25 75"
                      strokeDashoffset="-60"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="16" cy="16" r="14"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="4"
                      strokeDasharray="15 85"
                      strokeDashoffset="-85"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Legend and Values */}
              <div className="flex-1 ml-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Gross Incurred</span>
                    <span className="text-xs text-gray-700" style={{ marginLeft: 'auto' }}>$2000.00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Paid</span>
                    <span className="text-xs text-gray-700" style={{ marginLeft: 'auto' }}>$500.00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Recovery</span>
                    <span className="text-xs text-gray-700" style={{ marginLeft: 'auto' }}>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Loss Details */}
      <div className="bg-white rounded border p-3">
        <h2 className="text-sm font-medium mb-2">Loss Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <div className="text-xs font-medium text-gray-900 mb-1">Loss Date:</div>
            <div className="text-xs text-gray-600">01/10/2024, 12:00 AM</div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-900 mb-1">Notice Date:</div>
            <div className="text-xs text-gray-600">01/10/2024, 12:00 AM</div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-900 mb-1">Loss Location:</div>
            <div className="text-xs text-gray-600">1922 Patricia Ave, Arvada, CA 93007</div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-900 mb-1">Description:</div>
            <div className="text-xs text-gray-600">Insured hit other party's car in the front passenger tire while making a left</div>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div className="bg-white rounded border">
        <div className="px-3 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">Financial Details</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2 text-left font-medium text-gray-900"></th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Coverage</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Claimant</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Adjuster</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Outstanding Reserves</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Paid</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Recovery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 py-2">
                  <input type="checkbox" className="rounded border-gray-300 w-3 h-3" />
                </td>
                <td className="px-2 py-2">Medical Payments</td>
                <td className="px-2 py-2">
                  <a href="#" className="text-blue-600 hover:underline">Amy Applegate</a>
                </td>
                <td className="px-2 py-2">
                  <a href="#" className="text-blue-600 hover:underline">Mital</a>
                </td>
                <td className="px-2 py-2">$485.00</td>
                <td className="px-2 py-2">$100.00</td>
                <td className="px-2 py-2">$0.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2">
                  <input type="checkbox" className="rounded border-gray-300 w-3 h-3" />
                </td>
                <td className="px-2 py-2">Liability - Bodily Injury and Property Damage</td>
                <td className="px-2 py-2">
                  <a href="#" className="text-blue-600 hover:underline">Amy Applegate</a>
                </td>
                <td className="px-2 py-2">
                  <a href="#" className="text-blue-600 hover:underline">Mital</a>
                </td>
                <td className="px-2 py-2">$14,000.00</td>
                <td className="px-2 py-2">$20,000.00</td>
                <td className="px-2 py-2">$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Coverage Detail */}
      <div className="bg-white rounded border">
        <div className="px-3 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">Policy Coverage Detail</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-[1000px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Insured</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">LDOF</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Effective</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Expiration</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Description Text</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">P# Limit</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Incurred Expenses</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Deductible</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Repro</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Overdraft</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Cyber Crime</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Social Engineering</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">Claims brought by Corporate Lawyers</th>
                <th className="px-1 py-2 text-left font-medium text-gray-900">CAFSI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-1 py-2">Bluedown Bowl</td>
                <td className="px-1 py-2">01/11/2024</td>
                <td className="px-1 py-2">01/01/2024</td>
                <td className="px-1 py-2">01/01/2025</td>
                <td className="px-1 py-2">$1,000,000 DEDUCTIBLE applicable to claims expenses, indemnity payments and/or cost of repairs.</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$1,000,000</td>
                <td className="px-1 py-2">$2,000,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-1 py-2">James</td>
                <td className="px-1 py-2">01/11/2024</td>
                <td className="px-1 py-2">01/01/2024</td>
                <td className="px-1 py-2">01/01/2025</td>
                <td className="px-1 py-2">$1,000,000 $250,000 $500,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$250,000</td>
                <td className="px-1 py-2">$1,000,000</td>
                <td className="px-1 py-2">$2,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Remaining Per Claim/Per Aggregate by Coverage */}
      <div className="bg-white rounded border">
        <div className="px-3 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">Remaining Per Claim/Per Aggregate by Coverage</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Policy Coverage</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Remaining for this Claim (Paid)</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Remaining for this Claim (Incurred)</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Remaining Per Aggregate (Paid)</th>
                <th className="px-2 py-2 text-left font-medium text-gray-900">Remaining Per Aggregate (Incurred)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">A</td>
                <td className="px-2 py-2">$1,000,000.00</td>
                <td className="px-2 py-2">$1,000,000.00</td>
                <td className="px-2 py-2">$2,000,000.00</td>
                <td className="px-2 py-2">$2,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">BECO</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">Operations</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$1,000,000.00</td>
                <td className="px-2 py-2">$1,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">DISPA</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$500,000.00</td>
                <td className="px-2 py-2">$500,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">CSPA</td>
                <td className="px-2 py-2">$1,000,000.00</td>
                <td className="px-2 py-2">$1,000,000.00</td>
                <td className="px-2 py-2">$2,000,000.00</td>
                <td className="px-2 py-2">$2,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 font-medium">QC</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
                <td className="px-2 py-2">$250,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
