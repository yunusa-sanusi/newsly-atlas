import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNewsContext } from './contexts/NewsContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';

function App() {
  const { getNewsSections, latestNews, mostPopularNews } = useNewsContext();

  useEffect(() => {
    getNewsSections();
  }, [latestNews, mostPopularNews]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="news/:section" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
