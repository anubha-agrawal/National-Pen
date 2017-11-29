import React, { Component } from "react";


class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
    
    
  }
  render() {
    return (
      <div className="container top-gutter">
        <div className="panel panel-success">
            <div className="panel-heading">
            <h2>Order Confirmation</h2></div>
            <div className="panel-body">
                <h5>Your order has been successfully placed.</h5>
                <h3>Order Id: {this.props.orderno}</h3>
                <a href="home" className="btn btn-default"><i className="fa fa-chevron-left"></i> Continue shopping</a>
            </div>
            
        </div>
      </div>
    );
  }
}
export default OrderConfirmation;
