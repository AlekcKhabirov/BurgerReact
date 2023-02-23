//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import './App.css'
import {React} from 'react';
import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog/catalog';
import { Header } from "./components/header/header";
import { Navigation } from './components/navigation/navigation';

export const App = ()=> {
/* это jsx, */
  return ( 
  <Provider state={state}>
    <Header />
  <main>
      <Navigation />
      <Catalog />
  </main>  
  <footer>
  </footer>
    </Provider>
    )
};