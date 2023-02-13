import { Hearts } from 'react-loader-spinner';

const Loader = () => {
    return (
      <Hearts
        height="180"
        width="180"
        color="rgb(236, 66, 228)"
        ariaLabel="hearts-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="hearts-wrapper"
        visible={true}
      />
    );
}

export default Loader;