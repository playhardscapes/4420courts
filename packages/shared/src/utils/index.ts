import { ServiceLevel } from '../types';

// Date utilities
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Currency utilities
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Service level utilities
export const getServiceLevelInfo = (level: ServiceLevel) => {
  const serviceInfo = {
    [ServiceLevel.LEVEL_1]: {
      name: 'Free DIY Resources',
      priceRange: '$0',
      description: 'Basic access to essential resources',
    },
    [ServiceLevel.LEVEL_2]: {
      name: 'Monthly Membership',
      priceRange: '$49.99/month',
      description: 'Full access to premium content and consultations',
    },
    [ServiceLevel.LEVEL_3]: {
      name: 'Coating & Lining Specialist',
      priceRange: '$10,000-15,000',
      description: 'Professional finishing work only',
    },
    [ServiceLevel.LEVEL_4]: {
      name: 'Project Management + Finish',
      priceRange: '$15,000-25,000',
      description: 'Project oversight and professional finishing',
    },
    [ServiceLevel.LEVEL_5]: {
      name: 'Full Project Management',
      priceRange: '$30,000-45,000',
      description: 'Complete project management from start to finish',
    },
    [ServiceLevel.LEVEL_5_5]: {
      name: 'Premium Personalized',
      priceRange: 'Contact for Pricing',
      description: 'Fully customized premium experience',
    },
  };

  return serviceInfo[level] || serviceInfo[ServiceLevel.LEVEL_1];
};

// String utilities
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

// Phone number utilities
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};

export const isValidZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

// Status color utilities
export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    // Project statuses
    lead: 'bg-yellow-100 text-yellow-800',
    consultation_scheduled: 'bg-blue-100 text-blue-800',
    consultation_completed: 'bg-indigo-100 text-indigo-800',
    quote_sent: 'bg-purple-100 text-purple-800',
    approved: 'bg-green-100 text-green-800',
    in_progress: 'bg-orange-100 text-orange-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    
    // Appointment statuses
    scheduled: 'bg-blue-100 text-blue-800',
    confirmed: 'bg-green-100 text-green-800',
    no_show: 'bg-red-100 text-red-800',
    
    // Milestone statuses
    pending: 'bg-gray-100 text-gray-800',
    delayed: 'bg-red-100 text-red-800',
  };

  return statusColors[status] || 'bg-gray-100 text-gray-800';
};