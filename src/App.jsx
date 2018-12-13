import React from 'react';

import Header from './components/Header';
import TaskInput from './containers/forms/TaskInputContainer';
import TaskList from './containers/TaskListContainer';

const App = () => (
      <React.Fragment>
        <div className="container">
          <Header />
          <TaskInput />
          <TaskList />
        </div>
      </React.Fragment> 
)

export default App;
