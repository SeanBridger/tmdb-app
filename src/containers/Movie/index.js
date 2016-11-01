import React from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../config';
import MovieInfo from '../../components/MovieInfo';

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  loadResult() {
    const id = this.props.params.id;
    const requestUrl = `${API_URL}movie/${id}?api_key=${API_KEY}`;
    fetch(requestUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        this.setState({data : data});
    }).catch((err)=>{
        console.log("There has been an error");
    });
  }
  componentDidMount() {
    this.loadResult();
  }
  render() {
    let hero_image = this.state.data.backdrop_path;
    if(!hero_image) {
      hero_image = 'http://placehold.it/2000x1500';
    } else {
      hero_image = `${IMAGE_URL}${this.state.data.backdrop_path}`;
    }

    const { title, release_date, overview } = this.state.data;
    return (
      <MovieInfo backdrop={hero_image} title={title} overview={overview} release_date={release_date} />
    )
  }
};

export default MovieContainer;
