import Link from 'next/link';

export default function AudienceSelector() {
  const cards = [
    {
      title: "I'm a Student or Parent",
      icon: "school",
      desc: "Find secondary and primary school curriculum essentials and supplementary reading.",
      href: "/shop"
    },
    {
      title: "I'm a School or Institution",
      icon: "apartment",
      desc: "Bulk ordering, customized educational portals, and teacher training resources.",
      href: "/schools"
    },
    {
      title: "I'm an Author",
      icon: "edit_note",
      desc: "Join Nigeria's leading editorial team. Pitch your manuscript and grow with Vantage.",
      href: "/editorial"
    }
  ];

  return (
    <section className="bg-surface py-20 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx}
            className="group bg-surface-container-lowest border-2 border-secondary/10 p-8 lg:p-10 rounded-2xl hover:border-primary-container transition-all duration-300 editorial-shadow flex flex-col h-full"
          >
            <span className="material-symbols-outlined text-4xl lg:text-5xl text-primary mb-6 block">
              {card.icon}
            </span>
            <h3 className="font-bebas text-3xl lg:text-4xl text-secondary mb-4 tracking-wide">
              {card.title}
            </h3>
            <p className="text-on-surface-variant mb-8 font-light flex-grow">
              {card.desc}
            </p>
            <Link 
              href={card.href}
              className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit mt-auto"
            >
              Get Started <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
