import React, { Component } from "react";
import getSymbolFromCurrency from 'currency-symbol-map'

class TierPrice extends Component {
  constructor(props) {
    super(props);
    this.getSelectedTierData = this.getSelectedTierData.bind(this);
  }

  /* tier price selection handler for the product */
  getSelectedTierData(data){
    this.props.sendSelectedTierDataToCart(data);
  }

  render() {

    return (
            <div>
                {
                this.props.data
                ?
                  <div className="pdr_table">
                    <div className="pricingTable">

                      <table className="quantityTable table table-bordered table-striped">
                        <thead>
                          <tr>
                               <th>{this.props.lang.quantity}</th>
                               <th>{this.props.lang.unit_price}</th>
                               <th>{this.props.lang.extra_free}</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.data.tiers.map( (tier,i)=>
                                <Tier data={tier} key={i} selectedTierData={this.getSelectedTierData} lang={this.props.lang}/> )
                            }
                        </tbody>
                      </table>
                    </div>
                  </div>
              : 'No tier price found for this country!'
            }
        </div>
    );
  }
}

class Tier extends Component{

  constructor(props) {
    super(props);

  }

  /* get selected tier price for the product */
  onPriceSelected (e){
    this.props.selectedTierData(this.props.data);
  }
    render(){
        return(
            <tr>
                <td>
                  <label htmlFor={"price"+this.props.data.minimumQuantity}>
                    <input type="radio" name="price" value={this.props.data.minimumQuantity}

                    onClick={this.onPriceSelected.bind(this)}  id={"price"+this.props.data.minimumQuantity} /> {this.props.data.minimumQuantity}
                  </label>
                  </td>
                <td>{getSymbolFromCurrency(this.props.data.value.currencyCode)} {this.props.data.value.centAmount/100}</td>
                <td>
                <span>{this.props.data.minimumQuantity/2}&nbsp;{this.props.lang.free}</span>
                </td>
            </tr>
        )
    }
}
export default TierPrice;
