import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import Details from './Pages/Details';
import Edit from './Pages/Edit';
function App() {
    
    return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/details' component={Details} />
          <Route path='/edit' component={Edit} />
          <Redirect to="/home" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
