
import React, { useState, useEffect, useRef } from 'https://esm.sh/react@19.0.0';
import ReactDOM from 'https://esm.sh/react-dom@19.0.0/client';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation, 
  useParams, 
  Navigate 
} from 'https://esm.sh/react-router-dom@7.1.0';
import { 
  Sun, Smile, BookOpen, Users, Trophy, GraduationCap, 
  Star, Zap, Rocket, Heart, Sparkles, Menu, X, 
  Mail, Phone, MapPin, Facebook, Instagram, Youtube,
  CheckCircle, ArrowRight, Target, HelpCircle, ChevronDown,
  ChevronLeft, ChevronRight, Award, User, Send, MessageSquare, Clock
} from 'https://esm.sh/lucide-react@0.460.0';

/**
 * DATA CONSTANTS
 */
const COURSES = [
  {
    id: 'kids', level: 'Foundation', title: 'Kids', age: '4 - 6 years', icon: 'Sparkles', color: 'bg-red-50',
    description: 'A playful introduction to English through songs, games, and storytelling.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    features: ['Phonics Fun', 'Motor Skills', 'Social English'],
    outcomes: ['Master 44 English phonemes', 'Understand basic instructions', 'Confident self-introduction', 'Love for English'],
    curriculum: ['Interactive Storytelling', 'Rhythmic Phonics', 'Art & Craft', 'Greeting Roleplay']
  },
  {
    id: 'starters', level: 'Pre-A1', title: 'Starters', age: '6 - 8 years', icon: 'Sun', color: 'bg-red-100',
    description: 'The first step into the Cambridge English journey.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    features: ['Simple Sentences', 'Basic Reading', 'Creative Speaking'],
    outcomes: ['Read simple stories', 'Write about family', '500+ common words', 'Pass Cambridge Starters'],
    curriculum: ['Visual Vocab', 'Reading Clubs', 'Daily Life Conversations', 'Intro to Grammar']
  },
  {
    id: 'movers', level: 'A1', title: 'Movers', age: '8 - 10 years', icon: 'Rocket', color: 'bg-red-200',
    description: 'Developing communication skills further with active interactions.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    features: ['Grammar Basics', 'Active Listening', 'Interactive Tasks'],
    outcomes: ['Detailed instructions', 'Express opinions', 'Write letters/emails', '10+ shields Movers'],
    curriculum: ['Project Learning', 'Listening Strategy', 'Intermediate Grammar', 'Group Tasks']
  },
  {
    id: 'flyers', level: 'A2', title: 'Flyers', age: '10 - 12 years', icon: 'Zap', color: 'bg-red-300',
    description: 'Mastering elementary English for daily and academic use.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    features: ['Fluent Reading', 'Writing Essays', 'Daily Conversation'],
    outcomes: ['Understand written English', 'Native-style interaction', 'Multi-paragraph essays', 'Secondary school prep'],
    curriculum: ['Advanced Reading', 'Essay Training', 'Public Speaking', 'Global Discussions']
  },
  {
    id: 'ket', level: 'A2 Key', title: 'KET', age: '12 - 14 years', icon: 'BookOpen', color: 'bg-red-400',
    description: 'Proves a student can use English to communicate in simple situations.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    features: ['Practical English', 'Exam Techniques', 'Critical Thinking'],
    outcomes: ['Teenage grammar mastery', 'Practical situations abroad', 'Critical thinking', 'Cambridge KET Cert'],
    curriculum: ['Academic Essay', 'Exam Simulation', 'Problem Solving', 'Vocab Expansion']
  },
  {
    id: 'pet', level: 'B1 Preliminary', title: 'PET', age: '14 - 16 years', icon: 'Star', color: 'bg-red-500',
    description: 'Practical language skills for everyday use and intermediate academic work.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    features: ['Academic Writing', 'Public Speaking', 'Analytical Skills'],
    outcomes: ['Read/Write articles', 'Near-native fluency', 'High School prep', 'B1 mastery'],
    curriculum: ['Media Analysis', 'Debate Skills', 'Advanced Tenses', 'Note-taking']
  },
  {
    id: 'ielts', level: 'Global Standard', title: 'IELTS', age: '16+ years', icon: 'Trophy', color: 'bg-red-600',
    description: 'The ultimate academic goal for international study and career.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    features: ['IELTS Mastery', 'Advanced Research', 'University Prep'],
    outcomes: ['Band 7.0 - 8.5', 'Academic Research', 'Complex Arguments', 'University Readiness'],
    curriculum: ['Intensive Training', 'Reading Strategy', 'Scientific Listening', 'Fluency workshops']
  }
];

