"use client";

import { Booking } from "./index";
import { reservations } from "../data/mockData";

export const getBookings = (): Booking[] => {
  return reservations.map((reservation) => ({
    date: reservation.date,
    court: reservation.court,
    time: reservation.time,
    user: reservation.user
  }));
};

export const hasBookingsOnDate = (date: Date): boolean => {
  const bookings = getBookings();
  return bookings.some(
    (booking) => new Date(booking.date).toDateString() === date.toDateString()
  );
};
