import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function SchoolsPortal() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-deep-navy text-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 italic max-w-3xl leading-tight">
            Curriculum Partnerships for Academic Excellence
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Join over 2,000 institutions across West Africa driving educational outcomes with Vantage Publishers' comprehensive textbook solutions.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="primary" className="font-bebas text-2xl tracking-widest px-10">Request a Quote</Button>
            <Button size="lg" variant="outline" className="border-white text-white">View Curriculum Map</Button>
          </div>
        </div>
      </section>

      {/* Privileges Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-screen-xl mx-auto">
        <h2 className="font-bebas text-4xl text-secondary text-center mb-16 tracking-wide">Institutional Privileges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'payments', title: 'Wholesale Pricing', desc: 'Unlock tiered discounts of up to 40% on bulk volume orders for entire student cohorts.' },
            { icon: 'import_contacts', title: 'Teacher Desk Copies', desc: 'Complementary annotated teaching editions provided alongside class cohort purchases at no extra cost.' },
            { icon: 'local_shipping', title: 'Priority Fulfillment', desc: 'Secure guaranteed inventory allocation and priority multi-campus delivery operations.' },
            { icon: 'app_registration', title: 'Custom Digital Portal', desc: 'A dedicated microsite for your parents to purchase assigned booklists directly.' },
            { icon: 'co_present', title: 'Educator Training', desc: 'Free access to our annual pedagogical workshops for curriculum implementation.' },
            { icon: 'verified', title: 'NERDC Compliant', desc: 'Immediate curriculum updates ensuring complete compliance with federal and state examining bodies.' },
          ].map((privilege, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl editorial-shadow hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{privilege.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-secondary mb-3">{privilege.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">{privilege.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Quote Form (Similar to BulkOrderCTA but full page) */}
      <section className="bg-surface-container-low py-20 px-4 sm:px-8 border-y border-surface-container-high">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-3xl editorial-shadow relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-bl-full opacity-10 pointer-events-none"></div>
          
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl text-secondary mb-4 tracking-wide">Initialize Your Partnership</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto">Fill out the details below. Our institutional liaison will respond within 24 business hours with a specialized proposal.</p>
          </div>
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Institution Name</label>
                <input type="text" className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Contact Person</label>
                <input type="text" className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Official Email</label>
                <input type="email" className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Phone Number</label>
                <input type="tel" className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Estimated Student Population</label>
                <select className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors">
                  <option>Under 500</option>
                  <option>500 - 1,500</option>
                  <option>1,501 - 3,000</option>
                  <option>Over 3,000</option>
                </select>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message / Required Texts List (Optional)</label>
                <textarea rows={4} className="w-full bg-surface-container border border-surface-container-high rounded-xl p-4 focus:border-primary outline-none transition-colors"></textarea>
              </div>
            </div>
            
            <div className="pt-4 flex justify-center">
              <Button size="lg" className="w-full md:w-auto px-16 font-bebas text-2xl tracking-widest shadow-lg shadow-brand-amber/40">Submit Request</Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
