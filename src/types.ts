export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'estructuras' | 'puertas' | 'soldadura' | 'coberturas' | 'mantenimiento' | 'cerrajeria';
  iconName: string;
  features: string[];
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  image: string;
  client: string;
  specs: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Puertas' | 'Escaleras' | 'Galpones' | 'Cubiertas' | 'Taller' | 'Soldadura' | 'Oficinas';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Cotización' | 'Garantía' | 'Servicios' | 'Envíos y Tiempos';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface CompanyStat {
  value: string;
  numericTarget: number;
  label: string;
  subtext: string;
  icon: string;
}

export interface QuoteRequestData {
  serviceId: string;
  serviceName: string;
  dimensions?: string;
  materials?: string;
  urgency: 'normal' | 'alta' | 'urgente';
  name: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
}

export interface ContactFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  correo: string;
  servicio: string;
  mensaje: string;
}
