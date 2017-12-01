import React, { Component } from 'react';
import OrderSummaryBox from './order-summary-box.jsx';
import ShoppingCartButtons from './shopping-cart-buttons.jsx';
import CartItem from './cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from '../loader/loader.jsx';

class ShoppingCartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullCart: undefined,
            cartItems: [],
            orderDetails: {
            },
            isLoader: true
        };
    }
    
    componentWillMount() {
        Abc.order.getCart(window.user_id, false).then(res => {
            false;
            let cartItem = {}, orderDetail = {}, lineItemsUpsell=[];

            if (res.id) {        // Valid Cart, Store it for further use

                let cartMeta = {
                    id: res.id,
                    version: res.version
                };
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
    handleDeleteProject(id) {
        let lineItemIdArray = [];
        let lineItemsId = {};
        let cart = this.state.fullCart; // Full Cart Object from last response.
        lineItemIdArray.push(id);
        for (let i = 0; i < cart.lineItems.length; i++) {
            if (cart.lineItems[i].custom.fields.lineItemType.toLowerCase() == 'upsell' || cart.lineItems[i].custom.fields.lineItemType.toLowerCase() == 'free') {
                if (cart.lineItems[i].custom.fields.lineItemIdReference == id) {
                    lineItemIdArray.push(cart.lineItems[i].id);
                }
            }
        }
        Abc.order.removeCartItems(this.state.cartMeta, lineItemIdArray).then(res1 => {
            if (!res1.error) {
                //let item = this.state.cartItems;
                //let index = item.findIndex(x => x.id === id);
                //item.splice(index, 1);
                //this.setState({ cartItems: item });
                this.setState({
                    fullCart: res1,
                    cartMeta: { id:res1.id, version:res1.version }
                });

            }
            if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
                this.setState({ cartMeta: { id:res1.id, version:res1.version } });
            }
            console.log('New Cart Data', JSON.stringify(res1));
            console.log('cartMeta', { id: res1.id, version: res1.version });
        });

    }
    updateCartMetaData(metaObj, res) {
        this.setState({ cartMeta: metaObj, fullCart: res });
    }

    processLineItem(res, localeDeails) {
        console.log("in method", res)
        let languageCode = localeDeails.language;
        let currencyCode = localeDeails.currency;
        let countryCode = localeDeails.country_code;
        
        let cartArray = [];
        let cartItem = {};
        if(res) {
            for (let i = 0; i < res.lineItems.length; i++) {
                
                if (res.lineItems[i].custom.fields.lineItemType == 'mainItem') {
                    let userSelections = Abc.order.setOfStringsToObject((res.lineItems[i].custom && res.lineItems[i].custom.fields.userSelection) ? res.lineItems[i].custom.fields.userSelection : []);
                    cartItem = {
                        'id': res.lineItems[i].id,
                        'productName': res.lineItems[i].name[languageCode],
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
                            console.log('i am in');
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

    render() {
        let cartItems = this.processLineItem(this.state.fullCart, this.props.locale_details);
        let orderDetails = this.processLineItemForOrderDetails(this.state.fullCart);

        return (
            <div className="container top-gutter">
                {
                    this.state.isLoader
                        ? <Loader />
                        : null
                }
                {/*<div className="col-md-12">
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a>
                        </li>
                        <li>Shopping cart</li>
                    </ul>
                </div>*/}

                <div className="col-md-9" id="basket">

                    <div className="box">

                        <form method="post" action="checkout1.html">
                            {this.props.miniBasketPopup==false?<h1>{this.props.lang.pageTitle}</h1>:''}
                            <p className="text-muted">{this.props.lang.currentItemBefore} {cartItems.length} {this.props.lang.currentItemAfter}</p>
                            {cartItems.map((item, index) => <CartItem key={index} lang={this.props.lang} updateParentCartMetaData={this.updateCartMetaData.bind(this)} deleteItem={this.handleDeleteProject.bind(this)} key={index} cartItem={item} cartMeta={this.state.cartMeta}  lineItemsUpsell = {this.getLineItemUpsell(item, this.state.fullCart)}/>)}

                            {this.props.miniBasketPopup==false?
                                <ShoppingCartButtons lang={this.props.lang} showProceed={cartItems.length} />
                                :<div className="clear"></div>}
                        </form>

                    </div>
                    {/* /box */}

                </div>
                {/* /.col-md-9*/}
                {this.props.miniBasketPopup==false?
                    <div className="col-md-3">
                        {cartItems.length ? <OrderSummaryBox lang={this.props.lang} orderDetails={orderDetails} isShippingChargesView="false" /> : ''}
                    </div>
                    :''}
                {/* /.col-md-3 */}
            </div>
        );
    }
}
export default ShoppingCartDetails;
