import React, { Component } from "react";

class CartItem extends Component {
    constructor(props) {
        super(props);
        console.log("this.props.cartItem", props.cartItem.userSelections);
        this.state= {
         title: "Add to Order",
         upsellTitle: "Upsell Offer"
        }
    }

    handleDelete(e, id){
        console.log("inside", this.props.cartItem.id);
        this.props.deleteItem(this.props.cartItem.id);
        e.preventDefault();
    }

    addToOrder() {
        if(this.state.title == "Add to Order"){
            this.setState({ title: "Remove from Order",
                        upsellTitle: "Upsell Offer Added" });
            //api call to actually add to order
        } else{
            this.setState({ title: "Add to Order",
                        upsellTitle: "Upsell Offer" });
            //api call to actually remove from order
        }
    };

    render() {
        return (
           
            <div className="table-responsive cartItem">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan="2">Product</th>
                                            <th>Quantity</th>
                                            <th>Unit price</th>
                                            <th>Free Quantity</th>
                                            <th colSpan="2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    <img src=".resources/website/webresources/img/product1.jpg" alt="White Blouse Armani" />
                                                </a>
                                            </td>
                                            <td title={this.props.cartItem.productName} className="itemNameTd"><a href="#">{this.props.cartItem.productName}</a>
                                            {/*{this.props.cartItem.userSelection}.map([key,value])=>{
                                                <p>{ this.value }</p>
                                            }*/}
                                            {/*Object.keys(this.props.cartItem.userSelections).map(function (key) {
                                                <p>{this.props.cartItem.userSelections}</p>
                                            }*/}
                                            
                                            </td>
                                            <td>
                                                {this.props.cartItem.quantity}
                                            </td>
                                            <td>{this.props.cartItem.currencyCode} {this.props.cartItem.unitPrice}</td>
                                            <td>{this.props.cartItem.freeQuantity}</td>
                                            <td>{this.props.cartItem.currencyCode} {this.props.cartItem.total}</td>
                                            <td><a href="#" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                    
                                </table>
                                <div className="upsell-offer-box col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                    <p><b>{this.state.upsellTitle}</b><br /> {this.props.cartItem.upsellQuantity} Paragon Pens @ {this.props.cartItem.currencyCode} {this.props.cartItem.upsellPrice} each.<div className="pull-right"><button type="button" onClick={this.addToOrder.bind(this)} className="btn btn-default">{this.state.title}</button></div></p>
                                    
                                </div>

            </div>
        );
    }
}
export default CartItem;