import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import alertOptions from './utils/alertOptions';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './hooks/appContext';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import './index.css';

import ConnectOnPageLoad from './components/ConnectOnPageLoad/index';
import Bag from './views/Bag/index';
import Header from './components/Header/index';

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalContextProvider>
          <Router>
            <ConnectOnPageLoad />
            <Header/>
            <div id="content">
              <Routes>
                <Route path='/' element={<Bag/>}/>
              </Routes>
            </div>
            <p className={ 'subtitle mt-3 mb-4 mb-0 text-center' }>
              Create by ByteBuildersLabs © 2024
            </p>
          </Router>
        </GlobalContextProvider>
      </Web3ReactProvider>
    </AlertProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
