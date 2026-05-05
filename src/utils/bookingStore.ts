export type Booking = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  nationality: string;
  vehicle: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  notes: string;
  estimatedTotal: number;
  submittedAt: string;
  status: "pending" | "confirmed" | "cancelled";
};

export type PortalCheck = {
  id: string;
  vehicleType: string;
  location: string;
  pickupDate: string;
  returnDate: string;
  checkedAt: string;
};

const BOOKINGS_KEY = "engenz_bookings";
const PORTAL_KEY = "engenz_portal_checks";

export function getBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveBooking(booking: Omit<Booking, "id" | "submittedAt" | "status">): Booking {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: `ENG-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: "pending",
  };
  bookings.push(newBooking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  return newBooking;
}

export function updateBookingStatus(id: string, status: Booking["status"]) {
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === id);
  if (idx !== -1) {
    bookings[idx].status = status;
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }
}

export function getPortalChecks(): PortalCheck[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(PORTAL_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function checkPortalAvailability(
  vehicleType: string,
  location: string,
  pickupDate: string,
  returnDate: string
): { available: boolean; conflictId?: string } {
  const checks = getPortalChecks();
  const bookings = getBookings();

  const newStart = new Date(pickupDate).getTime();
  const newEnd = new Date(returnDate).getTime();

  const allReserved = [
    ...checks.map((c) => ({ vehicleType: c.vehicleType, start: c.pickupDate, end: c.returnDate, id: c.id })),
    ...bookings.map((b) => ({ vehicleType: b.vehicle, start: b.pickupDate, end: b.returnDate, id: b.id })),
  ];

  for (const r of allReserved) {
    if (r.vehicleType.toLowerCase() !== vehicleType.toLowerCase()) continue;
    const rStart = new Date(r.start).getTime();
    const rEnd = new Date(r.end).getTime();
    if (newStart <= rEnd && newEnd >= rStart) {
      return { available: false, conflictId: r.id };
    }
  }

  const newCheck: PortalCheck = {
    id: `CHK-${Date.now()}`,
    vehicleType,
    location,
    pickupDate,
    returnDate,
    checkedAt: new Date().toISOString(),
  };
  const updated = [...checks, newCheck];
  localStorage.setItem(PORTAL_KEY, JSON.stringify(updated));
  return { available: true };
}
