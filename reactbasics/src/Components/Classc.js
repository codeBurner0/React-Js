import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class classc extends Component {
    constructor(){
        super();
        console.log("Ankit anand is the best student");
    }
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
