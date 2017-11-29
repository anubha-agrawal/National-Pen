import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './product-details/product-details.jsx';
import ShoppingCartDetails from './shopping-cart-details/shopping-cart-details.jsx';
import OrderSummaryGuest from './order-summary/order-summary-guest.jsx';
import OrderSummary from './order-summary/order-summary.jsx';
import MiniBasket from './mini-basket/mini-basket.jsx';

let productDetail = document.getElementById('product-detail');
if(productDetail) {

    ReactDOM.render(<ProductDetail
         productid={$('[data-productId]').data().productid}
         Abc={window.Abc}
         locale_details={window.locale_details}
         lang={window.product_details}
    />, document.getElementById('product-detail'));
}

let shoppingCartDetail = document.getElementById('shopping-cart-details');
if(shoppingCartDetail) {
    ReactDOM.render(<ShoppingCartDetails />, document.getElementById('shopping-cart-details'));
}

let orderSummaryGuest = document.getElementById('order-summary-guest');
if(orderSummaryGuest) {
    ReactDOM.render(<OrderSummaryGuest 
    locale_details={window.locale_details} />, document.getElementById('order-summary-guest'));
}
let orderSummary = document.getElementById('order-summary');
if(orderSummary) {
    ReactDOM.render(<OrderSummary />, document.getElementById('order-summary'));
}

let miniBasket = document.getElementById('mini-basket');
if(miniBasket) {
    ReactDOM.render(<MiniBasket />, document.getElementById('mini-basket'));
}
