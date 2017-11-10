<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}" />
    <meta name="keywords" content="${content.keywords!""}" />

    <!-- styles -->
    <link href="${ctx.contextPath}/.resources/home/webresources/css/font-awesome.css" rel="stylesheet">
    <link href="${ctx.contextPath}/.resources/home/webresources/css/bootstrap.min.css" rel="stylesheet">
    <link href="${ctx.contextPath}/.resources/home/webresources/css/animate.min.css" rel="stylesheet">
    <link href="${ctx.contextPath}/.resources/home/webresources/css/owl.carousel.css" rel="stylesheet">
    <link href="${ctx.contextPath}/.resources/home/webresources/css/owl.theme.css" rel="stylesheet">

    <!-- theme stylesheet -->
    <link href="${ctx.contextPath}/.resources/home/webresources/css/style.default.css" rel="stylesheet" id="theme-stylesheet">

    <!-- your stylesheet with modifications -->
    <link href="${ctx.contextPath}/.resources/home/webresources/css/custom.css" rel="stylesheet">

    <script src="${ctx.contextPath}/.resources/home/webresources/js/respond.min.js"></script>

    <link rel="shortcut icon" href="${ctx.contextPath}/.resources/home/webresources/img/favicon.png">
  </head>
<body class="product ${cmsfn.language()}">
    <!-- *** TOPBAR *** -->

    [@cms.area name="topbar"/]

    <!-- *** TOP BAR END *** -->

    <!-- *** NAVBAR *** -->

    [@cms.area name="navbar"/]
    
    <!-- /#navbar -->

    <!-- *** NAVBAR END *** -->

    <div id="all">

        <div id="content">
            <div class="container">

                <div class="col-md-12">
                    <ul class="breadcrumb">
                        <li><a href="#">Home</a>
                        </li>
                        <li>Checkout - Address</li>
                    </ul>
                </div>

                <div class="col-md-9" id="checkout">

                    <div class="box">

                        <form method="post" action="checkout2.html">
                            <h1>Checkout</h1>
                            <ul class="nav nav-pills nav-justified nav-tabs" role="tablist">
                                <li class="active" role="presentation">
                                    <a href="#address" aria-controls="home" role="tab" data-toggle="tab">
                                        <i class="fa fa-map-marker"></i><br>Address
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#delivery-method" aria-controls="home" role="tab" data-toggle="tab">
                                        <i class="fa fa-truck"></i><br>Delivery Method
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#payment-method" aria-controls="home" role="tab" data-toggle="tab">
                                        <i class="fa fa-money"></i><br>Payment Method
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#order-review" aria-controls="home" role="tab" data-toggle="tab">
                                        <i class="fa fa-eye" role="tab"></i><br>Order Review
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="address">
                                    <div class="content">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstname">Firstname</label>
                                                    <input type="text" class="form-control" id="firstname">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastname">Lastname</label>
                                                    <input type="text" class="form-control" id="lastname">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.row -->

                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="company">Company</label>
                                                    <input type="text" class="form-control" id="company">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="street">Street</label>
                                                    <input type="text" class="form-control" id="street">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.row -->

                                        <div class="row">
                                            <div class="col-sm-6 col-md-3">
                                                <div class="form-group">
                                                    <label for="city">Company</label>
                                                    <input type="text" class="form-control" id="city">
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-3">
                                                <div class="form-group">
                                                    <label for="zip">ZIP</label>
                                                    <input type="text" class="form-control" id="zip">
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-3">
                                                <div class="form-group">
                                                    <label for="state">State</label>
                                                    <select class="form-control" id="state"></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-3">
                                                <div class="form-group">
                                                    <label for="country">Country</label>
                                                    <select class="form-control" id="country"></select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="phone">Telephone</label>
                                                    <input type="text" class="form-control" id="phone">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" class="form-control" id="email">
                                                </div>
                                            </div>

                                        </div>
                                        <!-- /.row -->
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="delivery-method">
                                    <div class="content">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery2">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery3">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.row -->

                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="payment-method">
                                    <div class="content">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="box payment-method">

                                                    <h4>Paypal</h4>

                                                    <p>We like it all.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="box payment-method">

                                                    <h4>Payment gateway</h4>

                                                    <p>VISA and Mastercard only.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment2">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="box payment-method">

                                                    <h4>Cash on delivery</h4>

                                                    <p>You pay when you get it.</p>

                                                    <div class="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment3">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.row -->

                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="order-review">
                                    <div class="content">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th colspan="2">Product</th>
                                                        <th>Quantity</th>
                                                        <th>Unit price</th>
                                                        <th>Discount</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="#">
                                                                <img src="img/detailsquare.jpg" alt="White Blouse Armani">
                                                            </a>
                                                        </td>
                                                        <td><a href="#">White Blouse Armani</a>
                                                        </td>
                                                        <td>2</td>
                                                        <td>$123.00</td>
                                                        <td>$0.00</td>
                                                        <td>$246.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="#">
                                                                <img src="img/basketsquare.jpg" alt="Black Blouse Armani">
                                                            </a>
                                                        </td>
                                                        <td><a href="#">Black Blouse Armani</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>$200.00</td>
                                                        <td>$0.00</td>
                                                        <td>$200.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colspan="5">Total</th>
                                                        <th>$446.00</th>
                                                    </tr>
                                                </tfoot>
                                            </table>

                                        </div>
                                        <!-- /.table-responsive -->
                                    </div>
                                </div>
                            </div>

                    
                            <div class="box-footer">
                                <div class="pull-left">
                                    <a href="basket.html" class="btn btn-default"><i class="fa fa-chevron-left"></i>Back to basket</a>
                                </div>
                                <div class="pull-right">
                                    <button type="submit" class="btn btn-primary">Continue to Delivery Method<i class="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.box -->


                </div>
                <!-- /.col-md-9 -->

                <div class="col-md-3">

                    <div class="box" id="order-summary">
                        <div class="box-header">
                            <h3>Order summary</h3>
                        </div>
                        <p class="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>

                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Order subtotal</td>
                                        <th>$446.00</th>
                                    </tr>
                                    <tr>
                                        <td>Shipping and handling</td>
                                        <th>$10.00</th>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <th>$0.00</th>
                                    </tr>
                                    <tr class="total">
                                        <td>Total</td>
                                        <th>$456.00</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <!-- /.col-md-3 -->

            </div>
            <!-- /.container -->
        </div>
        <!-- /#content -->

        <!-- *** FOOTER *** -->
        
        [@cms.area name="footer"/]
          
        <!-- *** FOOTER END *** -->

        <!-- *** COPYRIGHT *** -->
        
        [@cms.area name="copyright"/]
        
        <!-- *** COPYRIGHT END *** -->

    </div>
    <!-- /#all -->

    <script src="${ctx.contextPath}/.resources/home/webresources/js/jquery-1.11.0.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/jquery.cookie.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/waypoints.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/modernizr.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/bootstrap-hover-dropdown.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/owl.carousel.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/front.js"></script>
</body>
</html>
