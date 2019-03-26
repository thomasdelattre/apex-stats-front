import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Progress from './Progression/Progress.js';
import History from './Historique/History.js';
import HamburgerMenu from './Menu/HamburgerMenu.js';
import StatsByCharacter from './StatsByCharacter/StatsByCharacter.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleToUpdate.bind(this);
  }

  handleToUpdate(pseudo){
    this.setState({
      pseudo:pseudo
    });
  }

  displayStats(){
    return(
      <div>
        {/* <HamburgerMenu /> */}
        <StatsByCharacter pseudo={this.state.pseudo}/>
        <Progress pseudo={this.state.pseudo}/>
        {/* <History pseudo={this.state.pseudo}/> */}
        <Footer />
      </div>
      )
  }

  render() {
    var handleToUpdate  =   this.handleToUpdate;
    return (
        <div id="App">
            <Header handleToUpdate = {handleToUpdate.bind(this)}/>
            {this.state.pseudo ? this.displayStats() : <div></div>}
        </div>
    );
  }
}