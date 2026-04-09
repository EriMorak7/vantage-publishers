'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const navItems = [
    { name: 'Overview', icon: 'dashboard' },
    { name: 'Orders', icon: 'receipt_long' },
    { name: 'Inventory', icon: 'inventory_2' },
    { name: 'Schools Portal', icon: 'account_balance' },
    { name: 'Submissions', icon: 'edit_document' },
    { name: 'Settings', icon: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col md:flex-row font-body">
      {/* Sidebar Admin Nav */}
      <aside className="w-full md:w-64 bg-deep-navy text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10 mb-6">
          <Link href="/" className="font-headline text-xl font-bold text-white block hover:text-brand-amber transition-colors">
            Vantage Admin
          </Link>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Dashboard v1.0</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map(item => (
            <button 
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                activeTab === item.name 
                  ? 'bg-brand-amber text-deep-navy font-bold shadow-md' 
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-sm shadow-inner shadow-white/20">
              AD
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Admin Portal</p>
              <button className="text-xs text-error hover:underline uppercase tracking-wider font-bold mt-1">Sign Out</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Dashboard */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-bebas text-4xl text-secondary tracking-wide">
              {activeTab}
            </h1>
            <p className="text-on-surface-variant text-sm mt-1">Welcome back. Here is what's happening today.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="bg-white border border-surface-container-high rounded-full p-2 text-on-surface-variant hover:text-primary editorial-shadow shadow-sm transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full block border border-white"></span>
            </button>
            <button className="bg-primary text-white font-bold text-sm px-5 rounded-full hover:bg-amber-600 transition-colors shadow-sm inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span> New Product
            </button>
          </div>
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Revenue", value: "₦1,245,600", trend: "+14.5%", icon: "payments", color: "text-green-600", bg: "bg-green-100" },
                { title: "Active Orders", value: "32", trend: "+2", icon: "local_shipping", color: "text-blue-600", bg: "bg-blue-100" },
                { title: "Wholesale Requests", value: "7", trend: "-1", icon: "domain", color: "text-purple-600", bg: "bg-purple-100" },
                { title: "Low Stock Items", value: "14", trend: "Needs review", icon: "warning", color: "text-red-600", bg: "bg-red-100" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl editorial-shadow border border-surface-container">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <span className={`material-symbols-outlined ${stat.color} block text-xl`}>{stat.icon}</span>
                    </div>
                    <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-600' : stat.trend.startsWith('-') ? 'text-red-600' : 'text-on-surface-variant bg-surface-container py-1 px-2 rounded'}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.title}</h3>
                  <p className="font-bebas text-3xl tracking-wide text-secondary">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Orders Table */}
              <div className="lg:col-span-2 bg-white rounded-2xl editorial-shadow border border-surface-container overflow-hidden">
                <div className="p-6 border-b border-surface-container-high flex justify-between items-center bg-surface-container-lowest">
                  <h2 className="font-bold text-secondary">Recent Orders</h2>
                  <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-surface-container-high">
                        <th className="px-6 py-4">Order ID</th>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { id: "#VP-2941", customer: "Stella Maris Academy", date: "Today, 14:20", status: "Processing", amount: "₦450,000", isSchool: true },
                        { id: "#VP-2940", customer: "Grace O.", date: "Today, 11:05", status: "Delivered", amount: "₦8,500", isSchool: false },
                        { id: "#VP-2939", customer: "Ibadan Int'l", date: "Yesterday", status: "Processing", amount: "₦825,000", isSchool: true },
                        { id: "#VP-2938", customer: "Chidi N.", date: "Yesterday", status: "Shipped", amount: "₦4,500", isSchool: false },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-surface-container-low hover:bg-surface-container-lowest transition-colors">
                          <td className="px-6 py-4 font-bold text-secondary">{row.id}</td>
                          <td className="px-6 py-4 flex items-center gap-2">
                            {row.isSchool && <span className="material-symbols-outlined text-[14px] text-tertiary">domain</span>}
                            <span className="font-medium text-slate-800">{row.customer}</span>
                          </td>
                          <td className="px-6 py-4 text-on-surface-variant">{row.date}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                              row.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                              row.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-bold text-secondary">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bestsellers Panel */}
              <div className="bg-white rounded-2xl editorial-shadow border border-surface-container p-6">
                <h2 className="font-bold text-secondary mb-6 border-b border-surface-container-high pb-4">Top Bestsellers (This Week)</h2>
                <div className="space-y-4">
                  {[
                    { title: "Teaching Pedagogy 2024", sales: 124 },
                    { title: "Essential Biology Vol. 2", sales: 98 },
                    { title: "African Voices Anthology", sales: 85 },
                    { title: "New Primary English", sales: 72 },
                  ].map((book, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold text-secondary group-hover:bg-primary-container group-hover:text-deep-navy transition-colors">
                          #{idx + 1}
                        </div>
                        <p className="font-medium text-sm text-slate-800 group-hover:text-primary transition-colors truncate max-w-[150px]">{book.title}</p>
                      </div>
                      <span className="text-xs font-bold text-on-surface-variant bg-surface px-2 py-1 rounded">{book.sales} sold</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 rounded-lg border border-surface-container-high text-sm font-bold text-secondary hover:bg-surface transition-colors uppercase tracking-widest text-xs">
                  Full Inventory Report
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'Overview' && (
          <div className="bg-white rounded-2xl editorial-shadow border border-surface-container p-12 text-center animate-in fade-in duration-500">
            <span className="material-symbols-outlined text-6xl text-surface-container-high mb-4 block">construction</span>
            <h2 className="font-headline text-2xl font-bold text-secondary mb-2">{activeTab} Module</h2>
            <p className="text-on-surface-variant">This administrative module is scheduled for implementation in Phase 2 backend orchestration.</p>
          </div>
        )}
      </main>
    </div>
  );
}
