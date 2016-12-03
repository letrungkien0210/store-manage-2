/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React, { PropTypes } from 'react';

// redux, react-router, and saga form the 'kernel' on which admin-on-rest runs
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

// prebuilt admin-on-rest features
import { adminReducer, crudSaga, CrudRoute, simpleRestClient, jsonServerRestClient } from 'admin-on-rest';

// your app components
import Master from './layouts/Master';
import Layout from './layouts/MyLayout';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notfound from './pages/Notfound';



import { PostList, PostCreate, PostEdit } from './components/posts';
// import { CommentList, CommentEdit, CommentCreate } from './Comment';
// import { UserList, UserEdit, UserCreate } from './User';
import { Delete } from 'admin-on-rest/lib/mui';

// create a Redux app
const reducer = combineReducers({
  admin: adminReducer([{ name: 'posts' }]),
  form: formReducer,
  routing: routerReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, undefined, compose(
  applyMiddleware(routerMiddleware(hashHistory), sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
// const restClient = simpleRestClient('http://path.to.my.api/');
const restClient = jsonServerRestClient('http://jsonplaceholder.typicode.com');
sagaMiddleware.run(crudSaga(restClient));

// initialize the router
const history = syncHistoryWithStore(hashHistory, store);

// bootstrap redux and the routes
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Welcome} />
        <Route path='login' component={Login} />

        <Route path='admin' component={Layout}>
          <IndexRoute component={Dashboard} restClient={restClient} />
          <CrudRoute key="posts" path="/admin/posts" list={PostList} create={PostCreate} edit={PostEdit} remove={Delete} />
        </Route>

        <Route path='*' component={Notfound} />
      </Route>
    </Router>
  </Provider>
);


export default App;