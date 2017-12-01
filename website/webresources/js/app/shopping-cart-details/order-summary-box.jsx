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
                    <h3>{this.props.lang.orderSummaryTitle}</h3>
                </div>
                { !this.props.isProductReadonlyView
                    ?
                    <div>
                        <p className="text-muted">{this.props.lang.couponText}</p>
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
                                <td>{this.props.lang.orderSubtotal}</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.subTotal}</th>
                            </tr>
                            { !this.props.isShippingChargesView 
                                ?   <tr>
                                    <td>{this.props.lang.shipping}</td>
                                    <th>{this.props.orderDetails.currencyCode} {this.state.shippingCharge}</th>
                                </tr>
                                : null
                            }
                                      
                            <tr>
                                <td>{this.props.lang.setup}</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.setupCharge}</th>
                            </tr>
                            { !this.props.isShippingChargesView 
                                ?  
                                <tr>
                                    <td>{this.props.lang.vat}</td>
                                    <th>{this.props.orderDetails.currencyCode} {this.state.VAT}</th>
                                </tr>
                                : null
                            }
                            <tr>
                                <td>{this.props.lang.discount}</td>
                                <th>{this.props.orderDetails.currencyCode} {this.state.discount}</th>
                            </tr>
                            <tr className="total">
                                <td>{this.props.lang.total}</td>
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
