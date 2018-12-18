import React, { Component } from 'react';
import Movie from './Movie';
import './Library.css';
import axios from 'axios';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: []
    };
  }

  componentDidMount() {
    
    // NOTE: change this address once api is deployed
    const VIDEO_STORE_API = "http://localhost:3000/" + 'movies';

    axios.get(VIDEO_STORE_API)
    .then((response) => {
      this.setState({
        library: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render () {
    const rentalList = this.state.library.map((movie, i) => {
      return (
        <Movie
          key={i}
          {...movie}
          buttonFunc={() => this.props.selectMovieCallback(movie)}
          theme='Select for Rental'
          />
      )
    });

    return (
      <div >
        {rentalList}
      </div>
    );
  }
}

export default Library;
