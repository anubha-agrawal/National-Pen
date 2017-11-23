import React, { Component } from "react";

class ShoppingCartButtons extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.showProceed);
    }

    render() {
        return (
            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="home" className="btn btn-default"><i className="fa fa-chevron-left"></i> Continue shopping</a>
                                </div>
                                <div className="pull-right">

                                    <button type="button" className={this.props.showProceed ? 'btn btn-primary' : 'hideProceed btn btn-primary'}>Proceed to checkout <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
        );
    }
}
export default ShoppingCartButtons;
