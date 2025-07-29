'use client';

import { useState, useEffect } from 'react';
import { 
  UserGroupIcon, 
  PlusIcon, 
  EyeIcon, 
  PencilIcon,
  TrashIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

interface Customer {
  id: string;
  userId: string;
  companyName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  billingAddress?: any;
  shippingAddress?: any;
  customerGroup: 'RETAIL' | 'CONTRACTOR' | 'DEALER' | 'WHOLESALE';
  createdAt: string;
  updatedAt: string;
  orders?: any[];
  invoices?: any[];
}

// Sample data - will be replaced with actual API calls
const sampleCustomers: Customer[] = [
  {
    id: '1',
    userId: 'user1',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike@email.com',
    phone: '(919) 555-0123',
    billingAddress: {
      street: '123 Oak Street',
      city: 'Raleigh',
      state: 'NC',
      zipCode: '27601'
    },
    customerGroup: 'RETAIL',
    createdAt: '2025-01-15',
    updatedAt: '2025-01-28',
    orders: [],
    invoices: []
  },
  {
    id: '2',
    userId: 'user2',
    firstName: 'Sarah',
    lastName: 'Smith',
    email: 'sarah@email.com',
    phone: '(919) 555-0456',
    companyName: 'Smith Construction',
    billingAddress: {
      street: '456 Pine Ave',
      city: 'Cary',
      state: 'NC',
      zipCode: '27511'
    },
    customerGroup: 'CONTRACTOR',
    createdAt: '2025-01-20',
    updatedAt: '2025-01-25',
    orders: [],
    invoices: []
  },
  {
    id: '3',
    userId: 'user3',
    firstName: 'Robert',
    lastName: 'Davis',
    email: 'robert@email.com',
    phone: '(919) 555-0789',
    billingAddress: {
      street: '789 Maple Dr',
      city: 'Durham',
      state: 'NC',
      zipCode: '27705'
    },
    customerGroup: 'RETAIL',
    createdAt: '2025-01-10',
    updatedAt: '2025-01-20',
    orders: [],
    invoices: []
  }
];

const customerGroupColors = {
  RETAIL: 'bg-blue-100 text-blue-800',
  CONTRACTOR: 'bg-green-100 text-green-800',
  DEALER: 'bg-purple-100 text-purple-800',
  WHOLESALE: 'bg-orange-100 text-orange-800'
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    customerGroup: 'RETAIL' as Customer['customerGroup'],
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGroup = !filterGroup || customer.customerGroup === filterGroup;
    
    return matchesSearch && matchesGroup;
  });

  const handleCreateCustomer = async () => {
    setIsLoading(true);
    try {
      // API call would go here
      const newCustomer: Customer = {
        id: Date.now().toString(),
        userId: `user_${Date.now()}`,
        ...formData,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      };
      
      setCustomers([newCustomer, ...customers]);
      setShowNewCustomerForm(false);
      resetForm();
    } catch (error) {
      console.error('Error creating customer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCustomer = async (updatedCustomer: Customer) => {
    setIsLoading(true);
    try {
      // API call would go here
      setCustomers(customers.map(c => 
        c.id === updatedCustomer.id 
          ? { ...updatedCustomer, updatedAt: new Date().toISOString().split('T')[0] }
          : c
      ));
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error updating customer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCustomer = async (customerId: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setIsLoading(true);
      try {
        // API call would go here
        setCustomers(customers.filter(c => c.id !== customerId));
      } catch (error) {
        console.error('Error deleting customer:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      customerGroup: 'RETAIL',
      billingAddress: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
            <p className="text-gray-600">Manage your customer relationships and contact information</p>
          </div>
          <button 
            onClick={() => setShowNewCustomerForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            New Customer
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-blue-600">{customers.length}</div>
          <div className="text-sm text-gray-600">Total Customers</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-green-600">
            {customers.filter(c => c.customerGroup === 'CONTRACTOR').length}
          </div>
          <div className="text-sm text-gray-600">Contractors</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-purple-600">
            {customers.filter(c => c.customerGroup === 'RETAIL').length}
          </div>
          <div className="text-sm text-gray-600">Retail Customers</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-2xl font-bold text-orange-600">
            {customers.filter(c => new Date(c.createdAt) > new Date(Date.now() - 30*24*60*60*1000)).length}
          </div>
          <div className="text-sm text-gray-600">New This Month</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="">All Groups</option>
              <option value="RETAIL">Retail</option>
              <option value="CONTRACTOR">Contractor</option>
              <option value="DEALER">Dealer</option>
              <option value="WHOLESALE">Wholesale</option>
            </select>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              <FunnelIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* New Customer Form */}
      {showNewCustomerForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Add New Customer</h2>
            <button 
              onClick={() => {
                setShowNewCustomerForm(false);
                resetForm();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                <input 
                  type="text" 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Group</label>
                <select 
                  value={formData.customerGroup}
                  onChange={(e) => setFormData({...formData, customerGroup: e.target.value as Customer['customerGroup']})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="RETAIL">Retail</option>
                  <option value="CONTRACTOR">Contractor</option>
                  <option value="DEALER">Dealer</option>
                  <option value="WHOLESALE">Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Street Address"
                    value={formData.billingAddress.street}
                    onChange={(e) => setFormData({
                      ...formData, 
                      billingAddress: {...formData.billingAddress, street: e.target.value}
                    })}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text" 
                      placeholder="City"
                      value={formData.billingAddress.city}
                      onChange={(e) => setFormData({
                        ...formData, 
                        billingAddress: {...formData.billingAddress, city: e.target.value}
                      })}
                      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <input 
                      type="text" 
                      placeholder="State"
                      value={formData.billingAddress.state}
                      onChange={(e) => setFormData({
                        ...formData, 
                        billingAddress: {...formData.billingAddress, state: e.target.value}
                      })}
                      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="ZIP Code"
                    value={formData.billingAddress.zipCode}
                    onChange={(e) => setFormData({
                      ...formData, 
                      billingAddress: {...formData.billingAddress, zipCode: e.target.value}
                    })}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={() => {
                setShowNewCustomerForm(false);
                resetForm();
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateCustomer}
              disabled={isLoading || !formData.email}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Creating...' : 'Create Customer'}
            </button>
          </div>
        </div>
      )}

      {/* Customers List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Customers ({filteredCustomers.length})</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Group
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {customer.firstName} {customer.lastName}
                      </div>
                      {customer.companyName && (
                        <div className="text-sm text-gray-500">{customer.companyName}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <EnvelopeIcon className="h-4 w-4" />
                        {customer.email}
                      </div>
                      {customer.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <PhoneIcon className="h-4 w-4" />
                          {customer.phone}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {customer.billingAddress && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPinIcon className="h-4 w-4" />
                        <span>
                          {customer.billingAddress.city}, {customer.billingAddress.state}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${customerGroupColors[customer.customerGroup]}`}>
                      {customer.customerGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedCustomer(customer)}
                        className="text-blue-600 hover:text-blue-900" 
                        title="View"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button 
                        className="text-yellow-600 hover:text-yellow-900" 
                        title="Edit"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteCustomer(customer.id)}
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

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCustomer.firstName} {selectedCustomer.lastName}
                </h2>
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <span className="ml-2">{selectedCustomer.email}</span>
                    </div>
                    {selectedCustomer.phone && (
                      <div>
                        <span className="text-gray-500">Phone:</span>
                        <span className="ml-2">{selectedCustomer.phone}</span>
                      </div>
                    )}
                    {selectedCustomer.companyName && (
                      <div>
                        <span className="text-gray-500">Company:</span>
                        <span className="ml-2">{selectedCustomer.companyName}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500">Group:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${customerGroupColors[selectedCustomer.customerGroup]}`}>
                        {selectedCustomer.customerGroup}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Address</h3>
                  {selectedCustomer.billingAddress && (
                    <div className="text-sm text-gray-600">
                      <div>{selectedCustomer.billingAddress.street}</div>
                      <div>
                        {selectedCustomer.billingAddress.city}, {selectedCustomer.billingAddress.state} {selectedCustomer.billingAddress.zipCode}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Edit Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}