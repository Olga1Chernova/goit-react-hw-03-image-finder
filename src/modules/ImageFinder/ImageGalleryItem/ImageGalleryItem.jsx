import css from "./image-gallery-item.module.scss";

const ImageGalleryItem = ({id, webformatURL, largeImageURL, onClick, tags}) => {
    return (
      <li
        key={id}
        className={css.ImageGalleryItem}
        onClick={() => onClick(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={css['ImageGalleryItem-image']}
        />
      </li>
    );
}

export default ImageGalleryItem;