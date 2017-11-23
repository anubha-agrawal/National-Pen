import React, { Component } from "react";

class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box" id="order-summary">
                        <div className="box-header">
                            <h3>Order summary</h3>
                        </div>
                        <p className="text-muted">If you have a coupon code, please enter it in the box below.</p>
                        <div className="input-group">

                                <input type="text" className="form-control" />

                                <span className="input-group-btn">

                                    <button className="btn btn-primary" type="button"><i className="fa fa-gift"></i></button>

                                </span>
                            </div>

                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Order subtotal</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.subtotal}</th>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.shippingCharge}</th>
                                    </tr>
                                    <tr>
                                        <td>Setup Charge</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.setupCharge}</th>
                                    </tr>
                                    <tr>
                                        <td>VAT</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.VAT}</th>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.discount}</th>
                                    </tr>
                                    <tr className="total">
                                        <td>Total Price</td>
                                        <th>{this.props.orderDetails.currencyCode} {this.props.orderDetails.total}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
        );
    }
}
export default OrderSummary;
