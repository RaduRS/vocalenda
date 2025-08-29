// Comprehensive Setup Wizard Types
// Based on setup_wizard.md requirements

export interface BusinessHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  open?: string; // HH:MM format
  close?: string; // HH:MM format
  closed: boolean;
}

export interface Holiday {
  date: string; // YYYY-MM-DD format
  description: string;
}

export interface Service {
  id?: string;
  name: string;
  duration: number; // in minutes
  price: number;
  currency?: string;
  description?: string;
  is_active?: boolean;
}

export interface StaffMember {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  specialties?: string[];
  working_hours?: BusinessHours;
  is_active?: boolean;
}

export interface BookingPolicies {
  cancellation_policy?: string;
  no_show_policy?: string;
  advance_booking_days?: number;
  min_advance_hours?: number;
  booking_confirmation_required?: boolean;
}

export interface AIConfiguration {
  greeting: string;
  key_information?: string;
  response_mode: 'flexible' | 'restricted';
  allowed_topics?: string[];
  restricted_topics?: string[];
  custom_prompt?: string;
}

export interface ComprehensiveBusinessData {
  // Section 1: Business Basics
  name: string;
  business_type: string;
  address: string;
  payment_methods: PaymentMethod[];
  
  // Section 2: Operating Hours & Schedule
  business_hours: BusinessHours;
  holidays: Holiday[];
  timezone: string;
  
  // Section 3: Services & Staff
  services: Service[];
  staff_members: StaffMember[];
  
  // Section 4: AI & Booking Rules
  ai_configuration: AIConfiguration;
  customer_notes_enabled: boolean;
  booking_policies: BookingPolicies;
  
  // Technical fields
  slug: string;
  phone: string;
  email: string;
  website?: string;
}

export type PaymentMethod = 
  | 'cash'
  | 'card'
  | 'apple_pay'
  | 'google_pay'
  | 'bank_transfer'
  | 'other';

export interface SetupWizardStep {
  id: number;
  title: string;
  description: string;
  fields: string[];
  isValid: (data: Partial<ComprehensiveBusinessData>) => boolean;
}

// Validation helpers
export const validateBusinessHours = (hours: BusinessHours): boolean => {
  const days = Object.keys(hours) as (keyof BusinessHours)[];
  return days.every(day => {
    const schedule = hours[day];
    if (schedule.closed) return true;
    return schedule.open && schedule.close && schedule.open < schedule.close;
  });
};

export const validateService = (service: Service): boolean => {
  return !!service.name && service.duration > 0 && service.price >= 0;
};

export const validateStaffMember = (staff: StaffMember): boolean => {
  return !!staff.name;
};

// Default values
export const defaultBusinessHours: BusinessHours = {
  monday: { open: '09:00', close: '17:00', closed: false },
  tuesday: { open: '09:00', close: '17:00', closed: false },
  wednesday: { open: '09:00', close: '17:00', closed: false },
  thursday: { open: '09:00', close: '17:00', closed: false },
  friday: { open: '09:00', close: '17:00', closed: false },
  saturday: { open: '10:00', close: '16:00', closed: false },
  sunday: { closed: true }
};

export const defaultAIConfiguration: AIConfiguration = {
  greeting: 'Thank you for calling, how can I help you today?',
  response_mode: 'flexible',
  key_information: '',
  allowed_topics: [],
  restricted_topics: []
};

export const defaultBookingPolicies: BookingPolicies = {
  cancellation_policy: 'Appointments can be cancelled up to 24 hours in advance',
  advance_booking_days: 30,
  min_advance_hours: 2,
  booking_confirmation_required: true
};

// Business type suggestions based on setup_wizard.md
export const businessTypeSuggestions = [
  // Personal Care
  'Barbershop',
  'Hair Salon',
  'Nail Salon',
  'Tattoo Parlor',
  'Massage Therapist',
  
  // Health & Wellness
  'Dental Office',
  'Chiropractor',
  'Physiotherapist',
  'Optometrist',
  'Medical Clinic',
  
  // Professional Services
  'Accountancy Firm',
  'Law Office',
  'Financial Advisor',
  
  // Automotive
  'Car Repair Shop',
  'Detailing Service',
  'MOT Test Centre',
  
  // Pet Services
  'Pet Grooming',
  'Veterinary Clinic',
  
  // Fitness
  'Personal Training Studio',
  'Yoga Studio',
  'Pilates Studio'
];

export const paymentMethodLabels: Record<PaymentMethod, string> = {
  cash: 'Cash',
  card: 'Credit/Debit Cards',
  apple_pay: 'Apple Pay',
  google_pay: 'Google Pay',
  bank_transfer: 'Bank Transfer',
  other: 'Other'
};

// Setup wizard steps configuration
export const setupWizardSteps: SetupWizardStep[] = [
  {
    id: 1,
    title: 'Business Basics',
    description: 'Tell us about your business',
    fields: ['name', 'business_type', 'address', 'payment_methods'],
    isValid: (data) => !!(data.name && data.business_type && data.address && data.payment_methods?.length)
  },
  {
    id: 2,
    title: 'Operating Hours',
    description: 'Set your business hours and holidays',
    fields: ['business_hours', 'holidays', 'timezone'],
    isValid: (data) => !!(data.business_hours && validateBusinessHours(data.business_hours))
  },
  {
    id: 3,
    title: 'Services & Staff',
    description: 'Add your services and team members',
    fields: ['services', 'staff_members'],
    isValid: (data) => !!(data.services?.length && data.services.every(validateService))
  },
  {
    id: 4,
    title: 'AI Configuration',
    description: 'Configure your AI receptionist',
    fields: ['ai_configuration', 'customer_notes_enabled', 'booking_policies'],
    isValid: (data) => !!(data.ai_configuration?.greeting)
  },
  {
    id: 5,
    title: 'Contact Details',
    description: 'Finalize your contact information',
    fields: ['phone', 'email', 'slug'],
    isValid: (data) => !!(data.phone && data.email && data.slug)
  }
];