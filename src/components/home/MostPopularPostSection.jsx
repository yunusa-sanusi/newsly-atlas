import { useNewsContext } from '../../contexts/NewsContext';
import MostPopularPost from './MostPopularPost';
import SectionTitle from './SectionTitle';
import Loader from '../Loader';

const MostPopularPostSection = () => {
  const { mostPopularNews, mostPopularNewsLoading } = useNewsContext();

  return (
    <section className="w-[95%] md:w-[90%] mx-auto">
      <SectionTitle text="most popular" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5 mt-8">
        {mostPopularNewsLoading ? (
          <div className="col-span-3 mb-3">
            <Loader size={32} />
          </div>
        ) : (
          mostPopularNews.slice(0, 6).map((news) => {
            return <MostPopularPost key={news.title} news={news} />;
          })
        )}
      </div>
    </section>
  );
};
export default MostPopularPostSection;
