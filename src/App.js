import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './common/Header';
import Footer from './common/Footer';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import About from './components/About'
import Product from './components/Product'
import PrivateRoute from './components/PrivateRoutes';
import Collection from './components/Collection';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About}/>
        <Route path='/login' component={Login} />
        <Route path="/product/:product" component={Product} />
        <PrivateRoute authed={true} path="/collectons" component={ Collection  }/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
