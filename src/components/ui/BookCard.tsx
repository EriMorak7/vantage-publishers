'use client';

import { Book } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface BookCardProps {
  book: Book;
  variant?: 'default' | 'compact';
}

export default function BookCard({ book, variant = 'default' }: BookCardProps) {
  const { addItem } = useCart();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-sm"
        style={{
          fontVariationSettings: i < Math.floor(rating) ? "'FILL' 1" : "'FILL' 0",
        }}
      >
        star
      </span>
    ));
  };

  if (variant === 'compact') {
    return (
      <div className="group cursor-pointer">
        <Link href={`/shop/${book.id}`}>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={book.image}
              alt={book.title}
            />
            {book.tags.includes('New Arrival') && (
              <span className="absolute top-3 left-3 bg-primary-container text-deep-navy text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                NEW ARRIVAL
              </span>
            )}
            {book.tags.includes('Sale') && (
              <span className="absolute top-3 right-3 bg-error text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                SALE
              </span>
            )}
            <button
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-secondary hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Add to wishlist"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
            </button>
          </div>
        </Link>
        <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">
          {book.level} · {book.subject}
        </p>
        <div className="flex text-amber-500 text-sm mb-1">{renderStars(book.rating)}</div>
        <h4 className="font-headline text-lg font-bold text-on-surface truncate mb-1">{book.title}</h4>
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-3">{book.description}</p>
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-lg font-bold text-secondary">{book.currency}{book.price.toLocaleString()}</span>
            {book.originalPrice && (
              <span className="text-sm text-on-surface-variant line-through ml-2">
                {book.currency}{book.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-red-500 transition-colors"
              aria-label="Add to wishlist"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
            </button>
            <button
              onClick={() => addItem(book, 'paperback')}
              className="bg-brand-amber text-deep-navy px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-amber-400 transition-colors text-sm font-bold"
            >
              <span className="material-symbols-outlined text-base">shopping_cart</span> ADD
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-surface-container-lowest p-4 rounded-xl editorial-shadow transition-transform hover:-translate-y-2 relative">
      <button
        className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-secondary hover:text-red-500 shadow-sm"
        aria-label="Add to wishlist"
      >
        <span className="material-symbols-outlined text-xl">favorite</span>
      </button>

      <Link href={`/shop/${book.id}`}>
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover" src={book.image} alt={book.title} />
          <span className="absolute top-4 left-4 bg-primary-container text-deep-navy text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
            {book.category}
          </span>
        </div>
      </Link>

      <div className="space-y-1 mb-3">
        <div className="flex text-amber-500 text-sm mb-1">{renderStars(book.rating)}</div>
        <h4 className="font-headline text-xl font-bold text-on-surface truncate">{book.title}</h4>
        <p className="text-on-surface-variant text-sm">{book.author}</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold text-secondary">
          {book.currency}{book.price.toLocaleString()}
        </span>
        <button
          onClick={() => addItem(book, 'paperback')}
          className="w-full bg-secondary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-deep-navy transition-colors font-bold"
        >
          <span className="material-symbols-outlined text-xl">shopping_bag</span> Add to Cart
        </button>
      </div>
    </div>
  );
}
