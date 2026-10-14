export const BookingType = {
  FLEXIBLE: 'FLEXIBLE',
  FIXED: 'FIXED',
} as const;

export type BookingType = (typeof BookingType)[keyof typeof BookingType];
