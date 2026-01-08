
import React from 'react';
import { Target, Heart, Shield, Award, Sun, Zap } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import StudentShowcase from '../components/StudentShowcase';

const About: React.FC = () => {
  return (
    <div className="py-20">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="text-5xl font-bold text-slate-800 font-heading mt-4 mb-6">Born to Shine Bright</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Happy Shine was founded on a simple belief: learning a new language should be as natural and joyful as a child's laughter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-800 font-heading mb-6 flex items-center gap-3">
              <Target className="text-red-600 h-8 w-8" />
              Our Mission
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our mission is to empower students with the linguistic confidence and cultural intelligence needed to navigate the global world. We don't just teach English; we cultivate communication superpowers through joy, exploration, and creative expression.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Heart className="text-red-600" />, title: "Student Centric", desc: "Every child is unique." },
                { icon: <Shield className="text-red-600" />, title: "Safe Haven", desc: "Mistakes are welcome here." },
                { icon: <Zap className="text-red-600" />, title: "Innovation", desc: "Modern tech, classic care." },
                { icon: <Award className="text-red-600" />, title: "Excellence", desc: "Highest academic standards." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{v.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{v.title}</h4>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="bg-red-600 rounded-[2rem] aspect-square overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/800?team" alt="Happy Shine Team" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-red-50 max-w-[200px]">
              <Sun className="h-10 w-10 text-red-600 mb-2" />
              <p className="text-sm font-bold text-slate-800">Creating smiles for over a decade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4">The Happy Shine Timeline</h2>
            <p className="text-slate-500">How we grew from a spark into a sun.</p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-100 hidden md:block"></div>
            
            <div className="space-y-12">
              {ACHIEVEMENTS.map((a, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  <div className="md:w-1/2 w-full">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-50 hover:shadow-md transition-shadow">
                      <span className="text-red-600 font-bold text-2xl font-heading mb-2 block">{a.year}</span>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{a.title}</h3>
                      <p className="text-slate-600">{a.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Showcase Section */}
      <StudentShowcase />

      {/* Accomplishments Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-red-600 rounded-[3rem] p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold font-heading mb-8">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-6xl font-bold mb-2">95%</div>
                <p className="text-red-100 uppercase tracking-widest font-bold">IELTS 6.5+ Rate</p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-2">40+</div>
                <p className="text-red-100 uppercase tracking-widest font-bold">Partner Schools</p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-2">5k+</div>
                <p className="text-red-100 uppercase tracking-widest font-bold">Cambridge Cerificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
