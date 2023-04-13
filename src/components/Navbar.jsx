import { useState, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import moment from 'moment';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);

  const date = moment().format('MMM DD, YYYY');

  const openMenu = () => {
    setIsMenuOpen(true);
    sliderRef.current.style.display = 'flex';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => (sliderRef.current.style.display = 'none'), 500);
    clearTimeout(() => (sliderRef.current.style.display = 'none'), 500);
  };

  const slideOutAnimation = 'right-[0px] animate-openmenu block';
  const slideInAnimation = 'right-[-307px] animate-closemenu';

  return (
    <>
      <header className="w-full fixed z-10 top-0 border-b border-b-[#c4c4c4] py-3">
        <nav className="w-[95%] md:w-[90%] mx-auto flex justify-between items-center gap-x-3 relative">
          <div className="flex items-center h-full gap-x-6 md:border-r md:border-r-[#c4c4c4] md:pr-8">
            <NavLink to="/" className="logo">
              newsly atlas
            </NavLink>
            <small className="hidden md:block text-lightGrey font-semibold mt-[1.5px]">
              {date}
            </small>
          </div>

          <div className="hidden md:block">
            <NavLink
              to="#"
              className="hover:text-customRed transition-all duration-200 text-sm font-semibold mx-2"
            >
              California
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-customRed transition-all duration-200 text-sm font-semibold mx-2"
            >
              Entertainment
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-customRed transition-all duration-200 text-sm font-semibold mx-2"
            >
              Sport
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-customRed transition-all duration-200 text-sm font-semibold mx-2"
            >
              Business
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-customRed transition-all duration-200 text-sm font-semibold mx-2"
            >
              Politics
            </NavLink>
          </div>

          <div
            className={`${
              isMenuOpen ? slideOutAnimation : slideInAnimation
            } "mobile-menu w-64 py-3 hidden flex-col absolute top-16 right-[-307px] rounded-md shadow-sm shadow-[#7b7b7b] bg-darkGrey text-white"`}
            ref={sliderRef}
          >
            <div className="absolute top-3 right-2 cursor-pointer"></div>
            <NavLink
              to="#"
              className="text-white transition-all duration-300 text-sm font-semibold mx-2 hover:bg-customRed p-3 rounded-sm"
            >
              California
            </NavLink>
            <NavLink
              to="#"
              className="text-white transition-all duration-300 text-sm font-semibold mx-2 hover:bg-customRed p-3 rounded-sm"
            >
              Entertainment
            </NavLink>
            <NavLink
              to="#"
              className="text-white transition-all duration-300 text-sm font-semibold mx-2 hover:bg-customRed p-3 rounded-sm"
            >
              Sport
            </NavLink>
            <NavLink
              to="#"
              className="text-white transition-all duration-300 text-sm font-semibold mx-2 hover:bg-customRed p-3 rounded-sm"
            >
              Business
            </NavLink>
            <NavLink
              to="#"
              className="text-white transition-all duration-300 text-sm font-semibold mx-2 hover:bg-customRed p-3 rounded-sm"
            >
              Politics
            </NavLink>
          </div>

          <div className="flex gap-x-5 items-center md:hidden">
            <div>
              {isMenuOpen ? (
                <MdClose
                  size={20}
                  onClick={closeMenu}
                  className="cursor-pointer transition-all duration-300"
                />
              ) : (
                <BiMenuAltRight
                  size={20}
                  className="cursor-pointer transition-all duration-300"
                  onClick={openMenu}
                />
              )}
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Navbar;
