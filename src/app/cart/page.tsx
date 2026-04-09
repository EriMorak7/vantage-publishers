'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { state, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <h1 className="font-bebas text-5xl md:text-6xl text-secondary mb-8">Shopping Cart</h1>
        
        {state.items.length === 0 ? (
          <div className="text-center py-32 bg-surface-container-lowest rounded-2xl editorial-shadow">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-6 bg-surface p-6 rounded-full inline-block">remove_shopping_cart</span>
            <h2 className="font-headline text-3xl font-bold text-secondary mb-4">Your cart is empty</h2>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto">Looks like you haven't added any books to your cart yet. Discover our latest educational resources or literary works.</p>
            <Link href="/shop">
              <Button size="lg" className="bg-brand-amber text-deep-navy font-bold font-bebas tracking-widest text-xl px-12 py-4">Browse Catalogue</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            
            {/* Cart Items List */}
            <div className="xl:w-2/3 w-full bg-surface-container-lowest rounded-2xl editorial-shadow overflow-hidden">
              <div className="p-6 md:p-8 border-b border-surface-container-high hidden sm:grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                <div className="col-span-6 md:col-span-7">Product Details</div>
                <div className="col-span-3 md:col-span-2 text-center">Quantity</div>
                <div className="col-span-3 md:col-span-3 text-right">Total</div>
              </div>
              
              <ul className="divide-y divide-surface-container-high">
                {state.items.map((item) => (
                  <li key={`${item.book.id}-${item.format}`} className="p-6 md:p-8 flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center">
                    
                    {/* Product */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-7 flex w-full gap-6">
                      <div className="w-24 h-32 md:w-28 md:h-36 bg-surface rounded flex-shrink-0 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="w-full h-full object-cover rounded shadow" src={item.book.image} alt={item.book.title} />
                      </div>
                      <div className="flex flex-col justify-center flex-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{item.book.category}</span>
                        <h3 className="font-headline text-xl font-bold text-secondary leading-tight mb-1">{item.book.title}</h3>
                        <p className="text-sm text-on-surface-variant mb-2">{item.book.author}</p>
                        <span className="inline-block text-xs font-semibold bg-surface-container px-2 py-1 rounded w-fit text-secondary uppercase tracking-wider mb-2">
                          {item.format}
                        </span>
                        <button 
                          onClick={() => removeItem(item.book.id)}
                          className="text-xs text-error font-bold uppercase hover:underline mt-auto flex items-center w-fit"
                        >
                          <span className="material-symbols-outlined text-sm mr-1">delete</span> Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-12 sm:col-span-3 md:col-span-2 flex justify-center w-full">
                      <div className="flex items-center bg-surface border border-surface-container-high rounded-full overflow-hidden h-10 w-full max-w-[120px]">
                        <button 
                          onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                          className="w-10 h-full flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="flex-1 text-center font-bold text-sm select-none">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                          className="w-10 h-full flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Price Total */}
                    <div className="col-span-12 sm:col-span-3 md:col-span-3 w-full text-right">
                      <p className="text-2xl font-bold text-secondary">
                        {item.book.currency}{(item.book.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {item.book.currency}{item.book.price.toLocaleString()} each
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-surface-container flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/shop" className="text-sm font-bold text-secondary flex items-center hover:underline">
                  <span className="material-symbols-outlined text-sm mr-1">arrow_back</span> Continue Shopping
                </Link>
                <div className="flex bg-white rounded-lg border border-surface-container-high overflow-hidden w-full sm:w-auto">
                  <input type="text" placeholder="Promo Code" className="px-4 py-2 text-sm border-none focus:outline-none focus:ring-0 flex-1" />
                  <button className="bg-secondary text-white px-4 py-2 font-bold text-sm hover:bg-deep-navy">Apply</button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="xl:w-1/3 w-full bg-deep-navy text-white rounded-2xl p-8 editorial-shadow sticky top-32">
              <h2 className="font-bebas text-3xl tracking-wide mb-8 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Subtotal ({totalItems} items)</span>
                  <span className="font-bold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Shipping</span>
                  <span className="text-brand-amber font-bold">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">VAT (7.5%)</span>
                  <span className="font-bold">₦{tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/10 pt-6 mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-4xl font-headline font-bold text-brand-amber">₦{total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              
              <Link href="/checkout">
                <Button fullWidth size="lg" className="bg-brand-amber text-deep-navy hover:bg-amber-400 font-bebas text-2xl tracking-widest py-4">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">lock</span> Secure Checkout Powered by Paystack
              </p>
            </div>
            
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
