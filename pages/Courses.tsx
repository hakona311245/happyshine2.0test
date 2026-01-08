
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sun, Sparkles, BookOpen, Trophy, Rocket, Zap, Star } from 'lucide-react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="h-8 w-8 text-red-600" />;
      case 'Sun': return <Sun className="h-8 w-8 text-red-600" />;
      case 'Rocket': return <Rocket className="h-8 w-8 text-red-600" />;
      case 'Zap': return <Zap className="h-8 w-8 text-red-600" />;
      case 'BookOpen': return <BookOpen className="h-8 w-8 text-red-600" />;
      case 'Star': return <Star className="h-8 w-8 text-red-600" />;
      case 'Trophy': return <Trophy className="h-8 w-8 text-red-600" />;
      default: return <BookOpen className="h-8 w-8 text-red-600" />;
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
          <Rocket className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Your Learning Roadmap</span>
        </div>
        <h1 className="text-5xl font-bold text-slate-800 font-heading mb-6">Levels of Brilliance</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          We've designed our courses to feel like a great adventure. Every level is a milestone toward absolute mastery.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Roadmap Line */}
        <div className="absolute left-[50px] top-20 bottom-20 w-1 roadmap-line hidden lg:block"></div>

        <div className="space-y-16 lg:space-y-24">
          {COURSES.map((course, idx) => (
            <div key={course.id} className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-12`}>
              {/* Step Circle */}
              <div className="absolute left-[38px] top-2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block"></div>

              <div className="w-full lg:w-[100px] flex-shrink-0 flex lg:flex-col items-center gap-2">
                <span className="text-red-600 font-bold font-heading whitespace-nowrap">{course.level}</span>
              </div>

              <div className={`flex-grow bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-red-50 hover:border-red-200 transition-all hover:-translate-y-2 group relative overflow-hidden`}>
                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-red-100">
                        {getIcon(course.icon)}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-800 font-heading">{course.title}</h3>
                        <p className="text-red-600 font-bold text-sm tracking-wide uppercase">{course.age}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/courses/${course.id}`} 
                      className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all flex items-center gap-2 w-fit shadow-lg shadow-red-600/20"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 bg-slate-50 p-4 rounded-xl">
                        <div className="bg-red-100 p-1 rounded-full">
                          <Check className="h-3 w-3 text-red-600" />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graduation Call to Action */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <div className="bg-slate-900 rounded-[3rem] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Trophy className="h-64 w-64 text-yellow-300" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold font-heading mb-6">Not sure where to start?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
              Take our free diagnostic test and get a personalized learning path tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/enroll"
                className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all"
              >
                Take Free Test
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
