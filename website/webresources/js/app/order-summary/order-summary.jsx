import React, { Component } from "react";
import OrderSummaryBox from '../shopping-cart-details/order-summary-box.jsx';
import CartItem from '../shopping-cart-details/cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from "../loader/loader.jsx";

class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isCoupenExist": false,
            "isShippingCharge": true,
            "fullCart": undefined,
            "cartItems": [],
            "orderDetails": {},
            "shippingAddress":'',
            "billingAddress": '',
            "isLoader": true,
          };
    }

    componentWillMount() { 
      Abc.order.getCart(window.user_id, false).then(function (res) {
        isLoader: false;
        let cartItem = {}, orderDetail = {}, lineItemsUpsell=[];
        
        if (res.id) {        // Valid Cart, Store it for further use   
          console.log("sandeep7-0515-4ba8-be12-5aef76be8225", res)
          console.log("test ",lineItemsUpsell)
          let cartMeta = {
            id: res.id,
            version: res.version
          }
           /* Update by jay */
           this.setState({ shippingAddress: res.shippingAddress });
           this.setState({ billingAddress: res.billingAddress });
           /*******/
          this.setState({ fullCart: res, isLoader: false, cartMeta: cartMeta, 
                        lineItemsUpsell: lineItemsUpsell});
  
      
        }
        if (res.statusCode == 404) { 
          // res.statusCode == 404 if no cart exists
          //no items in cart
          this.setState({ isLoader: false });
        }
      }.bind(this));
  }

  updateCartMetaData(metaObj, res){
      console.log('prateek ->>>>>>>>>>>>>>> ', res);
      this.setState({cartMeta: metaObj, fullCart: res});
  }

  processLineItem(res){
      let cartArray = [];
      let cartItem = {};
      if(res){
      for (let i = 0; i < res.lineItems.length; i++) {

          if (res.lineItems[i].custom.fields.lineItemType == "mainItem") {
          var userSelections = Abc.order.setOfStringsToObject((res.lineItems[i].custom && res.lineItems[i].custom.fields.userSelection) ? res.lineItems[i].custom.fields.userSelection : []);
          cartItem = {
              "id": res.lineItems[i].id,
              "productName": res.lineItems[i].name.en,
              "quantity": res.lineItems[i].quantity,
              "unitPrice": res.lineItems[i].totalPrice.centAmount / res.lineItems[i].quantity / 100,
              "userSelections": userSelections,
              "currencyCode": getSymbolFromCurrency(res.lineItems[i].price.value.currencyCode),
              "total": res.lineItems[i].totalPrice.centAmount / 100
          }
          cartArray.push(cartItem);
          } else if (res.lineItems[i].custom.fields.lineItemType == "Upsell") {
          for (let k = 0; k < cartArray.length; k++) {
              if (cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference) {
              cartArray[k].upsellQuantity = res.lineItems[i].quantity;
              cartArray[k].upsellPrice = res.lineItems[i].price.value.centAmount / 100;
              cartArray[k].isUpsellAdded = true;
              cartArray[k].upsellId = res.lineItems[i].id;
              }
          }
          } else if (res.lineItems[i].custom.fields.lineItemType == "Free") {
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

  getLineItemUpsell(cartItem, res){
      let lineItemsUpsell = [];
      let itemUpsell = {};

      //for (let m = 0; m < cartArray.length; m++) {
      if (!cartItem.hasOwnProperty("upsellQuantity")) {
          for (let i = 0; i < res.lineItems.length; i++) {
              let customFields = Object.assign({},res.lineItems[i].custom.fields);
              if(customFields.lineItemNumber){
                  delete customFields.lineItemNumber;
              }
              customFields.lineItemType = "Upsell";                      // use one of these ENUMs : mainItem / Free / Upsell
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
                  upsellBreakup = upsellInfo[z].split("::");
                  if (upsellBreakup[0] == cartItem.quantity) {
                  console.log("i am in")
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

  processLineItemForOrderDetails(res){
      let orderDetails = {}
      if(res){
          orderDetails = {
              "subTotal": res.totalPrice.centAmount / 100,
              "shippingCharge": 0,
              "setupCharge": 0,
              "VAT": 0,
              "discount": 0,
              "currencyCode": getSymbolFromCurrency(res.totalPrice.currencyCode),
              "total": res.totalPrice.centAmount / 100
              }
      } 
      return orderDetails;
  }

    render() {
      let cartItems = this.processLineItem(this.state.fullCart);
      let orderDetails = this.processLineItemForOrderDetails(this.state.fullCart)
        return (
            <div className="container top-gutter">
                <div className="row">
                    <div className="col-md-9 col-xs-12" id="basket">
                            <div className="box">
                                    <div className="product-view">
                                    {cartItems.map((item, index) => <CartItem key={index} updateParentCartMetaData={this.updateCartMetaData.bind(this)} isProductReadonlyView="true" key={index} cartItem={item} cartMeta={this.state.cartMeta}  lineItemsUpsell = {this.getLineItemUpsell(item,this.state.fullCart)}/>)}
                                    </div>
                                    <hr/>
                              
                                
                                <div className="row addresses">
                                    <div className="col-md-6">
                                        <h3>Shipping Information</h3>
                                        <p>
                                            <b>{this.state.shippingAddress.firstName} {this.state.shippingAddress.lastName}
                                            <br/><a href={'mailto:'+ this.state.shippingAddress.email}>{this.state.shippingAddress.email}</a>
                                            <br/>{this.state.shippingAddress.phone}</b>
                                            <br/><br/>{this.state.shippingAddress.streetName}
                                            <br/>{this.state.shippingAddress.additionalStreetInfo}
                                            
                                            <br/>{this.state.shippingAddress.city} {this.state.shippingAddress.postalCode}
                                            <br/>{this.state.shippingAddress.country}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>Billing Information</h3>
                                        <p>
                                            <b>{this.state.billingAddress.firstName} {this.state.billingAddress.lastName}
                                            <br/><a href={'mailto:'+ this.state.shippingAddress.email}>{this.state.billingAddress.email}</a>
                                            <br/>{this.state.billingAddress.phone}</b>
                                            <br/><br/>{this.state.billingAddress.streetName}
                                            <br/>{this.state.billingAddress.additionalStreetInfo}
                                            
                                            <br/>{this.state.billingAddress.city} {this.state.billingAddress.postalCode}
                                            <br/>{this.state.billingAddress.country}
                                        </p>
                                    </div>
                                </div>
                                <div className="box-footer">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-primary">Checkout - Pay Later<i className="fa fa-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>

                                

                            </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        
                        {cartItems.length ? <OrderSummaryBox orderDetails={orderDetails} isProductReadonlyView="true"  /> : ""}
                    </div>
                </div>
               
            </div>
        );
    }
}
export default OrderSummary;
