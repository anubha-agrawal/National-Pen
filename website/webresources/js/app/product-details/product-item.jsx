import React, { Component } from 'react';
import Products from './products.jsx';

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <dl>
                                <dt><img src="http://placehold.it/300x200" alt="Product image" width="93" height="62" /><strong>Some info text here</strong><a href="#">The Name of the Product Goes here</a></dt>
                                <dd>
                                    <p>The description of whatever the heading is about goes here. The description of whatever the heading is about goes here.The description of whatever the heading is about goes here.</p>
                                </dd>
                            </dl>



        );
    }
}

export default ProductItem;
