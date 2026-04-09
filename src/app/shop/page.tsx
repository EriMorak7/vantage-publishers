'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/ui/BookCard';
import { books } from '@/data/books';

export default function ShopCatalogue() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Basic filtering mock state
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLevel, setActiveLevel] = useState<string>('All');

  const categories = ['All', 'Science', 'Literature', 'Business', 'History', 'English', 'Math', 'Primary Education'];
  const levels = ['All', 'Primary', 'SSS Level', 'Educators', 'General'];

  // Filter books
  const filteredBooks = books.filter(book => {
    const matchCategory = activeCategory === 'All' || book.category.toUpperCase().includes(activeCategory.toUpperCase());
    const matchLevel = activeLevel === 'All' || book.level.includes(activeLevel);
    return matchCategory && matchLevel;
  });

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <header className="bg-deep-navy py-12 md:py-16 px-4">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-4">Book Catalogue</h1>
          <p className="text-slate-300 max-w-2xl mx-auto font-light">
            Discover our comprehensive range of curriculum-aligned resources and literary works.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-4 sm:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-secondary uppercase tracking-wider">Categories</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm ${activeCategory === cat ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary transition-colors'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-secondary uppercase tracking-wider">Education Level</h3>
            <ul className="space-y-3">
              {levels.map(lvl => (
                <li key={lvl}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="level"
                      checked={activeLevel === lvl}
                      onChange={() => setActiveLevel(lvl)}
                      className="w-4 h-4 text-primary bg-surface-container-highest border-outline focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                      {lvl}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 pb-4 border-b border-surface-container-high">
            <p className="text-sm font-bold text-on-surface-variant">
              Showing <span className="text-secondary">{filteredBooks.length}</span> results
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-surface-container-high">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-surface-container text-secondary' : 'text-on-surface-variant hover:bg-surface-container-low'} transition-colors`}
                >
                  <span className="material-symbols-outlined text-lg block">grid_view</span>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-surface-container text-secondary' : 'text-on-surface-variant hover:bg-surface-container-low'} transition-colors`}
                >
                  <span className="material-symbols-outlined text-lg block">view_list</span>
                </button>
              </div>
              
              <select className="bg-white border border-surface-container-high text-sm p-2 rounded-lg text-on-surface-variant focus:ring-2 focus:ring-primary outline-none cursor-pointer">
                <option>Sort by: Popularity</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Newest</option>
              </select>
            </div>
          </div>

          {/* Book Grid */}
          {filteredBooks.length > 0 ? (
            <div className={`grid gap-6 md:gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredBooks.map(book => (
                <div key={book.id}>
                  {/* Reuse the compact variant for grid, default for list or vice versa. Compact looks better in catalogue grid. */}
                  <BookCard book={book} variant="compact" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">search_off</span>
              <h3 className="font-headline text-2xl font-bold text-secondary mb-2">No books found</h3>
              <p className="text-on-surface-variant">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveLevel('All'); }}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredBooks.length > 0 && (
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-surface-container-high text-on-surface-variant hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-surface-container-high text-on-surface-variant hover:bg-white transition-colors hover:text-primary">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-surface-container-high text-on-surface-variant hover:bg-white transition-colors hover:text-primary">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-surface-container-high text-on-surface-variant hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
