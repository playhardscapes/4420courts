'use client';

import { useState } from 'react';
import { 
  DocumentTextIcon, 
  PlusIcon, 
  EyeIcon, 
  PencilIcon, 
  TrashIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface Quote {
  id: string;
  quoteNumber: string;
  customerId: string;
  customer: string;
  email: string;
  serviceLevel: string;
  estimatedPrice: number;
  status: 'draft' | 'pending' | 'accepted' | 'rejected' | 'expired';
  createdDate: string;
  validUntil: string;
  description: string;
  propertyDetails?: {
    address: string;
    spaceSize: string;
    currentSurface: string;
    timeline: string;
    specialRequirements: string;
  };
}

const sampleQuotes: Quote[] = [
  {
    id: '1',
    quoteNumber: 'Q-2025-001',
    customerId: '1',
    customer: 'Mike Johnson',
    email: 'mike@email.com',
    serviceLevel: 'Level 5 - Full Project Management',
    estimatedPrice: 42500,
    status: 'pending',
    createdDate: '2025-01-28',
    validUntil: '2025-02-28',
    description: 'Premium pickleball court with custom graphics and landscape coordination',
    propertyDetails: {
      address: '123 Oak Street, Raleigh, NC',
      spaceSize: '30x60 feet',
      currentSurface: 'grass',
      timeline: '6-8 weeks',
      specialRequirements: 'Custom logo, LED lighting'
    }
  },
  {
    id: '2',
    quoteNumber: 'Q-2025-002',
    customerId: '2',
    customer: 'Sarah Smith',
    email: 'sarah@email.com',
    serviceLevel: 'Level 3 - Coating & Lining Specialist',
    estimatedPrice: 12500,
    status: 'accepted',
    createdDate: '2025-01-25',
    validUntil: '2025-02-25',
    description: 'Professional surface coating and line painting for existing concrete base',
    propertyDetails: {
      address: '456 Pine Ave, Cary, NC',
      spaceSize: '20x44 feet',
      currentSurface: 'concrete',
      timeline: '2-3 weeks',
      specialRequirements: 'Weather dependent scheduling'
    }
  },
  {
    id: '3',
    quoteNumber: 'Q-2025-003',
    customerId: '3',
    customer: 'Robert Davis',
    email: 'robert@email.com',
    serviceLevel: 'Level 4 - Project Management + Finish',
    estimatedPrice: 22000,
    status: 'rejected',
    createdDate: '2025-01-20',
    validUntil: '2025-02-20',
    description: 'Managed court construction with contractor coordination',
    propertyDetails: {
      address: '789 Maple Dr, Durham, NC',
      spaceSize: '24x54 feet',
      currentSurface: 'asphalt',
      timeline: '4-5 weeks',
      specialRequirements: 'Drainage improvements needed'
    }
  }
];

const serviceLevels = [
  { value: 'level1', label: 'Level 1 - Free DIY Resources ($0)', price: 0 },
  { value: 'level2', label: 'Level 2 - Monthly Membership ($49.99/month)', price: 49.99 },
  { value: 'level3', label: 'Level 3 - Coating & Lining Specialist ($10k-15k)', price: 12500 },
  { value: 'level4', label: 'Level 4 - Project Management + Finish ($15k-25k)', price: 20000 },
  { value: 'level5', label: 'Level 5 - Full Project Management ($30k-45k)', price: 37500 },
  { value: 'level5.5', label: 'Level 5.5 - Premium Personalized (Custom)', price: 0 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'accepted':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    case 'expired':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <ClockIcon className="h-4 w-4" />;
    case 'accepted':
      return <CheckCircleIcon className="h-4 w-4" />;
    case 'rejected':
      return <XCircleIcon className="h-4 w-4" />;
    default:
      return <ClockIcon className="h-4 w-4" />;
  }
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(sampleQuotes);
  const [showNewQuoteForm, setShowNewQuoteForm] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    customerEmail: '',
    propertyAddress: '',
    spaceSize: '',
    currentSurface: '',
    timeline: '',
    specialRequirements: '',
    serviceLevel: '',
    description: ''
  });

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = 
      quote.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.quoteNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !filterStatus || quote.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleCreateQuote = async () => {
    setIsLoading(true);
    try {
      // AI-powered quote generation would happen here
      const selectedLevel = serviceLevels.find(l => l.value === formData.serviceLevel);
      const basePrice = selectedLevel?.price || 0;
      
      // Simulate AI pricing logic
      let finalPrice = basePrice;
      if (formData.spaceSize.includes('60')) finalPrice *= 1.2; // Larger space
      if (formData.currentSurface === 'grass') finalPrice *= 1.3; // More prep needed
      if (formData.specialRequirements.toLowerCase().includes('lighting')) finalPrice += 5000;
      if (formData.specialRequirements.toLowerCase().includes('custom')) finalPrice += 3000;

      const newQuote: Quote = {
        id: Date.now().toString(),
        quoteNumber: `Q-2025-${String(quotes.length + 1).padStart(3, '0')}`,
        customerId: formData.customerId || Date.now().toString(),
        customer: formData.customerName,
        email: formData.customerEmail,
        serviceLevel: selectedLevel?.label || '',
        estimatedPrice: Math.round(finalPrice),
        status: 'draft',
        createdDate: new Date().toISOString().split('T')[0],
        validUntil: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
        description: formData.description,
        propertyDetails: {
          address: formData.propertyAddress,
          spaceSize: formData.spaceSize,
          currentSurface: formData.currentSurface,
          timeline: formData.timeline,
          specialRequirements: formData.specialRequirements
        }
      };
      
      setQuotes([newQuote, ...quotes]);
      setShowNewQuoteForm(false);
      resetForm();
    } catch (error) {
      console.error('Error creating quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateQuoteStatus = async (quoteId: string, newStatus: Quote['status']) => {
    setIsLoading(true);
    try {
      setQuotes(quotes.map(q => 
        q.id === quoteId 
          ? { ...q, status: newStatus }
          : q
      ));
    } catch (error) {
      console.error('Error updating quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteQuote = async (quoteId: string) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      setIsLoading(true);
      try {
        setQuotes(quotes.filter(q => q.id !== quoteId));
      } catch (error) {
        console.error('Error deleting quote:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      customerId: '',
      customerName: '',
      customerEmail: '',
      propertyAddress: '',
      spaceSize: '',
      currentSurface: '',
      timeline: '',
      specialRequirements: '',
      serviceLevel: '',
      description: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quotes</h1>
            <p className="text-gray-600">Create and manage project quotes with AI assistance</p>
          </div>
          <button 
            onClick={() => setShowNewQuoteForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            New Quote
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">{quotes.length}</div>
          <div className="text-sm text-gray-600">Total Quotes</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">
            ${quotes.reduce((sum, q) => sum + q.estimatedPrice, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-yellow-600">
            {quotes.filter(q => q.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">
            {quotes.length > 0 ? Math.round((quotes.filter(q => q.status === 'accepted').length / quotes.length) * 100) : 0}%
          </div>
          <div className="text-sm text-gray-600">Acceptance Rate</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search quotes..."
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
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI Quote Generator Section */}
      {showNewQuoteForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">AI-Powered Quote Generator</h2>
            <button 
              onClick={() => setShowNewQuoteForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircleIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Information</label>
                <input 
                  type="text" 
                  placeholder="Customer Name"
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Property Address"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Level</label>
                <select 
                  value={formData.serviceLevel}
                  onChange={(e) => setFormData({...formData, serviceLevel: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Service Level</option>
                  {serviceLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Details</label>
                <input 
                  type="text" 
                  placeholder="Available space (e.g., 30x60 feet)"
                  value={formData.spaceSize}
                  onChange={(e) => setFormData({...formData, spaceSize: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Current surface (e.g., grass, concrete)"
                  value={formData.currentSurface}
                  onChange={(e) => setFormData({...formData, currentSurface: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Preferred timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea 
                  placeholder="Custom colors, lighting, drainage needs, etc."
                  rows={3}
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quote Description</label>
            <textarea 
              placeholder="Brief description of the proposed work..."
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => {
                setShowNewQuoteForm(false);
                resetForm();
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateQuote}
              disabled={isLoading || !formData.customerName || !formData.customerEmail || !formData.serviceLevel}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate Quote with AI'}
            </button>
          </div>
        </div>
      )}

      {/* Quotes List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Quotes</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quote
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valid Until
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{quote.quoteNumber}</div>
                      <div className="text-sm text-gray-500">{quote.createdDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{quote.customer}</div>
                      <div className="text-sm text-gray-500">{quote.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs">{quote.serviceLevel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${quote.estimatedPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                      {getStatusIcon(quote.status)}
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {quote.validUntil}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedQuote(quote)}
                        className="text-blue-600 hover:text-blue-900" 
                        title="View"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      {quote.status === 'pending' && (
                        <>
                          <button 
                            onClick={() => handleUpdateQuoteStatus(quote.id, 'accepted')}
                            className="text-green-600 hover:text-green-900" 
                            title="Accept"
                          >
                            <CheckCircleIcon className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleUpdateQuoteStatus(quote.id, 'rejected')}
                            className="text-red-600 hover:text-red-900" 
                            title="Reject"
                          >
                            <XCircleIcon className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button 
                        className="text-yellow-600 hover:text-yellow-900" 
                        title="Edit"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteQuote(quote.id)}
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

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Quote Details - {selectedQuote.quoteNumber}
                </h2>
                <button 
                  onClick={() => setSelectedQuote(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Customer Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Customer:</span>
                      <span className="ml-2 font-medium">{selectedQuote.customer}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <span className="ml-2">{selectedQuote.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Service Level:</span>
                      <span className="ml-2">{selectedQuote.serviceLevel}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedQuote.status)}`}>
                        {selectedQuote.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Estimated Price:</span>
                      <span className="ml-2 font-bold text-green-600">${selectedQuote.estimatedPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Property Details</h3>
                  {selectedQuote.propertyDetails && (
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-500">Address:</span>
                        <span className="ml-2">{selectedQuote.propertyDetails.address}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Space Size:</span>
                        <span className="ml-2">{selectedQuote.propertyDetails.spaceSize}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Current Surface:</span>
                        <span className="ml-2">{selectedQuote.propertyDetails.currentSurface}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="ml-2">{selectedQuote.propertyDetails.timeline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Special Requirements:</span>
                        <span className="ml-2">{selectedQuote.propertyDetails.specialRequirements}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {selectedQuote.description}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Created:</span>
                  <span className="ml-2">{selectedQuote.createdDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">Valid Until:</span>
                  <span className="ml-2">{selectedQuote.validUntil}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-2">
                  {selectedQuote.status === 'pending' && (
                    <>
                      <button 
                        onClick={() => {
                          handleUpdateQuoteStatus(selectedQuote.id, 'accepted');
                          setSelectedQuote(null);
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Accept Quote
                      </button>
                      <button 
                        onClick={() => {
                          handleUpdateQuoteStatus(selectedQuote.id, 'rejected');
                          setSelectedQuote(null);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Reject Quote
                      </button>
                    </>
                  )}
                  {selectedQuote.status === 'accepted' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Convert to Contract
                    </button>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedQuote(null)}
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