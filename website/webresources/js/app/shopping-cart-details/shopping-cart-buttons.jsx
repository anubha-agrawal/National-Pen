import React, { Component } from 'react';

class ShoppingCartButtons extends Component {
    constructor(props) {
        super(props);
        console.log("buttons###", this.props.lang);
    }

    proceedToOrderSummary() {
        console.log('in');
        window.location.href = 'order-summary-guest';
        
    }

    render() {
        return (
            <div className="box-footer">
                <div className="pull-left">
                    <a href="home" className="btn btn-default"><i className="fa fa-chevron-left"></i> {this.props.lang.buttonLeft}</a>
                </div>
                <div className="pull-right">

                    <button type="button" onClick={this.proceedToOrderSummary.bind(this)} className={this.props.showProceed ? 'btn btn-primary' : 'hideProceed btn btn-primary'}>{this.props.lang.buttonRight} <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        );
    }
}
export default ShoppingCartButtons;
