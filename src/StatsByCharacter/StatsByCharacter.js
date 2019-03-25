import React, { Component } from 'react';
import './StatsByCharacter.css';
import CharacterStats from './CharacterStats.js';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';

export default class StatsByCharacter extends Component {
  constructor (props) {
    super();
    this.state = { 
      pseudo: props.pseudo
    }
  }

  renderStats(){
    const characters = this.state.stats.map((stat, key) => 
    <Zoom left duration={500*key}>
      <CharacterStats stats={ stat } key={key}/>
    </Zoom>
    );
    return (
      <div className="StatsByCharacter" id="StatsByCharacter">
        {characters}
      </div>);
  }

  updateView(){
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/apex/v1/standard/profile/5/'+this.state.pseudo,
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
                var statLegend = { stats: []};
                
                statLegend.legendName = personnage.metadata.legend_name;
                statLegend.icon = personnage.metadata.icon;
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

  componentDidMount() {
    this.updateView();    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ pseudo: nextProps.pseudo, stats:[]}, () => {this.updateView()});    
  }

  render() {
    return this.state.stats ? this.renderStats() : <div className="StatsByCharacter" >En attente de donnée</div> ;
  }
}