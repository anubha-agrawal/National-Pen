import React, { Component } from "react";
import {globalConfig} from "../configuration.jsx";
import Slider from "./slider.jsx";
import Loader from "../loader/loader.jsx";
import ProductSummary from "./product-summary.jsx";
import TierPrice from "./tier-price.jsx";
import ProductAttributes from "./product-attributes.jsx";
import AddToCartButton from "./cart-button.jsx";


class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
      name: '',
      description: '',
      tierPrice: '',
      attributes:'',
      isLoader: true,
      success: '',
      errorMsg: '',
      mcpProductName: '',
      externalTaxRateDraft:{},
      variantInfo:'',
      useSelectedTierPrice: {
        'minimumQuantity': '',
        'value': {
          'currencyCode':'',
          'centAmout': ''

        }

      },
      productAttr:{}

    };
    this.getPrices = this.getPrices.bind(this);
    this.getSelectedTierData = this.getSelectedTierData.bind(this);
    this.getSelectedAttributes = this.getSelectedAttributes.bind(this);

  }

  /* Return price object specific to country code from the tier price data */
  getPrices (tierPrices, countryCode,currencyCode) {
         let tierPricesData;

         for(let i=0;i<tierPrices.length;i++){
          if((tierPrices[i].country).toLowerCase() == (countryCode).toLowerCase()){
            tierPricesData = tierPrices[i];
            return tierPricesData;
          }
        }
        return null;
  }

  componentDidMount(){
     let productId = this.props.productid;
     let languageCode = this.props.locale_details.language;
     let currencyCode = this.props.locale_details.currency;
     let countryCode = this.props.locale_details.country_code;

     /* get Product data from CommeceTools (ABC library) Using product Id */
     window.Abc.product.getProduct(productId).then(function(result){
        if(parseInt(result.status) !== 404){
          let productDetailsData = result.masterData.current;
          let tierPrices = productDetailsData.masterVariant.prices;
          let tierPricesData;

          tierPricesData = this.getPrices(tierPrices, countryCode ,currencyCode);
          let productDetails = {
              isLoader: false,
              success: true,
              id:result.id,
              name: productDetailsData.name[languageCode],
              mcpProductName: result.mcpProductName,
              description: productDetailsData.description[languageCode],
              tierPrice: tierPricesData,
              attributes: productDetailsData.masterVariant.attributes,
              variantInfo: productDetailsData.masterVariant
          };
          this.setState(productDetails);

        }else{

          let errorMessage = '';
          errorMessage = result.data ? result.data.error : result.message;

          let error = {
            isLoader: false,
            success: false,
            errorMsg: errorMessage
          }

          this.setState(error);
        }

    }.bind(this));
  }
  /* get user selected tier price */
  getSelectedTierData(data){
    this.setState({
      useSelectedTierPrice: data
    });
  }

  /* get user selected attributes price */
  getSelectedAttributes(data){

    var productAttrObj = this.state.productAttr;
    productAttrObj[Object.keys(data)] = Object.values(data)[0];
    this.setState({
      productAttr: productAttrObj
    });

  }

  render() {

    return (
      <div className="container">

            {
              this.state.isLoader
                ? <Loader />
                : null
            }

            {
              this.state.errorMsg
                ? <div className="alert alert-danger top-gutter"><strong>{this.state.errorMsg}</strong></div>
                : <div>
                  {
                  this.state.success
                    ?
                      <div>
                          <div className="row top-gutter" >
                            <div className="col-md-4 col-sm-6 col-xs-12">
                              <Slider />
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 prod-desc">
                                <ProductSummary name={this.state.name}
                                    desc = {this.state.description} lang={this.props.lang} />
                            </div>
                          </div>

                          <div className="box" id="details">
                              <TierPrice data={this.state.tierPrice} lang={this.props.lang}
                              sendSelectedTierDataToCart={this.getSelectedTierData} />
                              <hr/>
                              <div className="product-attr">
                                  <div className="row">
                                    {this.state.attributes.map( (attribute, i) => {
                                      return (attribute.selectable === true && attribute.class === 'tenant') ?
                                      <div className="col-sm-3 col-xs-12" key={i}>
                                        <ProductAttributes key={i} data={attribute}
                                        sendAttributes = {this.getSelectedAttributes}
                                        lang={this.props.lang}
                                        locale_details={this.props.locale_details}

                                        />
                                      </div>
                                      : null
                                    })
                                  }
                                  </div>
                              </div>
                              <p className="text-right buttons">
                                  <AddToCartButton
                                  id={this.state.id}
                                  name={this.state.name}
                                  quantity = {this.state.useSelectedTierPrice.minimumQuantity}
                                  currencyCode = {this.state.useSelectedTierPrice.value.currencyCode}
                                  externalTotalCentAmount = {this.state.useSelectedTierPrice.value.centAmount}
                                  userSelection = {this.state.productAttr}
                                  mcpProductName = {this.state.mcpProductName}
                                  variantInfo = {this.state.variantInfo}
                                  lang={this.props.lang}
                                  />
                              </p>
                            </div>
                        </div>
                      : null
                    }
                    </div>
            }


      </div>
    );
  }
}


export default ProductDetail;
