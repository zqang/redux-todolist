import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Homepage from './page/homepage';
import Todopage from './page/todopage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/todo' component={Todopage} />
      </Switch>
    </div>
    
  );
}

export default App;
