import { useState, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import moment from 'moment';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import { useNewsContext } from '../contexts/NewsContext';
import Loader from './Loader';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);
  const { latestNewsLoading, mostPopularNewsLoading, newsSections } =
    useNewsContext();

  const date = moment().format('dddd, MMMM DD, YYYY');

  const slideOutAnimation = 'right-[0px] animate-openmenu block';
  const slideInAnimation = 'right-[-307px] animate-closemenu';

  const openMenu = () => {
    setIsMenuOpen(true);
    sliderRef.current.style.display = 'flex';
    sliderRef.current.style.width = '288px';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => (sliderRef.current.style.display = 'none'), 500);
    clearTimeout(() => (sliderRef.current.style.display = 'none'), 500);
  };

  return (
    <>
      <header className="w-full fixed z-10 top-0 border-b border-b-[#c4c4c4] py-3">
        <nav className="w-[95%] md:w-[90%] mx-auto flex justify-between items-center gap-x-3">
          <div className="hidden md:block">
            <p className="text-darkGrey font-semibold text-sm">{date}</p>
          </div>

          <NavLink to="/" className="logo text-3xl">
            newsly <span className="text-customRed">atlas</span>
          </NavLink>

          <div
            className={`${
              isMenuOpen ? slideOutAnimation : slideInAnimation
            } "w-96 h-auto hidden fixed top-0 right-[-307px] shadow-sm shadow-[#7b7b7b] bg-white text-white "`}
            ref={sliderRef}
            onMouseLeave={closeMenu}
          >
            <div className="absolute top-3 right-5 cursor-pointer">
              <MdClose
                size={20}
                onClick={closeMenu}
                className="cursor-pointer transition-all duration-300 text-darkGrey"
              />
            </div>
            <ul className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll flex flex-col">
              {latestNewsLoading && mostPopularNewsLoading ? (
                <Loader size={18} />
              ) : (
                newsSections.map((news, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={`sections/${news.toLowerCase().split(' ').join('-')}`}
                      className={`${
                        index === newsSections.length - 1
                          ? 'border-b-0'
                          : 'border-b border-b-[#c4c4c4]'
                      } transition-all duration-300 text-sm font-semibold hover:text-customRed py-4 w-full text-darkGrey`}
                    >
                      <span className="pl-3">{news}</span>
                    </NavLink>
                  );
                })
              )}
            </ul>
          </div>

          <div className="flex gap-x-5 items-center">
            <div>
              <BiMenuAltRight
                size={20}
                className="cursor-pointer transition-all duration-300"
                onClick={openMenu}
              />
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Navbar;
