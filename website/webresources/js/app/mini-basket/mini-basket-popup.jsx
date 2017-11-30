import React, { Component } from "react";
import ShoppingCartDetails from './../shopping-cart-details/shopping-cart-details.jsx';


class MiniBasketPopup extends Component{
	constructor (props) {
		super(props);
		this.state = {
			itemCount:0
		};
	}

	render () {
		return (
			<div id="miniBasketModel" className="modal fade" role="dialog">
			  <div className="modal-dialog modal-lg">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal">&times;</button>
			        <h4 className="modal-title">{this.props.header}</h4>
			      </div>
			      <div className="modal-body">
				   <ShoppingCartDetails miniBasketPopup={true} />
			      </div>
			      <div className="modal-footer">
					 <div className="pull-left">
						 <a href="home" className="btn btn-default"><i className="fa fa-chevron-left"></i> Continue shopping</a>
					 </div>
					 <div className="pull-right">
						 <button type="button" className="btn btn-primary">Proceed to checkout <i className="fa fa-chevron-right"></i></button>
					 </div>
			      </div>
			    </div>
			  </div>
		     </div>
		);
	}

}

export default MiniBasketPopup;
