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

  /* create new cart and add new item in cart execution */
  AddToCart(e){
    e.preventDefault();

    let userId = '3cfeddff-5af1-486a-bfc0-f89915c3b555';
    let isLoggedIn = false;
    let designerData = null;
    let taxMode = null;
    //let taxRate  =  {name: "ABC-platform", country: "UK", amount: 0.02};
    let lineItem = {
			productId: this.props.id,
			quantity: parseInt(this.props.quantity),
			currencyCode: this.props.currencyCode,
    	externalTotalCentAmount: this.props.externalTotalCentAmount,
			userSelection: this.props.userSelection,
		  mcpProductName: this.props.mcpProductName,
			// @todo: making this workaround as we have pricing hardcoing
      promisedArrivalDate: this.getPromisedArrivalDate(),
      merchandisingProductName:this.props.mcpProductName,
			// @note: spatel - disabled pricing API, remove below line
      //promisedArrivalDate: productSelection.deliveryDate,
      //externalTaxRate: taxRate

    };

    let variantInfo = this.props.variantInfo;


    console.log(lineItem);
    console.log(variantInfo);



    window.Abc.order.getCart(userId, isLoggedIn).then(function(res){
      console.log('Cart Data Result', res);
      if(res.id){
           // Valid Cart, Store it for further use
          // res.statusCode == 404 if no cart exists
          var cartMeta = {
            id: res.id,   // from get cart response
            version: res.version	// from get cart response or from last cart operation response
          };
          window.Abc.order.addItemInCart(cartMeta, lineItem, variantInfo, designerData).then(function(res){
              if(res.id){
                  // success
                  // update cart object with new data from response



              }else{
                  console.log("failed to add item to cart")

              }
          });

		    }else{
          window.Abc.order.createCart(lineItem, userId, isLoggedIn, variantInfo, designerData,taxMode).then(function(res){
             console.log('cartMeta', {id:res.id, version:res.version});
          });
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
