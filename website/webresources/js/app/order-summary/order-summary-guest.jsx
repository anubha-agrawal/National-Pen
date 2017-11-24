import React, { Component } from "react";

class OrderSummaryGuest extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="container top-gutter">
                <div className="box">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-xs-12">

                                <table>
                                    <tbody>
                                        <tr>
                                            <td><h4>Order Summary:</h4></td>
                                            <td><h4><span className="primary-text">&nbsp; $500</span></h4></td>
                                        </tr>
                                        <tr>
                                            <td><h4>No of Product:</h4></td>
                                            <td><h4><span className="primary-text">&nbsp; 50</span></h4></td>
                                        </tr>
                                        <tr>
                                            <td><h4>Total Price: </h4></td>
                                            <td><h4><span className="primary-text">&nbsp; $500</span></h4></td>
                                        </tr>
                                    </tbody>
                                </table>
                                   
                                

                                
                                <hr />
                                <form>
                                    <div className="row">
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input type="text" className="form-control" id="username" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <p className="inline-form-button"><label>Sign In</label></p>
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <hr/>


                                <form>
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="firstname">Firstname</label>
                                                <input type="text" className="form-control" id="firstname" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="lastname">Lastname</label>
                                                <input type="text" className="form-control" id="lastname" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" className="form-control" id="email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input type="text" className="form-control" id="phone" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="shipingBillingAddress">
                                                    <input type="checkbox" name="price" value="shipingBillingAddress"
                                                    id="shipingBillingAddress" /> Shiping and Billing Address
                                                </label>
                                            </div>
                                        </div>
                                    
                                      
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="adrs1">Address line 1</label>
                                                <input type="text" className="form-control" id="adrs1" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="adrs2">Address line 2</label>
                                                <input type="text" className="form-control" id="adrs2" />
                                            </div>
                                        </div>
                                       
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <select className="form-control" id="city">
                                                    <option value="" defaultValue>-- Select --</option>
                                                    <option value="city1">City 1</option>
                                                    <option value="city2">City 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="zipCode">Zip Code</label>
                                                <input type="text" className="form-control" id="zipCode" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <select className="form-control" id="country">
                                                    <option value="" defaultValue>-- Select --</option>
                                                    <option value="uk">UK</option>
                                                    <option value="jp">JP</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <hr/>
                                        </div>
                                      
                                        <div className="col-xs-12 text-right">
                                            <button type="submit" className="btn btn-primary"> Guest Checkout</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderSummaryGuest;
