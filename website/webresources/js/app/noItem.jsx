import React, { Component } from 'react';

class NoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>
{this.props.msg}
            </p>



        );
    }
}

export default NoItem;
