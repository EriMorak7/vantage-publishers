import { Category } from '@/types';
import Link from 'next/link';

interface CategoryTileProps {
  category: Category;
}

export default function CategoryTile({ category }: CategoryTileProps) {
  return (
    <Link href={`/shop?category=${encodeURIComponent(category.name)}`}>
      <div 
        className="aspect-square rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-all cursor-pointer shadow-lg"
        style={{ backgroundColor: category.color }}
      >
        <span className="material-symbols-outlined text-6xl text-white mb-6">
          {category.icon}
        </span>
        <span className="font-bebas text-[28px] text-white tracking-wide">
          {category.name}
        </span>
      </div>
    </Link>
  );
}
