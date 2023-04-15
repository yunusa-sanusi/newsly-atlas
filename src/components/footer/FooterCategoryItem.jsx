import { NavLink } from 'react-router-dom';

const FooterCategoryItem = ({ news }) => {
  return (
    <NavLink
      to={`news/${news.toLowerCase().split(' ').join('-')}`}
      className={
        'transition-all duration-300 text-sm font-semibold hover:text-customRed py-4 w-full text-white'
      }
    >
      <span className="pl-3">{news}</span>
    </NavLink>
  );
};
export default FooterCategoryItem;
