import React, { Component } from 'react';
import { ProdLineOEE } from '../../Components/prodLineOEE/prodLineOEE';
import './index.css';
import { OeeCard } from '../../Components/oeeCard/oeeCard';
import { FactoryFloor } from '../../Components/factoryMap/factoryFloor';
//import {OrderFulfillViz} from '../../Components/orderFulfill/orderFulfill';
import PercentSign from '../../Assets/E66F0AC9-054B-4F82-8430-2630885DDB9D.png';
import FactorySign from '../../Assets/62C905DB-3F79-4848-A8C9-B3F7C126E67B.png';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
          <div className="container-1">
              <div className="factory-operational-parameters">
                <div className="factory-operational-parameters-card-description">
                  <img src={PercentSign} className="factory-operational-parameters-img"></img>
                  <div className="factory-operational-parameters-text">Factory Operational Parameters</div>
                </div>
                <OeeCard />   
              </div>
              <div className="order-fulffilment">
                
              </div>
          </div>
          <div className="container-2">
            <div className="factory-floor-map">
              <div className="factory-floor-map-card-description">
                <img src={FactorySign} className="factory-floor-map-img"></img>
                <div className="factory-floor-map-text">Factory Floor Map</div>
              </div>
              <FactoryFloor />
            </div>
            <div className="production-line-values custom-scrollbar">
              <div className="production-line-values-card-description">
                <img src={PercentSign} className="production-line-values-img"></img>
                <div className="production-line-values-text">Production Line OEE Values</div>
              </div> 
                <ProdLineOEE /> 
            </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

