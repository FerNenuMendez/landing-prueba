// Centralized routing constants for easy SaaS integration
export const BOOKING_URL = import.meta.env.BOOKING_URL || 'http://localhost:5173/peluquer-a-carlitos-6962';
export const ADMIN_LOGIN_URL = import.meta.env.ADMIN_LOGIN_URL || 'http://localhost:5173/auth/login';
export const WHATSAPP_URL = 'https://wa.me/5491112345678?text=Hola!%20Quiero%20consultar%20por%20un%20turno.';
export const PHONE_NUMBER = '+54 9 11 1234-5678';
export const ADDRESS_TEXT = 'Av. Siempreviva 742, Springfield';
export const BUSINESS_HOURS = [
  { days: 'Lunes a Viernes', hours: '09:00 - 20:00' },
  { days: 'Sábados', hours: '09:00 - 19:00' },
  { days: 'Domingos', hours: 'Cerrado' }
];
