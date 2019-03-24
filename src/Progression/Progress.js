import React, { Component } from 'react';
import Graph from './Graph.js';
import './Progress.css';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';

export default class Progress extends Component {
  constructor () {
    super();
    this.state = {}
  }

  renderGraphs(){
    return (
      <div className="Progress" id="Progress">
      <Zoom left duration={1000}>
        <Graph data={this.state.kills} title="Nombre de kills" graphType="AreaChart" color={[""]}/>
      </Zoom>
      <Zoom left duration={1500}>
        <Graph data={this.state.damages} title="Nombre de dégats" graphType="ColumnChart" color={["#ad1313"]} />
      </Zoom>
      <Zoom left duration={2000}>
        <Graph data={this.state.top1} title="Nombre de top 1" graphType="ColumnChart" color={["#d8a10d"]} />
      </Zoom>
      </div>);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://apex-stats-back.herokuapp.com/statistiques',
      headers: {
        'Access-Control-Allow-Origin': true,
      }})
      .then(response => {
          const newState = Object.assign({}, this.state, {
            kills: response.data.kills,
            top1: response.data.top1,
            damages: response.data.damages
          });
          this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return this.state.kills && this.state.damages && this.state.top1 ? this.renderGraphs() : <div></div> ;
  }
}