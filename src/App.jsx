import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNewsContext } from './contexts/NewsContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const { newsSections, getNewsSections, latestNews, mostPopularNews } =
    useNewsContext();

  useEffect(() => {
    getNewsSections();
  }, [latestNews, mostPopularNews]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
