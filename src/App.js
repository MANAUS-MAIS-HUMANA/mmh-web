import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";
import useWindowSize from "./styles/optional-desktop-responsive"

import { Provider } from 'react-redux';
import { store } from './store'

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


// Call it once in your app. At the root of your app is the best place
toast.configure({
  autoClose: 3000,
  className: 'toast',
  bodyClassName: 'toast-body',
  progressClassName: 'toast-progress',
});


const App = () => {

  //const rate = 62.5
  const rate = useWindowSize()

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes></Routes>
        <GlobalStyle rate={rate} />
      </Router>
    </Provider>
  );
};

export default App;
