'use client';

import { useState, useEffect } from 'react';
import { CustomerGroup } from '@prisma/client';
import { 
  UserIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  MapPinIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface Customer {
  id: string;
  userId: string;
  companyName: string | null;
  customerGroup: CustomerGroup;
  createdAt: Date;
  user: {
    firstName: string | null;
    lastName: string | null;
    email: string;
    phone: string | null;
  };
  orders: {
    id: string;
    orderNumber: string;
    totalAmount: number;
    status: string;
    createdAt: Date;
  }[];
  _count: {
    orders: number;
  };
}

export function CustomerDashboard() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<CustomerGroup | 'ALL'>('ALL');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      // Sample customer data based on schema
      const sampleCustomers: Customer[] = [
        {
          id: '1',
          userId: 'user-1',
          companyName: 'ABC Home Courts',
          customerGroup: 'CONTRACTOR',
          createdAt: new Date('2025-01-15'),
          user: {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john@abchomecourts.com',
            phone: '(555) 123-4567'
          },
          orders: [
            {
              id: 'order-1',
              orderNumber: 'ORD-1001',
              totalAmount: 1395.00,
              status: 'COMPLETED',
              createdAt: new Date('2025-01-20')
            },
            {
              id: 'order-2',
              orderNumber: 'ORD-1015',
              totalAmount: 800.00,
              status: 'PROCESSING',
              createdAt: new Date('2025-01-25')
            }
          ],
          _count: { orders: 2 }
        },
        {
          id: '2',
          userId: 'user-2',
          companyName: null,
          customerGroup: 'RETAIL',
          createdAt: new Date('2025-01-18'),
          user: {
            firstName: 'Sarah',
            lastName: 'Johnson',
            email: 'sarah.johnson@email.com',
            phone: '(555) 987-6543'
          },
          orders: [
            {
              id: 'order-3',
              orderNumber: 'ORD-1008',
              totalAmount: 1395.00,
              status: 'SHIPPED',
              createdAt: new Date('2025-01-22')
            }
          ],
          _count: { orders: 1 }
        },
        {
          id: '3',
          userId: 'user-3',
          companyName: 'Elite Sports Surfaces',
          customerGroup: 'DEALER',
          createdAt: new Date('2025-01-10'),
          user: {
            firstName: 'Mike',
            lastName: 'Rodriguez',
            email: 'mike@elitesports.com',
            phone: '(555) 456-7890'
          },
          orders: [
            {
              id: 'order-4',
              orderNumber: 'ORD-1003',
              totalAmount: 2790.00,
              status: 'COMPLETED',
              createdAt: new Date('2025-01-12')
            },
            {
              id: 'order-5',
              orderNumber: 'ORD-1012',
              totalAmount: 1395.00,
              status: 'CONFIRMED',
              createdAt: new Date('2025-01-24')
            }
          ],
          _count: { orders: 2 }
        },
        {
          id: '4',
          userId: 'user-4',
          companyName: null,
          customerGroup: 'RETAIL',
          createdAt: new Date('2025-01-22'),
          user: {
            firstName: 'Lisa',
            lastName: 'Chen',
            email: 'lisa.chen@email.com',
            phone: '(555) 234-5678'
          },
          orders: [],
          _count: { orders: 0 }
        }
      ];
      
      setCustomers(sampleCustomers);
    } catch (error) {
      console.error('Failed to fetch customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = !searchTerm || 
      customer.user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGroup = selectedGroup === 'ALL' || customer.customerGroup === selectedGroup;
    
    return matchesSearch && matchesGroup;
  });

  const getGroupColor = (group: CustomerGroup) => {
    switch (group) {
      case 'RETAIL':
        return 'bg-blue-100 text-blue-800';
      case 'CONTRACTOR':
        return 'bg-green-100 text-green-800';
      case 'DEALER':
        return 'bg-purple-100 text-purple-800';
      case 'WHOLESALE':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-green-600';
      case 'SHIPPED':
        return 'text-blue-600';
      case 'PROCESSING':
        return 'text-yellow-600';
      case 'CONFIRMED':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getTotalRevenue = () => {
    return customers.reduce((total, customer) => {
      return total + customer.orders.reduce((orderTotal, order) => orderTotal + order.totalAmount, 0);
    }, 0);
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading customer data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Customers</h3>
              <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TruckIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
              <p className="text-2xl font-bold text-green-600">
                {customers.reduce((total, customer) => total + customer._count.orders, 0)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(getTotalRevenue())}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <ClockIcon className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Active Customers</h3>
              <p className="text-2xl font-bold text-orange-600">
                {customers.filter(c => c._count.orders > 0).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
            />
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value as CustomerGroup | 'ALL')}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="ALL">All Groups</option>
              <option value="RETAIL">Retail</option>
              <option value="CONTRACTOR">Contractor</option>
              <option value="DEALER">Dealer</option>
              <option value="WHOLESALE">Wholesale</option>
            </select>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredCustomers.length} of {customers.length} customers
          </div>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {customer.user.firstName?.charAt(0) || customer.user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {customer.companyName || `${customer.user.firstName} ${customer.user.lastName}`}
                    </h3>
                    {customer.companyName && (
                      <p className="text-sm text-gray-600">
                        {customer.user.firstName} {customer.user.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGroupColor(customer.customerGroup)}`}>
                  {customer.customerGroup}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  {customer.user.email}
                </div>
                {customer.user.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {customer.user.phone}
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Customer since {customer.createdAt.toLocaleDateString()}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {customer._count.orders} Orders
                    </p>
                    <p className="text-xs text-gray-500">
                      Revenue: {formatCurrency(customer.orders.reduce((sum, order) => sum + order.totalAmount, 0))}
                    </p>
                  </div>
                  
                  {customer.orders.length > 0 && (
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">Latest Order</p>
                      <p className={`text-xs font-semibold ${getOrderStatusColor(customer.orders[customer.orders.length - 1].status)}`}>
                        {customer.orders[customer.orders.length - 1].status}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded hover:bg-gray-200 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}