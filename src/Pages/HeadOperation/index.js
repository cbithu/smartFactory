import React, { Component } from 'react';
import './index.css';
//import {orderFulfillViz} from '../../Components/orderFulfill/orderFulfill';
import { OeeCard } from '../../Components/oeeCard/oeeCard';
import { FactoryOEE } from '../../Components/factoryOEE/FactoryOEE';
import {MapContainer} from '../../Components/googleMapwidget/MapContainer'
import FactorySign from '../../Assets/62C905DB-3F79-4848-A8C9-B3F7C126E67B.png';
import PercentSign from '../../Assets/E66F0AC9-054B-4F82-8430-2630885DDB9D.png';

class HeadOperation extends Component {
    render() {
      return (
        <div className="head-operation-page">
            <div>Smart Factory Solutions</div>
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
                <div className="factory-distribution-map">
                    <div className="factory-distribution-map-card-description">
                        <img src={FactorySign} className="factory-distribution-map-img"></img>
                        <div className="factory-distribution-map-text">Factory Distribution Map</div>
                    </div>
                    <MapContainer />
                </div>
                <div className="factory-values custom-scrollbar">
                    <div className="factory-values-card-description">
                        <img src={PercentSign} className="factory-values-img"></img>
                        <div className="factory-values-text">Factory OEE Values</div>
                    </div> 
                    <FactoryOEE /> 
                </div>
            </div>
        </div>
      );
    }
  }
  
export default HeadOperation;