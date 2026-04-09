import Button from '../ui/Button';

export default function BulkOrderCTA() {
  return (
    <section className="bg-brand-amber relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-8 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full h-32 bg-surface transform -skew-y-[4deg] -translate-y-16"></div>
      
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-deep-navy text-center lg:text-left">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Are You a School or Institution?
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 opacity-90 max-w-lg mx-auto lg:mx-0">
            Get exclusive pricing, desk copies for teachers, and customized fulfillment solutions for your entire academic year.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-amber object-cover" 
                alt="Principal" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6O3sxEAQXpQPC0ShAd8mrdnHsqIfsuoqB9vajfhOZfcO7ivkxNE8IwYtcJRA3oyJMKBC5y7E0T-do8lHcJRkzl3B8ZM0r8OIygnnG5Sc4zCj2935dbEghsLhTlzQHvO0xuXTpX0P1TAVRr7fdsNS8ixbk8HFEsack80ubFQUE7-tfBG631_OZ6BHO48eo2XAUDoeT-1RcJJ-wOKBZQyw5JUERRnpfuO3yhhGUTnHaACCd6aowu7B7d9XHc3cij-NyJsys8Qx9qT8" 
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-amber object-cover z-10" 
                alt="Educator" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwqF0xRg0jKwkEK9EwIytnaSC3woSQH05HQk_0xwYd26AxTQQGXl6z1tmnJlA_Y2HMgQ5JiMHkjxKxNVypkjsUcUJZTsnJvuzeYHn5fC5o1S0n30MiOuhS6uEsg8mMAdHBWgODUPu1aasEaRF9MlkJPnAhTNjSxCZ4-SRcz29w59-ydgSXPngP73YPe5M550hOIWlmk7_-6QqYULFqTp9Xuxk76l0xD-Lut3KvMTYmuGqTchzPfLwhAf8P5h1ClvrIc56yoVDhiKRG" 
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-amber object-cover z-20" 
                alt="Teacher" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtaDHHcyz0JYGaeYEZYgeF7Ey3F3YLv0C8b9A70EfsOUXF2MEoVifuKGi5zoXjwdl16vVoiqiQJ6ll3ZEiWTUNb1Sz9sfu0rwyxR_HVfSC4noJqhO2KQeG2RiJWfTC7ow_kTzxh4BB-4rvv1fqfjhLzKI-LmBzIZ7waLPc81oe6IWCTpRSRrQuj7kT-R2jC7znWnqeDpBdDSJv-UUIoWjR4vFaLQuAnUcl7eUbUVr2yenlJ_59VEK5jKiB_T7Md7xy8Y6d5gkO7qc4" 
              />
            </div>
            <p className="text-sm font-bold">Trusted by 2,000+ Educators Nationwide</p>
          </div>
        </div>
        
        {/* Form Container */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white p-8 md:p-10 rounded-2xl editorial-shadow">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                  <input id="name" className="w-full bg-surface-container-highest border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container focus:outline-none" type="text" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="school" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">School Name</label>
                  <input id="school" className="w-full bg-surface-container-highest border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container focus:outline-none" type="text" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                <input id="email" className="w-full bg-surface-container-highest border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container focus:outline-none" type="email" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                <textarea id="message" className="w-full bg-surface-container-highest border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container focus:outline-none" rows={3}></textarea>
              </div>
              
              <Button type="button" fullWidth className="bg-deep-navy text-white hover:bg-deep-navy/90 font-bebas text-2xl tracking-widest py-4">
                Request Wholesale Quote
              </Button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}
