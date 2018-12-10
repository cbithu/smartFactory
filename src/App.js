import React, { Component } from 'react';
import './App.css';
//import Dashboard from './Pages/Dashboard';
//import HeadOperation from './Pages/HeadOperation';
//import ProdLine from './Pages/ProdLine';
import AssetDrilldown from './Pages/AssetDrilldown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AssetDrilldown />
      </div>
    );
  }
}

export default App;

