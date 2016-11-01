import React from 'react';
import Search from '../../components/Search';
import MoviesContainer from '../Movies';
import { API_KEY } from '../../config';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:"",
      url:""
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleKeyUp(e){
    if (e.key === 'Enter' && this.state.term !== '') {
      var searchUrl = `search/movie?query=${this.state.term}&api_key=${API_KEY}`;
      this.setState({url:searchUrl});
    }
  }
  handleChange(e){
    this.setState({term : e.target.value});
  }
  render() {
    return (
      <div>
        <Search searchTerm={this.state.term} handleKeyUp={this.handleKeyUp} handleChange={this.handleChange} />
        <MoviesContainer title="Results" url={this.state.url} max="20"/>
        <MoviesContainer title="Popular" url='discover/movie?sort_by=popularity.desc&page=1' max="10" />
      </div>
    )
  }
};

export default SearchContainer;
