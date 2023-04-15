import { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useNewsContext } from '../contexts/NewsContext';
import HeroSliderPost from './HeroSliderPost';

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { topStories } = useNewsContext();

  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={true}
        cycleNavigation={true}
        navButtonsAlwaysVisible={windowWidth > 768 ? true : false}
        fullHeightHover={false}
        indicators={false}
        swipe={true}
        animation="slide"
        duration={1000}
        interval={6000}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: 'transparent',
            borderRadius: 0,
          },
        }}
        PrevIcon={
          <IoIosArrowBack
            size={18}
            className="text-white hover:text-customRed transition-all duration-300"
          />
        }
        NextIcon={
          <IoIosArrowForward
            size={18}
            className="text-white hover:text-customRed transition-all duration-300"
          />
        }
      >
        {topStories.slice(0, 5).map((story) => {
          return <HeroSliderPost key={story.title} story={story} />;
        })}
      </Carousel>
    </>
  );
};
export default HeroSection;
