import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import MiniBasketPopup from './../mini-basket/mini-basket-popup';
import $ from './../../libs/jquery-1.11.0.min';
Enzyme.configure({ adapter: new Adapter() });

describe('<Mini Basket Popup> component', () => {


     /* Define Abc library to call api */
     window.Abc = require('./../../../../../libs/abc/index.bundle.js');
     if(window.Abc){
         window.Abc = window.Abc({
             restPrefix: '/.rest/'
         });
     }

     it('Mini basket popup component executed successfully....', () => {
		shallow(<MiniBasketPopup />);
     });

});
