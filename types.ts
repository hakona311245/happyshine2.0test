
export interface Course {
  id: string;
  level: string;
  title: string;
  description: string;
  icon: string;
  age: string;
  features: string[];
  color: string;
  outcomes: string[];
  curriculum: string[];
  image: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface StudentHero {
  name: string;
  image: string;
  graduatedLevel: string;
}
