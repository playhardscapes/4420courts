'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  customer_group_id?: number;
  membershipLevel: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    membershipLevel?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasAccess: (requiredLevel: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage (only on client)
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('4420courts-user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Temporary demo login - replace with real authentication later
      if (email === 'demo@4420courts.com' && password === 'demo123') {
        const demoUser = {
          id: 1,
          email: 'demo@4420courts.com',
          first_name: 'Demo',
          last_name: 'User',
          membershipLevel: 'monthly'
        };
        setUser(demoUser);
        if (typeof window !== 'undefined') {
          localStorage.setItem('4420courts-user', JSON.stringify(demoUser));
        }
        return { success: true };
      } else {
        return { success: false, error: 'Invalid credentials. Try demo@4420courts.com / demo123' };
      }
    } catch {
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    membershipLevel?: string;
  }) => {
    try {
      // Temporary demo registration - replace with real registration later
      const newUser = {
        id: Date.now(),
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
        membershipLevel: userData.membershipLevel || 'free'
      };
      setUser(newUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('4420courts-user', JSON.stringify(newUser));
      }
      return { success: true };
    } catch {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('4420courts-user');
    }
  };

  const hasAccess = (requiredLevel: string): boolean => {
    if (!user) return false;

    const membershipHierarchy = {
      'free': 0,
      'monthly': 1,
      'premium': 2,
      'pro': 3
    };

    const userLevel = membershipHierarchy[user.membershipLevel as keyof typeof membershipHierarchy] || 0;
    const required = membershipHierarchy[requiredLevel as keyof typeof membershipHierarchy] || 0;

    return userLevel >= required;
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    hasAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}