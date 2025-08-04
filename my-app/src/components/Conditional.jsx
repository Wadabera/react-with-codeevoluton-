import React, { Component } from 'react'

export class Conditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      islogin: true
       
    }
  }
  
  render() {
    return (
      <div>
       {this .state.islogin ? ( <div>welcome</div>):(<div>please loin</div>)} 
      
        
      </div>
    )
  }
}

export default Conditional
