import CategoryTile from '../ui/CategoryTile';
import { categories } from '@/data/categories';

export default function CategoryGrid() {
  return (
    <section className="bg-surface py-20 md:py-24 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-5xl text-secondary mb-10 md:mb-12 tracking-wider text-center md:text-left">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
