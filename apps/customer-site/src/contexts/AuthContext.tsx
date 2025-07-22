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
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('4420courts-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.customer);
        localStorage.setItem('4420courts-user', JSON.stringify(data.customer));
        return { success: true };
      } else {
        return { success: false, error: data.error };
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
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.customer);
        localStorage.setItem('4420courts-user', JSON.stringify(data.customer));
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('4420courts-user');
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