const ImgDetails = ({ largeImageURL, tags }) => {
    return (
        <img src={largeImageURL} alt={tags} />
    )
};

export default ImgDetails;