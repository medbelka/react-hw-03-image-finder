import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ReactComponent as SearchIcon } from '../icons/search.svg';

class App extends Component {

  render() {

  return (
      <>
        <Searchbar onSubmit>
          <SearchIcon width='20' height='20'/>
        </Searchbar>
        <ImageGallery/>
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