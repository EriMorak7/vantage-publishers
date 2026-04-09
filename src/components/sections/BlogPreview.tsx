import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      id: "1",
      category: "PEDAGOGY",
      title: "The Future of STEM Education in West Africa",
      date: "Oct 12, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY6I7uzd3B2pRqM4lraIc7RbJu4P1lIcMPUWmZycK8AO9_esFTLRWKTF-5zp_HpEyIw46E8d9avaFpCUX1Sp2NafIt_MIKpOjwZUm76EipfeJDIv3DqyoIGIw_tOpp6qzUEyWbr7GoWMB1QZf6ifx5kDwlqsy64TnH_pp_XdqCklgLDUa_irXg085laqkkJOuay246jy_0CIbK_M982zuE0ZYo4jjlo1npw1moui1ZR7YxRajVkCmNKFW2LNDFthmlgW3GSt0ywJlu",
    },
    // Adding placeholder duplicates to fill the 3-column grid as shown in design concept
    {
      id: "2",
      category: "LITERARY REVIEW",
      title: "Why Oral Traditions Still Matter in Modern Literature",
      date: "Sep 28, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY6I7uzd3B2pRqM4lraIc7RbJu4P1lIcMPUWmZycK8AO9_esFTLRWKTF-5zp_HpEyIw46E8d9avaFpCUX1Sp2NafIt_MIKpOjwZUm76EipfeJDIv3DqyoIGIw_tOpp6qzUEyWbr7GoWMB1QZf6ifx5kDwlqsy64TnH_pp_XdqCklgLDUa_irXg085laqkkJOuay246jy_0CIbK_M982zuE0ZYo4jjlo1npw1moui1ZR7YxRajVkCmNKFW2LNDFthmlgW3GSt0ywJlu",
    },
    {
      id: "3",
      category: "PUBLISHING NEWS",
      title: "Vantage Academic Press Announces New Curriculum Alignment",
      date: "Sep 15, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY6I7uzd3B2pRqM4lraIc7RbJu4P1lIcMPUWmZycK8AO9_esFTLRWKTF-5zp_HpEyIw46E8d9avaFpCUX1Sp2NafIt_MIKpOjwZUm76EipfeJDIv3DqyoIGIw_tOpp6qzUEyWbr7GoWMB1QZf6ifx5kDwlqsy64TnH_pp_XdqCklgLDUa_irXg085laqkkJOuay246jy_0CIbK_M982zuE0ZYo4jjlo1npw1moui1ZR7YxRajVkCmNKFW2LNDFthmlgW3GSt0ywJlu",
    }
  ];

  return (
    <section className="bg-surface-container-low py-20 md:py-24 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-bebas text-5xl md:text-6xl text-secondary mb-12 md:mb-16 text-center md:text-left">
          The Vantage Journal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <Link href={`#`}>
                <div className="aspect-video rounded-xl overflow-hidden mb-6 editorial-shadow relative bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Blog post cover" 
                    src={post.image} 
                  />
                </div>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                  {post.category}
                </p>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm">
                  {post.date}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
