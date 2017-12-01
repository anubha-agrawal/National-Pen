import React, { Component } from 'react';
import OrderSummaryBox from '../shopping-cart-details/order-summary-box.jsx';
import CartItem from '../shopping-cart-details/cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from '../loader/loader.jsx';

class OrderSummaryGuest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isCoupenExist': false,
            'isShippingCharge': false,
            'cartId': '',
            'versionNo': '',
            'cartItems': [],
            'fullCart': undefined,
            'orderDetails': {},
            'firstName': '', 
            'lastName': '',
            'email': '', 
            'phone': '', 
            'streetName': '', 
            'additionalStreetInfo': '', 
            'city': '', 
            'postalCode': '', 
            'country': this.props.locale_details.country_code,           
            'isLoader': false
        };

        this.AddAddressToCart = this.AddAddressToCart.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

    }

    componentWillMount() {
        this.changeGenericHandler('isLoader', true);
        Abc.order.getCart(window.user_id, false).then(res => {
            false;
            let cartItem = {}, orderDetail = {}, lineItemsUpsell=[];

            if (res.id) {        // Valid Cart, Store it for further use
                console.log('sandeep7-0515-4ba8-be12-5aef76be8225', res);
                console.log('test ', lineItemsUpsell);
                let cartMeta = {
                    id: res.id,
                    version: res.version
                };
                /* Update by jay */
                this.setState({ cartId: res.id });
                this.setState({ versionNo: res.version });
                /*****/

                this.setState({ fullCart: res, isLoader: false, cartMeta: cartMeta,
                    lineItemsUpsell: lineItemsUpsell });

            }
            if (res.statusCode == 404) {
            // res.statusCode == 404 if no cart exists
            //no items in cart
                this.setState({ isLoader: false });
            }
        });
    }

    updateCartMetaData(metaObj, res) {
        console.log('prateek ->>>>>>>>>>>>>>> ', res);
        this.setState({ cartMeta: metaObj, fullCart: res });
    }

    processLineItem(res) {
        let cartArray = [];
        let cartItem = {};
        if(res) {
            for (let i = 0; i < res.lineItems.length; i++) {

                if (res.lineItems[i].custom.fields.lineItemType == 'mainItem') {
                    let userSelections = Abc.order.setOfStringsToObject((res.lineItems[i].custom && res.lineItems[i].custom.fields.userSelection) ? res.lineItems[i].custom.fields.userSelection : []);
                    cartItem = {
                        'id': res.lineItems[i].id,
                        'productName': res.lineItems[i].name.en,
                        'quantity': res.lineItems[i].quantity,
                        'unitPrice': res.lineItems[i].totalPrice.centAmount / res.lineItems[i].quantity / 100,
                        'userSelections': userSelections,
                        'currencyCode': getSymbolFromCurrency(res.lineItems[i].price.value.currencyCode),
                        'total': res.lineItems[i].totalPrice.centAmount / 100
                    };
                    cartArray.push(cartItem);
                } else if (res.lineItems[i].custom.fields.lineItemType == 'Upsell') {
                    for (let k = 0; k < cartArray.length; k++) {
                        if (cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference) {
                            cartArray[k].upsellQuantity = res.lineItems[i].quantity;
                            cartArray[k].upsellPrice = res.lineItems[i].price.value.centAmount / 100;
                            cartArray[k].isUpsellAdded = true;
                            cartArray[k].upsellId = res.lineItems[i].id;
                        }
                    }
                } else if (res.lineItems[i].custom.fields.lineItemType == 'Free') {
                    for (let k = 0; k < cartArray.length; k++) {
                        if (cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference) {
                            cartArray[k].freeQuantity = res.lineItems[i].quantity;
                        }
                    }
                }
            }
        }

        return cartArray;

    }

    getLineItemUpsell(cartItem, res) {
        let lineItemsUpsell = [];
        let itemUpsell = {};

        //for (let m = 0; m < cartArray.length; m++) {
        if (!cartItem.hasOwnProperty('upsellQuantity')) {
            for (let i = 0; i < res.lineItems.length; i++) {
                let customFields = Object.assign({}, res.lineItems[i].custom.fields);
                if(customFields.lineItemNumber) {
                    delete customFields.lineItemNumber;
                }
                customFields.lineItemType = 'Upsell';                      // use one of these ENUMs : mainItem / Free / Upsell
                customFields.itemCreationTimeStamp = (new Date()).toISOString();
                customFields.lineItemIdReference = cartItem.id;

                itemUpsell = {
                    productId: res.lineItems[i].productId,
                    currencyCode: res.lineItems[i].totalPrice.currencyCode,
                    externalTotalCentAmount: 3 * 600,
                    customFields: customFields,
                    variantId: res.lineItems[i].variant.id,
                    mainItemId : res.lineItems[i].id
                };

                if (cartItem.id == res.lineItems[i].id) {
                    let upsellInfo = res.lineItems[i].price.custom.fields.UpSellQuantityAndPrice;
                    let upsellBreakup = [];
                    for (let z = 0; z < upsellInfo.length; z++) {
                        upsellBreakup = upsellInfo[z].split('::');
                        if (upsellBreakup[0] == cartItem.quantity) {

                            cartItem.upsellQuantity = upsellBreakup[1];
                            cartItem.upsellPrice = upsellBreakup[2] / 100;
                            cartItem.isUpsellAdded = false;

                            itemUpsell.quantity = upsellBreakup[1];
                            itemUpsell.externalTotalCentAmount = upsellBreakup[2];
                        }
                    }
                }
                itemUpsell.quantity = parseInt(cartItem.upsellQuantity);
                itemUpsell.externalTotalCentAmount = cartItem.upsellPrice * parseInt(cartItem.upsellQuantity);
                lineItemsUpsell.push(itemUpsell);
            }
        }
        //}
        return lineItemsUpsell;
    }

    processLineItemForOrderDetails(res) {
        let orderDetails = {};
        if(res) {
            orderDetails = {
                'subTotal': res.totalPrice.centAmount / 100,
                'shippingCharge': 0,
                'setupCharge': 0,
                'VAT': 0,
                'discount': 0,
                'currencyCode': getSymbolFromCurrency(res.totalPrice.currencyCode),
                'total': res.totalPrice.centAmount / 100
            };
        }
        return orderDetails;
    }

    /* Return Customer Address Data */
    getCustomerData() {
        let customerAddressData = {
            'firstName': this.state.firstName, 
            'lastName':  this.state.lastName,
            'email': this.state.email,
            'phone': this.state.phone, 
            'streetName': this.state.streetName, 
            'additionalStreetInfo': this.state.additionalStreetInfo, 
            'city': this.state.city, 
            'postalCode': this.state.postalCode, 
            'country': 'GB' //(this.props.locale_details.country_code).toUpperCase()   
        };

        return customerAddressData;
    }

    _handleSubmit(event){
         event.preventDefault();

         console.log("firstName->",this._firstName.value);
         console.log("lastName->",this._lastName.value);
         console.log("email->",this._email.value);
/*
         if(this._firstName.value=="") this._firstName.setCustomValidity('Please enter first name!');
         if(this._lastName.value=="") this._lastName.setCustomValidity('Please enter last name!');
         if(this._email.value=="") this._email.setCustomValidity('Please enter email address!');
         if(this._phone.value=="") this._email.setCustomValidity('Please enter phone number!');

         if(this._streetName.value=="") this._email.setCustomValidity('Please enter address line 1 !');
         if(this._city.value=="") this._city.setCustomValidity('Please enter city !');
         if(this._postalCode.value=="") this._city.setCustomValidity('Please postal code !');
*/
         console.log("yahoo..");

         return false;
    }

    /* Add Shipping & Billing Address */
    AddAddressToCart(event) {
        event.preventDefault();
        this.changeGenericHandler('isLoader', true);
        let cartId = this.state.cartId;
        let versionNo = this.state.versionNo;
        let setDefault = true;
        let cartMeta = {  id: cartId,  version: versionNo };
        let customerAddressData = this.getCustomerData();

        let actions = [
            {
                'action':'setShippingAddress',
                'address': customerAddressData
            },
            {
                'action':'setBillingAddress',
                'address': customerAddressData
            },
            {
                'action': 'setCustomField',
                'name': 'shippingAtLineItemLevel',
                'value': false
            }
        ];
        console.log(JSON.stringify(cartMeta));
        console.log(JSON.stringify(actions));

        window.Abc.order.updateCart(cartMeta, actions).then(res => {
            this.changeGenericHandler('isLoader', false);
            console.log('Updated Cart Result', JSON.stringify(res));
            console.log('cartMeta', { id:res.id, version:res.version });
            if(res.id) {
                window.location.href = 'order-summary';
            }else{
                console.log();
            }

        });
    }

    /* Generic State change handler */
    changeGenericHandler(key, value) {
        this.setState({ [key]: value });
    }

    /* Address State change handler */
    changeAddressHandler(e) {
        let name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    render() {
        let cartItems = this.processLineItem(this.state.fullCart);
        let orderDetails = this.processLineItemForOrderDetails(this.state.fullCart);

        return (

            <div className="container top-gutter ">
                {
                    this.state.isLoader
                        ? <Loader />
                        : null
                }
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box" >
                            <div className="box-header">
                                <h1>{this.props.lang.checkout}</h1>
                            </div>

                            <div className="">

                                <form name="loginForm">
                                    <div className="row">
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="username">{this.props.lang.username}</label>
                                                <input type="text" className="form-control" id="username" placeholder={this.props.lang.username} value="" disabled/>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="password">{this.props.lang.password}</label>
                                                <input type="password" className="form-control" id="password" placeholder={this.props.lang.password} value="" disabled />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="form-group">
                                                <p className="inline-form-button"><label>{this.props.lang.login}</label></p>
                                                <button type="button" disabled className="btn btn-primary"><i className="fa fa-sign-in"></i> {this.props.lang.login}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-9 col-xs-12" id="checkout">
                        <div className="box">
                            <div className="product-view">
                                {cartItems.map((item, index) => <CartItem key={index} updateParentCartMetaData={this.updateCartMetaData.bind(this)} isProductReadonlyView="true" key={index} cartItem={item} cartMeta={this.state.cartMeta}  lineItemsUpsell = {this.getLineItemUpsell(item, this.state.fullCart)}/>)}

                            </div>
                            <hr/>
                            <form name="addressForm" onSubmit={this.AddAddressToCart}>
                                <p className="text-muted">{this.props.lang.address_heading}</p>
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="firstName">{this.props.lang.firstname}</label>
                                            <input
                                                type="text" className="form-control"
                                                id="firstName"
                                                onChange={this.changeAddressHandler}
                                                name="firstName"
                                                placeholder={this.props.lang.firstname}
                                                value={this.state.firstName} required />
                                        </div>

                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="lastName">{this.props.lang.lastname}</label>
                                            <input type="text" className="form-control"
                                                id="lastName"
                                                onChange={this.changeAddressHandler}
                                                name="lastName"
                                                placeholder={this.props.lang.lastname}
                                                value={this.state.lastName} required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="email">{this.props.lang.email}</label>
                                            <input type="email" className="form-control"
                                                id="email"
                                                onChange={this.changeAddressHandler}
                                                name="email"
                                                placeholder={this.props.lang.email}
                                                value={this.state.email} required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">{this.props.lang.phone}</label>
                                            <input type="number" className="form-control"
                                                id="phone"
                                                onChange={this.changeAddressHandler}
                                                name="phone"
                                                placeholder={this.props.lang.phone}
                                                value={this.state.phone}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="shipingBillingAddress">
                                                <input type="checkbox" name="price" disabled defaultChecked value="shipingBillingAddress"
                                                    id="shipingBillingAddress" /> {this.props.lang.sb_address}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="adrs1">{this.props.lang.addressline1}</label>
                                            <input type="text" className="form-control"
                                                id="adrs1"
                                                onChange={this.changeAddressHandler}
                                                name="streetName"
                                                placeholder={this.props.lang.addressline1}
                                                value={this.state.streetName} required/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="adrs2">{this.props.lang.addressline2}</label>
                                            <input type="text" className="form-control" id="adrs2"
                                                onChange={this.changeAddressHandler}
                                                name="additionalStreetInfo"
                                                placeholder={this.props.lang.addressline2}
                                                value={this.state.additionalStreetInfo}/>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="city">{this.props.lang.city}</label>
                                            <input type="text" className="form-control" id="city"
                                                onChange={this.changeAddressHandler}
                                                name="city"
                                                placeholder={this.props.lang.city}
                                                value={this.state.city} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="zipCode">{this.props.lang.zip}</label>
                                            <input type="text" className="form-control" id="zipCode"
                                                onChange={this.changeAddressHandler}
                                                name="postalCode"
                                                placeholder={this.props.lang.zip}
                                                value={this.state.postalCode} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="country">{this.props.lang.country}</label>
                                            <input type="text" className="form-control caps" id="country" readOnly value={this.state.country} required />
                                        </div>
                                    </div>

                                </div>

                                <div className="box-footer">
                                    <div className="pull-left">
                                        <a href="basket.html" className="btn btn-default"><i className="fa fa-chevron-left"></i> {this.props.lang.back_to_shoping_cart}</a>
                                    </div>
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-primary">{this.props.lang.checkout}<i className="fa fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">

                        {cartItems.length ? <OrderSummaryBox orderDetails={orderDetails} isProductReadonlyView="true" isShippingChargesView="false" /> : ''}
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderSummaryGuest;
