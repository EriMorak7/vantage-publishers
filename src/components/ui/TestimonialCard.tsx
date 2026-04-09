import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-10 rounded-2xl editorial-shadow relative border-l-4 border-[#F5A623] h-full flex flex-col">
      <div className="text-primary-container flex gap-1 mb-6">
        {Array.from({ length: 5 }, (_, i) => (
          <span 
            key={i} 
            className="material-symbols-outlined" 
            style={{ fontVariationSettings: i < testimonial.rating ? "'FILL' 1" : "'FILL' 0" }}
          >
            star
          </span>
        ))}
      </div>
      
      <p className="text-on-surface-variant italic mb-8 leading-relaxed flex-grow">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          className="w-12 h-12 rounded-full object-cover" 
          src={testimonial.avatar} 
          alt={testimonial.name} 
        />
        <div className="text-left">
          <p className="font-bold text-sm">{testimonial.name}</p>
          <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
            {testimonial.role}, {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  );
}
