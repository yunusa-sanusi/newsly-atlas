import { Link, NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { useNewsContext } from '../../contexts/NewsContext';
import FooterCategoryItem from './FooterCategoryItem';

const Footer = () => {
  const { newsSections } = useNewsContext();

  return (
    <footer className="bg-darkGrey mt-5 py-4 relative bottom-0 left-0">
      <section className="w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row md:items-center">
        <NavLink
          to="/"
          className="logo text-6xl text-white w-full text-center md:text-left"
        >
          newsly <span className="text-customRed">atlas</span>
        </NavLink>
        <ul className="md:w-full text-center md:text-left grid md:grid-cols-3 gap-y-4 md:gap-5 mt-8">
          {newsSections.map((news, index) => {
            return <FooterCategoryItem key={index} news={news} />;
          })}
        </ul>
      </section>
      <hr className="border border-[#c4c4c4] my-4" />

      <section className="text-center flex justify-center gap-x-3">
        <Link to="https://www.github.com/yunusa-sanusi">
          <AiFillGithub className="text-white hover:text-customRed transition-all duration-300" />
        </Link>
        <Link to="https://www.linkedin.com/in/sanusi-yunusa">
          <AiFillLinkedin className="text-white hover:text-customRed transition-all duration-300" />
        </Link>
      </section>
    </footer>
  );
};
export default Footer;
