import React, { Component } from "react";

class ProductSummary extends Component {
  constructor(props) {
   super(props);
   /* console.log(this.props); */

  }
  render() {
    return (
        <div className="box">

            <h1 className="text-center">{this.props.name}</h1>

              <p className="goToDescription">{this.props.desc}

                {
                  this.props.desc
                    ? ''
                    : 'No Description found for this product!'
                }


              </p>
          </div>
    );
  }
}
export default ProductSummary;
