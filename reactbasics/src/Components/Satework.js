import React, { Component } from 'react';
export default class statework extends Component {
    constructor(){
        super();
        this.state={
            number:1,
            cla:"D"
        }
    }
    changeData(){
        this.setState({
         number:this.state.number+1,
         })
    }
  render() {
    const {number,cla}=this.state;
    return (
      <div>
        <h1>{"Ankit Anand"}</h1>
        <h2>Ankit Anand</h2>
        <button onClick={()=>this.changeData()}>Click here</button>
      </div>
    )
  }
}
