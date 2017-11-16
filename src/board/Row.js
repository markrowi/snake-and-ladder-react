import React, { Component } from 'react';


class Row extends Component {



  render() {
    let data = [];
    // let rows = [];
    const multiplier = this.props.row * 10;
    const isEven = (this.props.row % 2 === 1);
    for(let i=1;i<=10;i++){
      if(isEven){
        // {i + multiplier}
        data.unshift(<td data-id={i + multiplier}></td>)
      }else{
        //{i + multiplier}
        data.push(<td data-id={i + multiplier}></td>)
      }
      
    }

    return (
      <tr>
       {data}
      </tr>
    );
  }
}

export default Row;
