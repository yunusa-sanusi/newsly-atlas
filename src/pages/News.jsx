import { Link, useParams } from 'react-router-dom';

import { useNewsContext } from '../contexts/NewsContext';
import Article from '../components/Article';
import Loader from '../components/Loader';

const News = () => {
  const { latestNews, latestNewsLoading } = useNewsContext();
  const { section } = useParams();

  const filteredNews = latestNews.filter((news) => {
    // converts the section text to the slug format for comparison
    const newsSection = news.section.toLowerCase().split(' ').join('-');

    if (section === 'all') return latestNews;

    if (section === newsSection) {
      return news;
    }
  });

  // converts the section text from slug format to normal format
  const pageTitle = section ? section.split('-').join(' ') : '';

  return (
    <main className='mx-auto py-5 mt-[60px] transition-all duration-300"'>
      <section className="w-[95%] md:w-[90%] mx-auto">
        <h1 className="text-2xl capitalize font-semibold mb-10">
          {section === 'all' ? 'All' : pageTitle} News
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-5 mt-8">
          {latestNewsLoading ? (
            <div className="col-span-3 mb-3">
              <Loader size={32} />
            </div>
          ) : (
            filteredNews.length > 0 &&
            filteredNews.map((news) => {
              return <Article key={news.title} news={news} />;
            })
          )}
        </div>
      </section>
    </main>
  );
};
export default News;
