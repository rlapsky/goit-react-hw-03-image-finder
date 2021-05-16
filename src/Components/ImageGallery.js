import axios from "axios";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import ImageGalleryList from "./imageGalleryList/ImageGalleryList";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";
const KEY = "21148733-fe4ceb41e783008baa1bd0520";
class ImageGallery extends Component {
  state = {
    images: [],
    largeImageURL: "",
    page: 1,
    query: "",
    shoModal: false,
    loader: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query && this.state.query !== "") {
      this.axiosImage();
    } else if (
      this.state.query === prevState.query &&
      this.state.page !== prevState.page
    ) {
      this.axiosImage();
    }
  }
  axiosImage = async () => {
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
    } finally {
      this.setState((prevState) => ({
        loader: false,
      }));
      if (this.state.page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };
  onFormSubmit = (query) => {
    this.setState({ query: "", page: 1, images: [] });
    this.setState({ query: query, page: 1, images: [] });
  };
  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  largeImgHendler = (e) => {
    const largeImage = e.target.dataset.source;
    this.setState({ largeImageURL: largeImage });
    this.openCloseModal();
  };
  openCloseModal = () => {
    this.setState((prevSt) => ({ shoModal: !prevSt.shoModal }));
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        {this.state.loader ? (
          <Loader />
        ) : (
          <ImageGalleryList
            images={this.state.images}
            largeImgHendler={this.largeImgHendler}
          />
        )}
        {this.state.images.length > 0 && (
          <button className="Button" type="button" onClick={this.showMore}>
            Load more
          </button>
        )}
        <Modal
          open={this.state.shoModal}
          onClose={this.openCloseModal}
          largeImg={this.state.largeImageURL}
        />
      </>
    );
  }
}
export default ImageGallery;
