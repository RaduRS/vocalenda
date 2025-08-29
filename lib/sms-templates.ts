interface BusinessInfo {
  name: string;
  phone_number: string;
  address?: string | null;
}

interface ServiceInfo {
  name: string;
  duration_minutes: number;
  price?: number | null;
}

interface AppointmentInfo {
  customer_name: string;
  date: string;
  time: string;
  service: ServiceInfo;
}

export function generateConfirmationMessage(
  business: BusinessInfo,
  appointment: AppointmentInfo
): string {
  const { customer_name, date, time, service } = appointment;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const priceText = service.price ? ` (£${service.price})` : '';
  
  return `Hi ${customer_name}, your appointment at ${business.name} is confirmed for ${formattedDate} at ${time} for ${service.name}${priceText}. Duration: ${service.duration_minutes} mins. Questions? Call ${business.phone_number}`;
}

export function generateReminderMessage(
  business: BusinessInfo,
  appointment: AppointmentInfo
): string {
  const { customer_name, date, time, service } = appointment;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  return `Reminder: ${customer_name}, you have an appointment at ${business.name} tomorrow (${formattedDate}) at ${time} for ${service.name}. See you then! ${business.phone_number}`;
}

export function generateCancellationMessage(
  business: BusinessInfo,
  appointment: AppointmentInfo
): string {
  const { customer_name, date, time, service } = appointment;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  return `Hi ${customer_name}, your appointment at ${business.name} on ${formattedDate} at ${time} for ${service.name} has been cancelled. To reschedule, call ${business.phone_number}`;
}

export function generateRescheduleMessage(
  business: BusinessInfo,
  oldAppointment: AppointmentInfo,
  newAppointment: AppointmentInfo
): string {
  const { customer_name } = oldAppointment;
  const newFormattedDate = new Date(newAppointment.date).toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  return `Hi ${customer_name}, your appointment at ${business.name} has been rescheduled to ${newFormattedDate} at ${newAppointment.time} for ${newAppointment.service.name}. Questions? Call ${business.phone_number}`;
}