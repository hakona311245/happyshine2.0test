
import React from 'react';
import { Sun, Smile, BookOpen, Users, Trophy, GraduationCap, Star, Zap, Rocket, Heart, Sparkles } from 'lucide-react';
import { Course, Achievement, Testimonial, StudentHero } from './types';

export const COURSES: Course[] = [
  {
    id: 'kids',
    level: 'Foundation',
    title: 'Kids',
    description: 'A playful introduction to English through songs, games, and storytelling.',
    icon: 'Sparkles',
    age: '4 - 6 years',
    features: ['Phonics Fun', 'Motor Skills', 'Social English'],
    color: 'bg-red-50',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Master 44 English phonemes',
      'Understand basic classroom instructions',
      'Confident simple self-introduction',
      'Love for English through play'
    ],
    curriculum: [
      'Interactive Storytelling',
      'Rhythmic Phonics Songs',
      'Art & Craft Expression',
      'Basic Greeting Roleplay'
    ]
  },
  {
    id: 'starters',
    level: 'Pre-A1',
    title: 'Starters',
    description: 'The first step into the Cambridge English journey.',
    icon: 'Sun',
    age: '6 - 8 years',
    features: ['Simple Sentences', 'Basic Reading', 'Creative Speaking'],
    color: 'bg-red-100',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Read short, simple stories',
      'Write basic sentences about family',
      'Identify 500+ common words',
      'Pass Cambridge Starters mock test'
    ],
    curriculum: [
      'Visual Vocabulary Building',
      'Reading Adventure Clubs',
      'Daily Life Conversations',
      'Intro to Basic Grammar'
    ]
  },
  {
    id: 'movers',
    level: 'A1',
    title: 'Movers',
    description: 'Developing communication skills further with active interactions.',
    icon: 'Rocket',
    age: '8 - 10 years',
    features: ['Grammar Basics', 'Active Listening', 'Interactive Tasks'],
    color: 'bg-red-200',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Understand basic instructions in detail',
      'Express opinions on hobbies',
      'Write letters or emails',
      'Achieve 10+ shields in Cambridge Movers'
    ],
    curriculum: [
      'Project-Based Learning',
      'Listening Strategy Workshops',
      'Intermediate Grammar Mastery',
      'Collaborative Group Tasks'
    ]
  },
  {
    id: 'flyers',
    level: 'A2',
    title: 'Flyers',
    description: 'Mastering elementary English for daily and academic use.',
    icon: 'Zap',
    age: '10 - 12 years',
    features: ['Fluent Reading', 'Writing Essays', 'Daily Conversation'],
    color: 'bg-red-300',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Understand written English on familiar topics',
      'Interact with native speakers simply',
      'Construct multi-paragraph essays',
      'Bridge to secondary school English'
    ],
    curriculum: [
      'Advanced Reading Comprehension',
      'Essay Structure Training',
      'Public Speaking Basics',
      'Global Issues Discussions'
    ]
  },
  {
    id: 'ket',
    level: 'A2 Key',
    title: 'KET',
    description: 'Proves a student can use English to communicate in simple situations.',
    icon: 'BookOpen',
    age: '12 - 14 years',
    features: ['Practical English', 'Exam Techniques', 'Critical Thinking'],
    color: 'bg-red-400',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Master basic grammar for teenagers',
      'Confident in practical situations abroad',
      'Critical thinking in English',
      'Cambridge KET Certification'
    ],
    curriculum: [
      'Academic Essay Writing',
      'Exam Simulation Series',
      'Real-world Problem Solving',
      'Intensive Vocabulary Expansion'
    ]
  },
  {
    id: 'pet',
    level: 'B1 Preliminary',
    title: 'PET',
    description: 'Practical language skills for everyday use and intermediate academic work.',
    icon: 'Star',
    age: '14 - 16 years',
    features: ['Academic Writing', 'Public Speaking', 'Analytical Skills'],
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Read and write medium-level articles',
      'Communicate with near-native fluency',
      'Prepare for High School English',
      'Master B1-level linguistic tasks'
    ],
    curriculum: [
      'Literature & Media Analysis',
      'Debate & Persuasion Skills',
      'Advanced Tense System',
      'Note-taking & Presentation'
    ]
  },
  {
    id: 'ielts',
    level: 'Global Standard',
    title: 'IELTS',
    description: 'The ultimate academic goal for international study and career.',
    icon: 'Trophy',
    age: '16+ years',
    features: ['IELTS Mastery', 'Advanced Research', 'University Prep'],
    color: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Target Band 7.0 - 8.5',
      'Academic Research in English',
      'Complex Argumentation Skills',
      'University Entrance Readiness'
    ],
    curriculum: [
      'Task 1 & 2 Intensive Training',
      'Academic Reading Strategies',
      'Scientific & Logical Listening',
      'High-Level Fluency & Coherence'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { year: '2015', title: 'The First Spark', description: 'Happy Shine was founded with just two classrooms and a big dream.' },
  { year: '2018', title: 'Expansion', description: 'Opened our second branch and reached over 1,000 active students.' },
  { year: '2020', title: 'Digital Pioneer', description: 'Successfully transitioned to hybrid learning with proprietary interactive tools.' },
  { year: '2023', title: 'Top Excellence Award', description: 'Awarded "Best Language Center in the Region" for student satisfaction.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Parent of Tim (8)',
    content: "My son used to be terrified of English. Now he's the one waking me up for class! The smile on his face says it all.",
    image: 'https://picsum.photos/200/200?random=1'
  },
  {
    name: 'Michael Chen',
    role: 'Shining Scholar Student',
    content: "The teachers here make everything so easy to understand. I feel like I'm not just learning a language, but gaining a superpower.",
    image: 'https://picsum.photos/200/200?random=2'
  }
];

export const STUDENT_HEROES: StudentHero[] = [
  {
    name: 'Nguyễn Minh Anh',
    image: 'https://picsum.photos/300/400?random=10',
    graduatedLevel: 'IELTS 8.0'
  },
  {
    name: 'Trần Bảo Nam',
    image: 'https://picsum.photos/300/400?random=11',
    graduatedLevel: 'PET Master'
  },
  {
    name: 'Lê Phương Chi',
    image: 'https://picsum.photos/300/400?random=12',
    graduatedLevel: 'Starters'
  },
  {
    name: 'Phạm Gia Huy',
    image: 'https://picsum.photos/300/400?random=13',
    graduatedLevel: 'IELTS 7.5'
  },
  {
    name: 'Hoàng Thùy Linh',
    image: 'https://picsum.photos/300/400?random=14',
    graduatedLevel: 'Flyers Graduate'
  },
  {
    name: 'Đặng Quốc Bảo',
    image: 'https://picsum.photos/300/400?random=15',
    graduatedLevel: 'Kids Foundation'
  },
  {
    name: 'Vũ Minh Tuấn',
    image: 'https://picsum.photos/300/400?random=16',
    graduatedLevel: 'KET Distinction'
  },
  {
    name: 'Lý Thanh Hà',
    image: 'https://picsum.photos/300/400?random=17',
    graduatedLevel: 'Movers'
  },
  {
    name: 'Bùi Đức Trọng',
    image: 'https://picsum.photos/300/400?random=18',
    graduatedLevel: 'Flyers'
  },
  {
    name: 'Trương Ngọc Diệp',
    image: 'https://picsum.photos/300/400?random=19',
    graduatedLevel: 'Kids'
  }
];
