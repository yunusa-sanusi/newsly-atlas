import HeroSection from '../components/home/HeroSection';
import MostPopularPostSection from '../components/home/MostPopularPostSection';
import LatestPostSection from '../components/home/LatestPostSection';

const Home = () => {
  return (
    <main className="mx-auto mt-[60px] transition-all duration-300">
      <HeroSection />
      <MostPopularPostSection />
      <LatestPostSection />
    </main>
  );
};
export default Home;
