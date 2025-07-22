import { pgTable, uuid, varchar, text, boolean, timestamp, decimal, integer, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['customer', 'dealer', 'admin', 'franchise_owner']);
export const membershipLevelEnum = pgEnum('membership_level', ['free', 'monthly', 'premium']);
export const projectStatusEnum = pgEnum('project_status', [
  'lead', 'consultation_scheduled', 'consultation_completed', 
  'quote_sent', 'approved', 'in_progress', 'completed', 'cancelled'
]);
export const appointmentTypeEnum = pgEnum('appointment_type', [
  'phone_consultation', 'video_consultation', 'site_visit', 'follow_up', 'project_review'
]);
export const appointmentStatusEnum = pgEnum('appointment_status', [
  'scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'
]);

// Users table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  role: userRoleEnum('role').notNull().default('customer'),
  dealerId: uuid('dealer_id'),
  passwordHash: text('password_hash'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Dealers table
export const dealers = pgTable('dealers', {
  id: uuid('id').primaryKey().defaultRandom(),
  businessName: varchar('business_name', { length: 200 }).notNull(),
  ownerName: varchar('owner_name', { length: 200 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 20 }).notNull(),
  territoryId: uuid('territory_id'),
  commissionRate: decimal('commission_rate', { precision: 5, scale: 2 }).notNull().default('0.15'),
  isActive: boolean('is_active').notNull().default(true),
  joinDate: timestamp('join_date').defaultNow().notNull(),
  totalProjects: integer('total_projects').notNull().default(0),
  activeProjects: integer('active_projects').notNull().default(0),
  completedProjects: integer('completed_projects').notNull().default(0),
  monthlyRevenue: decimal('monthly_revenue', { precision: 10, scale: 2 }).notNull().default('0'),
  customerSatisfaction: decimal('customer_satisfaction', { precision: 3, scale: 2 }).notNull().default('0'),
  avgResponseTime: integer('avg_response_time').notNull().default(24), // in hours
});

// Territories table
export const territories = pgTable('territories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  state: varchar('state', { length: 2 }).notNull(),
  zipCodes: text('zip_codes').array(),
  cities: text('cities').array(),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Customers table
export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  membershipLevel: membershipLevelEnum('membership_level').notNull().default('free'),
  assignedDealerId: uuid('assigned_dealer_id'),
  
  // Address fields
  street: varchar('street', { length: 255 }),
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 2 }),
  zipCode: varchar('zip_code', { length: 10 }),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Projects table
export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id').notNull(),
  dealerId: uuid('dealer_id').notNull(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  status: projectStatusEnum('status').notNull().default('lead'),
  serviceLevel: decimal('service_level', { precision: 2, scale: 1 }).notNull().default('1'),
  estimatedValue: decimal('estimated_value', { precision: 10, scale: 2 }).notNull().default('0'),
  
  // Location fields
  locationStreet: varchar('location_street', { length: 255 }),
  locationCity: varchar('location_city', { length: 100 }),
  locationState: varchar('location_state', { length: 2 }),
  locationZipCode: varchar('location_zip_code', { length: 10 }),
  
  // Timeline fields
  estimatedStart: timestamp('estimated_start'),
  estimatedCompletion: timestamp('estimated_completion'),
  actualStart: timestamp('actual_start'),
  actualCompletion: timestamp('actual_completion'),
  
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Appointments table
export const appointments = pgTable('appointments', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  customerId: uuid('customer_id').notNull(),
  dealerId: uuid('dealer_id').notNull(),
  projectId: uuid('project_id'),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  type: appointmentTypeEnum('type').notNull(),
  status: appointmentStatusEnum('status').notNull().default('scheduled'),
  
  // Location fields (optional for remote meetings)
  locationStreet: varchar('location_street', { length: 255 }),
  locationCity: varchar('location_city', { length: 100 }),
  locationState: varchar('location_state', { length: 2 }),
  locationZipCode: varchar('location_zip_code', { length: 10 }),
  
  meetingUrl: text('meeting_url'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ one }) => ({
  dealer: one(dealers, {
    fields: [users.dealerId],
    references: [dealers.id],
  }),
}));

export const dealersRelations = relations(dealers, ({ one, many }) => ({
  territory: one(territories, {
    fields: [dealers.territoryId],
    references: [territories.id],
  }),
  customers: many(customers),
  projects: many(projects),
  appointments: many(appointments),
}));

export const territoriesRelations = relations(territories, ({ many }) => ({
  dealers: many(dealers),
}));

export const customersRelations = relations(customers, ({ one, many }) => ({
  assignedDealer: one(dealers, {
    fields: [customers.assignedDealerId],
    references: [dealers.id],
  }),
  projects: many(projects),
  appointments: many(appointments),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
  customer: one(customers, {
    fields: [projects.customerId],
    references: [customers.id],
  }),
  dealer: one(dealers, {
    fields: [projects.dealerId],
    references: [dealers.id],
  }),
  appointments: many(appointments),
}));

export const appointmentsRelations = relations(appointments, ({ one }) => ({
  customer: one(customers, {
    fields: [appointments.customerId],
    references: [customers.id],
  }),
  dealer: one(dealers, {
    fields: [appointments.dealerId],
    references: [dealers.id],
  }),
  project: one(projects, {
    fields: [appointments.projectId],
    references: [projects.id],
  }),
}));