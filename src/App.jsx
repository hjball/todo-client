import React, { Component } from 'react';

import Header from './components/Header';
import TaskInput from './components/forms/TaskInput';

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

    this.setState({ ...this.state, tasks: this.state.tasks.concat([this.state.input]) });
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
        </div>
      </React.Fragment> 
    )
    
  }
  
}

export default App;
