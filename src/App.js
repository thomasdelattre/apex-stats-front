import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Progress from './Progression/Progress.js';
import History from './Historique/History.js';
import HamburgerMenu from './Menu/HamburgerMenu.js';
import StatsByCharacter from './StatsByCharacter/StatsByCharacter.js';

export default class App extends Component {
  render() {
    return (
        <div id="App">
            <HamburgerMenu />
            <Header />
            <Progress />
            <History />
            <StatsByCharacter />
            <Footer />
        </div>
    );
  }
}