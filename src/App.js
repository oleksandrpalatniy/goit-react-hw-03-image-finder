import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

export default class App extends Component {
  state = {
    imageName: '',
    imagePage: 1,
    largeItemUrl: '',
  };

  handleFormSubmit = (imageName, imagePage) => {
    this.setState({ imageName });
    this.setState({ imagePage: 1 });
  };
  handleButtonSubmit = imagePage => {
    this.setState(prevState => {
      return {
        imagePage: prevState.imagePage + 1,
      };
    });
  };

  handleLargeImage = largeItemUrl => {
    this.setState({ largeItemUrl });
  };

  render() {
    return (
      <>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          imagePage={this.state.imagePage}
        />
        <ImageGallery
          imageName={this.state.imageName}
          imagePage={this.state.imagePage}
        />

        {this.state.imageName && (
          <Button
            onClick={this.handleButtonSubmit}
            imagePage={this.state.imagePage}
          />
        )}
      </>
    );
  }
}
