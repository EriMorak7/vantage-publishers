'use client';

import { useRef } from 'react';
import BookCard from '../ui/BookCard';
import { featuredBooks } from '@/data/books';

export default function FeaturedBooks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-surface-container-low py-20 md:py-24 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-secondary">New In</h2>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors aria-label='Scroll left'"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors aria-label='Scroll right'"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredBooks.map((book) => (
            <div key={book.id} className="min-w-[280px] max-w-[320px] lg:max-w-none lg:w-1/4 lg:min-w-0 flex-shrink-0 snap-start">
              <BookCard book={book} variant="default" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
