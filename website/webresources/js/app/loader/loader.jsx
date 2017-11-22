import React, { Component } from "react";


class Loader extends Component {
  constructor(props) {
    super(props);
    
    
  }
  render() {
    return (
      <div className="loading">
        <img src=".resources/website/webresources/img/AjaxLoader.gif" alt="loading..." />
      </div>
    );
  }
}
export default Loader;
