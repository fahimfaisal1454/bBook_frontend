import { NavLink, useLocation } from "react-router-dom";

const menuConfig = [
  {
    title: "Dashboard",
    icon: "📊",
    items: [{ label: "Overview", path: "/dashboard" }],
  },
  {
    title: "Sales",
    icon: "💰",
    items: [
      { label: "Estimates", path: "/sales/estimates" },
      { label: "Invoices", path: "/sales/invoices" },
      { label: "Recurring Invoices", path: "/sales/recurring-invoices" },
      { label: "Checkouts", path: "/sales/checkouts" },
      { label: "Payments", path: "/sales/payments" },
      { label: "Customer Statements", path: "/sales/customer-statements" },
      { label: "Customers", path: "/sales/customers" },
      { label: "Products & Services", path: "/sales/products-services" },
    ],
  },
  {
    title: "Purchases",
    icon: "🧾",
    items: [
      { label: "Bills", path: "/purchases/bills" },
      { label: "Vendors", path: "/purchases/vendors" },
      { label: "Products & Services", path: "/purchases/products-services" },
    ],
  },
  {
    title: "Accounting",
    icon: "📚",
    items: [
      { label: "Manual Journals", path: "/accounting/manual-journals" },
      { label: "Bulk Updates", path: "/accounting/bulk-updates" },
      { label: "Currency Adjustments", path: "/accounting/currency-adjustments" },
      { label: "Chart of Accounts", path: "/accounting/chart-of-accounts" },
      { label: "Budget", path: "/accounting/budget" },
      { label: "Transaction Locking", path: "/accounting/transaction-locking" },
    ],
  },
  {
    title: "Stock",
    icon: "📦",
    items: [
      { label: "Products", path: "/stock/products" },
      { label: "Damaged Products", path: "/stock/damaged-products" },
    ],
  },
  {
    title: "Assets",
    icon: "🏢",
    items: [
      { label: "Current Assets", path: "/assets/current-assets" },
      { label: "Damaged Assets", path: "/assets/damaged-assets" },
    ],
  },
  {
    title: "Reports",
    icon: "📑",
    items: [{ label: "Reports Home", path: "/reports" }],
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-900 text-slate-200 h-screen sticky top-0 flex flex-col">
      {/* Brand */}
      <div className="p-4 border-b border-slate-700">
        <h1 className="text-xl font-bold">
          <span className="text-blue-500">b</span>BOOK
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Cloud Accounting Software
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-4 text-sm">
        {menuConfig.map((section) => (
          <div key={section.title}>
            <div className="text-[10px] uppercase tracking-wide text-slate-500 mb-1 flex items-center gap-1">
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-1.5 rounded-lg ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-slate-700 text-xs text-slate-500">
        v0.1 • bBOOK
      </div>
    </aside>
  );
}
