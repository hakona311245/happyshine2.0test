
import React from 'react';
import { Sun, Heart, Send, Sparkles, Phone, User, Book } from 'lucide-react';
import { COURSES } from '../constants';

const Enroll: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-red-600 -skew-y-3 origin-top-left -z-10 overflow-hidden">
         <div className="absolute top-20 right-20 opacity-10">
            <Sun className="w-96 h-96 text-white animate-[spin_30s_linear_infinite]" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-bold uppercase tracking-widest">Join our community</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
              Start Your <span className="text-yellow-300">Brilliant</span> <br />
              Journey Today.
            </h1>
            <p className="text-xl text-red-50 mb-12 max-w-lg leading-relaxed">
              Happy Shine is more than a school; it's where confidence is born. Fill out the form, and our counselor will reach out to schedule a free placement test for your child.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Heart className="h-6 w-6" />, title: "Personalized Path", desc: "Every child gets a custom curriculum." },
                { icon: <Sun className="h-6 w-6" />, title: "Trial Session", desc: "Free diagnostic test and demo class." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-yellow-300 text-red-700 p-3 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading">{item.title}</h4>
                    <p className="text-red-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-red-900/10 border border-red-50 relative">
              {/* Floating Element */}
              <div className="absolute -top-6 -right-6 bg-yellow-300 text-red-700 p-4 rounded-3xl shadow-lg transform rotate-6 hidden sm:block">
                <p className="font-bold text-sm">FREE Placement Test!</p>
              </div>

              <h2 className="text-3xl font-bold text-slate-800 font-heading mb-8">Enrollment Form</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Child Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
                      <User className="h-4 w-4 text-red-600" /> Child's Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nguyễn Minh Anh" 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Parent Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600" /> Parent's Phone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="09xx xxx xxx" 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-slate-300 font-medium"
                    />
                  </div>
                </div>

                {/* Level Interest */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
                    <Book className="h-4 w-4 text-red-600" /> Program of Interest
                  </label>
                  <select className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all appearance-none font-medium cursor-pointer">
                    {COURSES.map(course => (
                      <option key={course.id}>{course.title} ({course.age})</option>
                    ))}
                    <option>General English Inquiry</option>
                  </select>
                </div>

                {/* Additional Note */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wide">Any special requests?</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us a little about your child's goals..."
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-slate-300 font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 active:scale-95"
                >
                  Send Application <Send className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-8 text-center text-slate-400 text-sm">
                By submitting, you agree to our <a href="#" className="underline hover:text-red-600">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
