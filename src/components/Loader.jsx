import { ClipLoader } from 'react-spinners';

const Loader = ({ size }) => {
  return (
    <div className="flex justify-center">
      <ClipLoader size={size} color="#222222" />
    </div>
  );
};
export default Loader;
