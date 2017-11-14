import React, { Component } from 'react';
import Products from './products.jsx';
import NoItem from './noItem.jsx';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    
    searchProduct(e){
      console.log(this.props.test);
      //this.props.testData = "No products found with the keyword "+ this.refs.searchText.value;
      e.preventDefault();
    }
    render() {
        var test = "hi";
        return (
            <div className="navbar navbar-default yamm" role="navigation" id="navbar">
                <div className="container">
                    <div className="collapse in clearfix" id="search">
                        <form className="navbar-form" role="search" onSubmit={this.searchProduct.bind(this)}>
                            <div className="input-group">
                                <input ref="searchText" type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                    
                    { 1==1 ?<Products />: <NoItem msg= 'hi' /> } 
                

                </div>

            </div>



        );
    }
}

export default Search;
