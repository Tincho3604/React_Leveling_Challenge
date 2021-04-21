import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import Register from '../src/Pages/Register/index';

function App() {
    
    return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/register' component={Register} />
          <Redirect to="/home" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
