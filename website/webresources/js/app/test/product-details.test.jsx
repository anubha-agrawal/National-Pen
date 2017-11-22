import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ProductDetails from './../product-details/product-details';

describe('<product Details> component', () => {


     /* Define Abc library to call api */
     window.Abc = require('./../../../../../libs/abc/index.bundle.js');
     if(window.Abc){
         window.Abc = window.Abc({
             restPrefix: '/.rest/'
         });
     }

     window.locale_details = {language:'en',currency:'EUR',country:'United Kingdom (uk)UK',country_code:'UK'};
     console.log("locale_details",window.locale_details);

     const product_details = {
          quantity:'quantity',
          unit_price:'unit_price',
          extra_free:'extra_free',
          items_in_cart:'items_in_cart',
          home:'home',
          add_to_cart:'add_to_cart',
          free:'free'
     };

     const locale_details = {language:'en',currency:'EUR',country:'United Kingdom (uk)UK',country_code:'UK'};

     it('Product details component executed successfully....', () => {
          const div = document.createElement('div');
          ReactDOM.render(<ProductDetails
               productid="7cf97905-b6fa-42f3-9716-184528608689"
               locale_details={window.locale_details}
               lang={product_details} />,
               div);

     });

});
