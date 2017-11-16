import React, { Component } from 'react';
import Dice from './Dice.js';
import Board from './Board.js';
import Avatar from './Avatar.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    
    super();
    this.state = {
      dice:2,
      player1:[ 1 , 1 , "play"],
      rows:this.generateVirtualTrack(2,2,50,50),
      vTrack:[],
      isAvatarDone:false
    }
    
    this.ladders = {4:14, 9:31, 20:38, 28:84, 40:59, 51:67, 63:81, 71:91};
    this.snakes = {17:7, 54:34, 62:19, 64:60, 87:24, 93:73, 95:75, 99:78}

  }

  generateVirtualTrack(iniX,initY,xStep,yStep){
    let crows = [];
    let x = iniX, y = initY;
    let isEven = false
    for(let mul = 0; mul < 10;mul++){
      isEven = (mul % 2 === 1);
      y += mul===0?0:yStep;

      for(let i = 1;i<=10;i++){
        if(i!==1){
          if(isEven){
            x -= xStep;
          }else{
            x +=  xStep;
          }
        }
        crows[i + (mul * 10)] = [x , y , isEven]// --- x, | y
        // console.log(i + (mul * 10));
      }
    }
    console.log(crows);
    return crows;
    
  }

  updateAvatar(){
    // let [ from, to ] = this.state.player1;
    this.setState({player1:[this.state.player1[0],this.state.player1[1] + this.state.dice, "play"]});
    this.moveAvatar();
    // return this.state.rows[this.state.player1];
  }

  checkObstacle(){
    // alert('done');
    const [ from , to ] = this.state.player1;
    if(this.ladders[from]!==undefined){
      const go = this.ladders[from];
      this.setState({player1:[go,go, "play"]})
    }else if(this.snakes[from]!==undefined){
      const go = this.snakes[from];
      this.setState({player1:[go,go, "play"]})
    }else{
       this.setState({player1:[from,to, "play"]})
    }
    //
    
    //this.setState({player1:[from,to]})
  }



  moveAvatar(){
    let [ from , to, d ] = this.state.player1;

    if(from++ < to) {
        // this.getDirection(from);
        console.log(from)
        this.setState({player1:[from++,to, this.getDirection(--from)]})
        setTimeout(()=>{
        this.moveAvatar()
      
      },900);
    }else{
      this.checkObstacle();
    }
   
  }


  upDateDice(dice){
    this.setState({dice});
    this.updateAvatar();
  }

  getRow(index){
     
    if(!this.state.rows.length){
      console.log('here')
      return [0,0];
    }
    return this.state.rows[index];
  }

  getDirection(index){
    let [ from , to ] = this.state.player1;
    // if(!this.state.rows.length){
    //   return "play";
    // }
    // console.log(from, to, this.state.rows[index][2]);
    // if(from === to) {
    //   return "play";
    // }
    if(from % 10 === 0) {
      return "play-back";
    }
    if(this.state.rows[index][2] === true){
      console.log('here')
      return "play-left"
      // this.setState({player1:[from , to, "play-left"]});
    }else{
      console.log('here2')
      return "play-right"
      // this.setState({player1:[from , to, "play-right"]});
    }
    
  }

  updateRow(rows){
    this.setState({rows})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Snake & Ladders in React</h2>
        </div>
        <p className="App-intro">
          
        </p>
         
        <Dice updateDice={this.upDateDice.bind(this)} dice={this.state.dice} >
          
        </Dice>
        
          
          <Board getRow={this.getRow.bind(this)} player={this.state.player1}>
            <Avatar position={this.getRow(this.state.player1[0])} direction={this.state.player1[2]}/>  
          </Board>
          <br/>
          <a href="https://markrowi.github.io/">Mark Rowi Dizon</a>
        </div>
      
    );
  }
}

export default App;
