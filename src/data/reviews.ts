export interface ReviewData {
  id: string;
  author: string;
  initials: string;
  badge?: string;
  rating: number;
  date: string;
  content: string;
  servicesMentioned?: string[];
}

export const GOOGLE_RATING = 5.0;
export const TOTAL_REVIEWS = 3;

export const reviews: ReviewData[] = [
  {
    id: 'review-1',
    author: 'Amrit Dhar',
    initials: 'AD',
    badge: 'Local Guide · 10 reviews · 18 photos',
    rating: 5,
    date: 'a year ago',
    content:
      'Jonathon did really great work, the experience was impeccable, and the pricing was extremely fair. I needed an EV charger installed in my garage and some other outdoor cameras setup that hooked up to our electrical panel. He asked questions about specifically what I wanted in terms of the charger location and camera locations and explained how he was going to install them. He was very efficient in his work as well. I would not hesitate to use Sparks Electric and Service for my future electrical needs.',
    servicesMentioned: ['EV Charger Installation', 'Panel Wiring', 'Outdoor Cameras'],
  },
  {
    id: 'review-2',
    author: 'Leah',
    initials: 'L',
    badge: 'Local Guide · 25 reviews',
    rating: 5,
    date: 'a year ago',
    content:
      "My go-to for residential electrical work. The combination of customer care, professionalism, experience and knowledge = quality work. The homeowner's safety and comfort is the top priority every time. Highly recommend.",
    servicesMentioned: ['Residential Electrical', 'Safety Inspection'],
  },
  {
    id: 'review-3',
    author: 'Daniel Poon',
    initials: 'DP',
    badge: '7 reviews',
    rating: 5,
    date: 'a year ago',
    content:
      'Phenomenal attention to detail, planning, and execution of electrical tasks. Breaker surge protection installed, replaced breaker, and installed switches and several fans in various rooms. Highly recommended, and greatly appreciated for his kindness and quality of work.',
    servicesMentioned: ['Surge Protection', 'Breaker Replacement', 'Fans & Switches'],
  },
];
