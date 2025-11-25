// Example: src/pages/sales/Estimates.jsx
export default function Estimates() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Estimates</h1>
          <p className="text-sm text-slate-500">
            Create and manage estimates/quotes for your customers.
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">
          + New Estimate
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <p className="text-sm text-slate-500">
          Table and filters will go here (connected to Django API later).
        </p>
      </div>
    </div>
  );
}
