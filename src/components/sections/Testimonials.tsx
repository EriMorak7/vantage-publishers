import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-20 md:py-24 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="font-bebas text-5xl md:text-6xl text-secondary">Community Voices</h2>
      </div>
      
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
