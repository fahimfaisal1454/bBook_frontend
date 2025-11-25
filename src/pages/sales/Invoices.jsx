export default function Invoices() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Invoices</h1>
          <p className="text-sm text-slate-500">
            Track invoices, receipts, and payments from your customers.
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">
          + New Invoice
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search invoice # / customer"
              className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 w-64 focus:outline-none focus:ring focus:ring-blue-500/30"
            />
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5">
              <option>Status: All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
          </div>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50">
              Export
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50">
              Filters
            </button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="border-b bg-slate-50">
            <tr className="text-left text-slate-500">
              <th className="py-2 px-2">Date</th>
              <th className="py-2 px-2">Invoice #</th>
              <th className="py-2 px-2">Customer</th>
              <th className="py-2 px-2">Due Date</th>
              <th className="py-2 px-2 text-right">Amount</th>
              <th className="py-2 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b last:border-0">
              <td className="py-2 px-2">2025-11-01</td>
              <td className="py-2 px-2">INV-001</td>
              <td className="py-2 px-2">ABC Ltd.</td>
              <td className="py-2 px-2">2025-11-10</td>
              <td className="py-2 px-2 text-right">৳ 25,000</td>
              <td className="py-2 px-2">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="border-b last:border-0">
              <td className="py-2 px-2">2025-11-03</td>
              <td className="py-2 px-2">INV-002</td>
              <td className="py-2 px-2">XYZ Traders</td>
              <td className="py-2 px-2">2025-11-13</td>
              <td className="py-2 px-2 text-right">৳ 40,000</td>
              <td className="py-2 px-2">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