const STUDENT_HEROES = [
  { name: 'Nguyễn Minh Anh', graduatedLevel: 'IELTS 8.0', image: 'https://picsum.photos/300/400?random=10' },
  { name: 'Trần Bảo Nam', graduatedLevel: 'PET Master', image: 'https://picsum.photos/300/400?random=11' },
  { name: 'Lê Phương Chi', graduatedLevel: 'Starters', image: 'https://picsum.photos/300/400?random=12' },
  { name: 'Phạm Gia Huy', graduatedLevel: 'IELTS 7.5', image: 'https://picsum.photos/300/400?random=13' }
];

/**
 * COMPONENTS
 */
const StudentShowcase = () => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.student-card').clientWidth;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-yellow-100 text-red-600 px-4 py-1 rounded-full mb-4">
          <Award size={16} /><span className="text-xs font-bold uppercase tracking-widest">Gương Mặt Vàng Happy Shine</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4">Our Shining Stars</h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <button onClick={() => scroll('left')} className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hidden md:block text-red-600 border border-red-50"><ChevronLeft /></button>
        <button onClick={() => scroll('right')} className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hidden md:block text-red-600 border border-red-50"><ChevronRight /></button>
        <div ref={scrollRef} className="flex overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth space-x-6">
          {STUDENT_HEROES.map((s, i) => (
            <div key={i} className="student-card flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start">
              <div className="bg-white rounded-[2.5rem] p-4 border-2 border-red-50 hover:border-red-600 transition-all">
                <img src={s.image} className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-6" alt={s.name} />
                <h3 className="text-2xl font-bold text-slate-800 font-heading">{s.name}</h3>
                <span className="text-sm font-bold text-red-600 uppercase tracking-widest">{s.graduatedLevel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-xl text-white"><Sun size={24} className="animate-pulse" /></div>
          <span className="text-2xl font-bold text-red-600 font-heading">Happy Shine</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About Us</Link>
          <Link to="/courses" className="hover:text-red-600">Our Courses</Link>
          <Link to="/contact" className="hover:text-red-600">Contact</Link>
          <Link to="/enroll" className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-700">Enroll Now</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-6 border-t space-y-4 font-bold">
          <Link to="/" className="block" onClick={()=>setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block" onClick={()=>setIsOpen(false)}>About</Link>
          <Link to="/courses" className="block" onClick={()=>setIsOpen(false)}>Courses</Link>
          <Link to="/enroll" className="block text-red-600" onClick={()=>setIsOpen(false)}>Enroll Now</Link>
        </div>
      )}
    </nav>
  );
};

/**
 * PAGES
 */
const Home = () => (
  <div>
    <section className="bg-red-600 py-24 lg:py-40 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10"><Sun size={400} className="animate-[spin_40s_linear_infinite]" /></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md"><Smile size={18}/><span className="text-sm font-bold uppercase">Happiness Leads to Excellence</span></div>
          <h1 className="text-6xl lg:text-8xl font-bold font-heading mb-8">Learn with a <span className="text-yellow-300">Smile</span>,<br/>Shine in English.</h1>
          <p className="text-xl text-red-50 mb-12 max-w-lg">Unlock your potential at Happy Shine. We combine cutting-edge curriculum with a joyful environment.</p>
          <div className="flex gap-4">
            <Link to="/courses" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl">Discover Courses</Link>
            <Link to="/enroll" className="border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg">Free Trial</Link>
          </div>
        </div>
        <div className="lg:w-1/2 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-2"><img src="https://picsum.photos/800/600?education" alt="Hero" className="w-full" /></div>
      </div>
    </section>
    <StudentShowcase />
  </div>
);

const Courses = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center mb-24">
      <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 font-heading mb-6">Learning Roadmap</h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto">7 Levels of Brilliance tailored for every age group.</p>
    </div>
    <div className="max-w-5xl mx-auto px-4 relative">
      <div className="absolute left-[50px] top-20 bottom-20 w-1 roadmap-line hidden lg:block"></div>
      <div className="space-y-16 lg:space-y-24">
        {COURSES.map((c, i) => (
          <div key={c.id} className="relative flex flex-col lg:flex-row items-start gap-12 group">
            <div className="absolute left-[38px] top-4 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white z-10 hidden lg:block"></div>
            <div className="lg:w-[100px] font-bold text-red-600 pt-3">{c.level}</div>
            <div className="flex-grow bg-white p-10 rounded-[3rem] shadow-xl border border-red-50 hover:border-red-600 transition-all hover:-translate-y-2">
              <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-bold font-heading text-slate-800">{c.title}</h3>
                  <span className="text-red-600 font-bold text-sm uppercase">{c.age}</span>
                </div>
                <Link to={`/courses/${c.id}`} className="bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 w-fit">View Details <ArrowRight size={16}/></Link>
              </div>
              <p className="text-slate-600 text-lg mb-8">{c.description}</p>
              <div className="flex flex-wrap gap-4">
                {c.features.map((f, j) => <span key={j} className="bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700">✓ {f}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CourseDetail = () => {
  const { courseId } = useParams();
  const c = COURSES.find(item => item.id === courseId);
  if (!c) return <Navigate to="/courses" replace />;
  return (
    <div>
      <section className={`py-24 ${c.color} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <Link to="/courses" className="text-red-600 font-bold mb-8 block">← Back to Courses</Link>
            <h1 className="text-6xl lg:text-8xl font-bold font-heading mb-8">{c.title} <span className="text-red-600">Adventure</span></h1>
            <p className="text-2xl text-slate-600 mb-12">{c.description}</p>
          </div>
          <div className="lg:w-1/2 rounded-[4rem] border-8 border-white shadow-2xl rotate-3 overflow-hidden"><img src={c.image} alt={c.title} className="w-full" /></div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        <div>
           <h2 className="text-4xl font-bold font-heading mb-12 flex items-center gap-4"><Target className="text-red-600" /> Outcomes</h2>
           <div className="space-y-6">
             {c.outcomes.map((o, i) => <div key={i} className="flex items-center gap-4 text-xl font-medium text-slate-700"><CheckCircle className="text-green-500"/> {o}</div>)}
           </div>
        </div>
        <div>
           <h2 className="text-4xl font-bold font-heading mb-12 flex items-center gap-4"><BookOpen className="text-red-600" /> Curriculum</h2>
           <div className="space-y-4">
             {c.curriculum.map((item, i) => <div key={i} className="bg-slate-50 p-6 rounded-3xl font-bold text-slate-800 hover:bg-red-600 hover:text-white transition-all cursor-default">{item}</div>)}
           </div>
        </div>
      </section>
      <div className="py-24 text-center">
        <Link to="/enroll" className="inline-flex items-center gap-4 bg-red-600 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl animate-bounce-slow">Book Free Trial <ArrowRight size={32}/></Link>
      </div>
    </div>
  );
};

const Enroll = () => (
  <div className="bg-red-600 py-32 min-h-screen text-white text-center px-4">
    <Sparkles size={64} className="mx-auto mb-8 text-yellow-300" />
    <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-8">Start Your Journey</h1>
    <p className="text-xl max-w-2xl mx-auto mb-16">Our representative will contact you within 24 hours to schedule a free assessment.</p>
    <form className="max-w-xl mx-auto bg-white p-12 rounded-[3rem] text-slate-800 shadow-2xl space-y-6">
      <input className="w-full bg-slate-50 p-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-600" placeholder="Child's Name" />
      <input className="w-full bg-slate-50 p-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-600" placeholder="Parent's Phone" />
      <button className="w-full bg-red-600 text-white p-5 rounded-2xl font-bold text-xl">Submit Application</button>
    </form>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-20 mt-auto px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-16">
      <div>
        <div className="flex items-center gap-2 text-2xl font-bold font-heading text-red-500 mb-6"><Sun /> Happy Shine</div>
        <p className="text-slate-400 max-w-xs">Empowering the next generation with confidence and joy.</p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold uppercase tracking-widest text-red-500">Links</h4>
        <Link to="/" className="text-slate-400">Home</Link>
        <Link to="/courses" className="text-slate-400">Courses</Link>
        <Link to="/enroll" className="text-slate-400">Enroll</Link>
      </div>
    </div>
    <div className="text-center pt-12 text-slate-500">&copy; 2024 Happy Shine English Center. Pure Static Edition.</div>
  </footer>
);

/**
 * APP ROOT
 */
const App = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router><App /></Router>);
