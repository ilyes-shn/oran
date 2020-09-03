import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 

function App() {
  return (
    <Layout>
    <div class="container">
      <Router>
        <Switch>
          <Route to='/'>
            <Home />
          </Route>    
          <Route to='/about'>
            <About/>
          </Route>      
        </Switch>
      </Router>
    </div>
    </Layout>
  );
}

export default App;
