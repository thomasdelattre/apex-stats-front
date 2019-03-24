import React, { Component } from 'react';
import './History.css';
import EnhancedTable from './Table.js';

export default class History extends Component {
  render() {
    return (
        <div className="History" id="History">
        <EnhancedTable id="table" />
        </div>
    );
  }
}