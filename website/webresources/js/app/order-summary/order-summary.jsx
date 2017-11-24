import React, { Component } from "react";

class OrderSummary extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="container top-gutter">
            <div className="box order-summary">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-xs-12">
                        
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <h2>Shipping Information</h2>
                                    <address>
                                        342 Shelbyville<br/>
                                        Mills Road <br/>
                                        Shelbyville,<br/>
                                        TN, 37160-0189<br/>
                                    </address>

                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <h2>Billing Information</h2>
                                    <address>
                                            342 Shelbyville<br/>
                                            Mills Road <br/>
                                            Shelbyville,<br/>
                                            TN, 37160-0189<br/>
                                    </address>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="product-data">
                                        <img src=".resources/website/webresources/img/pen.png" />
                                        <h3 className="product-name">Paragon Pen Test 1</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                        <h2>Quantity Information:</h2>
                                        <table className="quantity-summary">
                                            <tbody>
                                                <tr>
                                                    <td className="heading">Main Quantity</td>
                                                    <td>50</td>
                                                </tr>
                                                <tr>
                                                    <td className="heading">Free Quantity</td>
                                                    <td>25</td>
                                                </tr>
                                                <tr>
                                                    <td className="heading">Upsell Quantity</td>
                                                    <td>20</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xs-12">
                                    
                                        <table className="price-summary">
                                            <tbody>
                                                    <tr>
                                                        <td className="heading">Prodct subtotal</td>
                                                        <td>$7000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="heading">Shipping Charge</td>
                                                        <td>$50</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="heading">Setup Charge</td>
                                                        <td>$25</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="heading">VAT</td>
                                                        <td>$25</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="heading">Total Price</td>
                                                        <td>$7100</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-primary">Check out - Pay Later</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderSummary;
