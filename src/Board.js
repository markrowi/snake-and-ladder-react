import React, { Component } from 'react';
import Row from './board/Row.js'


import './Board.css';

class Board extends Component {

  


  constructor(){
    super();
    this.state = {
      row:[]
    }

   
  }

  generateRow() {
    let rows = [];
    for (var i=9; i >= 0; i--) {
      rows.push(<Row row={i} />);
    } 
  return rows
  }

  render() {
    return (
      <div className="board-cont">
        <table  className="board">
          <tbody>
          {this.generateRow()}
          </tbody>
        </table>

        {this.props.children}
      </div>
    );
  }
}

export default Board;
