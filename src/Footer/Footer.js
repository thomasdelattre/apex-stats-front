import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <div id="Footer">
            <span>Apex legends stats &#169; 2019</span><br/>
            <span>Retrouvez aussi le <a href="https://github.com/thomasdelattre/apexstatsbot" target="_blank">bot discord</a></span>
        </div>
    );
  }
}