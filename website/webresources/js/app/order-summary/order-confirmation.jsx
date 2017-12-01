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
            <h2>{this.props.lang.heading}</h2></div>
            <div className="panel-body">
                <h5>{this.props.lang.title}</h5>
                <h3>{this.props.lang.orderid} {this.props.orderno}</h3>
                <a href="home" className="btn btn-default"><i className="fa fa-chevron-left"></i> {this.props.lang.continue}</a>
            </div>

        </div>
      </div>
    );
  }
}
export default OrderConfirmation;
