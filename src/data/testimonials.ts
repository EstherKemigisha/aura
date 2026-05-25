import type { Testimonial } from '../types';
import { testimonialImages } from './images';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Okafor',
    role: 'Natural Hair Enthusiast',
    content: 'Aura has transformed my 4C hair journey. The Revitalizing Hair Mask brought my curls back to life after years of damage. I finally feel confident in my natural texture!',
    image: testimonialImages[0],
    rating: 5,
  },
  {
    id: '2',
    name: 'Zara Mohammed',
    role: 'Hair Stylist',
    content: 'As a professional stylist, I recommend Aura to all my clients with curly hair. The Curl Defining Cream is a game-changer - no crunch, just beautiful defined curls that last for days.',
    image: testimonialImages[1],
    rating: 5,
  },
  {
    id: '3',
    name: 'Nia Thompson',
    role: 'Wellness Coach',
    content: 'The ingredients are clean, luxurious, and truly effective. My clients love how the products make their hair feel. Premium quality with real results!',
    image: testimonialImages[2],
    rating: 5,
  },
  {
    id: '4',
    name: 'Sophie Williams',
    role: 'Fashion Designer',
    content: 'Beautiful packaging, divine scents, and most importantly - my coils have never looked better. The moisture Rich Conditioner is pure luxury for my hair.',
    image: testimonialImages[3],
    rating: 5,
  },
];
