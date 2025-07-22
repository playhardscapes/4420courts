// User and Authentication Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  dealerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  CUSTOMER = 'customer',
  DEALER = 'dealer',
  ADMIN = 'admin',
  FRANCHISE_OWNER = 'franchise_owner'
}

// Customer Types
export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
  membershipLevel: MembershipLevel;
  assignedDealerId?: string;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}

export enum MembershipLevel {
  FREE = 'free',
  MONTHLY = 'monthly',
  PREMIUM = 'premium'
}

// Project Types
export interface Project {
  id: string;
  customerId: string;
  dealerId: string;
  title: string;
  description?: string;
  status: ProjectStatus;
  serviceLevel: ServiceLevel;
  estimatedValue: number;
  timeline: ProjectTimeline;
  location: Address;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProjectStatus {
  LEAD = 'lead',
  CONSULTATION_SCHEDULED = 'consultation_scheduled',
  CONSULTATION_COMPLETED = 'consultation_completed',
  QUOTE_SENT = 'quote_sent',
  APPROVED = 'approved',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum ServiceLevel {
  LEVEL_1 = 1,    // Free DIY Resources
  LEVEL_2 = 2,    // Monthly Membership
  LEVEL_3 = 3,    // Coating & Lining Specialist
  LEVEL_4 = 4,    // Project Management + Finish
  LEVEL_5 = 5,    // Full Project Management
  LEVEL_5_5 = 5.5 // Premium Personalized
}

// Dealer Types
export interface Dealer {
  id: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  territory: Territory;
  commissionRate: number;
  isActive: boolean;
  joinDate: Date;
  stats: DealerStats;
}

export interface Territory {
  id: string;
  name: string;
  zipCodes: string[];
  cities: string[];
  state: string;
  isActive: boolean;
}

export interface DealerStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  monthlyRevenue: number;
  customerSatisfaction: number;
  responseTime: number; // in hours
}

// Calendar and Scheduling Types
export interface Appointment {
  id: string;
  title: string;
  description?: string;
  customerId: string;
  dealerId: string;
  projectId?: string;
  startTime: Date;
  endTime: Date;
  type: AppointmentType;
  status: AppointmentStatus;
  location?: Address;
  meetingUrl?: string;
  notes?: string;
  createdAt: Date;
}

export enum AppointmentType {
  PHONE_CONSULTATION = 'phone_consultation',
  VIDEO_CONSULTATION = 'video_consultation',
  SITE_VISIT = 'site_visit',
  FOLLOW_UP = 'follow_up',
  PROJECT_REVIEW = 'project_review'
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show'
}

// Common Types
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
}

export interface ProjectTimeline {
  estimatedStart?: Date;
  estimatedCompletion?: Date;
  actualStart?: Date;
  actualCompletion?: Date;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  targetDate: Date;
  completedDate?: Date;
  status: MilestoneStatus;
}

export enum MilestoneStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  DELAYED = 'delayed'
}