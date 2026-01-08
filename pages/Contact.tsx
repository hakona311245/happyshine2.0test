
import React from 'react';
import { Sun, Mail, Phone, MapPin, User, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const centers = [
    {
      name: "Sunshine Campus (District 1)",
      address: "123 Sunshine Blvd, Ben Nghe, District 1, HCMC",
      representative: "Ms. Sunny Nguyen",
      phone: "0901 234 567",
      email: "sunny@happyshine.edu",
      hours: "8:00 AM - 9:00 PM",
      color: "bg-red-600"
    },
    {
      name: "Bright Horizon Campus (District 7)",
      address: "456 Moonlight Terrace, Tan Phong, District 7, HCMC",
      representative: "Mr. Shine Tran",
      phone: "0908 765 432",
      email: "shine@happyshine.edu",
      hours: "8:30 AM - 8:30 PM",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-red-600 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Sun className="absolute -top-20 -right-20 w-96 h-96 text-white animate-[spin_40s_linear_infinite]" />
          <Sun className="absolute -bottom-20 -left-20 w-64 h-64 text-white animate-[spin_30s_linear_infinite_reverse]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">We're here for you</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white font-heading mb-6">Let's Start a Conversation</h1>
          <p className="text-xl text-red-50 max-w-2xl mx-auto">
            Have questions about our programs or want to visit a campus? Our friendly representatives are ready to help you shine.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4">Our Learning Centers</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {centers.map((center, idx) => (
            <div key={idx} className="group bg-white rounded-[3rem] p-2 border-2 border-red-50 hover:border-red-600 transition-all shadow-xl shadow-red-900/5 hover:-translate-y-2">
              <div className={`rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col`}>
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-3xl ${center.color} text-white shadow-lg`}>
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Branch Location</span>
                    <h3 className="text-2xl font-bold text-slate-800 font-heading mt-1">{center.name}</h3>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-2 rounded-xl mt-1">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">Address</p>
                      <p className="text-slate-700 font-medium">{center.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-2 rounded-xl mt-1">
                      <User className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">Campus Representative</p>
                      <p className="text-lg font-bold text-slate-800">{center.representative}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-50 p-2 rounded-xl mt-1">
                        <Phone className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">Direct Line</p>
                        <a href={`tel:${center.phone}`} className="text-red-600 font-bold hover:underline">{center.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-50 p-2 rounded-xl mt-1">
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">Email</p>
                        <a href={`mailto:${center.email}`} className="text-slate-700 font-medium hover:text-red-600">{center.email}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Clock className="h-4 w-4 text-red-600" />
                    Open: {center.hours}
                  </div>
                  <button className="flex items-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all">
                    View on Map <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-red-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
               <Sun className="absolute -top-10 -left-10 w-48 h-48 opacity-20" />
               <div className="relative z-10">
                  <MessageSquare className="h-12 w-12 text-yellow-300 mb-6" />
                  <h3 className="text-3xl font-bold font-heading mb-4">Send a Message</h3>
                  <p className="text-red-100">Leave us your details and we'll get back to you within 24 hours.</p>
               </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 rounded-2xl px-5 py-3 outline-none transition-all" placeholder="Alex Wilson" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 rounded-2xl px-5 py-3 outline-none transition-all cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Course Information</option>
                      <option>Career Opportunities</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Email / Phone</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 rounded-2xl px-5 py-3 outline-none transition-all" placeholder="How can we reach you?" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-transparent focus:border-red-600 rounded-2xl px-5 py-3 outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Send Message <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sneak Peek */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-800 font-heading mb-8">Frequently Asked <br /> Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I schedule a school tour?", a: "Absolutely! Contact our representative at the campus you'd like to visit to book a personalized tour." },
                { q: "Is there a placement test fee?", a: "No, our placement tests and first counseling sessions are completely free of charge." },
                { q: "What is the average class size?", a: "We keep our classes small, with a maximum of 12 students to ensure personalized attention." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-b border-red-100 pb-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{item.q}</h4>
                  <p className="text-slate-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-yellow-100 rounded-[3rem] p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                   <Sun className="h-32 w-32 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 font-heading mb-4">Still have questions?</h3>
                <p className="text-slate-700 mb-8 font-medium">Our student success team is just a call away. We speak English and Vietnamese to better serve our local community.</p>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl">
                      <Phone className="h-5 w-5 text-red-600" />
                      <span className="font-bold text-slate-800">Hotline: 1900-HAPPY</span>
                   </div>
                   <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl">
                      <Mail className="h-5 w-5 text-red-600" />
                      <span className="font-bold text-slate-800">support@happyshine.edu</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
