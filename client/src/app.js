import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import './app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import { UserList } from './app/UserList';

const App = () => (
  <div>
    <h4>awesome app</h4>
    <UserList />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
