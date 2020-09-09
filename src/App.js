import React from 'react';
import '../src/styles/App.css';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 


function App() {


  return (
    
    <div className="App">
    <Layout>
    <div className="container pt-5">
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
    </div>
   
    
  );
}

export default App;
