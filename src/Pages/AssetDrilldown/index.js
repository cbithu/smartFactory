import React, { Component } from 'react';
import './index.css';
import PercentSign from '../../Assets/E66F0AC9-054B-4F82-8430-2630885DDB9D.png';
import HealthSign from '../../Assets/EDF5958B-80BA-475B-98B9-CC7E8A96F56A.png';
import { OeeCard } from '../../Components/oeeCard/oeeCard';
import { DataTableComponentTabs } from '../../Components/DataTableComponent/DataTableComponentTabs';
//import {AssetAvatar} from '../../Components/assetAvatar/assetAvatar';
//import {HealthInfo} from '../../Components/assetHealthInfo/src/App';
import AlertSign from '../../Assets/alert.png';


class AssetDrilldown extends Component {
    render() {
      return (
        <div className="asset-view-page">
            <div className="container-1">
                <div className="asset-operational-parameters">
                    <div className="asset-operational-parameters-card-description">
                        <img src={PercentSign} className="asset-operational-parameters-img"></img>
                        <div className="asset-operational-parameters-text">Asset Operational Parameters</div>
                    </div>
                        <OeeCard />
                </div>
                <div className="asset-health-info">
                    <div className="asset-health-info-card-description">
                        <img src={HealthSign} className="asset-health-info-img"></img>
                        <div className="asset-health-info-text">Asset Health</div>
                    </div>
                        
                </div>
            </div>
            <div className="container-2">
                <div className="asset-avatar">
                    
                </div>
                <div className="alert-downtime">
                    <div className="alert-downtime-card-description">
                        <img src={AlertSign} className="alert-downtime-img"></img>
                        <div className="alert-downtime-text">Alerts</div>
                    </div> 
                    <div className = "prod-line-datatable"> 
                        <DataTableComponentTabs />
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default AssetDrilldown;