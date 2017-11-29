import React, { Component } from "react";

class CartItem extends Component {
    constructor(props) {
        super(props);

        if(props.cartItem.isUpsellAdded){
             this.state= {
                title: "Remove from Order",
                upsellTitle: "Upsell Offer Added",
                cartMeta: props.cartMeta,
                upsellId: props.cartItem.upsellId
            }
        } else{
             this.state= {
                title: "Add to Order",
                upsellTitle: "Upsell Offer",
                cartMeta: props.cartMeta,
                upsellId: props.cartItem.upsellId
             }
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(
            "!!!!!", nextProps.cartItem.upsellId
        )
        if(this.state.cartMeta != nextProps.cartMeta || this.state.upsellId != nextProps.cartItem.upsellId || props.cartItem!=nextProps.cartItem){
            this.setState({
                cartMeta: nextProps.cartMeta,
                upsellId: nextProps.cartItem.upsellId
            })
        }
    }

    handleDelete(e, id){
        this.props.deleteItem(this.props.cartItem.id, this.state.cartMeta);
        e.preventDefault();
    }

    addToOrder() {
        let upsellId = "";
        if(this.state.title == "Add to Order"){
            console.log("this.props.lineItemsUpsell **************", this.props.lineItemsUpsell);
            Abc.order.addItemsInCart(this.state.cartMeta, this.props.lineItemsUpsell).then(function(res){
                console.log('Updated Cart Data', res);
                console.log('cartMeta', {id:res.id, version:res.version});
                if (!res.error) {
                        // for(let i=0;i<res.lineItems.length;i++){
                        //     if(res.lineItems[i].custom.fields.lineItemType == "Upsell"){
                        //         console.log("in 1");
                        //         for(let j=0;j<res.lineItems.length; j++){
                        //             console.log("in 2", res.lineItems[i].custom.fields.lineItemIdReference == res.lineItems[j].id)
                        //             if(res.lineItems[i].custom.fields.lineItemIdReference == res.lineItems[j].id && res.lineItems[i].custom.fields.lineItemIdReference == this.props.lineItemsUpsell[0].customFields.lineItemIdReference){
                        //                 upsellId = res.lineItems[i].id;
                        //                 console.log("^^^^upsellId", upsellId);
                        //                 this.setState({upsellId: upsellId})
                        //             }
                        //         }
                        //     }
                        // }
                    let cartMetaData = {id:res.id, version:res.version}
                    this.props.updateParentCartMetaData(cartMetaData, res);
                    this.setState({cartMeta: {id:res.id, version:res.version}})
                    this.props.cartItem.isUpsellAdded = true;
                    this.setState({ title: "Remove from Order",

                        upsellTitle: "Upsell Offer Added" });
                } if (res.statusCode == 404) { // res.statusCode == 404 if no cart exists
                    console.log("res in error", res);
                }
            }.bind(this));

            
            //api call to actually add to order
        } else{
            console.log("this.props.cartItem.upsellId", [this.state.upsellId]);
            console.log("this.state.cartMeta", this.state.cartMeta)
            Abc.order.removeCartItems(this.state.cartMeta, [this.state.upsellId]).then(res1 => {
            if (!res1.error) {
                console.log("done")
                this.setState({cartMeta: {id:res1.id, version:res1.version}})
                this.setState({title: "Add to Order",
                        upsellTitle: "Upsell Offer"});
                let cartMetaData = {id:res1.id, version:res1.version}
                this.props.updateParentCartMetaData(cartMetaData, res1);
            }
            if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
                console.log(res1)
                this.setState({cartMeta: {id:res1.id, version:res1.version}})
                this.setState({title: "Add to Order",
                        upsellTitle: "Upsell Offer"});
            }
            console.log('New Cart Data', JSON.stringify(res1));
            console.log('cartMeta', { id: res1.id, version: res1.version });
            });

            
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
                                            <td title={this.props.cartItem.productName} className="itemNameTd">
                                                <a href="#">{this.props.cartItem.productName}</a>
                                                {
                                                    Object.keys(this.props.cartItem.userSelections).map( (value, index) => {
                                                        return(
                                                            <p title={this.props.cartItem.userSelections[value]}>{value} : {Object.values(this.props.cartItem.userSelections[value])}</p>
                                                        )
                                                    })
                                                }
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
