import { useNewsContext } from '../../contexts/NewsContext';
import MostPopularPost from './MostPopularPost';
import SectionTitle from './SectionTitle';

const MostPopularPostSection = () => {
  const { mostPopularNews } = useNewsContext();

  return (
    <section className="w-[95%] md:w-[90%] mx-auto">
      <SectionTitle text="most popular" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5 mt-8">
        {mostPopularNews.slice(0, 6).map((news) => {
          return <MostPopularPost key={news.title} news={news} />;
        })}
      </div>
    </section>
  );
};
export default MostPopularPostSection;
