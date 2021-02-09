import React from 'react';
import Tasks from './comps/Tasks';
import './App.css';
import Todos from './comps/Todos';
import NavIcons from './comps/NavIcons';
import { Switch, Route } from 'react-router-dom';
import Search from './comps/Search';

const App = () => {
  return (
    <div className='app container'>
      <NavIcons />
      <Switch>
        <Route exact path='/' component={Tasks} />
        <Route exact path='/todos' component={Todos} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </div>
  );
};

export default App;
