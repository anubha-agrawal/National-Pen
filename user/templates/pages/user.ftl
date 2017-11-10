<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">

<head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!" "}" />
    <meta name="keywords" content="${content.keywords!" "}" /> [#-- To load resources you can link them manually (e.g. line below) --] <!-- styles -->
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
                        <li>New account / Sign in</li>
                    </ul>

                </div>

                <div class="col-md-6">
                    <div class="box">
                        <h1>New account</h1>

                        <p class="lead">Not our registered customer yet?</p>
                        <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                        <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>

                        <hr>

                        <form action="customer-orders.html" method="post">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary"><i class="fa fa-user-md"></i> Register</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="box">
                        <h1>Login</h1>

                        <p class="lead">Already our customer?</p>
                        <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
                            mi vitae est. Mauris placerat eleifend leo.</p>

                        <hr>

                        <form action="customer-orders.html" method="post">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary"><i class="fa fa-sign-in"></i> Log in</button>
                            </div>
                        </form>
                    </div>
                </div>


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
