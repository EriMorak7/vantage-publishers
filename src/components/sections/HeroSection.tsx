import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-deep-navy text-white overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black font-headline italic leading-[1.1] tracking-tighter text-white">
            Books That Build Nigeria's Future
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed mx-auto md:mx-0">
            Elevating educational standards through premium curriculum-aligned textbooks and literary works crafted for the next generation of leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button size="lg" variant="primary">
              Browse Our Catalogue
            </Button>
            <Button size="lg" variant="outline">
              For Schools & Institutions
            </Button>
          </div>
        </div>
        
        {/* Image Grid / Book Stack */}
        <div className="flex-1 relative flex justify-center w-full mt-12 md:mt-0">
          <div className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[550px]">
            {/* Glowing amber backdrop */}
            <div className="absolute top-10 -right-4 md:-right-12 z-0 opacity-40 blur-3xl w-56 h-56 md:w-72 md:h-72 bg-brand-amber rounded-full"></div>
            
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {/* Left Book */}
              <div className="absolute w-40 h-56 md:w-56 md:h-80 transform -rotate-12 -translate-x-12 md:-translate-x-16 translate-y-2 md:translate-y-4 shadow-2xl rounded-r-lg overflow-hidden border-l-4 border-amber-900/20 z-10 transition-transform hover:-rotate-6 hover:-translate-y-2 duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-cover" 
                  alt="Educational book cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWYJdy9OJxLHm6v_rvVhl9WiBnpu9pIwjldo8_pD6lX5HhigGCf-TUs738dqL9ZyXiTsrBOoBBcARPXQXss-GzYmNNYh44hysepA1NPUYHFSxez1Qy6w0mycqpTKs4BvLG-tKA1KwmFnaai88L9UB1-ZnAVosm8EgX3nF68pxpfozyjtUp6h0E3tNrnSqXA2WvRRPas6tI9I8dmM8V_AYpCtPIFwTB6iQkbcL36ZKAkEcdC4gK96rLyaHvlYrVhj9E-TRfEvdQLKFP" 
                />
              </div>
              
              {/* Right Book */}
              <div className="absolute w-40 h-56 md:w-56 md:h-80 transform rotate-6 translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 shadow-2xl rounded-r-lg overflow-hidden border-l-4 border-amber-900/20 z-20 transition-transform hover:rotate-12 hover:-translate-y-2 duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-cover" 
                  alt="Professional accounting textbook" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5KTQgie23xq_hLnsjRYBFlUW_whQQrgB_ahGpBrwFyTW_381Ph_PaCdehBQwKlgMsad_xAqBG-8iG5aBu7jBxnjvE8u_dimbPNiszwZKwKRVDeJfyL6lX8HgwB7t4RZjuazaRcEJrTgyR4ieAJ34a9oOCC335XDlrLlui7nzxgsw3a9es5h8vO_rfBvedpgukTj5Of1JvOVf7HUPT4N_50Woo1wzAdomqksnARild6RRcsiPzUsOLCcaHZV4bj7wQ49jtqAaPYu2J" 
                />
              </div>
              
              {/* Center Book */}
              <div className="relative w-40 h-56 md:w-56 md:h-80 transform -rotate-3 -translate-y-6 md:-translate-y-8 shadow-2xl rounded-r-lg overflow-hidden border-l-4 border-amber-900/20 z-30 transition-transform hover:-translate-y-12 duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-cover" 
                  alt="Literary novel cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Zsj_evchnSKbLasmJ3LUA2yVxlYCjAWH1kAjL7dpT1wuyeu8o867WsWDI3fz95anJXWRd3P2td9zRquOHmtRYcOO3UlYKrYu-cD-R4jsY2HZQTEaCnvU5hQK_ZLLHrzSnfw0i9RtV5qyCbYM87mA19JeQDJhzC73Mw9s4HgGCJ-IRgq-UdFC-Bg2NuOfQcZkgcHrAcHj7rm9Iq2Tmr8k2M6koE0nv6l48mpphFKl2mFsW0J3HzVz7dzrSVWTawNgenlkAeL8nuNr" 
                />
              </div>
              
              {/* Badge */}
              <div className="absolute top-0 right-0 md:top-4 md:-right-8 z-40 bg-primary-container text-deep-navy p-3 md:p-4 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-center font-bebas text-base md:text-lg leading-tight rotate-12 shadow-xl border-4 border-deep-navy hover:scale-110 transition-transform">
                NEW RELEASE
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
