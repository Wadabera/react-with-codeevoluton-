import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fname: " ",
      lname: " ",
      coment: " ",
      option:" "
    }
  }
  firstfunction = (event) => {
    this.setState({
      fname:event.target.value
    })
    
  }
  secondfunction = (event) => {
    this.setState({
      lname:event.target.value
    })
    
  }
  comentfunction = (event) => {
    this.setState({ 
      coment:event.target.value

    })
  }
  optionfunction = (event) => {
    this.setState({
     option: event.target.value
    })
  }
  sub = (event) => {
    alert(`${this.state.fname}  ${this.state.lname} ${this.state.coment} ${this.state.option} `)
    event.preventDefault()

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.sub}>
          <label>first name</label>
          <input type='text' value={this.state.fname} onChange={this.firstfunction} /><br/>

          <label>last name</label>
          <input type='text' value={this.state.lname} onChange={this.secondfunction} /><br/>
          <label>comment</label>
          <textarea value={this.state.coment} onChange={this.comentfunction}></textarea><br />
          <label>option what you have </label>
          <select value={this.state.option} onChange={this.optionfunction}>
            <option value='python'>python</option>
            <option  value='react'>react</option>
            <option  value='php'>php</option>
            <option  value='c++'>c++</option>
            <option  value='java'>java</option>
            <option  value='javas'>java script</option>
          </select><br />
          <button type='submit'> submit</button>
          
        </form>
        
      </div>
    )
  }
}

export default Form
