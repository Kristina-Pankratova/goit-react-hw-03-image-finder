import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => (
  <div className="Spiner">
    <div className="Block">
      <Loader
        type="ThreeDots"
        color="#097940"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </div>
  </div>
);

export default LoaderComponent;
