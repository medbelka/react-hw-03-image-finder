import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

import styles from 'components/Searchbar/Searchbar.module.css'

export default class Searchbar extends Component {
state = {
    query: '',
}

  handleInputChange = e => {
    this.setState({
      query: e.target.value,
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    const temporaryQuery = this.state.query
    this.setState({query: ''})
    this.props.onSubmit(temporaryQuery)
  }

render() {
    

    return (
        <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSearch}>
        <button type="submit" 
                className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}></span>
            <SearchIcon width='20' height='20'/>
            </button>

        <input
            className={styles.SearchFormInput}
            name="query"
            type="text"
            value={this.state.query}
            autoComplete="off"
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
        />
        </form>
        </header>
        )
    }
}