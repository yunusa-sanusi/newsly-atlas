import { Link } from 'react-router-dom';

import { useNewsContext } from '../../contexts/NewsContext';
import SectionTitle from './SectionTitle';
import LatestPost from './LatestPost';

const LatestPostSection = () => {
  const { latestNews } = useNewsContext();
  console.log(latestNews[0]);

  return (
    <section className="w-[95%] md:w-[90%] mx-auto mt-8">
      <SectionTitle text="latest posts" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-5 mt-8">
        {latestNews.slice(0, 6).map((news) => {
          return <LatestPost key={news.slug} news={news} />;
        })}
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
