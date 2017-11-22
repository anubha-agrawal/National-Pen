import React, { Component } from "react";
import {globalConfig} from "../configuration.jsx";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.languageCode = locale_details.language;
    this.state = {
      userSelectedAttributes: {}
    }
  }

  /* attributes selection handler for the product */
  changeAttributeHandler(e){
    var attrValue = e.target.value;
    var attrKey = this.props.data.label[this.languageCode];
    var prodAttrObj = {};
    prodAttrObj[attrKey] = attrValue;
    this.props.sendAttributes(prodAttrObj);
  }

  render() {

    return (
        <div>
          {this.props.data
            ?<div className="form-group">
                <label >{this.props.data.label[this.languageCode]}</label>
                <select className="form-control" id="state" onChange={this.changeAttributeHandler.bind(this)} name={this.props.data.name}>
                  <option value="" defaultValue> -- Select -- </option>
                  {this.props.data.value.map( (options,i)=>
                      <option value={options.key} key={i}>{options.label[this.languageCode]}</option>
                  )}
                </select>

            </div>
          : null
          }
      </div>
    );
  }
}
export default ProductAttributes;
