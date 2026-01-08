
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { CheckCircle, BookOpen, Star, Sparkles, Sun, ArrowRight, Zap, Target, HelpCircle, ChevronDown } from 'lucide-react';
import StudentShowcase from '../components/StudentShowcase';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const faqs = [
    { q: "How long does this level typically take?", a: "Each course is designed to span approximately 6 to 9 months, depending on the student's learning pace and frequency of classes." },
    { q: "Will my child get a certificate?", a: "Yes! Every graduate receives a Happy Shine Certificate of Completion, and we also prepare them for official Cambridge English examinations." },
    { q: "What happens if my child misses a class?", a: "We offer catch-up materials and occasional 1-on-1 support sessions to ensure no one is left behind." }
  ];

  return (
    <div className="bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className={`absolute inset-0 ${course.color} opacity-40 -z-10`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg shadow-red-600/20">
                <Sun className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest">{course.level} Excellence</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold text-slate-800 font-heading mb-8 leading-tight">
                {course.title} <br />
                <span className="text-red-600">Adventure</span>
              </h1>
              <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
                {course.description} Designed for learners aged {course.age}.
              </p>
              <div className="flex flex-wrap gap-4">
                 {course.features.map((f, i) => (
                   <span key={i} className="bg-white px-6 py-2 rounded-2xl shadow-sm border border-red-50 text-red-600 font-bold">
                     #{f}
                   </span>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                <img src={course.image} alt={course.title} className="w-full aspect-[4/3] object-cover" />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-yellow-300 text-red-700 p-8 rounded-[3rem] shadow-xl max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4 mb-2">
                  <Star className="h-8 w-8 fill-current" />
                  <p className="text-3xl font-bold font-heading">TOP PICK</p>
                </div>
                <p className="font-bold">Our most popular level for {course.age}!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Curriculum Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Outcomes */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-3xl">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800 font-heading">What result does the kid get?</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-medium text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-3xl">
                  <BookOpen className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800 font-heading">What are they learning?</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-transparent hover:border-red-200 hover:bg-white hover:shadow-lg transition-all flex items-center justify-between group">
                    <span className="text-xl font-bold text-slate-800">{item}</span>
                    <Zap className="h-5 w-5 text-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shining Star Section */}
      <div className="bg-red-50/30">
        <StudentShowcase />
      </div>

      {/* Animated Call to Action */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group overflow-hidden">
             {/* Pulsing Background */}
            <div className="absolute inset-0 bg-red-600 rounded-[4rem] group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-pulse"></div>
            
            <div className="relative z-10 p-12 md:p-20 text-center text-white">
              <Sparkles className="h-16 w-16 text-yellow-300 mx-auto mb-8 animate-bounce" />
              <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8">Ready to witness the glow?</h2>
              <p className="text-2xl text-red-50 mb-12 max-w-2xl mx-auto">
                Don't just take our word for it. Book a free, no-pressure placement test today and let us show you how your child can shine!
              </p>
              
              <Link 
                to="/enroll" 
                className="inline-flex items-center gap-4 bg-white text-red-600 px-12 py-6 rounded-full text-2xl font-bold hover:bg-yellow-300 hover:text-red-700 transition-all shadow-2xl shadow-red-900/40 transform hover:scale-110 active:scale-95"
              >
                Sign Up for Free Test <ArrowRight className="h-8 w-8" />
              </Link>
              
              <p className="mt-12 text-red-200 font-bold uppercase tracking-widest text-sm">
                Limited Slots Available for This Semester!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-800 font-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="group border-2 border-red-50 rounded-[2rem] p-8 hover:border-red-600 transition-all cursor-default">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-slate-800 font-heading">{f.q}</h4>
                  <ChevronDown className="h-6 w-6 text-red-600 group-hover:rotate-180 transition-transform" />
                </div>
                <p className="text-lg text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CourseDetail;
