'use client';

import { useState } from 'react';
import { DealerServiceLevel } from '@prisma/client';
import { 
  UserIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  BellIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface DealerSettings {
  profile: {
    companyName: string;
    dealerCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceLevel: DealerServiceLevel;
  };
  business: {
    businessAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    licenseNumber: string;
    taxId: string;
    commissionRate: number;
  };
  territory: {
    states: string[];
    regions: string[];
    exclusiveZip: string[];
  };
  notifications: {
    orderAlerts: boolean;
    commissionUpdates: boolean;
    customerMessages: boolean;
    systemUpdates: boolean;
  };
  preferences: {
    timezone: string;
    currency: string;
    dateFormat: string;
    language: string;
  };
}

export function SettingsDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'business' | 'territory' | 'notifications' | 'preferences'>('profile');
  const [settings, setSettings] = useState<DealerSettings>({
    profile: {
      companyName: 'Pro Court Solutions',
      dealerCode: 'PCS001',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@procourtsolutions.com',
      phone: '(555) 123-4567',
      serviceLevel: 'LEVEL_4'
    },
    business: {
      businessAddress: {
        street: '123 Business Ave',
        city: 'Tampa',
        state: 'FL',
        zipCode: '33601'
      },
      licenseNumber: 'FL-CON-2024-001',
      taxId: '12-3456789',
      commissionRate: 0.10
    },
    territory: {
      states: ['Florida', 'Georgia'],
      regions: ['Central Florida', 'North Florida', 'South Georgia'],
      exclusiveZip: ['33601', '33602', '33603', '30309', '30310']
    },
    notifications: {
      orderAlerts: true,
      commissionUpdates: true,
      customerMessages: true,
      systemUpdates: false
    },
    preferences: {
      timezone: 'America/New_York',
      currency: 'USD',
      dateFormat: 'MM/DD/YYYY',
      language: 'English'
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'business', name: 'Business Info', icon: CogIcon },
    { id: 'territory', name: 'Territory', icon: MapPinIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'preferences', name: 'Preferences', icon: ShieldCheckIcon }
  ] as const;

  const handleInputChange = (section: keyof DealerSettings, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedInputChange = (section: keyof DealerSettings, subsection: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...(prev[section] as any)[subsection],
          [field]: value
        }
      }
    }));
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            value={settings.profile.companyName}
            onChange={(e) => handleInputChange('profile', 'companyName', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dealer Code</label>
          <input
            type="text"
            value={settings.profile.dealerCode}
            disabled
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={settings.profile.firstName}
            onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={settings.profile.lastName}
            onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={settings.profile.phone}
            onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Service Level</label>
        <select
          value={settings.profile.serviceLevel}
          onChange={(e) => handleInputChange('profile', 'serviceLevel', e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="LEVEL_1">Level 1 - Free DIY Resources ($0)</option>
          <option value="LEVEL_2">Level 2 - Monthly Membership ($49.99/month)</option>
          <option value="LEVEL_3">Level 3 - Coating & Lining Specialist ($10k-15k)</option>
          <option value="LEVEL_4">Level 4 - Project Management + Finish ($15k-25k)</option>
          <option value="LEVEL_5">Level 5 - Full Project Management ($30k-45k)</option>
          <option value="LEVEL_5_5">Level 5.5 - Premium Personalized (Contact for Pricing)</option>
        </select>
      </div>
    </div>
  );

  const renderBusinessTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
            <input
              type="text"
              value={settings.business.businessAddress.street}
              onChange={(e) => handleNestedInputChange('business', 'businessAddress', 'street', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              value={settings.business.businessAddress.city}
              onChange={(e) => handleNestedInputChange('business', 'businessAddress', 'city', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <input
              type="text"
              value={settings.business.businessAddress.state}
              onChange={(e) => handleNestedInputChange('business', 'businessAddress', 'state', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
            <input
              type="text"
              value={settings.business.businessAddress.zipCode}
              onChange={(e) => handleNestedInputChange('business', 'businessAddress', 'zipCode', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
          <input
            type="text"
            value={settings.business.licenseNumber}
            onChange={(e) => handleInputChange('business', 'licenseNumber', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
          <input
            type="text"
            value={settings.business.taxId}
            onChange={(e) => handleInputChange('business', 'taxId', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate</label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={settings.business.commissionRate}
              onChange={(e) => handleInputChange('business', 'commissionRate', parseFloat(e.target.value))}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-2 text-gray-500">%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTerritoryTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Assigned States</h3>
        <div className="flex flex-wrap gap-2">
          {settings.territory.states.map((state) => (
            <span key={state} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {state}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Active Regions</h3>
        <div className="flex flex-wrap gap-2">
          {settings.territory.regions.map((region) => (
            <span key={region} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {region}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Exclusive ZIP Codes</h3>
        <div className="flex flex-wrap gap-2">
          {settings.territory.exclusiveZip.map((zip) => (
            <span key={zip} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              {zip}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Territory Performance</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-blue-600 font-medium">Coverage:</span>
            <span className="ml-2 text-blue-800">2 States, 3 Regions</span>
          </div>
          <div>
            <span className="text-blue-600 font-medium">Exclusive Zips:</span>
            <span className="ml-2 text-blue-800">{settings.territory.exclusiveZip.length} codes</span>
          </div>
          <div>
            <span className="text-blue-600 font-medium">Growth Rate:</span>
            <span className="ml-2 text-blue-800">+15.7% this quarter</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      {Object.entries(settings.notifications).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">
              {key === 'orderAlerts' ? 'Order Alerts' :
               key === 'commissionUpdates' ? 'Commission Updates' :
               key === 'customerMessages' ? 'Customer Messages' :
               'System Updates'}
            </h4>
            <p className="text-sm text-gray-600">
              {key === 'orderAlerts' ? 'Get notified when new orders are placed' :
               key === 'commissionUpdates' ? 'Receive updates on commission calculations and payments' :
               key === 'customerMessages' ? 'Notifications for customer inquiries and messages' :
               'System maintenance and feature update notifications'}
            </p>
          </div>
          <button
            onClick={() => handleInputChange('notifications', key, !value)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              value ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                value ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={settings.preferences.timezone}
            onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
          <select
            value={settings.preferences.currency}
            onChange={(e) => handleInputChange('preferences', 'currency', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="USD">US Dollar ($)</option>
            <option value="CAD">Canadian Dollar (C$)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
          <select
            value={settings.preferences.dateFormat}
            onChange={(e) => handleInputChange('preferences', 'dateFormat', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <select
            value={settings.preferences.language}
            onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Español</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'business' && renderBusinessTab()}
          {activeTab === 'territory' && renderTerritoryTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'preferences' && renderPreferencesTab()}
        </div>
      </div>
    </div>
  );
}