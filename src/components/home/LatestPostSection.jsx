import { Link } from 'react-router-dom';

import { useNewsContext } from '../../contexts/NewsContext';
import SectionTitle from './SectionTitle';
import LatestPost from './LatestPost';
import Loader from '../Loader';

const LatestPostSection = () => {
  const { latestNews, latestNewsLoading } = useNewsContext();

  return (
    <section className="w-[95%] md:w-[90%] mx-auto mt-8">
      <SectionTitle text="latest posts" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-5 mt-8">
        {latestNewsLoading ? (
          <div className="col-span-3 mb-3">
            <Loader size={32} />
          </div>
        ) : (
          latestNews.slice(0, 6).map((news) => {
            return <LatestPost key={news.title} news={news} />;
          })
        )}
      </div>

      <div className="w-fit my-7 px-4 py-2 bg-customRed hover:bg-darkGrey text-white transition-all duration-300 rounded-lg mx-auto">
        <Link to="news/all" className="font-semibold text-sm capitalize">
          read more...
        </Link>
      </div>
    </section>
  );
};
export default LatestPostSection;
