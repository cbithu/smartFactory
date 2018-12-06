import React, { Component } from 'react';
import './index.css';
import { OeeCard } from '../../Components/oeeCard/oeeCard';
import { ProductionLine } from '../../Components/productionLine/productionLine';
import { DataTableComponent } from '../../Components/DataTableComponent/DataTableComponent';
//import { AlertDetail } from '../../Components/DataTableComponent/alertDetail';
//import {orderFulfillViz} from '../../Components/orderFulfill/orderFulfill';
import FactorySign from '../../Assets/62C905DB-3F79-4848-A8C9-B3F7C126E67B.png';
import PercentSign from '../../Assets/E66F0AC9-054B-4F82-8430-2630885DDB9D.png';
import AlertSign from '../../Assets/alert.png';

class ProdLine extends Component {
    render() {
      return (
        <div className="production-line-page">
          <div>Smart Factory Solutions</div>
          <div className="container-1">
            <div className="production-line-operational-parameters">
              <div className="production-line-operational-parameters-card-description">
                <img src={PercentSign} className="production-line-operational-parameters-img"></img>
                <div className="production-line-operational-parameters-text">Production Line Operational Parameters</div>
              </div>
                <OeeCard />   
            </div>
            <div className="order-fulffilment">
                
            </div>
          </div>
          <div className="container-2">
            <div className="production-line-map">
              <div className="production-line-map-card-description">
                <img src={FactorySign} className="production-line-map-img"></img>
                <div className="production-line-map-text">Production Line Map</div>
              </div>
                <ProductionLine />
            </div>
            <div className="alert-list custom-scrollbar">
              <div className="alert-list-card-description">
                <img src={AlertSign} className="alert-list-img"></img>
                <div className="alert-list-text">Alerts</div>
              </div> 
                <DataTableComponent />
            </div>
          </div>
        </div>
      );
    }
  }
  
export default ProdLine;