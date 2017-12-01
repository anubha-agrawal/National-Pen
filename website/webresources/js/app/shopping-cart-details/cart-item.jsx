import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        console.log('upsellCartObj', props.cartItem);
        
        if(props.cartItem.isUpsellAdded) {
            this.state= {
                cartMeta: props.cartMeta,
                upsellId: props.cartItem.upsellId
            };
        } else{
            this.state= {
                cartMeta: props.cartMeta,
                upsellId: props.cartItem.upsellId
            };
        }
        
    }

    componentWillReceiveProps(nextProps) {
        console.log(
            '!!!!!', nextProps.cartItem.upsellId
        );
        /*
        if(this.state.cartMeta != nextProps.cartMeta || this.state.upsellId != nextProps.cartItem.upsellId || props.cartItem!=nextProps.cartItem){
            this.setState({
                cartMeta: nextProps.cartMeta,
                upsellId: nextProps.cartItem.upsellId
            })
        }
        */
    }

    handleDelete(e, id) {
        this.props.deleteItem(this.props.cartItem.id, this.state.cartMeta);
        e.preventDefault();
    }

    addToOrder() {
        let upsellId = '';
        if(!this.props.cartItem.isUpsellAdded) {
            
            let currentLineItemUpsell = this.props.lineItemsUpsell.find(lineItem => {
                return lineItem.mainItemId === this.props.cartItem.id;
            });
            /* Update by anubha on 30 nov */
            currentLineItemUpsell.externalTotalCentAmount = currentLineItemUpsell.externalTotalCentAmount * 100;
            /* ***** */
            Abc.order.addItemsInCart(this.props.cartMeta, [currentLineItemUpsell]).then(res => {
                console.log('Updated Cart Data', res);
                console.log('cartMeta', { id:res.id, version:res.version });
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
                    let cartMetaData = { id:res.id, version:res.version };
                    this.props.cartItem.isUpsellAdded = true;
                    this.setState({ 
                        title: 'Remove from Order',
                        upsellTitle: 'Upsell Offer Added'
                    });
                    this.props.updateParentCartMetaData(cartMetaData, res);
                } if (res.statusCode == 404) { // res.statusCode == 404 if no cart exists
                    console.log('res in error', res);
                }
            });
            
            //api call to actually add to order
        } else{
            console.log('this.props.cartItem.upsellId', [this.props.cartItem.upsellId]);
            console.log('this.props.cartMeta', this.props.cartMeta);
            let currentLineItemUpsell = this.props.lineItemsUpsell.find(lineItem => {
                return lineItem.mainItemId === this.props.cartItem.id;
            });
            Abc.order.removeCartItems(this.props.cartMeta, [this.props.cartItem.upsellId]).then(res1 => {
                if (!res1.error) {
                    console.log('done');
                    this.setState({ cartMeta: { id:res1.id, version:res1.version } });
                    /*this.setState({title: "Add to Order",
                        upsellTitle: "Upsell Offer"});*/
                    let cartMetaData = { id:res1.id, version:res1.version };
                    this.props.updateParentCartMetaData(cartMetaData, res1);
                }
                if (res1.statusCode == 404) { // res.statusCode == 404 if no cart exists
                    console.log(res1);
                    this.setState({ cartMeta: { id:res1.id, version:res1.version } });
                /*this.setState({title: "Add to Order",
                        upsellTitle: "Upsell Offer"});*/
                }
                console.log('New Cart Data', JSON.stringify(res1));
                console.log('cartMeta', { id: res1.id, version: res1.version });
            });
            
            //api call to actually remove from order
        }
    }
    render() {
        let title = '';
        let upsellTitle = '';
        let isUpsellQuantityAdded = false;
        if(this.props.cartItem.isUpsellAdded) {
            title = 'Remove from Order';
            upsellTitle = 'Upsell Offer Added';
            isUpsellQuantityAdded = true;
        }else{
            title = 'Add to Order';
            upsellTitle = 'Upsell Offer';
            isUpsellQuantityAdded = false;
        }
        let totalUpsellCount = (this.props.cartItem.upsellQuantity * this.props.cartItem.upsellPrice).toFixed(2);
        
        return (
            <div>
                { !this.props.isProductReadonlyView
                    ?   
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
                                            Object.keys(this.props.cartItem.userSelections).map((value, index) => {
                                                return(
                                                    <p key={index} title={this.props.cartItem.userSelections[value]}>{value} : {Object.values(this.props.cartItem.userSelections[value])}</p>
                                                );
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
                            <p><b>{upsellTitle}</b><br /> {this.props.cartItem.upsellQuantity} Paragon Pens @ {this.props.cartItem.currencyCode} {this.props.cartItem.upsellPrice} each. <button type="button" onClick={this.addToOrder.bind(this)} className="btn btn-default pull-right">{title}</button></p>

                        </div>

                    </div>
                    :  
                    <div className="table-responsive cartItem">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan="2">Product</th>
                                    <th>Quantity</th>
                                    <th>Unit price</th>
                                    {/*  <th>Free Quantity</th> */}
                                    <th>Total</th>
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
                                            Object.keys(this.props.cartItem.userSelections).map((value, index) => {
                                                return(
                                                    <p  key={index} title={this.props.cartItem.userSelections[value]}>{value} : {Object.values(this.props.cartItem.userSelections[value])}</p>
                                                );
                                            })
                                        }
                                    </td>
                                    <td>
                                        {this.props.cartItem.quantity}<br/>
                                        {this.props.cartItem.freeQuantity} <b>(Free)</b><br/>
                                     
                                        { isUpsellQuantityAdded 
                                            ?  
                                            <p> {this.props.cartItem.upsellQuantity} (Upsell)</p>
                                            : null
                                        }
                                    
                                    </td>
                                    <td>
                                        {this.props.cartItem.currencyCode} {this.props.cartItem.unitPrice}<br/>
                                        {this.props.cartItem.currencyCode} 0<br/>
                                        { isUpsellQuantityAdded 
                                            ?  
                                            <p> {this.props.cartItem.currencyCode} {this.props.cartItem.upsellPrice}</p>
                                            : null
                                        }
                                    
                                    </td>
                                    {/* <td>{this.props.cartItem.freeQuantity}</td> */}
                                    <td>
                                        {this.props.cartItem.currencyCode} {this.props.cartItem.total}<br/>
                                        {this.props.cartItem.currencyCode} 0<br/>
                                        { isUpsellQuantityAdded 
                                            ?  
                                            <p> {this.props.cartItem.currencyCode} {totalUpsellCount}</p>
                                            : null
                                        }
                                    
                                    </td>
                                
                                </tr>

                            </tbody>

                        </table>

                    </div>
                }

            </div>
        );
    }
}
export default CartItem;
