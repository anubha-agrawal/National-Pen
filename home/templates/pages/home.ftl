<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">

<head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!" "}" />
    <meta name="keywords" content="${content.keywords!" "}" />

    <link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100' rel='stylesheet' type='text/css'>

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


    [#--
    <script src="${ctx.contextPath}/.resources/home/webresources/js/jquery.js"></script> --] [#-- or via theme --] [#-- [#assign site = sitefn.site()!] --] [#-- [#assign theme = sitefn.theme(site)!] --] [#-- [#list theme.cssFiles as cssFile] --] [#-- [#if cssFile.conditionalComment?has_content]
    <!--[if ${cssFile.conditionalComment}]>[/#if] --]
      [#--     <link rel="stylesheet" type="text/css" href="${cssFile.link}" media="${cssFile.media}" /> --]
      [#--   [#if cssFile.conditionalComment?has_content]<![endif]-->[/#if] --] [#-- [/#list] --] [#-- [#list theme.jsFiles as jsFile] --] [#--
    <script src="${jsFile.link}"></script> --] [#-- [/#list] --] [#-- uncomment next line to use resfn templating functions to load all css which matches a globbing pattern --] [#-- ${resfn.css(["/home/.*css"])!} --]

<script type="text/javascript" src="${ctx.contextPath}/.resources/libs/abc/index.bundle.js"></script>
<script type="text/javascript">
    //  Initializing ABC services 
    var baseURL = '${ctx.contextPath}' || window.location.origin;
    if(window.Abc){
        window.Abc = window.Abc.index({
          restPrefix: '/.rest/',
          baseUrl: baseURL
        });
    }
</script>


</head>

<body class="home ${cmsfn.language()}">
    <!-- *** TOPBAR ***
    _________________________________________________________ -->
    [@cms.area name="topbar"/]

    <!-- *** TOP BAR END *** -->

    <!-- *** NAVBAR ***
    _________________________________________________________ -->

    <!-- /#navbar -->
    [@cms.area name="navbar"/]
    <!-- *** NAVBAR END *** -->

    <div id="all">

        <div id="content">

            [@cms.area name="main"/]

        </div>
        <!-- /#content -->

        [@cms.area name="footer"/]


        [@cms.area name="copyright"/]


    </div>
    <!-- /#all -->
    <script type="text/javascript">
     //  Initializing ABC services
     var baseURL = '${ctx.contextPath}' || window.location.origin;
     // if(window.Abc){
     //    window.Abc = window.Abc.index({
     //      restPrefix: '/.rest/',
     //      baseUrl: baseURL
     //    });
     // }
     //console.log(baseURL);
     </script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/jquery-1.11.0.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/jquery.cookie.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/waypoints.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/modernizr.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/bootstrap-hover-dropdown.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/owl.carousel.min.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/js/front.js"></script>
    <script src="${ctx.contextPath}/.resources/home/webresources/build/bundle.js"></script>

    [#-- use resfn to load all js which matches the globbing pattern or link resources manually or via theme --] [#-- ${resfn.js(["/home/.*js"])!} --]
</body>

</html>
