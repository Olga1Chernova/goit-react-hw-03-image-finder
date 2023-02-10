import { Component } from "react";
import axios from 'axios'; //delete later
import { Hearts } from 'react-loader-spinner';

import image from "../../utils/img/index.jpg"; //delete later

import css from "./image-finder.module.scss";

class ImageFinder extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
    }
    
    componentDidMount() {
        this.setState({loading: true})
        axios
          .get(
            'https://pixabay.com/api/?q=cat&page=1&key=32280115-b50908f9a62d9acb0676d3a4b&image_type=photo&orientation=horizontal&per_page=12'
          )
          .then(({ data }) => {
            this.setState({ items: data.hits});
            //console.log(data.hits);
          })
            .catch(error => {
                this.setState({error: error.message});
        })
            .finally(()=> this.setState({loading:false}))
    }

    render() {
        const { items, loading, error } = this.state;
        const elements = items.map(({ id, webformatURL }) => (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              className={css['ImageGalleryItem-image']}
              src={webformatURL}
              alt="gallery img"
            />
          </li>
        ));
        return (
          <div className={css.App}>
            {loading && (
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
                )}
                {error && <p className={css.error}>Oops. Something went wrong :( </p>}
            <ul className={css.ImageGallery}>{elements}</ul>
          </div>
        );
    }
}

export default ImageFinder;