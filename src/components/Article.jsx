import moment from 'moment';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/default-image.jpg';

const Article = ({ news }) => {
  const { abstract, created_date, multimedia, section, title, url } = news;

  const imageUrl = multimedia === null ? defaultImage : multimedia[2].url;

  return (
    <article className="w-full">
      <div className="w-full">
        <Link to={url}>
          <img src={imageUrl} alt={title} className="w-full" />
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
        <p className="text-sm text-justify">{abstract}</p>
      </div>
    </article>
  );
};
export default Article;
