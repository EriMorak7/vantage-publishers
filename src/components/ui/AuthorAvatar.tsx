import { Author } from '@/types';
import Link from 'next/link';

interface AuthorAvatarProps {
  author: Author;
}

export default function AuthorAvatar({ author }: AuthorAvatarProps) {
  return (
    <div className="text-center group cursor-pointer w-full max-w-[128px]">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-surface-container-low group-hover:border-primary-container transition-all mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          className="w-full h-full object-cover" 
          src={author.avatar} 
          alt={author.name} 
        />
      </div>
      <p className="font-bebas text-xl text-secondary">{author.name}</p>
      <Link 
        href={`/shop?author=${encodeURIComponent(author.name)}`}
        className="text-xs text-primary font-bold uppercase tracking-widest mt-1 block group-hover:underline"
      >
        View Books
      </Link>
    </div>
  );
}
