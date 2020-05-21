import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Quize from './quize'
import Signup from './components/signup'
import Signin from './components/signin'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Signin} />
            <Route path="/quize" exact component={Quize} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/home" exact component={Home} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
