import { useNewsContext } from '../contexts/NewsContext';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main className="mx-auto mt-[60px] transition-all duration-300">
      <HeroSection />
    </main>
  );
};
export default Home;
