import PropTypes from 'prop-types';

const ImgDetails = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} />;
};

export default ImgDetails;

ImgDetails.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}