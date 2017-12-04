import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ShoppingCartDetails from './../shopping-cart-details/shopping-cart-details.jsx';


class MiniBasketPopup extends Component{
	constructor (props) {
		super(props);
		this.state = {
			itemCount:0,
			data:{},
			ShoppingCartDetails: ()=><ShoppingCartDetails lang={this.props.lang} miniBasketPopup={true}/>
		};

	}

	componentDidMount () {
		// Subscribing Cart update Event, So that can show updated cart we get after cart update event
		window.Abc.EventBus.subscribe(Abc.order.EVENT_CART_UPDATED, 'mini-basket-popup', this.onCartUpdated.bind(this));
	}

	onCartUpdated(res){
		this.setState({
 	      ShoppingCartDetails: ()=><ShoppingCartDetails lang={this.props.lang} miniBasketPopup={true}/>
 	    });
	}

	render () {
		console.log("popup has been completed.....");
		const ShoppingCartDetails = this.state.ShoppingCartDetails;
		return (
			<div id="miniBasketModel" className="modal fade" role="dialog">
			  <div className="modal-dialog modal-lg">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal">&times;</button>
			        <h4 className="modal-title">{this.props.header}</h4>
			      </div>
			      <div className="modal-body">
				   <ShoppingCartDetails locale_details={this.props.locale_details} lang={this.props.lang} miniBasketPopup={true} />
			      </div>
			      <div className="modal-footer">
					 <div className="pull-right">
						 <a href="order-summary-guest" className="btn btn-primary">{this.props.lang.buttonRight}<i className="fa fa-chevron-right"></i></a>
					 </div>
			      </div>
			    </div>
			  </div>
		     </div>
		);
	}

}

export default MiniBasketPopup;
