import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 

function App() {
  return (
    <Router>
    <Layout>
    <div class="container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>    
          <Route path='/about'>
            <About/>
          </Route>      
        </Switch>
    </div>
    </Layout>
    </Router>
  );
}

export default App;
