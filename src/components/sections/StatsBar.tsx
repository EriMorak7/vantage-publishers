export default function StatsBar() {
  const stats = [
    { value: "2,000+", label: "Schools Served" },
    { value: "500+", label: "Active Titles" },
    { value: "1M+", label: "Books Distributed" },
    { value: "30+", label: "Years Excellence" },
  ];

  return (
    <section className="bg-deep-navy py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="font-headline text-4xl md:text-[56px] font-bold italic text-brand-amber">
              {stat.value}
            </p>
            <p className="text-white text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
