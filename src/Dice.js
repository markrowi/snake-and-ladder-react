import React, { Component } from 'react';

import './Dice.css';

class Dice extends Component {

  constructor(){
    super();
    this.state = {
      isTriggered:false
    }

  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollDice() {
    if(this.state.isTriggered){
      return;
    }
    this.setState({isTriggered:true});
    setTimeout(() => {
      const newDice = this.getRandomInt(1,7);
      this.props.updateDice(newDice);
      this.setState({isTriggered:false});
    }, 1000)
    
  }
  
  render() {
    return (
      <div  className="dice">
        <div className={"dice-ico -d" + this.props.dice + (this.state.isTriggered?" -roll":"")} onClick={this.rollDice.bind(this)}  >
        </div>
      </div>
    );
  }
}

export default Dice;
