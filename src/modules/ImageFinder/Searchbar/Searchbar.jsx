import { Component } from "react";
import PropTypes from "prop-types";
import { FcSearch } from 'react-icons/fc';

import css from "./searchbar.module.scss";

class Searchbar extends Component{

  state = {
    search: "",
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  }

  reset() {
    this.setState({search: "",});
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
        return (
          <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
              <button type="submit" className={css['SearchForm-button']}>
                <span className={css['SearchForm-button-label']}>Search</span>
                <span>
                  <FcSearch className={css.icon} />
                </span>
              </button>

              <input
                className={css['SearchForm-input']}
                name="search"
                value={search}
                onChange={handleChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                required
              />
            </form>
          </header>
        );
    }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}