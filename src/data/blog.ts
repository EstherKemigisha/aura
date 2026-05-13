import type { BlogPost } from '../types';
import natalhair from '../assets/natalhair.jpg';
import naturalhair from '../assets/naturalhair.jpeg';
import naturalhair1 from '../assets/naturalhair1.jpg';

const blogImages = [natalhair, naturalhair, naturalhair1];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to Moisturizing 4C Hair',
    excerpt: 'Discover the secrets to maintaining healthy, hydrated 4C hair with our expert-approved moisture routine.',
    content: 'Full guide content here...',
    image: blogImages[0],
    author: 'Dr. Sarah Mitchell',
    date: 'May 1, 2026',
    readTime: '8 min read',
    category: 'Hair Care',
  },
  {
    id: '2',
    title: 'Transitioning from Relaxed to Natural Hair',
    excerpt: 'A compassionate guide to embracing your natural texture and the products that make the journey easier.',
    content: 'Full guide content here...',
    image: blogImages[1],
    author: 'Lisa Chen',
    date: 'April 25, 2026',
    readTime: '10 min read',
    category: 'Transitioning',
  },
  {
    id: '3',
    title: 'Protective Styles: Braids, Twists, and Wigs',
    excerpt: 'How to give your natural hair a break while maintaining style and promoting growth.',
    content: 'Full guide content here...',
    image: blogImages[2],
    author: 'Elena Rodriguez',
    date: 'April 18, 2026',
    readTime: '6 min read',
    category: 'Styling',
  },
  {
    id: '4',
    title: 'Understanding Your Curl Pattern',
    excerpt: 'Everything you need to know about the Type 2, 3, and 4 classification system and what it means for your routine.',
    content: 'Full guide content here...',
    image: blogImages[0],
    author: 'Dr. Maya Okafor',
    date: 'April 12, 2026',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    id: '5',
    title: 'DIY Hair Masks with Kitchen Ingredients',
    excerpt: 'Natural, affordable treatments you can make at home to boost your hair health between salon visits.',
    content: 'Full guide content here...',
    image: blogImages[1],
    author: 'Amanda Foster',
    date: 'April 5, 2026',
    readTime: '7 min read',
    category: 'DIY',
  },
  {
    id: '6',
    title: 'The Science of Hair Porosity',
    excerpt: 'Understanding low, medium, and high porosity will transform how you approach moisturizing your curls.',
    content: 'Full guide content here...',
    image: blogImages[2],
    author: 'Dr. Kemi Adebayo',
    date: 'March 28, 2026',
    readTime: '9 min read',
    category: 'Science',
  },
];
