import React, { Component } from 'react'

export default class eventHandlingBinding extends Component {
    constructor(){
        super();
        this.changeData=this.changeData.bind(this)
        this.state={
            name:"Bolo baccho (aman gupta) kiya hai"
        }
    }
    changeData(){
        console.log("hello", this);
        this.setState({
         name:"lund hai bhenchod",

         })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeData}>click Me</button>
      </div>
    )
  }
}


// this never direct rigging on events thats why we have to do manual binding in function
// binding event inside the render=this.changeData.bind(this)
// Difference between two is render Difference(in binding inside it gives the bind power
//  to this but if you define binding in constructor then it bind the only one time give the 
// power only one time no need for qanothewr time)
