'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'SHOP', href: '/shop' },
  { label: 'SCHOOLS', href: '/schools' },
  { label: 'AUTHORS', href: '/editorial' },
  { label: 'RESOURCES', href: '#' },
  { label: 'BLOG', href: '#' },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-50/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold font-headline text-slate-900"
          >
            Vantage Publishers
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-headline font-bold tracking-tight text-slate-900">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-amber-600 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Search Bar — Desktop Only */}
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm ml-2 w-48"
              placeholder="Search titles..."
              type="text"
              id="navbar-search"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-900">
            <span className="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors">
              favorite
            </span>
            <Link href="/cart" className="relative">
              <span className="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors">
                shopping_cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-container text-deep-navy text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* CTA Button — Desktop */}
          <Link
            href="/shop"
            className="hidden sm:block bg-primary-container text-deep-navy px-6 py-2.5 rounded-lg font-bold hover:scale-95 duration-200 transition-all text-sm"
          >
            Order Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-surface-container-high px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-slate-700 font-headline font-bold text-lg py-2 hover:text-amber-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="block bg-primary-container text-deep-navy px-6 py-3 rounded-lg font-bold text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
