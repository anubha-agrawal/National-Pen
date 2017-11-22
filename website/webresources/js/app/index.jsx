import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './product-details/product-details.jsx';
import ShoppingCartDetails from './shopping-cart-details/shopping-cart-details.jsx';

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
