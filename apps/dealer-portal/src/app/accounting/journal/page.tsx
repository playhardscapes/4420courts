'use client';

import { useState } from 'react';
import { 
  PlusIcon, 
  EyeIcon, 
  PencilIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const sampleJournalEntries = [
  {
    id: 1,
    entryNumber: 'JE-2025-001',
    date: '2025-01-28',
    description: 'Customer payment - Invoice INV-2025-001',
    reference: 'INV-2025-001',
    debitAccount: 'Cash',
    creditAccount: 'Accounts Receivable',
    amount: 6250,
    source: 'manual',
    createdBy: 'John Doe'
  },
  {
    id: 2,
    entryNumber: 'JE-2025-002',
    date: '2025-01-29',
    description: 'Material purchase - concrete supplies',
    reference: 'PO-001',
    debitAccount: 'Cost of Goods Sold',
    creditAccount: 'Accounts Payable',
    amount: 1500,
    source: 'ai_categorized',
    createdBy: 'AI Assistant'
  },
  {
    id: 3,
    entryNumber: 'JE-2025-003',
    date: '2025-01-30',
    description: 'Equipment rental - concrete mixer',
    reference: 'EXP-001',
    debitAccount: 'Operating Expenses',
    creditAccount: 'Cash',
    amount: 250,
    source: 'bank_import',
    createdBy: 'Bank Import'
  }
];

const accountOptions = [
  'Cash',
  'Accounts Receivable',
  'Accounts Payable',
  'Cost of Goods Sold',
  'Operating Expenses',
  'Revenue',
  'Equipment',
  'Accumulated Depreciation'
];

const getSourceColor = (source: string) => {
  switch (source) {
    case 'manual':
      return 'bg-blue-100 text-blue-800';
    case 'ai_categorized':
      return 'bg-purple-100 text-purple-800';
    case 'bank_import':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function JournalPage() {
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [showAIHelper, setShowAIHelper] = useState(false);
  const [selectedDebitAccount, setSelectedDebitAccount] = useState('');
  const [selectedCreditAccount, setSelectedCreditAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAIHelp = async () => {
    // Simulate AI assistance for categorization
    if (description.toLowerCase().includes('payment')) {
      setSelectedDebitAccount('Cash');
      setSelectedCreditAccount('Accounts Receivable');
    } else if (description.toLowerCase().includes('material') || description.toLowerCase().includes('supply')) {
      setSelectedDebitAccount('Cost of Goods Sold');
      setSelectedCreditAccount('Accounts Payable');
    } else if (description.toLowerCase().includes('expense') || description.toLowerCase().includes('rental')) {
      setSelectedDebitAccount('Operating Expenses');
      setSelectedCreditAccount('Cash');
    }
    setShowAIHelper(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Journal Entries</h1>
            <p className="text-gray-600">Record and manage accounting transactions with AI assistance</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowAIHelper(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center gap-2"
            >
              <SparklesIcon className="h-4 w-4" />
              AI Categorize
            </button>
            <button 
              onClick={() => setShowNewEntryForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <PlusIcon className="h-4 w-4" />
              New Entry
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Entries This Month</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">$8,000</div>
          <div className="text-sm text-gray-600">Total Debits</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">$8,000</div>
          <div className="text-sm text-gray-600">Total Credits</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-purple-600">1</div>
          <div className="text-sm text-gray-600">AI Categorized</div>
        </div>
      </div>

      {/* AI Helper Modal */}
      {showAIHelper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <SparklesIcon className="h-6 w-6 text-purple-600" />
                  AI Transaction Categorizer
                </h2>
                <button 
                  onClick={() => setShowAIHelper(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paste Transaction Details
                  </label>
                  <textarea 
                    placeholder="Paste bank transaction details, receipt info, or describe the transaction..."
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">How AI Categorization Works:</h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Analyzes transaction descriptions and amounts</li>
                    <li>• Suggests appropriate debit and credit accounts</li>
                    <li>• Learns from your previous categorizations</li>
                    <li>• Handles common business transactions automatically</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button 
                  onClick={() => setShowAIHelper(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAIHelp}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Categorize with AI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Journal Entry Form */}
      {showNewEntryForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">New Journal Entry</h2>
            <button 
              onClick={() => setShowNewEntryForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input 
                  type="date" 
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input 
                  type="text" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description of the transaction"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reference</label>
                <input 
                  type="text" 
                  placeholder="Invoice #, PO #, etc."
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Debit Account</label>
                <select 
                  value={selectedDebitAccount}
                  onChange={(e) => setSelectedDebitAccount(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select debit account</option>
                  {accountOptions.map((account) => (
                    <option key={account} value={account}>
                      {account}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credit Account</label>
                <select 
                  value={selectedCreditAccount}
                  onChange={(e) => setSelectedCreditAccount(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select credit account</option>
                  {accountOptions.map((account) => (
                    <option key={account} value={account}>
                      {account}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">Double-Entry Check:</h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <div>Debit: {selectedDebitAccount || 'Not selected'} ${amount || '0.00'}</div>
                  <div>Credit: {selectedCreditAccount || 'Not selected'} ${amount || '0.00'}</div>
                  <div className="font-medium mt-2">
                    Balance: {selectedDebitAccount && selectedCreditAccount && amount ? '✓ Balanced' : '⚠ Not balanced'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => setShowNewEntryForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={() => setShowAIHelper(true)}
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
            >
              Use AI Helper
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Create Entry
            </button>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search entries..."
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="rounded-md border-gray-300 text-sm">
              <option>All Sources</option>
              <option>Manual</option>
              <option>AI Categorized</option>
              <option>Bank Import</option>
            </select>
            <select className="rounded-md border-gray-300 text-sm">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              <FunnelIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Journal Entries List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Journal Entries</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
              <ArrowDownTrayIcon className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Debit Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleJournalEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{entry.entryNumber}</div>
                      <div className="text-sm text-gray-500">{entry.date}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{entry.description}</div>
                    {entry.reference && (
                      <div className="text-sm text-gray-500">Ref: {entry.reference}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.debitAccount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.creditAccount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${entry.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getSourceColor(entry.source)}`}>
                      {entry.source.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900" title="Edit">
                        <PencilIcon className="h-4 w-4" />
                      </button>
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