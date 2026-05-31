import React, { createContext, useContext, useMemo, useReducer } from 'react';

export const services = [
 { id: 'srv1', category: 'Cuts & Styling', name: "Women's Cut & Blow-Dry", emoji: '‍️', price: '$95', duration: '60min', description: 'Precision cut tailored to your face shape, finished with a luxury blow-dry' },
 { id: 'srv2', category: 'Cuts & Styling', name: "Men's Cut & Style", emoji: '️', price: '$55', duration: '30min', description: 'Classic or modern cut, hot towel finish' },
 { id: 'srv3', category: 'Cuts & Styling', name: "Children's Cut", emoji: '', price: '$45', duration: '30min', description: 'Fun, stress-free cuts for kids under 12' },
 { id: 'srv4', category: 'Colour', name: 'Full Colour', emoji: '', price: '$145', duration: '90min', description: 'Root touch-up or full colour, all over application' },
 { id: 'srv5', category: 'Colour', name: 'Highlights / Balayage', emoji: '', price: '$195', duration: '150min', description: 'Hand-painted balayage or foil highlights' },
 { id: 'srv6', category: 'Colour', name: 'Toning & Gloss', emoji: '', price: '$85', duration: '45min', description: 'Refresh your colour, eliminate brassiness' },
 { id: 'srv7', category: 'Treatments', name: 'Keratin Smoothing Treatment', emoji: '', price: '$295', duration: '120min', description: '12-week frizz control, professional Keratin' },
 { id: 'srv8', category: 'Treatments', name: 'Deep Conditioning Mask', emoji: '', price: '$65', duration: '30min', description: 'Intense moisture repair for dry or damaged hair' },
 { id: 'srv9', category: 'Treatments', name: 'Scalp Treatment', emoji: '', price: '$75', duration: '45min', description: 'Purifying scalp therapy, oil balance, relaxation' },
 { id: 'srv10', category: 'Special Occasions', name: 'Bridal Hair', emoji: '', price: '$275', duration: '120min', description: 'Trial + wedding day styling, includes veil' },
 { id: 'srv11', category: 'Special Occasions', name: 'Updo & Formal Style', emoji: '', price: '$135', duration: '90min', description: 'Red carpet-worthy updos for events' },
 { id: 'srv12', category: 'Special Occasions', name: 'Express Blowout', emoji: '', price: '$55', duration: '30min', description: 'Quick volume blowout, no cut' },
];

export const stylists = [
 { id: 's1', name: 'Isabella Rossi', emoji: '‍', role: 'Creative Director', specialties: ['Balayage', 'Bridal', 'Colour'], rating: 5.0, reviews: 248, bio: '15 years experience. Trained in Paris and Milan. Celebrity clientele.' },
 { id: 's2', name: 'Marcus Chen', emoji: '', role: 'Senior Stylist', specialties: ["Men's Cuts", 'Fades', 'Texture'], rating: 4.9, reviews: 189, bio: "Men's grooming specialist. Barbering champion 2023." },
 { id: 's3', name: 'Sophie Blanc', emoji: '‍', role: 'Colour Specialist', specialties: ['Highlights', 'Keratin', 'Treatments'], rating: 4.9, reviews: 156, bio: 'Goldwell Master Colourist. Vivid colour expert.' },
 { id: 's4', name: 'Priya Nair', emoji: '', role: 'Stylist', specialties: ['Braids', 'Updos', 'Extensions'], rating: 4.8, reviews: 97, bio: 'Specialising in textured hair, editorial styling and bridal looks.' },
];

export const timeSlots = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];

const initialState = {
 phase: 'home',
 selectedService: null,
 selectedStylist: null,
 bookingStep: 0,
 bookingData: {
 name: '',
 email: '',
 phone: '',
 stylistId: 's1',
 serviceId: 'srv1',
 date: '',
 time: '',
 notes: '',
 },
 chatOpen: false,
 chatMessages: [
 {
 id: 'm0',
 from: 'agent',
 text: "Welcome to Luxe Salon! I'm Bella, your beauty assistant. How can I help?",
 },
 ],
 chatInput: '',
 loyaltyStamps: 7,
};

function salonReducer(state, action) {
 switch (action.type) {
 case 'SET_PHASE':
 return { ...state, phase: action.payload };
 case 'SELECT_SERVICE':
 return {
 ...state,
 selectedService: action.payload,
 bookingData: { ...state.bookingData, serviceId: action.payload || state.bookingData.serviceId },
 };
 case 'SELECT_STYLIST':
 return {
 ...state,
 selectedStylist: action.payload,
 bookingData: { ...state.bookingData, stylistId: action.payload || state.bookingData.stylistId },
 };
 case 'SET_BOOKING_FIELD':
 return {
 ...state,
 bookingData: { ...state.bookingData, [action.field]: action.payload },
 };
 case 'SET_BOOKING_STEP':
 return { ...state, bookingStep: action.payload };
 case 'RESET_BOOKING':
 return {
 ...state,
 bookingStep: 0,
 bookingData: {
 ...initialState.bookingData,
 stylistId: state.selectedStylist || state.bookingData.stylistId || 's1',
 serviceId: state.selectedService || state.bookingData.serviceId || 'srv1',
 },
 };
 case 'TOGGLE_CHAT':
 return { ...state, chatOpen: typeof action.payload === 'boolean' ? action.payload : !state.chatOpen };
 case 'SET_CHAT_INPUT':
 return { ...state, chatInput: action.payload };
 case 'PUSH_CHAT_MESSAGES':
 return { ...state, chatMessages: [...state.chatMessages, ...action.payload] };
 default:
 return state;
 }
}

const SalonContext = createContext(null);

export function SalonProvider({ children }) {
 const [state, dispatch] = useReducer(salonReducer, initialState);
 const value = useMemo(() => ({ state, dispatch }), [state]);
 return <SalonContext.Provider value={value}>{children}</SalonContext.Provider>;
}

export function useSalon() {
 const context = useContext(SalonContext);
 if (!context) {
 throw new Error('useSalon must be used within a SalonProvider');
 }
 return context;
}
