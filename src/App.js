import React from 'react';
import '../src/styles/App.css';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 


function App() {


  return (
    
    
    <Layout>
    <div className="container mt-5">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>    
          <Route exact path='/about'>
            <About/>
          </Route>      
        </Switch>
    </div>
    </Layout>
   
    
  );
}

export default App;
