import moment from 'moment';
import { Link } from 'react-router-dom';

const LatestPost = ({ news }) => {
  const { created_date, multimedia, section, title, url } = news;

  return (
    <article className="w-full">
      <div className="w-full">
        <Link to={url}>
          <img src={multimedia[2].url} alt={title} className="w-full" />
        </Link>
      </div>
      <div>
        <div className="my-2">
          <small className="text-customRed font-semibold">{section}</small>
          <small className="mx-1">/</small>
          <small className="text-grey font-semibold">
            {moment(created_date).fromNow()}
          </small>
        </div>
        <Link to={url}>
          <h2 className="text-xl hover:text-customRed font-semibold transition-all duration-300">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};
export default LatestPost;