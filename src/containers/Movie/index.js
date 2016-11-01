import React, { PropTypes } from 'react';
import { API_URL, API_KEY, BACKDROP_URL, PLACEHOLDER_URL } from '../../config';
import MovieInfo from '../../components/MovieInfo';

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  loadMovie() {
    const id = this.props.params.id;
    const requestUrl = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
    fetch(requestUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        this.setState({data : data});
    }).catch((err)=>{
        console.log("There has been an error");
    });
  }
  componentDidMount() {
    this.loadMovie();
  }
  render() {
    let hero_image = this.state.data.backdrop_path;
    if(!hero_image) {
      hero_image = `${PLACEHOLDER_URL}/2000x1500`;
    } else {
      hero_image = `${BACKDROP_URL}${this.state.data.backdrop_path}`;
    }

    const { title, release_date, overview } = this.state.data;
    return (
      <MovieInfo backdrop={hero_image} title={title} overview={overview} release_date={release_date} />
    )
  }
};

MovieContainer.propTypes = {
  params: PropTypes.object.isRequired
};

export default MovieContainer;
