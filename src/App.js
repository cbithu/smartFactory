import React, { Component } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import HeadOperation from './Pages/HeadOperation';
import ProdLine from './Pages/ProdLine';
import AssetDrilldown from './Pages/AssetDrilldown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HeadOperation} />
        <Route path="/factory" component={Dashboard} />
        <Route path="/prodline" component={ProdLine} />
        <Route path="/assetview" component={AssetDrilldown} />
      </div>
    </Router>
    );
  }
}

export default App;

