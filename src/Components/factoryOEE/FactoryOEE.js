import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './factoryOEE.css';
    
var outputObject = {};

export class FactoryOEE extends React.Component {

	constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);

    this.state = {
        prodline : [
            {'id':"FACT01", 'value':["Factory 1","critical","65","Miami"]},
            {'id':"FACT02", 'value':["Factory 2","warning","85","Bangalore"]},
            {'id':"FACT03", 'value':["Factory 3","normal","95","San Jose"]},
            {'id':"FACT04", 'value':["Factory 4","critical","65","Santa Clara"]},
            {'id':"FACT05", 'value':["Factory 5","warning","85","New York"]},
            {'id':"FACT06", 'value':["Factory 6","critical","65","Mumbai"]},
            {'id':"FACT07", 'value':["Factory 7","normal","95","New Delhi"]},
            {'id':"FACT08", 'value':["Factory 8","warning","85","Ranchi"]},
            {'id':"FACT09", 'value':["Factory 9","normal","95","Patna"]},
            {'id':"FACT10", 'value':["Factory 10","warning","85","Jaipur"]},
            {'id':"FACT11", 'value':["Factory 11","warning","85","Jaisalmer"]},
            {'id':"FACT12", 'value':["Factory 12","critical","65","Ahmedabad"]},
            {'id':"FACT13", 'value':["Factory 13","normal","95","Surat"]},
            {'id':"FACT14", 'value':["Factory 14","warning","85","Gandhinagar"]},
            {'id':"FACT15", 'value':["Factory 15","normal","95","Panvel"]},
            {'id':"FACT16", 'value':["Factory 16","warning","85","Udaipur"]}
        ]
    };
  }

  handleLoad(){
    var element = this.refs.productionLine;
  }
  navigateToPage(name){
    window.location = '/assetView/'+name;
  }

  alertText(count){
    var output = "";
        if(count>0){
            output = count + " Alerts";
        }
    return output;
  }

  componentDidMount() {
    this.handleLoad();
  }


   render() {
    var tmp = this.state.prodline;
      return (
        <div id="factoryOEE" ref="factoryOEE">
        {tmp.map((item,key) => (
            <div key={item.id} data-cardid={item.id} className="prodLineCard" onClick={() => this.navigateToPage(item.id)}>
                <div className="content">
                    <h2>{item.value[0]}</h2>
                    <h4>{item.value[3]}</h4>
                    <div className="bottomBlock">
                        <div className="leftSection">
                            <div className={["colorDot "+item.value[1]]}></div>
                            <div className="oeeVal">{item.value[2]}%</div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
      );
   }
}

export default FactoryOEE;