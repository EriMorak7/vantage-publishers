import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-container-low py-20 px-4 md:py-28 relative overflow-hidden">
        {/* Background typographic watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full text-center overflow-hidden">
          <span className="font-headline text-[250px] font-black italic text-deep-navy whitespace-nowrap">AUTHORSHIP</span>
        </div>
        
        <div className="max-w-screen-md mx-auto text-center relative z-10">
          <h1 className="font-bebas text-6xl md:text-8xl text-secondary mb-6 tracking-wide drop-shadow-sm">Vantage Editorial</h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-headline italic tracking-tight leading-relaxed mb-10">
            "We do not merely publish books; we cultivate the intellectual architecture of generations."
          </p>
        </div>
      </section>

      {/* Manuscript Submission Details */}
      <section className="py-24 px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-headline text-4xl font-bold text-secondary">Submit Your Manuscript</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              We are currently accepting unsolicited manuscripts for educational textbooks, academic resources, and exceptional West African literature.
            </p>
            
            <div className="bg-surface-container-lowest p-8 border-l-4 border-primary rounded-r-xl shadow-md">
              <h3 className="font-bebas text-2xl text-secondary mb-4">Submission Guidelines</h3>
              <ul className="space-y-4">
                {[
                  'Ensure your work aligns with NERDC curriculum standards (for academic texts).',
                  'Submit the first three chapters alongside a comprehensive synopsis.',
                  'Doc, Docx, or PDF formats only.',
                  'Include a detailed author biography and credentials.'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl editorial-shadow">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name *</label>
                  <input type="text" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email *</label>
                  <input type="email" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" required />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Working Title *</label>
                  <input type="text" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" required />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Category *</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none text-on-surface-variant" required>
                    <option>Select Category</option>
                    <option>Primary Education Textbook</option>
                    <option>Secondary Education Textbook</option>
                    <option>Tertiary / Academic Reference</option>
                    <option>Fiction / Literature</option>
                  </select>
                </div>
                <div className="space-y-1 md:col-span-2 border-2 border-dashed border-outline-variant p-8 rounded-xl text-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary mb-2 transition-colors">upload_file</span>
                  <p className="font-bold text-secondary">Upload Manuscript (.pdf, .doc)</p>
                  <p className="text-xs text-on-surface-variant mt-1">Maximum file size 10MB</p>
                  <input type="file" className="hidden" />
                </div>
              </div>
              <Button fullWidth size="lg" className="bg-primary text-white font-bebas text-2xl tracking-widest mt-4">Submit to Editorial Board</Button>
            </form>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
