import React, { PropTypes } from 'react';
import Movies from '../../components/Movies';
import { API_KEY, API_URL } from '../../config';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        moviesData: []
    };
  }
  loadMovies() {
    const requestUrl = `${API_URL}/${this.props.url}&api_key=${API_KEY}`;
    fetch(requestUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        this.setState({moviesData : data});
    }).catch((err)=>{
        console.log("There has been an error");
    });
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.url !== this.props.url && nextProps.url !== ''){
      this.setState({url:nextProps.url},()=>{
        this.loadMovies();
      });

    }
  }
  componentDidMount() {
    if(this.props.url !== ''){
      this.loadMovies();
    }
  }
  render() {
    if(this.state.moviesData.results) {
      return (
        <Movies title={this.props.title} movies={this.state.moviesData.results} max={this.props.max} />
      );
    }
    return false;
  }
};

MoviesContainer.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};

export default MoviesContainer;
