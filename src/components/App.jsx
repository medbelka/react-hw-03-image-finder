import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

class App extends Component {
  state = {
    currentQuery: '',
    page: 1,
    status: 'idle',
    items: [],
    error: null,
  }

  handleSubmit = (query) => {
    this.setState({status: 'pending'})
    fetch(`https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=31724230-253e766dd89bfc3ec07cd5393&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      if (response.ok) {
                    return response.json();
                  }
                return Promise.reject(
                    new Error(`There is no images with ${query}`),
                    )
                })
                .then(res => {
                  const parsedItems = res.hits.map(item => {
                    return {id: item.id,
                      webformatURL: item.webformatURL, 
                      largeImageURL: item.largeImageURL,
                      tags: item.tags,
                    }
                  } )
                  this.setState({ items: parsedItems, status: 'resolved' })
                  // this.setState(prevState => ({
                  //   items: [...prevState.items, parsedItems ]
                  // })) })
                  })
                  .catch(error => this.setState ({ error, status: 'rejected' }))
                  }
    
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }


  render() {

    const { items, error, status } = this.state

    if (status === 'idle') {
      return <Searchbar onSubmit={this.handleSubmit} />
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.handleSubmit} />
          <Loader onClick={this.loadMore}/>
         </>)
         }

    if (status === 'rejected') {
        return <div>{error.message}</div>
    }

    if (status === 'resolved') {
        return <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={items}/>
        <Button onClick={this.loadMore}/>
        </>
    }
  return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={items}/>
      </>
      );
    };
}

export default App;


// URL-строка HTTP-запроса
// https://pixabay.com/api/?q=cat&page=1&key=31724230-253e766dd89bfc3ec07cd5393&image_type=photo&orientation=horizontal&per_page=12

// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна