import React, { Component } from "react";

let lang_data = window.product_details;

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.AddToCart = this.AddToCart.bind(this);
  }

  /**
	 *  This will return Date + 2 days, excluding `Sat & Sunday`
	 */
	getPromisedArrivalDate(){
		let addDays = 2;
		let now = new Date();
		var i = 0;
		while (i < addDays) {
			now.setDate(now.getDate() + 1);
			var day = now.getDay();
			if (day > 0 && day < 6) {
				i++;
			}
		}
		return now.toISOString();
	}

     createCartByItems(lineItemData, cartInfo, lineItemNumber,varianInfoData, userId, isLoggedIn){
          console.log('Calling createCartByItems');
          window.Abc.order.createCartByItems(lineItemData, cartInfo, userId, isLoggedIn).then(function(res){
               console.log('Calling addItemsInCart');
               let lineItems = res.lineItems.filter(item => item.custom.fields.lineItemNumber == lineItemNumber);
               let lineItem = lineItems[0];

              console.log('CreateCartByItems New Cart Data', (res));
              this.addItemsInCart(res, lineItem, lineItemNumber,varianInfoData, "Free");
          }.bind(this));
     }

     addItemsInCart(res, lineItemData, lineItemNumber, varianInfoData, itemType){

          console.log('Calling addItemsInCart');
          let lineItems = res.lineItems.filter(item => item.custom.fields.lineItemNumber == lineItemNumber);
          let lineItem = lineItems[0];
          console.log("addItemsInCart lineItem-->",lineItem);

          if(itemType.toLowerCase()=="mainitem"){
               console.log("addItemsInCart: add main item in cart");
               window.Abc.order.addItemsInCart(res, lineItemData).then(function(res){
                   console.log('addItemsInCart: New Cart Data', (res));
                   console.log('cartMeta', {id:res.id, version:res.version});
                   if(parseInt(res.statusCode) != 404){
                        let dlineItems = res.lineItems.filter(item => item.custom.fields.lineItemNumber == lineItemNumber);
                        lineItem = dlineItems[0];
                        console.log("addItemsInCart lineItem-->",lineItem);
                        let updatedLineItems = [{
                              productId: lineItem.productId,
                              quantity: (lineItem.quantity/2),   //  Numeric
                              currencyCode: lineItem.totalPrice.currencyCode,
                              externalTotalCentAmount: 0,  // Total Cost
                              userSelection: Abc.order.setOfStringsToObject(lineItem.custom.fields.userSelection),
                              customFields: {
                                  mcpProductName: lineItem.custom.fields.mcpProductName,
                                  merchandisingProductName: lineItem.custom.fields.merchandisingProductName,
                                  lineItemType: "Free",                        // use one of these ENUMs : mainItem / Free / Upsell
                                  itemCreationTimeStamp: (new Date()).toISOString(),
                                  lineItemIdReference: lineItem.id,
                              },
                              variantInfo:varianInfoData
                          }];
                           this.addItemsInCart(res, lineItem, lineItemNumber, this.props.variantInfo, "Free");
                  }
               }.bind(this));
          }else if(itemType.toLowerCase()=="free"){
               console.log("add free item in cart");

          let updatedLineItems = [{
                productId: lineItem.productId,
                quantity: (lineItem.quantity/2),   //  Numeric
                currencyCode: lineItem.totalPrice.currencyCode,
                externalTotalCentAmount: 0,  // Total Cost
                userSelection: Abc.order.setOfStringsToObject(lineItem.custom.fields.userSelection),
                customFields: {
                    mcpProductName: lineItem.custom.fields.mcpProductName,
                    merchandisingProductName: lineItem.custom.fields.merchandisingProductName,
                    lineItemType: "Free",                        // use one of these ENUMs : mainItem / Free / Upsell
                    itemCreationTimeStamp: (new Date()).toISOString(),
                    lineItemIdReference: lineItem.id,
                },
                variantInfo:varianInfoData
            }];

            window.Abc.order.addItemsInCart(res, updatedLineItems).then(function(res){
                console.log('New Cart Data', res);
                console.log('cartMeta', {id:res.id, version:res.version});
                window.location.href="shopping-cart-details";
            });
          }else{
               console.log("There is no type defined!");
               return;
          }

     }


  /* create new cart and add new item in cart execution */
  AddToCart(e){
    e.preventDefault();

    let userId = window.user_id;
    let isLoggedIn = false;
    let designerData = null;
    let taxMode = null;
    let lineItemNumber = (new Date()).getTime().toString();
    let variantInfo = this.props.variantInfo;

    let lineItem = [{
        productId: this.props.id,
        quantity: parseInt(this.props.quantity),   //  Numeric
        currencyCode: this.props.currencyCode,
        userSelection: this.props.userSelection,
        customFields: {
            mcpProductName: this.props.mcpProductName,               // pass `product.mcpProductName` if exists
            merchandisingProductName: this.props.mcpProductName,   // product name from product page (this may / may not be same as product name)
            lineItemType: "mainItem",                       // use one of these ENUMs : mainItem / Free / Upsell
            lineItemNumber: lineItemNumber,
            itemCreationTimeStamp: (new Date()).toISOString()
        },
        variantInfo: this.props.variantInfo
    }];

    let cartInfo = {
        currency: (this.props.locale_details.currency).toUpperCase(),
        country: (this.props.locale_details.country_code).toUpperCase()
    };

    window.Abc.order.getCart(userId, isLoggedIn).then(function(res){
      if(parseInt(res.statusCode) != 404){
               this.addItemsInCart(res, lineItem, lineItemNumber, this.props.variantInfo, "mainItem");
      }else{
          this.createCartByItems(lineItem, cartInfo, lineItemNumber, this.props.variantInfo, userId, isLoggedIn);
	}
    }.bind(this));

  }


  render() {
    return (
       <button className="btn btn-primary" onClick={this.AddToCart}
       disabled={!this.props.quantity}>
        <i className="fa fa-shopping-cart" ></i> {lang_data.add_to_cart}
       </button>
    );
  }
}
export default AddToCartButton;
