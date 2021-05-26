import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import imgApi from '../src/utils/imgFinderApi';
import Modal from './components/Modal/Modal';
import LoaderComponent from './components/Loader/Loader';
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    srcset: '',
    alt: '',
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [] });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imgApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        this.setState({ isLoading: false });
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setLargeImage = e => {
    this.setState({
      largeImg: e.currentTarget.srcset,
      alt: e.currentTarget.alt,
    });
    // console.dir(event.currentTarget);
    this.toggleModal();
  };

  render() {
    const { hits, isLoading, showModal, largeImg, alt } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />

        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImg} alt={alt} />
        )}

        <ImageGallery imgList={hits} onClickModal={this.setLargeImage} />
        {isLoading && <LoaderComponent />}
        {hits.length > 0 && <Button onClick={this.fetchHits} />}
      </div>
    );
  }
}
export default App;
