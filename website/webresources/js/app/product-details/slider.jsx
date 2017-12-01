import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                img1:'.resources/website/webresources/img/product1.jpg',
                img2:'.resources/website/webresources/img/product2.jpg',
                img3:'.resources/website/webresources/img/product3.jpg'
            }
        };
        console.log(this.props.images);
    }
    render() {
        return (

            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                <ol className="carousel-indicators">
                   {/*  <li data-target="#myCarousel" data-slide-to="0" className="active"><img src={this.state.images.img1} alt="" /></li>
                    <li data-target="#myCarousel" data-slide-to="1"><img src={this.state.images.img2} alt="" /></li>
                    <li data-target="#myCarousel" data-slide-to="2"><img src={this.state.images.img3} alt="" /></li>
                    <li data-target="#myCarousel" data-slide-to="3"><img src={this.state.images.img2} alt="" /></li> */}
                    {
                        this.props.images.map((value, i)=>
                            <li  key={i}  className={`item ${ i==0 ? 'active' : ''}` }>
                                <img src={value.url} alt="" />
                            </li>
                        )      
                    }
                </ol>

                <div className="carousel-inner">
                    {
                        this.props.images.map((value, i)=>
                            <div key={i} className={`item ${ i==0 ? 'active' : ''}` }>
                                <img src={value.url} alt="" />
                            </div>
                        )      
                    }
                    {/*  <div className="item active">
                        <img src={this.state.images.img1} alt="" />
                    </div>

                    <div className="item">
                        <img src={this.state.images.img2} alt="" />
                    </div>

                    <div className="item">
                        <img src={this.state.images.img3} alt="" />
                    </div>
                    <div className="item">
                        <img src={this.state.images.img2} alt="" />
                    </div> */}

                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="icon fa fa-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="icon fa fa-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>

        );
    }
}

export default Slider;
