
import React, { useRef } from 'react';
import { STUDENT_HEROES } from '../constants';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const StudentShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.querySelector('.student-card');
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        // We add the gap if it exists, but Tailwind's flex space-x-6 is easier handled by measuring offsetLeft of next sibling or just using scrollAmount.
        // For simple snap-to-next, we can use scrollBy with the card's clientWidth.
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-red-600 px-4 py-1 rounded-full mb-4">
            <Award className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Gương Mặt Vàng Happy Shine</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4">Our Shining Stars</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Meet our outstanding students who have successfully conquered their language goals. Each star here is a testament to the joy of learning.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop only for precise control, though swipe works too */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-red-100 text-red-600 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all hidden md:flex items-center justify-center active:scale-95"
            aria-label="Previous student"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-red-100 text-red-600 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all hidden md:flex items-center justify-center active:scale-95"
            aria-label="Next student"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Mask for smooth scrolling indication */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>
          
          {/* Scrollable Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {STUDENT_HEROES.map((student, idx) => (
              <div 
                key={idx} 
                className="student-card flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start px-4"
              >
                <div className="group/card bg-white rounded-[2.5rem] p-5 border-2 border-red-50 hover:border-red-200 hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-800/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-6 right-6 bg-white p-3 rounded-2xl shadow-xl transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      <div className="bg-red-100 p-2 rounded-xl">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center px-4">
                    <h3 className="text-2xl font-bold text-slate-800 font-heading mb-2 group-hover/card:text-red-600 transition-colors">
                      {student.name}
                    </h3>
                    <div className="inline-block px-4 py-1.5 bg-red-50 rounded-full">
                      <p className="text-sm font-bold text-red-600 uppercase tracking-tight">
                        {student.graduatedLevel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile indicator / helper */}
          <div className="flex md:hidden justify-center items-center space-x-4 -mt-4">
             <button 
              onClick={() => scroll('left')}
              className="bg-white border border-red-100 text-red-600 p-2 rounded-full shadow-sm active:bg-red-600 active:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Swipe or tap</div>
             <button 
              onClick={() => scroll('right')}
              className="bg-white border border-red-100 text-red-600 p-2 rounded-full shadow-sm active:bg-red-600 active:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default StudentShowcase;
