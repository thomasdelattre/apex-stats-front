import React from 'react';
import './HamburgerMenu.css';
import { elastic as Menu } from 'react-burger-menu';

export default class HamburgerMenu extends React.Component{
      render(){
        return(
            <div className="HamburgerMenu">
                <div id="overlay"></div>
                <Menu>
                  <a id="header" className="menu-item" href="#Header">Recherche</a>
                  <a id="progress" className="menu-item" href="#Progress">Progression</a>
                  <a id="history" className="menu-item" href="#History">Historique</a> 
                  <a id="stats" className="menu-item" href="#StatsByCharacter">Stats / personnage</a>
                  <a id="footer" className="menu-item" href="#Footer">A propos</a>
                </Menu>
            </div>
        );
    }
}