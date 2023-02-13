import { Component } from "react";


import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "shared/components/Button/Button";
import Loader from "shared/components/Loader/Loader";

import { searchImages } from "shared/services/images-api";


import css from "./image-finder.module.scss";

class ImageFinder extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        search: "",
        page: 1,
  }
  
  FindImage = ({search}) => {
    this.setState({search})
  }
    
    componentDidMount() {
        
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchImages(search)
          .then( data  => this.setState({ items: data.hits}))
          .catch(error => this.setState({ error: error.message }))
          .finally(()=>this.setState({loading:false}));
    }
  }

    render() {
        const { items, loading, error } = this.state;
      const { FindImage } = this;
        return (
          <div className={css.App}>
            <Searchbar onSubmit={FindImage} />
            <ImageGallery items={items} />
            {error && (
              <p className={css.error}>Oops. Something went wrong :( </p>
            )}
            {loading && <Loader/>}
            {Boolean(items.length) && <Button text={"Load more"} />}
          </div>
        );
    }
}

export default ImageFinder;