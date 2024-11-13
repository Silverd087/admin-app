// app/dashboard/types/index.ts
export interface AnalyticsData {
  totalSubscriptions: number;
  activeSubscriptions: number;
  totalReservations: number;
  lifetimeIncome: number;
}

export interface MonthlyData {
  name: string;
  subscriptions: number;
  reservations: number;
  income: number;
}

export interface Reservation {
  id: number;
  date: string;
  time: string;
  court: string;
  user: string;
}

export interface Message {
  id: number;
  from: string;
  subject: string;
  date: string;
  read: boolean;
}

export interface MembershipPlan {
  id: number;
  name: string;
  price: number;
}

export interface Event {
  id: number;
  title: string;
  date: string;
}
export interface Booking {
  date: string;
  court: string;
  time: string;
  user: string;
}

export interface BookingsByDate {
  [date: string]: Booking[];
}
