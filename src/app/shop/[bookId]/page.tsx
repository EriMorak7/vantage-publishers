'use client';

import { useState, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import BookCard from '@/components/ui/BookCard';
import { useCart } from '@/context/CartContext';
import { books, relatedBooks } from '@/data/books';
import { notFound } from 'next/navigation';
import { BookFormat } from '@/types';

export default function BookDetail({ params }: { params: Promise<{ bookId: string }> }) {
  const resolvedParams = use(params);
  const book = books.find((b) => b.id === resolvedParams.bookId);
  const { addItem } = useCart();
  
  const [selectedFormat, setSelectedFormat] = useState<BookFormat>('paperback');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'curriculum' | 'reviews'>('description');

  if (!book) {
    notFound();
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-base"
        style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0" }}
      >
        star
      </span>
    ));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addItem(book, selectedFormat);
    }
    // Add toast notification logic here later
    alert(`Added ${quantity} ${selectedFormat} copy(s) of ${book.title} to cart.`);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-surface-container-low border-b border-surface-container-high py-4 px-4 sm:px-8">
        <div className="max-w-screen-2xl mx-auto text-sm text-on-surface-variant flex items-center gap-2">
          <span>Home</span>
          <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
          <span>Shop</span>
          <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
          <span className="capitalize">{book.category.toLowerCase()}</span>
          <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
          <span className="text-secondary font-bold truncate max-w-[200px]">{book.title}</span>
        </div>
      </div>

      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-4 sm:px-8 py-12">
        {/* Book Overview Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            <div className="relative aspect-[3/4] bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl p-8 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Book Info & Purchase Panel */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="mb-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container px-3 py-1 rounded-full">
                {book.level} · {book.subject}
              </span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight mt-4 mb-2">
              {book.title}
            </h1>
            
            <p className="text-xl text-on-surface-variant mb-4">By <span className="font-bold text-secondary">{book.author}</span></p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-amber-500">{renderStars(book.rating)}</div>
              <span className="text-sm text-on-surface-variant font-bold">({book.reviewCount} Reviews)</span>
              <span className="text-surface-container-high">|</span>
              <span className="text-sm text-tertiary flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> In Stock
              </span>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-secondary">{book.currency}{book.price.toLocaleString()}</span>
              {book.originalPrice && (
                <span className="text-xl text-on-surface-variant line-through border-l border-surface-container-high pl-4 mb-1">
                  {book.currency}{book.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-on-surface-variant leading-relaxed mb-8 border-b border-surface-container-high pb-8">
              {book.description}
            </p>

            {/* Format Selection */}
            <div className="mb-8">
              <p className="font-bold text-secondary mb-4 uppercase tracking-widest text-sm">Select Format</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedFormat('paperback')}
                  disabled={!book.format.includes('paperback')}
                  className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg border-2 text-left transition-colors ${
                    selectedFormat === 'paperback' 
                      ? 'border-primary bg-surface-container-lowest' 
                      : 'border-surface-container-high text-on-surface-variant hover:border-outline'
                  } ${!book.format.includes('paperback') ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <p className={`font-bold ${selectedFormat === 'paperback' ? 'text-primary' : ''}`}>Paperback</p>
                  <p className="text-xs mt-1">Physical Copy</p>
                </button>
                <button
                  onClick={() => setSelectedFormat('ebook')}
                  disabled={!book.format.includes('ebook')}
                  className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg border-2 text-left transition-colors ${
                    selectedFormat === 'ebook' 
                      ? 'border-primary bg-surface-container-lowest' 
                      : 'border-surface-container-high text-on-surface-variant hover:border-outline'
                  } ${!book.format.includes('ebook') ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <p className={`font-bold ${selectedFormat === 'ebook' ? 'text-primary' : ''}`}>E-Book</p>
                  <p className="text-xs mt-1">Instant Download</p>
                </button>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <div className="flex items-center bg-surface-container-lowest border border-surface-container-high rounded-lg w-full sm:w-auto overflow-hidden h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-full bg-transparent border-none text-center font-bold text-secondary focus:ring-0 select-none"
                  readOnly
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                fullWidth 
                className="bg-brand-amber text-deep-navy hover:bg-amber-400 font-bebas text-2xl tracking-widest h-14"
              >
                Add to Cart
              </Button>
            </div>

            {/* Highlights */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-surface-container-high">
              <h3 className="font-bold text-secondary mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">local_library</span>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {book.highlights?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        {/* Details Tabs Section */}
        <div className="mb-24">
          <div className="flex border-b border-surface-container-high mb-8 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('description')}
              className={`pb-4 px-6 font-bold uppercase tracking-widest text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'description' ? 'border-primary text-secondary' : 'border-transparent text-on-surface-variant hover:text-secondary'}`}
            >
              Description & Details
            </button>
            <button 
              onClick={() => setActiveTab('curriculum')}
              className={`pb-4 px-6 font-bold uppercase tracking-widest text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'curriculum' ? 'border-primary text-secondary' : 'border-transparent text-on-surface-variant hover:text-secondary'}`}
            >
              Curriculum Alignment
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 px-6 font-bold uppercase tracking-widest text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'reviews' ? 'border-primary text-secondary' : 'border-transparent text-on-surface-variant hover:text-secondary'}`}
            >
              Reviews ({book.reviewCount})
            </button>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl editorial-shadow min-h-[300px]">
             {activeTab === 'description' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="font-headline text-2xl font-bold text-secondary">About this book</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {book.description}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg pt-4 border-t border-surface-container-high">
                      Designed to meet and exceed standard requirements, this edition combines theory with rich examples drawn from local contexts. The structure empowers self-study, whilst offering educators ample material for lively classroom instruction.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-xl space-y-4 h-fit">
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-4">Specifications</h4>
                    <div className="flex justify-between border-b border-surface-container-high pb-2">
                      <span className="text-on-surface-variant text-sm">Publisher</span>
                      <span className="font-bold text-sm text-secondary truncate pl-4">{book.publisher}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-container-high pb-2">
                      <span className="text-on-surface-variant text-sm">Edition</span>
                      <span className="font-bold text-sm text-secondary">{book.edition}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-container-high pb-2">
                      <span className="text-on-surface-variant text-sm">ISBN</span>
                      <span className="font-bold text-sm text-secondary">{book.isbn}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-container-high pb-2">
                      <span className="text-on-surface-variant text-sm">Pages</span>
                      <span className="font-bold text-sm text-secondary">{book.pageCount}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-on-surface-variant text-sm">Language</span>
                      <span className="font-bold text-sm text-secondary">{book.language}</span>
                    </div>
                  </div>
                </div>
             )}
             {activeTab === 'curriculum' && (
               <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 block">assignment_turned_in</span>
                  <h3 className="font-headline text-2xl font-bold text-secondary mb-2">Curriculum Compliant</h3>
                  <p className="text-on-surface-variant max-w-lg mx-auto">This book is fully aligned with the current syllabus requirements for {book.level} {book.subject}. Specific unit mappings and teacher guides are available upon institutional request.</p>
               </div>
             )}
             {activeTab === 'reviews' && (
               <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-amber-500 mb-4 block">star</span>
                  <h3 className="font-headline text-2xl font-bold text-secondary mb-2">{book.rating} out of 5 Stars</h3>
                  <p className="text-on-surface-variant">Based on {book.reviewCount} customer reviews.</p>
                  <Button variant="outline" className="mt-8 text-secondary border-secondary hover:bg-secondary hover:text-white">Write a Review</Button>
               </div>
             )}
          </div>
        </div>

        {/* Related Books Section */}
        <section>
          <div className="flex justify-between items-end mb-8 border-b border-surface-container-high pb-4">
            <h2 className="font-bebas text-4xl text-secondary">Often Bought Together</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBooks.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} variant="default" />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
