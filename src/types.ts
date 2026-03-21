export type Screen = 'landing' | 'dashboard' | 'profile' | 'confirmation';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: string;
  distance: string;
  image: string;
  bio: string;
  philosophy: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Marcus Thorne',
    specialty: 'Internal Medicine',
    experience: '10 Years',
    rating: 4.9,
    reviews: '1.8k+',
    distance: '1.2 km away',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=250',
    bio: 'Specializing in comprehensive adult healthcare and preventative medicine.',
    philosophy: 'Wellness starts with understanding the whole person.'
  },
  {
    id: '2',
    name: 'Dr. Sarah Jenkins',
    specialty: 'Pediatrician',
    experience: '6 Years',
    rating: 4.8,
    reviews: '1.2k+',
    distance: '2.5 km away',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=250',
    bio: 'Dedicated to providing gentle and effective care for children of all ages.',
    philosophy: 'Every child deserves a healthy start in life.'
  },
  {
    id: '3',
    name: 'Dr. Leo Vance',
    specialty: 'Dental Surgeon',
    experience: '12 Years',
    rating: 5.0,
    reviews: '2.1k+',
    distance: '0.8 km away',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=250',
    bio: 'Expert in restorative and cosmetic dentistry with a focus on patient comfort.',
    philosophy: 'A healthy smile is a window to overall health.'
  },
  {
    id: '4',
    name: 'Dr. Julian Vane',
    specialty: 'Chief Surgeon',
    experience: '14 Years',
    rating: 4.9,
    reviews: '2.4k+',
    distance: '1.5 km away',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=250',
    bio: "Specializing in the intersection of traditional neuro-surgery and restorative cognitive therapies. Dr. Vane's approach focuses on biological harmony and minimally invasive interventions.",
    philosophy: "Wellness is not simply the absence of disease, but the cultivation of a sanctuary within the self where the mind and body can truly thrive."
  }
];
