'use client';

import { useState } from 'react';
import { 
  DocumentDuplicateIcon, 
  PlusIcon, 
  EyeIcon, 
  PencilIcon, 
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentIcon 
} from '@heroicons/react/24/outline';

const sampleContracts = [
  {
    id: 1,
    contractNumber: 'C-2025-001',
    customer: 'Sarah Smith',
    serviceLevel: 'Level 3 - Coating & Lining Specialist',
    contractValue: 12500,
    status: 'signed',
    createdDate: '2025-01-26',
    signedDate: '2025-01-28',
    startDate: '2025-02-01',
    estimatedCompletion: '2025-02-15',
    quoteId: 'Q-2025-002'
  },
  {
    id: 2,
    contractNumber: 'C-2025-002',
    customer: 'Mike Johnson',
    serviceLevel: 'Level 5 - Full Project Management',
    contractValue: 42500,
    status: 'pending_signature',
    createdDate: '2025-01-29',
    signedDate: null,
    startDate: '2025-02-15',
    estimatedCompletion: '2025-03-30',
    quoteId: 'Q-2025-001'
  }
];

const contractTemplates = [
  {
    id: 1,
    name: 'Level 1-2 Service Agreement',
    description: 'DIY and membership service agreements',
    serviceLevel: ['level1', 'level2']
  },
  {
    id: 2,
    name: 'Level 3 Coating & Lining Contract',
    description: 'Professional finishing services contract',
    serviceLevel: ['level3']
  },
  {
    id: 3,
    name: 'Level 4-5 Full Service Contract',
    description: 'Comprehensive project management agreement',
    serviceLevel: ['level4', 'level5', 'level5.5']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'draft':
      return 'bg-gray-100 text-gray-800';
    case 'pending_signature':
      return 'bg-yellow-100 text-yellow-800';
    case 'signed':
      return 'bg-green-100 text-green-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'signed':
      return <CheckCircleIcon className="h-4 w-4" />;
    case 'pending_signature':
      return <ClockIcon className="h-4 w-4" />;
    default:
      return <DocumentIcon className="h-4 w-4" />;
  }
};

export default function ContractsPage() {
  const [showNewContractForm, setShowNewContractForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contracts</h1>
            <p className="text-gray-600">Generate and manage project contracts with AI assistance</p>
          </div>
          <button 
            onClick={() => setShowNewContractForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            New Contract
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">2</div>
          <div className="text-sm text-gray-600">Active Contracts</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">$55,000</div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-yellow-600">1</div>
          <div className="text-sm text-gray-600">Pending Signature</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">1</div>
          <div className="text-sm text-gray-600">Signed This Month</div>
        </div>
      </div>

      {/* AI Contract Generator Section */}
      {showNewContractForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">AI Contract Generator</h2>
            <button 
              onClick={() => setShowNewContractForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source Quote</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select existing quote</option>
                  <option value="Q-2025-001">Q-2025-001 - Mike Johnson ($42,500)</option>
                  <option value="Q-2025-003">Q-2025-003 - Robert Davis ($22,000)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contract Template</label>
                <select 
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select template</option>
                  {contractTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Start Date</label>
                <input 
                  type="date" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Completion</label>
                <input 
                  type="date" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>50% down, 50% on completion</option>
                  <option>33% down, 33% midpoint, 34% completion</option>
                  <option>25% down, 25% each milestone</option>
                  <option>Custom terms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Warranty Terms</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1 year materials, 2 years workmanship</option>
                  <option>2 year comprehensive warranty</option>
                  <option>5 year premium warranty</option>
                  <option>Custom warranty</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Conditions</label>
                <textarea 
                  placeholder="Weather dependencies, permit requirements, etc."
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => setShowNewContractForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Generate Contract with AI
            </button>
          </div>
        </div>
      )}

      {/* Contract Templates */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contract Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contractTemplates.map((template) => (
            <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-900 mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {template.serviceLevel.join(', ')}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  Edit Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Contracts</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contract
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleContracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{contract.contractNumber}</div>
                      <div className="text-sm text-gray-500">Created {contract.createdDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{contract.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs">{contract.serviceLevel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${contract.contractValue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                      {getStatusIcon(contract.status)}
                      {contract.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{contract.startDate} -</div>
                    <div>{contract.estimatedCompletion}</div>
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