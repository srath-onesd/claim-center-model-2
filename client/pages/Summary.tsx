export function Summary() {
  return (
    <div className="space-y-6">
      {/* Summary Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Summary</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Basic Info and Financial Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Basic Info</h2>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Open
              </div>
              <div className="text-gray-600">
                Open 24 days
              </div>
            </div>
          </div>

          {/* Financial Info */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Financial Info</h2>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              {/* Pie Chart */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
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
              <div className="flex-1 ml-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Gross Incurred</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Paid</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Recovery</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">$16,400</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold text-gray-700">$2,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - High Risk Indicators */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-medium mb-4">High Risk Indicators</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Hit Mitigation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>3 Running Report</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>2 Claims/suits in file time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Loss Details */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-lg font-medium mb-4">Loss Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Loss Date:</div>
            <div className="text-sm text-gray-600">01/10/2024, 12:00 AM</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Notice Date:</div>
            <div className="text-sm text-gray-600">01/10/2024, 12:00 AM</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Loss Location:</div>
            <div className="text-sm text-gray-600">1922 Patricia Ave, Arvada, CA 93007</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Description:</div>
            <div className="text-sm text-gray-600">Insured hit other party's car in the front passenger tire while making a left</div>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-medium">Financial Details</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-900"></th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Claimant</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Adjuster</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Outstanding Reserves</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Paid</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Recovery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3">Coverage</td>
                <td className="px-4 py-3">Claimant</td>
                <td className="px-4 py-3">Adjuster</td>
                <td className="px-4 py-3">Outstanding Reserves</td>
                <td className="px-4 py-3">Paid</td>
                <td className="px-4 py-3">Recovery</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3">Medical Payments</td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline">Amy Applegate</a>
                </td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline">Mital</a>
                </td>
                <td className="px-4 py-3">$485.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$0.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3">Liability - Bodily Injury and Property Damage</td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline">Amy Applegate</a>
                </td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline">Mital</a>
                </td>
                <td className="px-4 py-3">$14,000.00</td>
                <td className="px-4 py-3">$20,000.00</td>
                <td className="px-4 py-3">$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Coverage Detail */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-medium">Policy Coverage Detail</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-[1400px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Insured</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">LDOF</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Effective</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Expiration</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Description Text</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">P# Limit</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Incurred Expenses</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Deductible</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Repro</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Overdraft</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Cyber Crime</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Social Engineering</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">Claims brought by Corporate Lawyers</th>
                <th className="px-2 py-3 text-left font-medium text-gray-900">CAFSI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 py-3">Bluedown Bowl</td>
                <td className="px-2 py-3">01/11/2024</td>
                <td className="px-2 py-3">01/01/2024</td>
                <td className="px-2 py-3">01/01/2025</td>
                <td className="px-2 py-3">$1,000,000 DEDUCTIBLE applicable to claims expenses, indemnity payments and/or cost of repairs.</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$1,000,000</td>
                <td className="px-2 py-3">$2,000,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-3">James</td>
                <td className="px-2 py-3">01/11/2024</td>
                <td className="px-2 py-3">01/01/2024</td>
                <td className="px-2 py-3">01/01/2025</td>
                <td className="px-2 py-3">$1,000,000 $250,000 $500,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$250,000</td>
                <td className="px-2 py-3">$1,000,000</td>
                <td className="px-2 py-3">$2,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Remaining Per Claim/Per Aggregate by Coverage */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-medium">Remaining Per Claim/Per Aggregate by Coverage</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Policy Coverage</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Remaining for this Claim (Paid)</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Remaining for this Claim (Incurred)</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Remaining Per Aggregate (Paid)</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Remaining Per Aggregate (Incurred)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">A</td>
                <td className="px-4 py-3">$1,000,000.00</td>
                <td className="px-4 py-3">$1,000,000.00</td>
                <td className="px-4 py-3">$2,000,000.00</td>
                <td className="px-4 py-3">$2,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">BECO</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Operations</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$1,000,000.00</td>
                <td className="px-4 py-3">$1,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">DISPA</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$500,000.00</td>
                <td className="px-4 py-3">$500,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">CSPA</td>
                <td className="px-4 py-3">$1,000,000.00</td>
                <td className="px-4 py-3">$1,000,000.00</td>
                <td className="px-4 py-3">$2,000,000.00</td>
                <td className="px-4 py-3">$2,000,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">QC</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
                <td className="px-4 py-3">$250,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
