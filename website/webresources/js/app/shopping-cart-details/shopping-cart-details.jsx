import React, { Component } from "react";
import OrderSummary from './order-summary.jsx';
import ShoppingCartButtons from './shopping-cart-buttons.jsx';
import CartItem from './cart-item.jsx';
import getSymbolFromCurrency from 'currency-symbol-map';
import Loader from "../loader/loader.jsx";

class ShoppingCartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullCart: {},
            cartItems: [],
            orderDetails: {
            },
            isLoader: true,
       };
    }
    componentWillMount(){
        // var userId = '3cfeddff-5af1-486a-bfc0-f89915c3b555'; // anonymousId or customerId
        // var isLoggedIn = false;
        // console.log('Calling Abc.order.getCart'); 
        Abc.order.getCartById("14e498a0-90d6-4b5f-92af-3ad594abec08").then(function(res){
            isLoader: false,
             console.log('Cart Data Result', res);  
             res = {
  "type": "Cart",
  "id": "3da6344e-d655-4613-996a-4563f121d813",
  "version": 11,
  "customerId": "00a6d9ad-5a3d-43be-87a8-6ce4dca48eb2",
  "createdAt": "2017-11-21T08:59:58.931Z",
  "lastModifiedAt": "2017-11-21T09:06:02.952Z",
  "lineItems": [
    {
      "id": "6f9166b9-c490-4ee6-9093-9408c75aee10",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              },
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "key": "Laser",
                "label": {
                  "en": "Laser"
                }
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "key": "Barrel made of recycled carton.",
                "label": {
                  "en": "Barrel made of recycled carton."
                }
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              },
              {
                "key": "Green",
                "label": {
                  "en": "Green"
                }
              },
              {
                "key": "Gunmetal",
                "label": {
                  "en": "Gunmetal"
                }
              },
              {
                "key": "Purple",
                "label": {
                  "en": "Purple"
                }
              },
              {
                "key": "Burgundy",
                "label": {
                  "en": "Burgundy"
                }
              },
              {
                "key": "Red",
                "label": {
                  "en": "Red"
                }
              },
              {
                "key": "Turquoise",
                "label": {
                  "en": "Turquoise"
                }
              },
              {
                "key": "Dark Blue",
                "label": {
                  "en": "Dark Blue"
                }
              },
              {
                "key": "White",
                "label": {
                  "en": "White"
                }
              },
              {
                "key": "Assortment",
                "label": {
                  "en": "Assortment"
                }
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "key": "1",
                "label": {
                  "en": "1"
                }
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "key": "7683C",
                "label": {
                  "en": "7683C"
                }
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "key": "Ballpoint",
                "label": {
                  "en": "Ballpoint"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "key": "Undefined",
                "label": {
                  "en": "Undefined"
                }
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "key": "National Pen",
                "label": {
                  "en": "National Pen"
                }
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "key": "Paragon Pen",
                "label": {
                  "en": "Paragon Pen"
                }
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "key": "234",
                "label": {
                  "en": "Shelbyville, Tennessee"
                }
              },
              {
                "key": "236",
                "label": {
                  "en": "Dundalk, Ireland"
                }
              },
              {
                "key": "237",
                "label": {
                  "en": "Tijuana, Mexico"
                }
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "key": "CIM-8AFV0JD2",
              "label": {
                "en": "CIM-8AFV0JD2"
              }
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "key": "Bullet���",
                "label": {
                  "en": "Bullet���"
                }
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "key": "512 MB",
                "label": {
                  "en": "512 MB"
                }
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 1390
        },
        "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
        "tiers": [
          {
            "minimumQuantity": 50,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1390
            }
          },
          {
            "minimumQuantity": 100,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1350
            }
          },
          {
            "minimumQuantity": 150,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1290
            }
          },
          {
            "minimumQuantity": 250,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1240
            }
          },
          {
            "minimumQuantity": 500,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1190
            }
          },
          {
            "minimumQuantity": 1000,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1090
            }
          }
        ],
        "custom": {
          "type": {
            "typeId": "type",
            "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
          },
          "fields": {
            "UpSellQuantityAndPrice": [
              "50::30::1000",
              "100::60::950",
              "150::90::900",
              "250::120::850",
              "500::150::800",
              "1000::120::750"
            ],
            "FreeQuantityPercentage": "50"
          }
        }
      },
      "quantity": 50,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 50,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "Platform",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 69500
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 69500
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 70195
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "mainItem",
          "lineItemNumber": "123",
          "mcpPrductName": "Paragon Pen Test 1",
          "mcpSku": "CIM-UMK00JD4",
          "variableAttributes": [
            "Ink_Colour:Red",
            "Barrel Colour:Red"
          ],
          "userUploadsUrl": [
            "lZbp9tKTSjbje554jFt9::A5_Flyer_1mmBleed.pdf::https://cdn.filestackcontent.com/lZbp9tKTSjbje554jFt9::2017-09-05T11:18:43.701Z",
            "uGv2qpCySWC2cqLzGbMA::A4 Letterhead TP.pdf::https://cdn.filestackcontent.com/uGv2qpCySWC2cqLzGbMA::2017-09-05T11:18:43.701Z"
          ],
          "userSelection": [
            "Ink_Colour:Red",
            "Barrel Colour:Red"
          ],
          "itemCreationTimeStamp": "2017-11-21T09:51:08.567Z",
          "promisedArrivalDate": "2017-11-11T11:18:39.607Z"
        }
      },
      "lineItemMode": "Standard"
    },
    {
      "id": "dcbbf2de-80cb-409c-b7a2-30dd97a98c8b",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              },
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Laser"
                },
                "key": "Laser"
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "label": {
                  "en": "Barrel made of recycled carton."
                },
                "key": "Barrel made of recycled carton."
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              },
              {
                "label": {
                  "en": "Green"
                },
                "key": "Green"
              },
              {
                "label": {
                  "en": "Gunmetal"
                },
                "key": "Gunmetal"
              },
              {
                "label": {
                  "en": "Purple"
                },
                "key": "Purple"
              },
              {
                "label": {
                  "en": "Burgundy"
                },
                "key": "Burgundy"
              },
              {
                "label": {
                  "en": "Red"
                },
                "key": "Red"
              },
              {
                "label": {
                  "en": "Turquoise"
                },
                "key": "Turquoise"
              },
              {
                "label": {
                  "en": "Dark Blue"
                },
                "key": "Dark Blue"
              },
              {
                "label": {
                  "en": "White"
                },
                "key": "White"
              },
              {
                "label": {
                  "en": "Assortment"
                },
                "key": "Assortment"
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "label": {
                  "en": "1"
                },
                "key": "1"
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "label": {
                  "en": "7683C"
                },
                "key": "7683C"
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "label": {
                  "en": "Ballpoint"
                },
                "key": "Ballpoint"
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "label": {
                  "en": "Undefined"
                },
                "key": "Undefined"
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "label": {
                  "en": "National Pen"
                },
                "key": "National Pen"
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "label": {
                  "en": "Paragon Pen"
                },
                "key": "Paragon Pen"
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "label": {
                  "en": "Shelbyville, Tennessee"
                },
                "key": "234"
              },
              {
                "label": {
                  "en": "Dundalk, Ireland"
                },
                "key": "236"
              },
              {
                "label": {
                  "en": "Tijuana, Mexico"
                },
                "key": "237"
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "label": {
                "en": "CIM-8AFV0JD2"
              },
              "key": "CIM-8AFV0JD2"
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "label": {
                  "en": "Bullet���"
                },
                "key": "Bullet���"
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "label": {
                  "en": "512 MB"
                },
                "key": "512 MB"
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 1240
        },
        "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
        "tiers": [
          {
            "minimumQuantity": 50,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1390
            }
          },
          {
            "minimumQuantity": 100,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1350
            }
          },
          {
            "minimumQuantity": 150,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1290
            }
          },
          {
            "minimumQuantity": 250,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1240
            }
          },
          {
            "minimumQuantity": 500,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1190
            }
          },
          {
            "minimumQuantity": 1000,
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1090
            }
          }
        ],
        "custom": {
          "type": {
            "typeId": "type",
            "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
          },
          "fields": {
            "FreeQuantityPercentage": "50",
            "UpSellQuantityAndPrice": [
              "50::30::1000",
              "100::60::950",
              "150::90::900",
              "250::120::850",
              "500::150::800",
              "1000::120::750"
            ]
          }
        }
      },
      "quantity": 250,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 250,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "Platform",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 310000
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 310000
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 313100
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "mainItem",
          "lineItemNumber": "124",
          "mcpPrductName": "Paragon Pen Test 6",
          "mcpSku": "CIM-UMK00JD4",
          "variableAttributes": [
            "Ink_Colour:Red",
            "Barrel Colour:Blue"
          ],
          "userUploadsUrl": [
            "lZbp9tKTSjbje554jFt9::A5_Flyer_1mmBleed.pdf::https://cdn.filestackcontent.com/lZbp9tKTSjbje554jFt9::2017-09-05T11:18:43.701Z",
            "uGv2qpCySWC2cqLzGbMA::A4 Letterhead TP.pdf::https://cdn.filestackcontent.com/uGv2qpCySWC2cqLzGbMA::2017-09-05T11:18:43.701Z"
          ],
          "userSelection": [
            "Ink_Colour:Red",
            "Barrel Colour:Red"
          ],
          "itemCreationTimeStamp": "2017-11-21T09:51:08.567Z",
          "promisedArrivalDate": "2017-11-11T11:18:39.607Z"
        }
      },
      "lineItemMode": "Standard"
    },
    {
      "id": "4a58e581-bb6a-44b1-a11b-19d066e6f4b8",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              },
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Laser"
                },
                "key": "Laser"
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "label": {
                  "en": "Barrel made of recycled carton."
                },
                "key": "Barrel made of recycled carton."
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              },
              {
                "label": {
                  "en": "Green"
                },
                "key": "Green"
              },
              {
                "label": {
                  "en": "Gunmetal"
                },
                "key": "Gunmetal"
              },
              {
                "label": {
                  "en": "Purple"
                },
                "key": "Purple"
              },
              {
                "label": {
                  "en": "Burgundy"
                },
                "key": "Burgundy"
              },
              {
                "label": {
                  "en": "Red"
                },
                "key": "Red"
              },
              {
                "label": {
                  "en": "Turquoise"
                },
                "key": "Turquoise"
              },
              {
                "label": {
                  "en": "Dark Blue"
                },
                "key": "Dark Blue"
              },
              {
                "label": {
                  "en": "White"
                },
                "key": "White"
              },
              {
                "label": {
                  "en": "Assortment"
                },
                "key": "Assortment"
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "label": {
                  "en": "1"
                },
                "key": "1"
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "label": {
                  "en": "7683C"
                },
                "key": "7683C"
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "label": {
                  "en": "Ballpoint"
                },
                "key": "Ballpoint"
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "label": {
                  "en": "Undefined"
                },
                "key": "Undefined"
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "label": {
                  "en": "National Pen"
                },
                "key": "National Pen"
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "label": {
                  "en": "Paragon Pen"
                },
                "key": "Paragon Pen"
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "label": {
                  "en": "Shelbyville, Tennessee"
                },
                "key": "234"
              },
              {
                "label": {
                  "en": "Dundalk, Ireland"
                },
                "key": "236"
              },
              {
                "label": {
                  "en": "Tijuana, Mexico"
                },
                "key": "237"
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "label": {
                "en": "CIM-8AFV0JD2"
              },
              "key": "CIM-8AFV0JD2"
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "label": {
                  "en": "Bullet���"
                },
                "key": "Bullet���"
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "label": {
                  "en": "512 MB"
                },
                "key": "512 MB"
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 1000
        },
        "id": "a468318f-d914-48d8-8ba5-b82b25e4a4d4"
      },
      "quantity": 200,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 200,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "ExternalPrice",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 200000
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 200000
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 202000
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "Upsell",
          "lineItemNumber": "126",
          "mcpPrductName": "Paragon Pen Test 1",
          "lineItemIdReference": "dcbbf2de-80cb-409c-b7a2-30dd97a98c8b",
          "mcpSku": "CIM-UMK00JD4",
          "itemCreationTimeStamp": "2017-11-21T10:51:08.567Z"
        }
      },
      "lineItemMode": "Standard"
    },
    {
      "id": "3a33d293-2cb6-4d4b-9d17-caf728eae2ad",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              },
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "key": "Laser",
                "label": {
                  "en": "Laser"
                }
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "key": "Barrel made of recycled carton.",
                "label": {
                  "en": "Barrel made of recycled carton."
                }
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              },
              {
                "key": "Green",
                "label": {
                  "en": "Green"
                }
              },
              {
                "key": "Gunmetal",
                "label": {
                  "en": "Gunmetal"
                }
              },
              {
                "key": "Purple",
                "label": {
                  "en": "Purple"
                }
              },
              {
                "key": "Burgundy",
                "label": {
                  "en": "Burgundy"
                }
              },
              {
                "key": "Red",
                "label": {
                  "en": "Red"
                }
              },
              {
                "key": "Turquoise",
                "label": {
                  "en": "Turquoise"
                }
              },
              {
                "key": "Dark Blue",
                "label": {
                  "en": "Dark Blue"
                }
              },
              {
                "key": "White",
                "label": {
                  "en": "White"
                }
              },
              {
                "key": "Assortment",
                "label": {
                  "en": "Assortment"
                }
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "key": "1",
                "label": {
                  "en": "1"
                }
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "key": "7683C",
                "label": {
                  "en": "7683C"
                }
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "key": "Ballpoint",
                "label": {
                  "en": "Ballpoint"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "key": "Undefined",
                "label": {
                  "en": "Undefined"
                }
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "key": "National Pen",
                "label": {
                  "en": "National Pen"
                }
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "key": "Paragon Pen",
                "label": {
                  "en": "Paragon Pen"
                }
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "key": "234",
                "label": {
                  "en": "Shelbyville, Tennessee"
                }
              },
              {
                "key": "236",
                "label": {
                  "en": "Dundalk, Ireland"
                }
              },
              {
                "key": "237",
                "label": {
                  "en": "Tijuana, Mexico"
                }
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "key": "CIM-8AFV0JD2",
              "label": {
                "en": "CIM-8AFV0JD2"
              }
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "key": "Bullet���",
                "label": {
                  "en": "Bullet���"
                }
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "key": "512 MB",
                "label": {
                  "en": "512 MB"
                }
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 0
        },
        "id": "b4916bca-e037-4c61-aedb-faac247122a7"
      },
      "quantity": 125,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 125,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "ExternalPrice",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 0
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 0
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 0
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "Free",
          "lineItemNumber": "126",
          "mcpPrductName": "Paragon Pen Test 1",
          "lineItemIdReference": "dcbbf2de-80cb-409c-b7a2-30dd97a98c8b",
          "mcpSku": "CIM-UMK00JD4",
          "itemCreationTimeStamp": "2017-11-21T11:51:08.567Z"
        }
      },
      "lineItemMode": "Standard"
    },
    {
      "id": "310e2da3-7bc7-45f3-8f2f-2bdd29e42113",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "FreeQuantityPercentage": "50",
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ]
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              },
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Laser"
                },
                "key": "Laser"
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "label": {
                  "en": "Barrel made of recycled carton."
                },
                "key": "Barrel made of recycled carton."
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "label": {
                  "en": "Black"
                },
                "key": "Black"
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "label": {
                  "en": "Blue"
                },
                "key": "Blue"
              },
              {
                "label": {
                  "en": "Green"
                },
                "key": "Green"
              },
              {
                "label": {
                  "en": "Gunmetal"
                },
                "key": "Gunmetal"
              },
              {
                "label": {
                  "en": "Purple"
                },
                "key": "Purple"
              },
              {
                "label": {
                  "en": "Burgundy"
                },
                "key": "Burgundy"
              },
              {
                "label": {
                  "en": "Red"
                },
                "key": "Red"
              },
              {
                "label": {
                  "en": "Turquoise"
                },
                "key": "Turquoise"
              },
              {
                "label": {
                  "en": "Dark Blue"
                },
                "key": "Dark Blue"
              },
              {
                "label": {
                  "en": "White"
                },
                "key": "White"
              },
              {
                "label": {
                  "en": "Assortment"
                },
                "key": "Assortment"
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "label": {
                  "en": "1"
                },
                "key": "1"
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "label": {
                  "en": "7683C"
                },
                "key": "7683C"
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "label": {
                  "en": "Ballpoint"
                },
                "key": "Ballpoint"
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "label": {
                  "en": "Undefined"
                },
                "key": "Undefined"
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "label": {
                  "en": "National Pen"
                },
                "key": "National Pen"
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "label": {
                  "en": "Not Applicable"
                },
                "key": "Not Applicable"
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "label": {
                  "en": "Paragon Pen"
                },
                "key": "Paragon Pen"
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "label": {
                  "en": "0"
                },
                "key": "0"
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "label": {
                  "en": "Shelbyville, Tennessee"
                },
                "key": "234"
              },
              {
                "label": {
                  "en": "Dundalk, Ireland"
                },
                "key": "236"
              },
              {
                "label": {
                  "en": "Tijuana, Mexico"
                },
                "key": "237"
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "label": {
                "en": "CIM-8AFV0JD2"
              },
              "key": "CIM-8AFV0JD2"
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "label": {
                  "en": "Bullet���"
                },
                "key": "Bullet���"
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "label": {
                  "en": "512 MB"
                },
                "key": "512 MB"
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "label": {
                  "en": "No"
                },
                "key": "No"
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 0
        },
        "id": "1ee59e7e-991d-4467-b31e-7fbd0099ab67"
      },
      "quantity": 125,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 125,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "ExternalPrice",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 0
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 0
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 0
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "Free",
          "lineItemNumber": "126",
          "mcpPrductName": "Paragon Pen Test 1",
          "lineItemIdReference": "6f9166b9-c490-4ee6-9093-9408c75aee10",
          "mcpSku": "CIM-UMK00JD4",
          "itemCreationTimeStamp": "2017-11-21T12:51:08.567Z"
        }
      },
      "lineItemMode": "Standard"
    },
    {
      "id": "b9580af4-9ba3-4bbc-8548-2b4f07af5f48",
      "productId": "3ce5baad-c204-498e-acd0-e6c4e15863ab",
      "name": {
        "en": "Paragon Pen Test 1"
      },
      "productType": {
        "typeId": "product-type",
        "id": "b51db6ff-6cf6-4ed3-9828-f52dd46e8dc4",
        "version": 1
      },
      "productSlug": {
        "en": "paragon-pen-test-1-1510032683308"
      },
      "variant": {
        "id": 1,
        "sku": "d9258dc5-7af5-4485-9b6a-93795b74760f",
        "prices": [
          {
            "value": {
              "currencyCode": "EUR",
              "centAmount": 1500
            },
            "id": "95bfe29f-e111-4352-850d-fd380b8d7dae",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          },
          {
            "value": {
              "currencyCode": "JPY",
              "centAmount": 1500
            },
            "id": "b8fde679-ec58-4c5c-ae8a-afe15c61e0f3",
            "tiers": [
              {
                "minimumQuantity": 50,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1390
                }
              },
              {
                "minimumQuantity": 100,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1350
                }
              },
              {
                "minimumQuantity": 150,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1290
                }
              },
              {
                "minimumQuantity": 250,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1240
                }
              },
              {
                "minimumQuantity": 500,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1190
                }
              },
              {
                "minimumQuantity": 1000,
                "value": {
                  "currencyCode": "JPY",
                  "centAmount": 1090
                }
              }
            ],
            "custom": {
              "type": {
                "typeId": "type",
                "id": "c7e61064-44d5-462e-b0bc-579fcbf99e62"
              },
              "fields": {
                "UpSellQuantityAndPrice": [
                  "50::30::1000",
                  "100::60::950",
                  "150::90::900",
                  "250::120::850",
                  "500::150::800",
                  "1000::120::750"
                ],
                "FreeQuantityPercentage": "50"
              }
            }
          }
        ],
        "images": [],
        "attributes": [
          {
            "name": "Ink_Colour",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              },
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Orange",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Yellow",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Foil",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Pouch",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Set",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Marker",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_2",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Language_Code",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Red",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Type_Decoration",
            "value": [
              {
                "key": "Laser",
                "label": {
                  "en": "Laser"
                }
              }
            ]
          },
          {
            "name": "Silver_Plated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gel_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USBPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Laser_Pointer",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Product_Weight",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Cap_Grip_Tips_and_Tops_Colour",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Material_Details",
            "value": [
              {
                "key": "Barrel made of recycled carton.",
                "label": {
                  "en": "Barrel made of recycled carton."
                }
              }
            ]
          },
          {
            "name": "Black",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fountain_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Clip",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "Includes_Screen_Cleaner",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Ballpoint_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "MultiInk",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Roller_Ball",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Primary_Color_3",
            "value": [
              {
                "key": "Black",
                "label": {
                  "en": "Black"
                }
              }
            ]
          },
          {
            "name": "Includes_Sticky_Notes",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Novelty_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Barrel_Colour",
            "value": [
              {
                "key": "Blue",
                "label": {
                  "en": "Blue"
                }
              },
              {
                "key": "Green",
                "label": {
                  "en": "Green"
                }
              },
              {
                "key": "Gunmetal",
                "label": {
                  "en": "Gunmetal"
                }
              },
              {
                "key": "Purple",
                "label": {
                  "en": "Purple"
                }
              },
              {
                "key": "Burgundy",
                "label": {
                  "en": "Burgundy"
                }
              },
              {
                "key": "Red",
                "label": {
                  "en": "Red"
                }
              },
              {
                "key": "Turquoise",
                "label": {
                  "en": "Turquoise"
                }
              },
              {
                "key": "Dark Blue",
                "label": {
                  "en": "Dark Blue"
                }
              },
              {
                "key": "White",
                "label": {
                  "en": "White"
                }
              },
              {
                "key": "Assortment",
                "label": {
                  "en": "Assortment"
                }
              }
            ]
          },
          {
            "name": "HighlighterPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Gift_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Blue",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "LacquerCoated",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fluorescent_Pink",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Number_of_Pieces_per_Pack",
            "value": [
              {
                "key": "1",
                "label": {
                  "en": "1"
                }
              }
            ]
          },
          {
            "name": "Reference_Color",
            "value": [
              {
                "key": "7683C",
                "label": {
                  "en": "7683C"
                }
              }
            ]
          },
          {
            "name": "Plastic",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Stainless_Steel",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Highlighter",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Point",
            "value": [
              {
                "key": "Ballpoint",
                "label": {
                  "en": "Ballpoint"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_3",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Includes_Light",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Grip",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pencil",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Color_Name",
            "value": [
              {
                "key": "Undefined",
                "label": {
                  "en": "Undefined"
                }
              }
            ]
          },
          {
            "name": "Bamboo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cap_Type_Decoration",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "MultiColor",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller",
            "value": [
              {
                "key": "National Pen",
                "label": {
                  "en": "National Pen"
                }
              }
            ]
          },
          {
            "name": "Dated_Goods_Year",
            "value": [
              {
                "key": "Not Applicable",
                "label": {
                  "en": "Not Applicable"
                }
              }
            ]
          },
          {
            "name": "ProductFamily",
            "value": [
              {
                "key": "Paragon Pen",
                "label": {
                  "en": "Paragon Pen"
                }
              }
            ]
          },
          {
            "name": "Retractable_Pen",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Gift_Sleeve",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Hex_Color_2",
            "value": [
              {
                "key": "0",
                "label": {
                  "en": "0"
                }
              }
            ]
          },
          {
            "name": "Recycled_Carton",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Fulfiller_Location",
            "value": [
              {
                "key": "234",
                "label": {
                  "en": "Shelbyville, Tennessee"
                }
              },
              {
                "key": "236",
                "label": {
                  "en": "Dundalk, Ireland"
                }
              },
              {
                "key": "237",
                "label": {
                  "en": "Tijuana, Mexico"
                }
              }
            ]
          },
          {
            "name": "Green",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Pen_Box",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Cardboard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "StylusPen_Combo",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Includes_Lanyard",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Faux_Leather",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "mcpSKU",
            "value": {
              "key": "CIM-8AFV0JD2",
              "label": {
                "en": "CIM-8AFV0JD2"
              }
            }
          },
          {
            "name": "Brand_Name",
            "value": [
              {
                "key": "Bullet���",
                "label": {
                  "en": "Bullet���"
                }
              }
            ]
          },
          {
            "name": "Metal",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "USB_Capacity",
            "value": [
              {
                "key": "512 MB",
                "label": {
                  "en": "512 MB"
                }
              }
            ]
          },
          {
            "name": "Brass",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Aluminum",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          },
          {
            "name": "Wood",
            "value": [
              {
                "key": "No",
                "label": {
                  "en": "No"
                }
              }
            ]
          }
        ],
        "assets": []
      },
      "price": {
        "value": {
          "currencyCode": "EUR",
          "centAmount": 200
        },
        "id": "28aa9ccc-e3df-460b-b21f-cc600d4b90f8"
      },
      "quantity": 30,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test",
        "amount": 0.01,
        "includedInPrice": false,
        "country": "GB",
        "id": "qU6iHKGk",
        "subRates": []
      },
      "state": [
        {
          "quantity": 30,
          "state": {
            "typeId": "state",
            "id": "951d7eee-ec9e-4225-bb80-2aef37b7d97d"
          }
        }
      ],
      "priceMode": "ExternalPrice",
      "totalPrice": {
        "currencyCode": "EUR",
        "centAmount": 6000
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "EUR",
          "centAmount": 6000
        },
        "totalGross": {
          "currencyCode": "EUR",
          "centAmount": 6060
        }
      },
      "custom": {
        "type": {
          "typeId": "type",
          "id": "0308c5fa-31a9-43f2-aa1c-bb9cb47e727e"
        },
        "fields": {
          "lineItemType": "Upsell",
          "lineItemNumber": "126",
          "mcpPrductName": "Paragon Pen Test 1",
          "lineItemIdReference": "6f9166b9-c490-4ee6-9093-9408c75aee10",
          "mcpSku": "CIM-UMK00JD4",
          "itemCreationTimeStamp": "2017-11-21T12:59:08.567Z"
        }
      },
      "lineItemMode": "Standard"
    }
  ],
  "cartState": "Active",
  "totalPrice": {
    "currencyCode": "EUR",
    "centAmount": 785500
  },
  "taxedPrice": {
    "totalNet": {
      "currencyCode": "EUR",
      "centAmount": 785500
    },
    "totalGross": {
      "currencyCode": "EUR",
      "centAmount": 793355
    },
    "taxPortions": [
      {
        "rate": 0.01,
        "amount": {
          "currencyCode": "EUR",
          "centAmount": 7855
        },
        "name": "test"
      }
    ]
  },
  "shippingAddress": {
    "firstName": "Vedant",
    "lastName": "Gupta",
    "streetName": "Thames Street",
    "streetNumber": "19",
    "postalCode": "DL12 0FJ",
    "city": "BOLDRON",
    "region": "Lancashire",
    "country": "GB",
    "building": "My Building",
    "apartment": "Empire Tower",
    "pOBox": "DL12 0FJ"
  },
  "customLineItems": [],
  "discountCodes": [],
  "inventoryMode": "None",
  "taxMode": "Platform",
  "taxRoundingMode": "HalfEven",
  "taxCalculationMode": "LineItemLevel",
  "refusedGifts": []
};  
            let cartItem={}, orderDetail={};
            let cartArray = [];
            if(res.id){        // Valid Cart, Store it for further use   
                for(let i=0; i<res.lineItems.length; i++){
                    console.log("res.lineItems[i].custom.fields.lineItemType",res.lineItems[i].custom.fields.lineItemType)
                    if(res.lineItems[i].custom.fields.lineItemType == "mainItem"){
                        var userSelections = Abc.order.setOfStringsToObject((res.lineItems[i].custom && res.lineItems[i].custom.fields.userSelection) ? res.lineItems[i].custom.fields.userSelection : []); 
                        console.log('User selections', userSelections);
 
                        cartItem = {
                            "id": res.lineItems[i].id,
                            "productName": res.lineItems[i].name.en,
                            "quantity": res.lineItems[i].quantity,
                            "unitPrice": res.lineItems[i].totalPrice.centAmount/res.lineItems[i].quantity/100,
                            "userSelections": userSelections,
                            "currencyCode": getSymbolFromCurrency(res.lineItems[i].price.value.currencyCode),
                            "total": res.lineItems[i].totalPrice.centAmount/100
                        }
                        cartArray.push(cartItem);
                    }
                    orderDetail = {
                        "subtotal": res.totalPrice.centAmount/100,
                        "shippingCharge": 0,
                        "setupCharge": 0,
                        "VAT": 0,
                        "discount": 0,
                        "currencyCode": getSymbolFromCurrency(res.lineItems[i].price.value.currencyCode),
                        "total": res.totalPrice.centAmount/100
                    }
                }
                for(let i=0; i<res.lineItems.length; i++){
                    if(res.lineItems[i].custom.fields.lineItemType == "Upsell"){
                        for(let k=0;k<cartArray.length; k++){
                            if(cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference){
                                cartArray[k].upsellQuantity = res.lineItems[i].quantity;
                                cartArray[k].upsellPrice = res.lineItems[i].price.value.centAmount/100;
                            }
                        }
                    } else if(res.lineItems[i].custom.fields.lineItemType == "Free"){
                        for(let k=0;k<cartArray.length; k++){
                            if(cartArray[k].id == res.lineItems[i].custom.fields.lineItemIdReference){
                                cartArray[k].freeQuantity = res.lineItems[i].quantity;
                            }
                        }
                    }
                }
                console.log("this cartItem new", cartArray);
                this.setState({cartItems: cartArray, orderDetails: orderDetail, fullCart: res, isLoader: false});
                
                cartArray = [];
                
            } 
            if(res.statusCode == 404){ // res.statusCode == 404 if no cart exists
                //no items in cart
                this.setState({isLoader: false});
            }
        }.bind(this));
    }
    handleDeleteProject(id){
        var cart = this.state.fullCart; // Full Cart Object from last response.
        var lineItemId = '8a296501-d60e-4b7e-b788-178a269b051b';
        window.Abc.order.removeCartItem(cart, lineItemId).then(function(res){
            if(!res.error){
                let item = this.state.cartItems;
                let index = item.findIndex(x => x.id === id);
                item.splice(index, 1);
                this.setState({cartItems:item});
                console.log('Cart After delete', JSON.stringify(res));    // Store this new cart object from response    
                console.log('cartMeta', {id:res.id, version:res.version}); 
            }
            if(res.statusCode == 404){ // res.statusCode == 404 if no cart exists
                console.log(res)
            }
        }.bind(this));

    } 
    render() {
        return (
            <div className="container top-gutter">
            {
              this.state.isLoader
                ? <Loader />
                : null
            }
                {/*<div className="col-md-12">
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a>
                        </li>
                        <li>Shopping cart</li>
                    </ul>
                </div>*/}

                <div className="col-md-9" id="basket">

                    <div className="box">

                        <form method="post" action="checkout1.html">
                            <h1>Shopping cart</h1>
                            <p className="text-muted">You currently have {this.state.cartItems.length} item(s) in your cart.</p>
                            {this.state.cartItems.map((item, index) => <CartItem deleteItem={this.handleDeleteProject.bind(this)} key= {index} cartItem = {item} />)}
                            <ShoppingCartButtons showProceed={this.state.cartItems.length}/>
                        </form>

                    </div>
                    {/* /box */}


                </div>
                {/* /.col-md-9*/}
                <div className="col-md-3">
                    {this.state.cartItems.length ? <OrderSummary orderDetails = {this.state.orderDetails} /> : ""}
                  
                </div>
                {/* /.col-md-3 */}
            </div>
        );
    }
}
export default ShoppingCartDetails;
