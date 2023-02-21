//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import './App.css'
import {React} from 'react';
import { Container } from "./componets/container/container";
import { Header } from "./componets/header/header";

export const App = ()=> {
/* это jsx, */
  return ( 
  < >
    <Header />
  <main>
      <nav>
        <Container maks = "lev" className = "navigation__container"/>
      </nav>
      <section>
      </section>
  </main>  
  <footer>
  </footer>
    </>
    )
};