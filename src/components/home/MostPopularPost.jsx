import { Link } from 'react-router-dom';
import moment from 'moment';

const MostPopularPost = ({ news }) => {
  const { published_date, title, url } = news;

  return (
    <article>
      <div className="px-6 py-5 shadow-md shadow-[#c4c4c4] rounded-md">
        <small className="font-semibold text-customRed capitalize">
          {moment(published_date).fromNow()}
        </small>
        <Link to={url}>
          <h2 className="font-bold text-lg transition-all duration-300 hover:text-customRed">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};
export default MostPopularPost;
