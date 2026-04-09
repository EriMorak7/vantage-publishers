import AuthorAvatar from '../ui/AuthorAvatar';
import { authors } from '@/data/authors';

export default function AuthorsStrip() {
  return (
    <section className="bg-surface py-20 md:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-5xl text-secondary mb-12 md:mb-16 text-center md:text-left">
          Distinguished Authors
        </h2>
        
        {/* Grid for mobile, Flex wrapper for desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between gap-8 md:gap-12">
          {authors.map((author) => (
            <AuthorAvatar key={author.id} author={author} />
          ))}
        </div>
      </div>
    </section>
  );
}
