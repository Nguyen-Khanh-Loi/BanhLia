import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Team from './components/Team/Team';

import Login from './components/Login/Login';
import {
  Switch,
  Route,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Stadium from './components/Stadium/Stadium';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/team">
                <Team />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/stadium">
                <Stadium />
              </Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;