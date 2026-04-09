import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AudienceSelector from '@/components/sections/AudienceSelector';
import FeaturedBooks from '@/components/sections/FeaturedBooks';
import CategoryGrid from '@/components/sections/CategoryGrid';
import StatsBar from '@/components/sections/StatsBar';
import BulkOrderCTA from '@/components/sections/BulkOrderCTA';
import Testimonials from '@/components/sections/Testimonials';
import AuthorsStrip from '@/components/sections/AuthorsStrip';
import BlogPreview from '@/components/sections/BlogPreview';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AudienceSelector />
        <FeaturedBooks />
        <CategoryGrid />
        <StatsBar />
        <BulkOrderCTA />
        <Testimonials />
        <AuthorsStrip />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
