import { Button } from '../components/ui/button';

export function ClaimsDetail() {
  const coverageData = [
    {
      claimNumber: 'Deamin',
      onlineCoverage: 'ExLCorp',
      businessCode: 'OPFN',
      policyCoverageExpense: '$130,000,000',
      ptLimit: 'Standard',
      incurredExpense: '$2,000',
      deductiblePaid: 'DEDUCTIBLE',
      repairOverheadExpense: '$1,000,000',
      optionCrime: '$20,000',
      socialInsuranceLimit: '$30,000,000',
      optionCrimeLimit: '$1,000,000',
      claimBroughtBy: '$1,100,000',
      corporateCoverage: '$1,020,000',
      cmhc: '$1,600,000'
    }
  ];

  const remainingClaims = [
    {
      policyCoverage: 'A',
      remaining: '$11,000,000',
      remainingPaid: '$1,000,000',
      remainingInsured: '$11,000,000',
      remainingAggregate: '$12,000,000'
    },
    {
      policyCoverage: 'BECO',
      remaining: '$250,000',
      remainingPaid: '$250,000',
      remainingInsured: '$1,000,000',
      remainingAggregate: '$1,000,000'
    },
    {
      policyCoverage: 'Operation',
      remaining: '$250,000',
      remainingPaid: '$250,000',
      remainingInsured: '$250,000',
      remainingAggregate: '$250,000'
    },
    {
      policyCoverage: 'PSPA',
      remaining: '$1,000,000',
      remainingPaid: '$1,000,000',
      remainingInsured: '$2,500,000',
      remainingAggregate: '$2,500,000'
    },
    {
      policyCoverage: 'QC',
      remaining: '$250,000',
      remainingPaid: '$250,000',
      remainingInsured: '$250,000',
      remainingAggregate: '$250,000'
    }
  ];

  const yearDetails = [
    {
      claimYear: 'Cal-2011',
      businessCode: 'ExLCorp',
      onlineCoverage: 'Deamin',
      businessCoverage: 'OPFN',
      policyCoverage: '',
      coverageExpense: '',
      subrogationPaid: '',
      subrogationExpense: '',
      adjustmentExpense: '',
      adjustmentPaid: '',
      totalPaidThu: '$0.00',
      totalIncurred: '$0.00'
    },
    {
      claimYear: 'Total - 244-',
      businessCode: '',
      onlineCoverage: '',
      businessCoverage: '',
      policyCoverage: '',
      coverageExpense: '',
      subrogationPaid: '',
      subrogationExpense: '',
      adjustmentExpense: '',
      adjustmentPaid: '',
      totalPaidThu: '$0.00',
      totalIncurred: '$0.00'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Policy Coverage Detail</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Cancel</Button>
        </div>
      </div>

      {/* Coverage Summary */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-medium">Coverage Details</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[1200px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Coverage</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">LDCP</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Effective</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Expiration</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">P# Limit</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Incurred Expenses</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Deductible</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Repairs Overhead</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Option Crime</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Social Engineering</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">Claims Brought by Corporate Lawyers</th>
                <th className="px-2 sm:px-4 py-3 text-left font-medium text-gray-900">CAFSI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Coverage</td>
                <td className="px-4 py-3">Claimant</td>
                <td className="px-4 py-3">Outstanding Reserves</td>
                <td className="px-4 py-3">Paid</td>
                <td className="px-4 py-3">Recovery</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$0.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$100.00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Medical Payments</td>
                <td className="px-4 py-3">Amy Applegate</td>
                <td className="px-4 py-3">$485.00</td>
                <td className="px-4 py-3">$100.00</td>
                <td className="px-4 py-3">$0.00</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Liability - Bodily Injury and Property Damage</td>
                <td className="px-4 py-3">Mital</td>
                <td className="px-4 py-3">$14,000.00</td>
                <td className="px-4 py-3">$20,000.00</td>
                <td className="px-4 py-3">$0.00</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Coverage Detail for Policy Year */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-medium">Coverage Detail for Policy Year</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Claim Number</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Claimant</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Online Coverage Performance</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Business Code</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Policy Coverage</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Coverage Expenses</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Subrogation Paid</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Subrogation Expenses</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Adjustment Expenses</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Adjustment Paid</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Total Paid thus Funds</th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">Total Incurred thus Funds</th>
              </tr>
            </thead>
            <tbody>
              {yearDetails.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3">{item.claimYear}</td>
                  <td className="px-4 py-3">{item.businessCode}</td>
                  <td className="px-4 py-3">{item.onlineCoverage}</td>
                  <td className="px-4 py-3">{item.businessCoverage}</td>
                  <td className="px-4 py-3">{item.policyCoverage}</td>
                  <td className="px-4 py-3">{item.coverageExpense}</td>
                  <td className="px-4 py-3">{item.subrogationPaid}</td>
                  <td className="px-4 py-3">{item.subrogationExpense}</td>
                  <td className="px-4 py-3">{item.adjustmentExpense}</td>
                  <td className="px-4 py-3">{item.adjustmentPaid}</td>
                  <td className="px-4 py-3 font-medium">{item.totalPaidThu}</td>
                  <td className="px-4 py-3 font-medium">{item.totalIncurred}</td>
                </tr>
              ))}
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
              {remainingClaims.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 font-medium">{item.policyCoverage}</td>
                  <td className="px-4 py-3">{item.remaining}</td>
                  <td className="px-4 py-3">{item.remainingPaid}</td>
                  <td className="px-4 py-3">{item.remainingInsured}</td>
                  <td className="px-4 py-3">{item.remainingAggregate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
