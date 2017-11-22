import React, { Component } from 'react';
import ProductItem from './product-item.jsx';

class Products extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">

                        <div id="catlist">
                            <ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem />
                        </div>


                    </div>

        );
    }
}

export default Products;
