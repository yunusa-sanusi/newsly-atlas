import { Link } from 'react-router-dom';

const HeroSliderPost = ({ story }) => {
  const { byline, multimedia, title, url } = story;

  const heroBackgroundStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${multimedia[0].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <article
      className="w-full h-[80vh] flex flex-col justify-center items-start  mb-6 text-white"
      style={heroBackgroundStyles}
    >
      <div className="w-[80%] md:w-[70%] ml-[5%]">
        <span className="px-2 py-1 text-[10px] uppercase bg-customRed text-white font-semibold rounded-sm">
          top stories
        </span>
        <Link to={url}>
          <h1 className="text-2xl md:text-4xl font-bold my-3 transition-all duration-300 hover:text-customRed">
            {title}
          </h1>
          <small className="text-sm font-semibold text-white">{byline}</small>
        </Link>
      </div>
    </article>
  );
};
export default HeroSliderPost;
