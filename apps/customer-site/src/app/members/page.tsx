'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LockClosedIcon, PlayIcon, DocumentTextIcon, VideoCameraIcon, UserGroupIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/contexts/AuthContext';

const memberContent = [
  {
    id: 1,
    title: 'Video Library',
    description: 'Access to our complete library of professional court building tutorials and troubleshooting guides.',
    icon: PlayIcon,
    requiredLevel: 'free',
    items: [
      'Basic Surface Preparation',
      'Weather Condition Guidelines',
      'Tool Usage Demonstrations',
      'Court Marking Techniques'
    ]
  },
  {
    id: 2,
    title: 'Premium Troubleshooting',
    description: 'Advanced problem-solving content for real-world construction challenges.',
    icon: VideoCameraIcon,
    requiredLevel: 'monthly',
    items: [
      '10 Common Mistakes & Fixes',
      'Weather Delay Protocols', 
      'Application Mistake Recovery',
      'Temperature Management'
    ]
  },
  {
    id: 3,
    title: 'Sample Contracts & Documents',
    description: 'Professional templates and legal documents for your court projects.',
    icon: DocumentTextIcon,
    requiredLevel: 'monthly',
    items: [
      'Contractor Agreement Templates',
      'Material Specification Sheets',
      'Project Timeline Templates',
      'Quality Checklist Forms'
    ]
  },
  {
    id: 4,
    title: 'Monthly Group Consultations',
    description: 'Live Zoom sessions with expert guidance and Q&A.',
    icon: UserGroupIcon,
    requiredLevel: 'monthly',
    items: [
      'Monthly 30-minute Group Call',
      'Live Q&A with Experts',
      'Project Review Sessions',
      'Community Problem Solving'
    ]
  }
];

const membershipTiers = {
  free: {
    name: 'Free Member',
    description: 'Basic access to essential resources',
    color: 'bg-gray-100 text-gray-800',
    level: 0
  },
  monthly: {
    name: 'Premium Member',
    description: '$49.99/month - Full access to all content',
    color: 'bg-blue-100 text-blue-800',
    level: 1
  },
  premium: {
    name: 'Pro Member',
    description: 'Highest tier access',
    color: 'bg-green-100 text-green-800', 
    level: 2
  }
};

export default function MembersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    }
  }, [user, loading, router]);

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // This shouldn't render due to redirect above
  }

  const userTier = membershipTiers[user.membershipLevel as keyof typeof membershipTiers] || membershipTiers.free;

  const hasAccess = (requiredLevel: string): boolean => {
    const required = membershipTiers[requiredLevel as keyof typeof membershipTiers]?.level || 0;
    const userLevel = userTier.level;
    return userLevel >= required;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Members Area
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Welcome back, {user.first_name}! Access your exclusive content and resources below.
          </p>
          
          {/* Membership Status */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${userTier.color}">
            <span className="mr-2">🏆</span>
            {userTier.name} - {userTier.description}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {memberContent.map((content) => {
            const userHasAccess = hasAccess(content.requiredLevel);
            const IconComponent = content.icon;

            return (
              <div 
                key={content.id} 
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  userHasAccess 
                    ? 'border-green-200 hover:-translate-y-1' 
                    : 'border-gray-200 opacity-75'
                }`}
              >
                {/* Access Indicator */}
                <div className="absolute top-4 right-4">
                  {userHasAccess ? (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ Access Granted
                    </div>
                  ) : (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <LockClosedIcon className="h-3 w-3 mr-1" />
                      Upgrade Required
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                    userHasAccess ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{content.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Requires: {membershipTiers[content.requiredLevel as keyof typeof membershipTiers]?.name}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Content Items */}
                <ul className="space-y-3 mb-6">
                  {content.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        userHasAccess ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                      <span className={userHasAccess ? 'text-gray-700' : 'text-gray-500'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  {userHasAccess ? (
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Access Content
                    </button>
                  ) : (
                    <a 
                      href="/services"
                      className="w-full block text-center bg-yellow-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                    >
                      Upgrade Membership
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upgrade CTA */}
        {user.membershipLevel === 'free' && (
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <ExclamationTriangleIcon className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Unlock Premium Content</h3>
            <p className="text-lg mb-6 opacity-90">
              Get access to all premium tutorials, monthly consultations, and professional templates for just $49.99/month.
            </p>
            <a 
              href="/services"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upgrade to Premium
            </a>
          </div>
        )}
      </div>
    </div>
  );
}