import React, { Component } from 'react';
import './index.css';
import PercentSign from '../../Assets/E66F0AC9-054B-4F82-8430-2630885DDB9D.png';
import { OeeCard } from '../../Components/oeeCard/oeeCard';
import {AssetAvatar} from '../../Components/assetAvatar/assetAvatar'
//import {HealthInfo} from '../../Components/assetHealthInfo/src/App'

class AssetDrilldown extends Component {
    render() {
      return (
        <div className="asset-view-page">
            <div>Smart Factory Solutions</div>
            <div className="container-1">
                <div className="asset-operational-parameters">
                    <div className="asset-operational-parameters-card-description">
                        <img src={PercentSign} className="asset-operational-parameters-img"></img>
                        <div className="asset-operational-parameters-text">Asset Operational Parameters</div>
                    </div>
                        <OeeCard />
                </div>
                <div className="asset-health-info">
                    
                </div>
            </div>
            <div className="container-2">
                <div className="asset-avatar">
                    <AssetAvatar />
                </div>
                <div className="alert-downtime">
                    
                </div>
            </div>
        </div>
      );
    }
  }
  
export default AssetDrilldown;