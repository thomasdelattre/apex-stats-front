import React, { Component } from 'react';
import './StatsByCharacter.css';
import axios from 'axios';

export default class StatsByCharacter extends Component {
  constructor () {
    super();
    this.state = {}
  }

  renderStats(){
    return (
      <div className="StatsByCharacter" id="StatsByCharacter">
      </div>);
  }

  componentDidMount() {
    // axios({
    //   method: 'get',
    //   url: 'https://public-api.tracker.gg/apex/v1/standard/profile/5/Gadhena',
    //   headers: {
    //     'Access-Control-Allow-Origin': true,
    //     'TRN-Api-Key' : '7488836b-98bc-46a9-859b-848fbb069057'
    //   }})
    //   .then(response => {
    //       console.log(response);
    //     //   const newState = Object.assign({}, this.state, {
    //     //     kills: response.data.kills,
    //     //     top1: response.data.top1,
    //     //     damages: response.data.damages
    //     //   });
    //     //   this.setState(newState);
    //   })
    //   .catch(error => console.log(error));
    var content = {
        "data": {
            "id": "7e4bbb8c-b5ad-491c-9a73-dec0a9d049a8",
            "type": "player",
            "children": [
                {
                    "id": "legend_9",
                    "type": "",
                    "metadata": {
                        "legend_name": "Octane",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apex.tracker.gg/legends/octane-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 2,
                            "percentile": 83,
                            "displayValue": "2",
                            "displayRank": ""
                        }
                    ]
                },
                {
                    "id": "legend_7",
                    "type": "",
                    "metadata": {
                        "legend_name": "Lifeline",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 25,
                            "percentile": 65,
                            "displayValue": "25",
                            "displayRank": ""
                        }
                    ]
                },
                {
                    "id": "legend_1",
                    "type": "",
                    "metadata": {
                        "legend_name": "Wraith",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 36,
                            "percentile": 65,
                            "displayValue": "36",
                            "displayRank": ""
                        }
                    ]
                },
                {
                    "id": "legend_2",
                    "type": "",
                    "metadata": {
                        "legend_name": "Bangalore",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 188,
                            "percentile": 29,
                            "displayValue": "188",
                            "displayRank": ""
                        },
                        {
                            "metadata": {
                                "key": "Specific3",
                                "name": "Legend Specific 3",
                                "categoryKey": "game",
                                "categoryName": "Game",
                                "isReversed": false
                            },
                            "value": 9582,
                            "percentile": 3.3,
                            "rank": 7893,
                            "displayValue": "9,582",
                            "displayRank": "7,893"
                        }
                    ]
                },
                {
                    "id": "legend_8",
                    "type": "",
                    "metadata": {
                        "legend_name": "Pathfinder",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 5,
                            "percentile": 64,
                            "displayValue": "5",
                            "displayRank": ""
                        },
                        {
                            "metadata": {
                                "key": "KillsAsKillLeader",
                                "name": "Kills As Kill Leader",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 0,
                            "rank": 1153,
                            "displayValue": "0",
                            "displayRank": "1,153"
                        },
                        {
                            "metadata": {
                                "key": "Specific2",
                                "name": "Legend Specific 2",
                                "categoryKey": "game",
                                "categoryName": "Game",
                                "isReversed": false
                            },
                            "value": 12202,
                            "percentile": 14,
                            "rank": 13795,
                            "displayValue": "12,202",
                            "displayRank": "13,795"
                        },
                        {
                            "metadata": {
                                "key": "Specific3",
                                "name": "Legend Specific 3",
                                "categoryKey": "game",
                                "categoryName": "Game",
                                "isReversed": false
                            },
                            "value": 0,
                            "rank": 3684,
                            "displayValue": "0",
                            "displayRank": "3,684"
                        }
                    ]
                },
                {
                    "id": "legend_4",
                    "type": "",
                    "metadata": {
                        "legend_name": "Mirage",
                        "icon": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png",
                        "bgimage": "https://trackercdn.com/cdn/apeapexx.tracker.gg/legends/mirage-concept-bg-small.jpg"
                    },
                    "stats": [
                        {
                            "metadata": {
                                "key": "Kills",
                                "name": "Kills",
                                "categoryKey": "combat",
                                "categoryName": "Combat",
                                "isReversed": false
                            },
                            "value": 2,
                            "percentile": 89,
                            "displayValue": "2",
                            "displayRank": ""
                        }
                    ]
                }
            ],
            "metadata": {
                "statsCategoryOrder": [
                    "combat",
                    "game",
                    "weapons"
                ],
                "platformId": 5,
                "platformUserHandle": "Gadhena",
                "accountId": "7e4bbb8c-b5ad-491c-9a73-dec0a9d049a8",
                "cacheExpireDate": "3/24/2019 3:27:01 PM",
                "level": 44
            },
            "stats": [
                {
                    "metadata": {
                        "key": "Level",
                        "name": "Level",
                        "categoryKey": "combat",
                        "categoryName": "Combat",
                        "isReversed": false
                    },
                    "value": 44,
                    "percentile": 39,
                    "displayValue": "44",
                    "displayRank": ""
                },
                {
                    "metadata": {
                        "key": "Kills",
                        "name": "Kills",
                        "categoryKey": "combat",
                        "categoryName": "Combat",
                        "isReversed": false
                    },
                    "value": 258,
                    "percentile": 30,
                    "displayValue": "258",
                    "displayRank": ""
                },
                {
                    "metadata": {
                        "key": "KillsAsKillLeader",
                        "name": "Kills As Kill Leader",
                        "categoryKey": "combat",
                        "categoryName": "Combat",
                        "isReversed": false
                    },
                    "value": 0,
                    "displayValue": "0",
                    "displayRank": ""
                }
            ]
        }
    }
    var stats = [];
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
  }

  render() {
    return this.state.stats ? this.renderStats() : <div></div> ;
  }
}