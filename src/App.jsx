import React, { Component } from 'react';

import Header from './components/Header';
import TaskInput from './components/forms/TaskInput';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props) {
    super(props);
      this.state = {
        input: "",
        tasks: [],
      }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ ...this.state, tasks: this.state.tasks.concat([this.state.input]), input: "" });
  }

  handleChange(e) {
    this.setState({ input: e.currentTarget.value });
  }


  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <TaskInput 
            state={ this.state } 
            handleSubmit={ this.handleSubmit} 
            handleChange={ this.handleChange }/>
          <TaskList 
            state={ this.state }/>
        </div>
      </React.Fragment> 
    )
    
  }
  
}

export default App;
