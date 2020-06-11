import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Quize from './quize'
import "./app.css"
import Signup from './components/signup'
import Signin from './components/signin'
import Home from './components/home'
import Leaderboard from './components/leaderboard'

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/quize" exact component={Quize} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/home" exact component={Home} />
            <Route path="/leaderboard" exact component={Leaderboard} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
