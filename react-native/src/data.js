export const COLORS = {
  background: '#170C26',
  surface: '#231136',
  card: '#2E1A46',
  text: '#FAF4FF',
  muted: '#D9C7EA',
  primary: '#A065D5',
  roseGold: '#D4A58F',
  border: 'rgba(212, 165, 143, 0.18)',
  success: '#61D4A0',
};

export const heroImage = 'https://images.unsplash.com/photo-1560066984-138daaa87475?w=800&q=80';

export const services = [
  {
    id: 'hair-signature',
    category: 'Hair',
    name: 'Signature Cut & Style',
    price: '$120',
    duration: '75 min',
    description: 'Luxury consultation, precision cut and polished finish.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  },
  {
    id: 'nails-ritual',
    category: 'Nails',
    name: 'Rose Gold Manicure',
    price: '$70',
    duration: '50 min',
    description: 'Shaping, cuticle care and high-shine gel finish.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
  },
  {
    id: 'skin-renewal',
    category: 'Skincare',
    name: 'Radiance Facial',
    price: '$145',
    duration: '60 min',
    description: 'Exfoliation, massage and brightening hydration therapy.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
  },
  {
    id: 'makeup-glow',
    category: 'Makeup',
    name: 'Event Glam',
    price: '$110',
    duration: '55 min',
    description: 'Soft-glow complexion and long-wear evening makeup.',
    image: 'https://images.unsplash.com/photo-1560066984-138daaa87475?w=800&q=80',
  },
];

export const serviceCategories = ['All', 'Hair', 'Nails', 'Skincare', 'Makeup'];

export const stylists = [
  {
    id: 'stylist-1',
    name: 'Amélie Hart',
    role: 'Creative Director',
    specialties: 'Editorial cuts · colour design',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
  },
  {
    id: 'stylist-2',
    name: 'Maya Chen',
    role: 'Beauty Lead',
    specialties: 'Skin prep · luxury makeup',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
  },
  {
    id: 'stylist-3',
    name: 'Sofia Laurent',
    role: 'Style Specialist',
    specialties: 'Blowouts · nails · occasion styling',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
];

export const testimonials = [
  '“Flawless service from welcome to finish — every visit feels special.”',
  '“The styling team understood exactly the look I wanted for my event.”',
  '“Lumière Studio is my go-to for polished hair and glowing skin.”',
];

export const bookingDates = Array.from({ length: 7 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return {
    id: date.toISOString(),
    label: date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
    full: date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' }),
  };
});

export const timeSlots = ['9:00 AM', '10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];
