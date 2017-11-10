import React, { Component } from 'react';

class Slider extends Component {
constructor (props) {
     super(props);
     this.state = {
          images: {
               img1:".resources/home/webresources/img/main-slider1.jpg",
               img2:".resources/home/webresources/img/main-slider2.jpg",
               img3:".resources/home/webresources/img/main-slider3.jpg",
               img4:".resources/home/webresources/img/main-slider4.jpg",

          }
     }
}
  render() {
    return (

         <div className="col-md-12">
             <div id="main-slider">
                 <div className="item">
                     <img src={this.state.images.img1} alt="" className="img-responsive" />
                 </div>
                 <div className="item">
                     <img className="img-responsive" src={this.state.images.img2} alt="" />
                 </div>
                 <div className="item">
                     <img className="img-responsive" src={this.state.images.img3} alt="" />
                 </div>
                 <div className="item">
                     <img className="img-responsive" src={this.state.images.img4} alt="" />
                 </div>
             </div>

         </div>
    );
  }
}

export default Slider;
