import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchContainer from './containers/Search';
import MovieContainer from './containers/Movie';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SearchContainer} />
      <Route path='/movie/:id' component={MovieContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
