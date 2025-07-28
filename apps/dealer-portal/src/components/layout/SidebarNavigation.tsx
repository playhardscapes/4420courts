'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Accounting', href: '/accounting', icon: BookOpenIcon },
  { name: 'Commissions', href: '/commissions', icon: CurrencyDollarIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Customers', href: '/customers', icon: UserGroupIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export function SidebarNavigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
            <div className="flex h-16 shrink-0 items-center justify-between px-6 shadow-sm">
              <img className="h-8 w-auto" src="/4420courtslogowide.jpg" alt="4420 Courts" />
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
              <ul className="flex flex-1 flex-col gap-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-gray-200 px-6 py-4">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-8 w-auto" src="/4420courtslogowide.jpg" alt="4420 Courts" />
            <div className="ml-3">
              <h1 className="text-lg font-bold text-gray-900">Dealer Portal</h1>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* User info at bottom */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">D</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Dealer User</p>
                <p className="text-xs text-gray-500">dealer@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden">
        <button
          type="button"
          className="text-gray-700 hover:text-gray-900"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        
        <div className="flex flex-1 items-center justify-between">
          <img className="h-8 w-auto" src="/4420courtslogowide.jpg" alt="4420 Courts" />
          <div className="text-sm font-medium text-gray-900">Dealer Portal</div>
        </div>
      </div>
    </>
  );
}