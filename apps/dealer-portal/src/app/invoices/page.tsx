'use client';

import { useState } from 'react';
import { 
  BanknotesIcon, 
  PlusIcon, 
  EyeIcon, 
  PencilIcon,
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const sampleInvoices = [
  {
    id: 1,
    invoiceNumber: 'INV-2025-001',
    customer: 'Sarah Smith',
    projectNumber: 'P-2025-001',
    amount: 6250,
    status: 'paid',
    issueDate: '2025-02-01',
    dueDate: '2025-02-15',
    paidDate: '2025-02-10',
    description: '50% down payment - Level 3 Coating & Lining',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 2,
    invoiceNumber: 'INV-2025-002',
    customer: 'Mike Johnson',
    projectNumber: 'P-2025-002',
    amount: 21250,
    status: 'pending',
    issueDate: '2025-02-15',
    dueDate: '2025-03-01',
    paidDate: null,
    description: '50% down payment - Level 5 Full Project Management',
    paymentMethod: null
  },
  {
    id: 3,
    invoiceNumber: 'INV-2025-003',
    customer: 'Davis Family',
    projectNumber: 'P-2024-045',
    amount: 11000,
    status: 'overdue',
    issueDate: '2025-01-15',
    dueDate: '2025-01-30',
    paidDate: null,
    description: 'Final payment - Level 4 Project completion',
    paymentMethod: null
  }
];

const paymentTermsOptions = [
  { value: 'net15', label: 'Net 15 days' },
  { value: 'net30', label: 'Net 30 days' },
  { value: 'due_on_receipt', label: 'Due on receipt' },
  { value: 'milestone', label: 'Milestone-based' }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'draft':
      return 'bg-gray-100 text-gray-800';
    case 'sent':
      return 'bg-blue-100 text-blue-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'paid':
      return 'bg-green-100 text-green-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    case 'cancelled':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'paid':
      return <CheckCircleIcon className="h-4 w-4" />;
    case 'pending':
      return <ClockIcon className="h-4 w-4" />;
    case 'overdue':
      return <ExclamationTriangleIcon className="h-4 w-4" />;
    default:
      return <ClockIcon className="h-4 w-4" />;
  }
};

export default function InvoicesPage() {
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false);
  const [selectedPaymentTerms, setSelectedPaymentTerms] = useState('net30');

  const totalOutstanding = sampleInvoices
    .filter(inv => inv.status !== 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalPaid = sampleInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const overdueCount = sampleInvoices.filter(inv => inv.status === 'overdue').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
            <p className="text-gray-600">Manage billing and payment tracking for your projects</p>
          </div>
          <button 
            onClick={() => setShowNewInvoiceForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Paid This Month</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-yellow-600">${totalOutstanding.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Outstanding</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-red-600">{overdueCount}</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Total Invoices</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
            <BanknotesIcon className="h-8 w-8 text-blue-600 mb-2" />
            <div className="font-medium text-gray-900">Milestone Invoice</div>
            <div className="text-sm text-gray-600">Generate invoice for project milestone</div>
          </button>
          <button className="text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
            <PaperAirplaneIcon className="h-8 w-8 text-green-600 mb-2" />
            <div className="font-medium text-gray-900">Send Reminders</div>
            <div className="text-sm text-gray-600">Send payment reminders to overdue clients</div>
          </button>
          <button className="text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
            <ArrowDownTrayIcon className="h-8 w-8 text-purple-600 mb-2" />
            <div className="font-medium text-gray-900">Export Reports</div>
            <div className="text-sm text-gray-600">Download financial reports for accounting</div>
          </button>
        </div>
      </div>

      {/* New Invoice Form */}
      {showNewInvoiceForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Create New Invoice</h2>
            <button 
              onClick={() => setShowNewInvoiceForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select project</option>
                  <option value="P-2025-001">P-2025-001 - Sarah Smith</option>
                  <option value="P-2025-002">P-2025-002 - Mike Johnson</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Type</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="down_payment">Down Payment (50%)</option>
                  <option value="milestone">Milestone Payment</option>
                  <option value="final_payment">Final Payment</option>
                  <option value="custom">Custom Amount</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                <select 
                  value={selectedPaymentTerms}
                  onChange={(e) => setSelectedPaymentTerms(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {paymentTermsOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Date</label>
                <input 
                  type="date" 
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  placeholder="Description of services invoiced..."
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea 
                  placeholder="Payment instructions, project details, etc."
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => setShowNewInvoiceForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              Save as Draft
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Create & Send
            </button>
          </div>
        </div>
      )}

      {/* Invoices List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
            <div className="flex items-center gap-4">
              <select className="rounded-md border-gray-300 text-sm">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Paid</option>
                <option>Overdue</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{invoice.invoiceNumber}</div>
                      <div className="text-sm text-gray-500">{invoice.issueDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{invoice.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{invoice.projectNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${invoice.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.dueDate}
                    {invoice.paidDate && (
                      <div className="text-xs text-green-600">Paid: {invoice.paidDate}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900" title="Edit">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900" title="Download">
                        <ArrowDownTrayIcon className="h-4 w-4" />
                      </button>
                      {invoice.status === 'pending' && (
                        <button className="text-purple-600 hover:text-purple-900" title="Send Reminder">
                          <PaperAirplaneIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}