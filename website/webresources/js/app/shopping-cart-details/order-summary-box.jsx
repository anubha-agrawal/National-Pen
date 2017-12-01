import React, { Component } from 'react';

class OrderSummaryBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            'total': props.orderDetails.total,
            'subTotal':props.orderDetails.subTotal,
            'shippingCharge': props.orderDetails.shippingCharge,
            'setupCharge':props.orderDetails.setupCharge,
            'VAT': props.orderDetails.VAT,
            'discount': props.orderDetails.discount
        };
    }
    componentWillMount() {
        window.Abc.EventBus.subscribe(Abc.order.EVENT_CART_UPDATED, 'order-summary-box', this.onPriceUpdate.bind(this));
    }
    onPriceUpdate(cart) {
        this.setState({
            'total': cart.totalPrice.centAmount / 100,
            'subTotal':cart.totalPrice.centAmount / 100,
            'shippingCharge': 0,
            'setupCharge':0,
            'VAT': 0,
            'discount': 0
        });
       
    }
    render() {
        return (
            <div className="box" id="order-summary">
                <div className="box-header">
                    <h3>Order summary</h3>
                </div>
                { !this.props.isProductReadonlyView
                    ?
                    <div>
                        <p className="text-muted">If you have a coupon code, please enter it in the box below.</p>
                        <div className="input-group">

                            <input type="text" className="form-control" />

                            <span className="input-group-btn">

                                <button className="btn btn-primary" type="button"><i className="fa fa-gift"></i></button>

                            </span>
                        </div>
                    </div>
                    : null
                }

                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Order subtotal</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.subTotal}</th>
                            </tr>
                            { !this.props.isShippingChargesView 
                                ?   <tr>
                                    <td>Shipping Charge</td>
                                    <th>{this.props.orderDetails.currencyCode} {this.state.shippingCharge}</th>
                                </tr>
                                : null
                            }
                                      
                            <tr>
                                <td>Setup Charge</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.setupCharge}</th>
                            </tr>
                            { !this.props.isShippingChargesView 
                                ?  
                                <tr>
                                    <td>VAT</td>
                                    <th>{this.props.orderDetails.currencyCode} {this.state.VAT}</th>
                                </tr>
                                : null
                            }
                            <tr>
                                <td>Discount</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.discount}</th>
                            </tr>
                            <tr className="total">
                                <td>Total Price</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.total}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
export default OrderSummaryBox;
