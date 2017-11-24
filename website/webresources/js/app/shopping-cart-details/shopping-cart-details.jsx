import React, { Component } from "react";
import OrderSummary from './order-summary.jsx';
import ShoppingCartButtons from './shopping-cart-buttons.jsx';
import CartItem from './cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from "../loader/loader.jsx";

class ShoppingCartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullCart: {},
      cartItems: [],
      orderDetails: {
      },
      isLoader: true,
    };
  }
  componentWillMount() {
    // var userId = '3cfeddff-5af1-486a-bfc0-f89915c3b555'; // anonymousId or customerId
    // var isLoggedIn = false;
    // console.log('Calling Abc.order.getCart'); 
    Abc.order.getCart("sandeep7-0515-4ba8-be12-5aef76be8225", false).then(function (res) {
      isLoader: false,
        console.log('Cart Data Result', res);
      
      let cartItem = {}, orderDetail = {};
      let cartArray = [];
      if (res.id) {        // Valid Cart, Store it for further use   
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
              "total": res.lineItems[i].totalPrice.centAmount / 100,
            }
            cartArray.push(cartItem);
          } else if (res.lineItems[i].custom.fields.lineItemType == "Upsell") {
            for (let k = 0; k < cartArray.length; k++) {
              console.log("cartArray[k].id == res.lineItems[i]", res.lineItems[i].id)
              if (cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference) {
                cartArray[k].upsellQuantity = res.lineItems[i].quantity;
                cartArray[k].upsellPrice = res.lineItems[i].price.value.centAmount / 100;
                cartArray[k].isUpsellAdded = true;
              }
            }
          } else if (res.lineItems[i].custom.fields.lineItemType == "Free") {
            for (let k = 0; k < cartArray.length; k++) {
              if (cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference) {
                cartArray[k].freeQuantity = res.lineItems[i].quantity;
              }
            }
          }
          orderDetail = {
            "subtotal": res.totalPrice.centAmount / 100,
            "shippingCharge": 0,
            "setupCharge": 0,
            "VAT": 0,
            "discount": 0,
            "currencyCode": getSymbolFromCurrency(res.lineItems[i].price.value.currencyCode),
            "total": res.totalPrice.centAmount / 100
          }
        }

        //Adding cart meta Data
        let cartMeta = {
          id: res.id,
          version: res.version
        }
        console.log("cart array", cartArray);

        for (let m = 0; m < cartArray.length; m++) {
          if (!cartArray[m].hasOwnProperty("upsellQuantity")) {
            for (let i = 0; i < res.lineItems.length; i++) {
              if (cartArray[m].id == res.lineItems[i].id) {
                let upsellInfo = res.lineItems[i].price.custom.fields.UpSellQuantityAndPrice;
                let upsellBreakup = [];
                for (let z = 0; z < upsellInfo.length; z++) {
                  console.log("i am in")
                  upsellBreakup = upsellInfo[z].split("::");
                  console.log("upsellBreakup", upsellBreakup);
                  if (upsellBreakup[0] == cartArray[m].quantity) {
                    cartArray[m].upsellQuantity = upsellBreakup[1];
                    cartArray[m].upsellPrice = upsellBreakup[2] / 100;
                    cartArray[m].isUpsellAdded = false;
                  }
                }
              }
            }

          }
        }
        console.log("this cartItem new", cartArray);
        this.setState({ cartItems: cartArray, orderDetails: orderDetail, fullCart: res, isLoader: false, cartMeta: cartMeta });

        cartArray = [];

      }
      if (res.statusCode == 404) { // res.statusCode == 404 if no cart exists
        //no items in cart
        this.setState({ isLoader: false });
      }
    }.bind(this));
  }
  handleDeleteProject(id) {
    let lineItemIdArray = [];
    let lineItemsId = {};
    let cart = this.state.fullCart; // Full Cart Object from last response.
    let cartMeta = { id: cart.id, version: cart.version }
    lineItemIdArray.push(id)
    for (let i = 0; i < cart.lineItems.length; i++) {
      if (cart.lineItems[i].custom.fields.lineItemType == "Upsell" || cart.lineItems[i].custom.fields.lineItemType == "Free") {
        if (cart.lineItems[i].custom.fields.lineItemIdReference == id) {
          lineItemIdArray.push(cart.lineItems[i].id);
        }
      }
    }
    console.log(' will delete', lineItemIdArray);
    Abc.order.removeCartItems(cartMeta, lineItemIdArray).then(res1 => {
      if (!res1.error) {
        let item = this.state.cartItems;
        let index = item.findIndex(x => x.id === id);
        item.splice(index, 1);
        this.setState({ cartItems: item });

      }
      if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
        console.log(res)
      }
      console.log('New Cart Data', JSON.stringify(res1));
      console.log('cartMeta', { id: res1.id, version: res1.version });
    });

  }

  render() {
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
              <h1>Shopping cart</h1>
              <p className="text-muted">You currently have {this.state.cartItems.length} item(s) in your cart.</p>
              {this.state.cartItems.map((item, index) => <CartItem deleteItem={this.handleDeleteProject.bind(this)} key={index} cartItem={item} cartMeta={this.state.cartMeta} />)}
              <ShoppingCartButtons showProceed={this.state.cartItems.length} />
            </form>

          </div>
          {/* /box */}


        </div>
        {/* /.col-md-9*/}
        <div className="col-md-3">
          {this.state.cartItems.length ? <OrderSummary orderDetails={this.state.orderDetails} /> : ""}

        </div>
        {/* /.col-md-3 */}
      </div>
    );
  }
}
export default ShoppingCartDetails;
