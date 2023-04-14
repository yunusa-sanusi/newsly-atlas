import { createContext, useContext, useState } from 'react';

import { useFetch } from '../hooks/useFetch';

const NewsContext = createContext({});

const mostPopularApiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${
  import.meta.env.VITE_NYT_API_KEY
}`;
const topStoriesApiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${
  import.meta.env.VITE_NYT_API_KEY
}`;
const latestNewsApiUrl = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${
  import.meta.env.VITE_NYT_API_KEY
}`;

export const NewsProvider = ({ children }) => {
  const [newsSections, setNewsSections] = useState([]);
  const { loading: mostPopularNewsLoading, data: mostPopularNews } =
    useFetch(mostPopularApiUrl);
  const { loading: topStoriesLoading, data: topStories } =
    useFetch(topStoriesApiUrl);
  const { loading: latestNewsLoading, data: latestNews } =
    useFetch(latestNewsApiUrl);

  const getNewsSections = () => {
    const latestNewSections = [
      ...new Set(latestNews.map((news) => news.section)),
    ];
    const mostPopularNewsSections = [
      ...new Set(mostPopularNews.map((news) => news.section)),
    ];
    const combinedSections = [...latestNewSections, ...mostPopularNewsSections];

    setNewsSections([...new Set(combinedSections)].sort());
  };

  return (
    <NewsContext.Provider
      value={{
        mostPopularNews,
        topStories,
        latestNews,
        newsSections,
        mostPopularNewsLoading,
        topStoriesLoading,
        latestNewsLoading,
        getNewsSections,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);
