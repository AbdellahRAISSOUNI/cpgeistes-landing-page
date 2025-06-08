import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import OrganizationalChart from '@/components/OrganizationalChart';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <OrganizationalChart />
      <BottomSection />
      <Footer />
    </main>
  );
}
