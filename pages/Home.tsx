
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Smile, Users, Star, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import { TESTIMONIALS, COURSES } from '../constants';
import StudentShowcase from '../components/StudentShowcase';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20">
          <Sun className="w-96 h-96 text-white animate-[spin_20s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
                <Smile className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-bold uppercase tracking-wider">Happiness Leads to Excellence</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                Learn with a <span className="text-yellow-300">Smile</span>, <br />
                Shine in <span className="underline decoration-yellow-300 underline-offset-8">English</span>.
              </h1>
              <p className="text-xl text-red-50 mb-10 max-w-lg leading-relaxed">
                Unlock your potential at Happy Shine. We combine cutting-edge curriculum with a joyful environment to make English your strongest skill.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 hover:text-red-700 transition-all text-center shadow-xl shadow-red-900/20">
                  Discover Our Courses
                </Link>
                <Link to="/enroll" className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all text-center">
                  Book a Free Trial
                </Link>
              </div>
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-red-600" alt="Student" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-yellow-300">10,000+</span> happy students joined us!
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                <img 
                  src="https://picsum.photos/800/600?education" 
                  alt="Happy Students" 
                  className="w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-lg transform -rotate-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">98% Progress Rate</p>
                      <p className="text-xs text-slate-500">Verified by our 2023 Audit</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating blobs */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2 font-heading">15+</div>
              <p className="text-slate-500 font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2 font-heading">50+</div>
              <p className="text-slate-500 font-medium">Native Teachers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2 font-heading">12k+</div>
              <p className="text-slate-500 font-medium">Alumni</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2 font-heading">24/7</div>
              <p className="text-slate-500 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-red-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4">Why Happy Shine?</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Smile className="h-8 w-8 text-white" />, 
                title: "Fun Atmosphere", 
                desc: "We believe a happy brain learns faster. Our classes are filled with energy and positivity." 
              },
              { 
                icon: <GraduationCap className="h-8 w-8 text-white" />, 
                title: "Expert Mentors", 
                desc: "Learn from internationally certified teachers who are passionate about student growth." 
              },
              { 
                icon: <Users className="h-8 w-8 text-white" />, 
                title: "Small Groups", 
                desc: "Maximum attention for every student with a class size limit of 12 students." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-red-50 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-heading">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Showcase Section */}
      <StudentShowcase />

      {/* Testimonials */}
      <section className="py-24 bg-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-800 font-heading mb-6 leading-tight">
                What Our Happy <br /> 
                Families Are Saying
              </h2>
              <div className="space-y-8 mt-12">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="relative bg-white border border-red-100 p-8 rounded-2xl shadow-sm italic text-slate-600">
                    <div className="absolute -top-4 -left-4 bg-red-600 text-white p-2 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    "{t.content}"
                    <div className="mt-6 flex items-center space-x-4 not-italic">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-red-200" />
                      <div>
                        <p className="font-bold text-slate-800">{t.name}</p>
                        <p className="text-sm text-red-600">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-red-600 p-12 rounded-[3rem] text-white">
                <h3 className="text-3xl font-bold font-heading mb-8">Ready to Shine?</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Full Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 focus:outline-none placeholder:text-white/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Phone Number</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 focus:outline-none placeholder:text-white/50" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Level Interest</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 focus:outline-none appearance-none cursor-pointer">
                      {COURSES.map(c => (
                        <option key={c.id} className="text-slate-800">{c.title} ({c.level})</option>
                      ))}
                    </select>
                  </div>
                  <Link to="/enroll" className="block w-full bg-yellow-300 text-red-700 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg text-center">
                    Book Free Assessment
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
