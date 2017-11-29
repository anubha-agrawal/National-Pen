import React, { Component } from "react";
import OrderSummaryBox from './order-summary-box.jsx';
import ShoppingCartButtons from './shopping-cart-buttons.jsx';
import CartItem from './cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from "../loader/loader.jsx";

class ShoppingCartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullCart: undefined,
      cartItems: [],
      orderDetails: {
      },
      isLoader: true,
    };
  }
  componentWillMount() {
    Abc.order.getCart(window.user_id, false).then(function (res) {
      isLoader: false;
      let cartItem = {}, orderDetail = {}, lineItemsUpsell=[];
<<<<<<< Updated upstream
      
      if (res.id) {        // Valid Cart, Store it for further use   
=======

      let cartArray = [];
      if (res.id) {        // Valid Cart, Store it for further use
>>>>>>> Stashed changes
        console.log("sandeep7-0515-4ba8-be12-5aef76be8225", res)
        console.log("test ",lineItemsUpsell)
        let cartMeta = {
          id: res.id,
          version: res.version
        }
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
  handleDeleteProject(id) {
    console.log("%%%%%")
    let lineItemIdArray = [];
    let lineItemsId = {};
    let cart = this.state.fullCart; // Full Cart Object from last response.
    lineItemIdArray.push(id)
    for (let i = 0; i < cart.lineItems.length; i++) {
      console.log("in frst loop", cart.lineItems[i]);
      if (cart.lineItems[i].custom.fields.lineItemType.toLowerCase() == "upsell" || cart.lineItems[i].custom.fields.lineItemType.toLowerCase() == "free") {
        console.log("id",id);
        if (cart.lineItems[i].custom.fields.lineItemIdReference == id) {
          console.log("in loop", cart.lineItems[i].id);
          lineItemIdArray.push(cart.lineItems[i].id);
        }
      }
    }
    console.log("lineItemIdArray", lineItemIdArray)
    Abc.order.removeCartItems(this.state.cartMeta, lineItemIdArray).then(res1 => {
      if (!res1.error) {
        //let item = this.state.cartItems;
        //let index = item.findIndex(x => x.id === id);
        //item.splice(index, 1);
        //this.setState({ cartItems: item });
        this.setState({
          fullCart: res1,
          cartMeta: {id:res1.id, version:res1.version}
        })

      }
      if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
        console.log(res)
        this.setState({cartMeta: {id:res1.id, version:res1.version}})
      }
      console.log('New Cart Data', JSON.stringify(res1));
      console.log('cartMeta', { id: res1.id, version: res1.version });
    });

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

<<<<<<< Updated upstream
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
=======
        for (let m = 0; m < cartArray.length; m++) {
          if (!cartArray[m].hasOwnProperty("upsellQuantity")) {
            for (let i = 0; i < res.lineItems.length; i++) {
              let customFields = Object.assign({},res.lineItems[i].custom.fields);
              if(customFields.lineItemNumber){
                  delete customFields.lineItemNumber;
              }
              customFields.lineItemType = "Upsell";                      // use one of these ENUMs : mainItem / Free / Upsell
              customFields.itemCreationTimeStamp = (new Date()).toISOString();
              customFields.lineItemIdReference = cartArray[m].id;

              lineItemsUpsell = [{
                  productId: res.lineItems[i].productId,
                  currencyCode: res.lineItems[i].totalPrice.currencyCode,
                  externalTotalCentAmount: 3 * 600,
                  customFields: customFields,
                  variantId: res.lineItems[i].variant.id
              }];

              if (cartArray[m].id == res.lineItems[i].id) {
                let upsellInfo = res.lineItems[i].price.custom.fields.UpSellQuantityAndPrice;
                let upsellBreakup = [];
                for (let z = 0; z < upsellInfo.length; z++) {

                  upsellBreakup = upsellInfo[z].split("::");
                  if (upsellBreakup[0] == cartArray[m].quantity) {
                    console.log("i am in")
                    cartArray[m].upsellQuantity = upsellBreakup[1];
                    cartArray[m].upsellPrice = upsellBreakup[2] / 100;
                    cartArray[m].isUpsellAdded = false;

                    lineItemsUpsell[0].quantity = upsellBreakup[1];
                    console.log("test 1",lineItemsUpsell)
                    lineItemsUpsell[0].externalTotalCentAmount = upsellBreakup[2];
                    console.log("test ",lineItemsUpsell)
                  }
                }
>>>>>>> Stashed changes
              }
            }
          }
          itemUpsell.quantity = parseInt(cartItem.upsellQuantity);
          itemUpsell.externalTotalCentAmount = cartItem.upsellPrice * parseInt(cartItem.upsellQuantity);
          lineItemsUpsell.push(itemUpsell);
        }
<<<<<<< Updated upstream
=======


        console.log("test ",lineItemsUpsell)
        this.setState({ cartItems: cartArray, orderDetails: orderDetail, fullCart: res, isLoader: false, cartMeta: cartMeta,
                      lineItemsUpsell: lineItemsUpsell});


        cartArray = [];
    //   Abc.order.removeCartItems(this.state.cartMeta, ["e34fbafa-de73-4947-bd8e-6637e771e52e"]).then(res1 => {
    //   if (!res1.error) {
    //     let item = this.state.cartItems;
    //     let index = item.findIndex(x => x.id === id);
    //     item.splice(index, 1);
    //     this.setState({ cartItems: item });

    //   }
    //   if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
    //     console.log(res)
    //   }
    //   console.log('New Cart Data', JSON.stringify(res1));
    //   console.log('cartMeta', { id: res1.id, version: res1.version });
    // });

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <h1>Shopping cart</h1>
              <p className="text-muted">You currently have {cartItems.length} item(s) in your cart.</p>
              {cartItems.map((item, index) => <CartItem key={index} updateParentCartMetaData={this.updateCartMetaData.bind(this)} deleteItem={this.handleDeleteProject.bind(this)} key={index} cartItem={item} cartMeta={this.state.cartMeta}  lineItemsUpsell = {this.getLineItemUpsell(item,this.state.fullCart)}/>)}
              <ShoppingCartButtons showProceed={cartItems.length} />
=======
               {this.props.miniBasketPopup==false?<h1>Shopping cart</h1>:''}
              <p className="text-muted">You currently have {this.state.cartItems.length} item(s) in your cart.</p>
              {this.state.cartItems.map((item, index) => <CartItem deleteItem={this.handleDeleteProject.bind(this)} key={index} cartItem={item} cartMeta={this.state.cartMeta}  lineItemsUpsell = {this.state.lineItemsUpsell}/>)}

              {this.props.miniBasketPopup==false?
                   <ShoppingCartButtons showProceed={this.state.cartItems.length} />
            :<div className="clear"></div>}
>>>>>>> Stashed changes
            </form>

          </div>
          {/* /box */}


        </div>
        {/* /.col-md-9*/}
<<<<<<< Updated upstream
        <div className="col-md-3">
          {cartItems.length ? <OrderSummaryBox orderDetails={orderDetails} isShippingChargesView="false" /> : ""}

        </div>
=======
        {this.props.miniBasketPopup==false?
             <div className="col-md-3">
               {this.state.cartItems.length ? <OrderSummaryBox orderDetails={this.state.orderDetails} /> : ""}
             </div>
        :''}
>>>>>>> Stashed changes
        {/* /.col-md-3 */}
      </div>
    );
  }
}
export default ShoppingCartDetails;
