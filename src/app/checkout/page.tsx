'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { state, subtotal } = useCart();
  const tax = subtotal * 0.075;
  const shipping = 1500; // Flat rate for demo
  const total = subtotal + tax + shipping;

  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Checkout Navbar (Simplified to reduce distractions) */}
      <nav className="bg-white border-b border-surface-container-high px-4 sm:px-8 py-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center bg-transparent">
          <Link href="/" className="text-2xl font-bold font-headline text-deep-navy">
            Vantage Publishers
          </Link>
          <span className="text-sm font-bold text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-base">lock</span> Secure Checkout
          </span>
        </div>
      </nav>

      <main className="flex-1 max-w-screen-xl w-full mx-auto px-4 sm:px-8 py-8 lg:py-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Main Checkout Form Area */}
        <div className="w-full lg:w-2/3">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-high -z-10 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-[2px] bg-primary transition-all duration-300 -z-10" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            {[
              { num: 1, label: 'Delivery' },
              { num: 2, label: 'Payment' },
              { num: 3, label: 'Review' }
            ].map(s => (
              <div key={s.num} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 ${step >= s.num ? 'bg-primary border-primary text-white' : 'bg-white border-surface-container-high text-on-surface-variant'}`}>
                  {step > s.num ? <span className="material-symbols-outlined text-xl">check</span> : s.num}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mt-2 ${step >= s.num ? 'text-secondary' : 'text-on-surface-variant'}`}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl editorial-shadow p-8 md:p-12 mb-8">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="font-bebas text-3xl text-secondary mb-6 border-b border-surface-container-high pb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none" />
                    <input type="text" placeholder="Last Name" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none md:col-span-2" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none md:col-span-2" />
                  </div>
                </div>
                
                <div>
                  <h2 className="font-bebas text-3xl text-secondary mb-6 border-b border-surface-container-high pb-4">Delivery Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Street Address" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none md:col-span-2" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none md:col-span-2" />
                    <select className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none text-on-surface">
                      <option>Select State</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Oyo</option>
                      <option>Rivers</option>
                    </select>
                    <input type="text" placeholder="City" className="w-full bg-surface border border-surface-container-high rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>

                <div className="pt-4">
                  <Button fullWidth size="lg" onClick={() => setStep(2)}>Continue to Payment</Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-bebas text-3xl text-secondary mb-6 border-b border-surface-container-high pb-4">Payment Method</h2>
                
                <div className="space-y-4">
                  <label className="flex items-center gap-4 p-4 border-2 border-primary bg-primary-container/5 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary border-outline focus:ring-primary" />
                    <div className="flex-1">
                      <p className="font-bold text-secondary">Pay Stack (Card / Bank Transfer / USSD)</p>
                      <p className="text-sm text-on-surface-variant">You will be redirected to PayStack securely.</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-4 p-4 border border-surface-container-high hover:border-outline rounded-xl cursor-pointer opacity-50">
                    <input type="radio" name="payment" disabled className="w-5 h-5" />
                    <div className="flex-1">
                      <p className="font-bold text-secondary">Direct Institutional Transfer</p>
                      <p className="text-sm text-on-surface-variant">Available for approved school accounts only.</p>
                    </div>
                  </label>
                </div>
                
                <div className="pt-8 flex gap-4">
                  <Button variant="outline" className="text-secondary border-surface-container-high" onClick={() => setStep(1)}>Back</Button>
                  <Button fullWidth size="lg" onClick={() => setStep(3)}>Review Order</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-12">
                <span className="material-symbols-outlined text-6xl text-primary mb-4 w-24 h-24 bg-primary-container rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-amber/30">verified_user</span>
                <h2 className="font-headline text-4xl font-bold text-secondary mb-4">Almost Done!</h2>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-8">Please verify your order details in the summary panel before confirming the final transaction.</p>
                <div className="pt-4 flex gap-4 justify-center">
                  <Button variant="outline" className="text-secondary border-surface-container-high" onClick={() => setStep(2)}>Back</Button>
                  <Button size="lg" className="px-12 bg-deep-navy text-white hover:bg-slate-800" onClick={() => alert("Simulation complete. Payment gateway would open here.")}>Complete Purchase</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Order Summary */}
        <div className="w-full lg:w-1/3 bg-surface-container-lowest rounded-2xl editorial-shadow p-6 md:p-8 sticky top-8">
          <h2 className="font-bebas text-2xl text-secondary mb-6 tracking-wide border-b border-surface-container-high pb-4">Order Summary</h2>
          
          <ul className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 hide-scrollbar">
            {state.items.map((item) => (
              <li key={`${item.book.id}-${item.format}`} className="flex gap-4">
                <div className="w-16 h-20 bg-surface rounded flex-shrink-0 relative overflow-hidden border border-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.book.image} alt="" className="w-full h-full object-cover" />
                  <span className="absolute top-0 right-0 bg-secondary text-white w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-bl-lg shadow-sm">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="font-bold text-sm text-secondary line-clamp-1">{item.book.title}</p>
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold mt-1">{item.format}</p>
                  <p className="font-bold text-primary mt-auto text-sm">{item.book.currency}{(item.book.price * item.quantity).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="space-y-3 pt-6 border-t border-surface-container-high mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="font-bold text-secondary">₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Shipping</span>
              <span className="font-bold text-secondary">₦{shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">VAT (7.5%)</span>
              <span className="font-bold text-secondary">₦{tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end border-t border-surface-container-high mt-6 pt-6 bg-surface-container-low -mx-8 px-8 -space-y-2 relative -mb-8 pb-8 rounded-b-2xl">
            <span className="text-sm font-bold text-on-surface">Total</span>
            <span className="text-3xl font-headline font-bold text-secondary">
              ₦{total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

      </main>
    </div>
  );
}
