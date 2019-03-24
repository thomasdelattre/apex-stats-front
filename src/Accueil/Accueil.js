import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Accueil.css';

export default class Accueil extends Component {
  render() {
    return (
        <div id="Accueil" className="container">
          <Header />
           <div className="emptydiv">&nbsp;</div>
          <Footer />
        </div>
    );
  }
}