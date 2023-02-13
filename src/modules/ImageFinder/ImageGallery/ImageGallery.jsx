import css from "./image-gallery.module.scss";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({items, onClick}) => {
    return (
      <ul className={css.ImageGallery}>
        {items.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    );
}

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
}