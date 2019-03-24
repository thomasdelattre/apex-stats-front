  import React, { Component } from 'react';
  import './Graph.css';
  import ReactChartkick, { AreaChart, ColumnChart } from 'react-chartkick';
  import Chart from 'chart.js';
  import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
  import Typography from '@material-ui/core/Typography';

  
  class Graph extends Component {
    constructor(props) {
      super(props);
      this.state = {
         data: this.props.data,
         title: this.props.title,
         graphType: this.props.graphType,
         color: this.props.color
      };
    }

    render() {
      ReactChartkick.addAdapter(Chart);
      if(this.state.graphType == "AreaChart"){
        return (
          <div className="Graph">
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {this.state.title}
                </Typography>
                <AreaChart data={this.state.data} color={this.state.color}  id="graph" />
                </CardContent>
            </Card>
          </div>
        );
      }else{
        return (
          <div className="Graph">
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {this.state.title}
                </Typography>
                <ColumnChart data={this.state.data} colors={this.state.color} id="graph" />
                </CardContent>
            </Card>
          </div>
        );
      }
    }
  }
  
  
  export default Graph;