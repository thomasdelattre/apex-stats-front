import React, { Component } from 'react';
import './StatsByCharacter.css';
import CharacterStats from './CharacterStats.js';
import axios from 'axios';

export default class StatsByCharacter extends Component {
  constructor () {
    super();
    this.state = { }
  }

  renderStats(){
    return (
      <div className="StatsByCharacter" id="StatsByCharacter">
        <CharacterStats legendName="test"/>
      </div>);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/apex/v1/standard/profile/5/Gadhena',
      headers: {
        'Access-Control-Allow-Origin': true,
        'TRN-Api-Key' : '7488836b-98bc-46a9-859b-848fbb069057'
      }})
      .then(response => {
        var stats = [];
        var content = response.data;

        if(content.errors){
            console.log(content.errors[0].message);
        }else{
            content.data.children.forEach(personnage => {
                var statLegend = { legendName:"", stats: []};
                
                statLegend.legendName = personnage.metadata.legend_name;
                personnage.stats.forEach(stat => {
                    statLegend.stats.push({statName: stat.metadata.name, value: stat.displayValue});
                });
                stats.push(statLegend);
            });
            
            const newState = Object.assign({}, this.state, {
                stats: stats
              });
              this.setState(newState);
        }
      })
      .catch(error => console.log(error));
    
  }

  render() {
    return this.state.stats ? this.renderStats() : <div></div> ;
  }
}