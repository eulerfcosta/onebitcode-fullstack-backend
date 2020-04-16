import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss';

import Routes from './router';
import Menu from './components/common/menu'

const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Menu/>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
