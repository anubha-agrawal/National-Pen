import React, { Component } from "react";

class MiniBasket extends Component {
	constructor (props) {
		super(props);
		this.state = {
			user: {
				userId: window.user_id,
				isLoggedIn: false
			},
			itemCount:0
		};
	}

	componentDidMount () {

		let userId = this.state.user.userId; // anonymousId or customerId
		let isLoggedIn = this.state.user.isLoggedIn;

		window.Abc.order.getCart(userId, isLoggedIn).then(function(res){
		    if(res.id){
			    this.totalCount(res);
		    }else{
			    this.setState(
			    	{itemCount:0}
			    );
			}
		    // res.statusCode == 404 if no cart exists
		}.bind(this));

		// Subscribing Login Event, So that can show cart we get after user get logged in
		window.Abc.EventBus.subscribe(Abc.auth.EVENT_LOGGED_IN, 'mini-basket', this.onUserLogin.bind(this));
		// Subscribing Cart update Event, So that can show updated cart we get after cart update event
		window.Abc.EventBus.subscribe(Abc.order.EVENT_CART_UPDATED, 'mini-basket', this.onCartUpdated.bind(this));
	}

	totalCount(cart){
		let total=0;
		for (let i = 0; i < cart.lineItems.length; i++) {
			if (cart.lineItems[i].custom.fields.lineItemType == "mainItem") {
	              total++;
			    console.log("ss-->",total)
	          }
		}
		this.setState(
			{itemCount:total}
		);
		console.log("total-->",total)
	}

	onUserLogin(loginResponse){
		if(loginResponse.cart){
			this.totalCount(loginResponse.cart);
		}else{
			this.setState(
				{itemCount:0}
			);
		}
	}

	onCartUpdated(cart){
		this.totalCount(cart);
	}

	render () {
		return (
			<span className="top-nav_acc-link-top">
				{this.state.itemCount} item{this.state.itemCount>1 ? 's' : null}
			</span>
		);
	}
}
export default MiniBasket;
