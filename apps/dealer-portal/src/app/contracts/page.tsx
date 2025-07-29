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
  DocumentIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  TrashIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface Contract {
  id: string;
  contractNumber: string;
  customerId: string;
  customer: string;
  email: string;
  serviceLevel: string;
  contractValue: number;
  status: 'draft' | 'pending_signature' | 'signed' | 'completed' | 'cancelled';
  createdDate: string;
  signedDate?: string;
  startDate: string;
  estimatedCompletion: string;
  quoteId: string;
  paymentTerms: string;
  warrantyTerms: string;
  specialConditions?: string;
  contractContent?: string;
  signatureData?: {
    customerSignature?: string;
    customerSignedAt?: string;
    contractorSignature?: string;
    contractorSignedAt?: string;
  };
}

const sampleContracts: Contract[] = [
  {
    id: '1',
    contractNumber: 'C-2025-001',
    customerId: '2',
    customer: 'Sarah Smith',
    email: 'sarah@email.com',
    serviceLevel: 'Level 3 - Coating & Lining Specialist',
    contractValue: 12500,
    status: 'signed',
    createdDate: '2025-01-26',
    signedDate: '2025-01-28',
    startDate: '2025-02-01',
    estimatedCompletion: '2025-02-15',
    quoteId: 'Q-2025-002',
    paymentTerms: '50% down, 50% on completion',
    warrantyTerms: '1 year materials, 2 years workmanship',
    specialConditions: 'Weather dependent scheduling',
    contractContent: 'Professional surface coating and line painting services...'
  },
  {
    id: '2',
    contractNumber: 'C-2025-002',
    customerId: '1',
    customer: 'Mike Johnson',
    email: 'mike@email.com',
    serviceLevel: 'Level 5 - Full Project Management',
    contractValue: 42500,
    status: 'pending_signature',
    createdDate: '2025-01-29',
    startDate: '2025-02-15',
    estimatedCompletion: '2025-03-30',
    quoteId: 'Q-2025-001',
    paymentTerms: '33% down, 33% midpoint, 34% completion',
    warrantyTerms: '2 year comprehensive warranty',
    specialConditions: 'Custom logo installation, LED lighting integration',
    contractContent: 'Complete project management services including...'
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
  const [contracts, setContracts] = useState<Contract[]>(sampleContracts);
  const [showNewContractForm, setShowNewContractForm] = useState(false);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    quoteId: '',
    customerId: '',
    customerName: '',
    customerEmail: '',
    serviceLevel: '',
    contractValue: 0,
    startDate: '',
    estimatedCompletion: '',
    paymentTerms: '50% down, 50% on completion',
    warrantyTerms: '1 year materials, 2 years workmanship',
    specialConditions: '',
    templateId: ''
  });

  const availableQuotes = [
    { id: 'Q-2025-001', customer: 'Mike Johnson', serviceLevel: 'Level 5', value: 42500, status: 'accepted' },
    { id: 'Q-2025-003', customer: 'Robert Davis', serviceLevel: 'Level 4', value: 22000, status: 'accepted' }
  ];

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = 
      contract.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.contractNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !filterStatus || contract.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleCreateContract = async () => {
    setIsLoading(true);
    try {
      // AI contract generation would happen here
      const contractContent = await generateContractWithAI(formData);

      const newContract: Contract = {
        id: Date.now().toString(),
        contractNumber: `C-2025-${String(contracts.length + 1).padStart(3, '0')}`,
        customerId: formData.customerId,
        customer: formData.customerName,
        email: formData.customerEmail,
        serviceLevel: formData.serviceLevel,
        contractValue: formData.contractValue,
        status: 'draft',
        createdDate: new Date().toISOString().split('T')[0],
        startDate: formData.startDate,
        estimatedCompletion: formData.estimatedCompletion,
        quoteId: formData.quoteId,
        paymentTerms: formData.paymentTerms,
        warrantyTerms: formData.warrantyTerms,
        specialConditions: formData.specialConditions,
        contractContent: contractContent
      };
      
      setContracts([newContract, ...contracts]);
      setShowNewContractForm(false);
      resetForm();
    } catch (error) {
      console.error('Error creating contract:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateContractWithAI = async (data: any): Promise<string> => {
    // Simulate AI contract generation
    return `PICKLEBALL COURT CONSTRUCTION CONTRACT

This agreement is between 4420 Courts LLC and ${data.customerName}.

SERVICE LEVEL: ${data.serviceLevel}
CONTRACT VALUE: $${data.contractValue.toLocaleString()}
PROJECT TIMELINE: ${data.startDate} to ${data.estimatedCompletion}

PAYMENT TERMS: ${data.paymentTerms}
WARRANTY: ${data.warrantyTerms}

SPECIAL CONDITIONS:
${data.specialConditions}

[AI-generated contract content would be much more detailed here...]`;
  };

  const handleUpdateContractStatus = async (contractId: string, newStatus: Contract['status']) => {
    setIsLoading(true);
    try {
      setContracts(contracts.map(c => 
        c.id === contractId 
          ? { 
              ...c, 
              status: newStatus,
              signedDate: newStatus === 'signed' ? new Date().toISOString().split('T')[0] : c.signedDate
            }
          : c
      ));
    } catch (error) {
      console.error('Error updating contract:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendContract = async (contractId: string) => {
    setIsLoading(true);
    try {
      // Email sending logic would go here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setContracts(contracts.map(c => 
        c.id === contractId 
          ? { ...c, status: 'pending_signature' as Contract['status'] }
          : c
      ));
      
      alert('Contract sent successfully!');
    } catch (error) {
      console.error('Error sending contract:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteContract = async (contractId: string) => {
    if (window.confirm('Are you sure you want to delete this contract?')) {
      setIsLoading(true);
      try {
        setContracts(contracts.filter(c => c.id !== contractId));
      } catch (error) {
        console.error('Error deleting contract:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      quoteId: '',
      customerId: '',
      customerName: '',
      customerEmail: '',
      serviceLevel: '',
      contractValue: 0,
      startDate: '',
      estimatedCompletion: '',
      paymentTerms: '50% down, 50% on completion',
      warrantyTerms: '1 year materials, 2 years workmanship',
      specialConditions: '',
      templateId: ''
    });
  };

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
          <div className="text-2xl font-bold text-blue-600">{contracts.length}</div>
          <div className="text-sm text-gray-600">Active Contracts</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">
            ${contracts.reduce((sum, c) => sum + c.contractValue, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-yellow-600">
            {contracts.filter(c => c.status === 'pending_signature').length}
          </div>
          <div className="text-sm text-gray-600">Pending Signature</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">
            {contracts.filter(c => c.status === 'signed' && new Date(c.signedDate || '') > new Date(Date.now() - 30*24*60*60*1000)).length}
          </div>
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
                <select 
                  value={formData.quoteId}
                  onChange={(e) => {
                    const selectedQuote = availableQuotes.find(q => q.id === e.target.value);
                    if (selectedQuote) {
                      setFormData({
                        ...formData,
                        quoteId: e.target.value,
                        customerName: selectedQuote.customer,
                        serviceLevel: selectedQuote.serviceLevel,
                        contractValue: selectedQuote.value
                      });
                    } else {
                      setFormData({...formData, quoteId: e.target.value});
                    }
                  }}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select existing quote</option>
                  {availableQuotes.map((quote) => (
                    <option key={quote.id} value={quote.id}>
                      {quote.id} - {quote.customer} (${quote.value.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contract Template</label>
                <select 
                  value={formData.templateId}
                  onChange={(e) => setFormData({...formData, templateId: e.target.value})}
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
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Completion</label>
                <input 
                  type="date" 
                  value={formData.estimatedCompletion}
                  onChange={(e) => setFormData({...formData, estimatedCompletion: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                <select 
                  value={formData.paymentTerms}
                  onChange={(e) => setFormData({...formData, paymentTerms: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>50% down, 50% on completion</option>
                  <option>33% down, 33% midpoint, 34% completion</option>
                  <option>25% down, 25% each milestone</option>
                  <option>Custom terms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Warranty Terms</label>
                <select 
                  value={formData.warrantyTerms}
                  onChange={(e) => setFormData({...formData, warrantyTerms: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
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
                  value={formData.specialConditions}
                  onChange={(e) => setFormData({...formData, specialConditions: e.target.value})}
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
            <button 
              onClick={handleCreateContract}
              disabled={isLoading || !formData.customerName || !formData.serviceLevel}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate Contract with AI'}
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

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search contracts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="">All Status</option>
              <option value="draft">Draft</option>
              <option value="pending_signature">Pending Signature</option>
              <option value="signed">Signed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Contracts ({filteredContracts.length})</h2>
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
              {filteredContracts.map((contract) => (
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
                      <button 
                        onClick={() => setSelectedContract(contract)}
                        className="text-blue-600 hover:text-blue-900" 
                        title="View"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      {contract.status === 'draft' && (
                        <button 
                          onClick={() => handleSendContract(contract.id)}
                          className="text-blue-600 hover:text-blue-900" 
                          title="Send Contract"
                        >
                          <PaperAirplaneIcon className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-yellow-600 hover:text-yellow-900" title="Edit">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900" title="Download">
                        <ArrowDownTrayIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteContract(contract.id)}
                        className="text-red-600 hover:text-red-900" 
                        title="Delete"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Contract Detail Modal */}
      {selectedContract && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Contract Details - {selectedContract.contractNumber}
                </h2>
                <button 
                  onClick={() => setSelectedContract(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Contract Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Customer:</span>
                      <span className="ml-2 font-medium">{selectedContract.customer}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <span className="ml-2">{selectedContract.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Service Level:</span>
                      <span className="ml-2">{selectedContract.serviceLevel}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedContract.status)}`}>
                        {selectedContract.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Contract Value:</span>
                      <span className="ml-2 font-bold text-green-600">${selectedContract.contractValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Project Timeline</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Start Date:</span>
                      <span className="ml-2">{selectedContract.startDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Estimated Completion:</span>
                      <span className="ml-2">{selectedContract.estimatedCompletion}</span>
                    </div>
                    {selectedContract.signedDate && (
                      <div>
                        <span className="text-gray-500">Signed Date:</span>
                        <span className="ml-2">{selectedContract.signedDate}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500">Payment Terms:</span>
                      <span className="ml-2">{selectedContract.paymentTerms}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <span className="ml-2">{selectedContract.warrantyTerms}</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedContract.specialConditions && (
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Special Conditions</h3>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {selectedContract.specialConditions}
                  </p>
                </div>
              )}

              {selectedContract.contractContent && (
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Contract Content</h3>
                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg whitespace-pre-line">
                    {selectedContract.contractContent}
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-2">
                  {selectedContract.status === 'draft' && (
                    <button 
                      onClick={() => {
                        handleSendContract(selectedContract.id);
                        setSelectedContract(null);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Send Contract
                    </button>
                  )}
                  {selectedContract.status === 'pending_signature' && (
                    <>
                      <button 
                        onClick={() => {
                          handleUpdateContractStatus(selectedContract.id, 'signed');
                          setSelectedContract(null);
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Mark as Signed
                      </button>
                      <button 
                        onClick={() => {
                          handleUpdateContractStatus(selectedContract.id, 'cancelled');
                          setSelectedContract(null);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Cancel Contract
                      </button>
                    </>
                  )}
                  {selectedContract.status === 'signed' && (
                    <button 
                      onClick={() => {
                        handleUpdateContractStatus(selectedContract.id, 'completed');
                        setSelectedContract(null);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedContract(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}