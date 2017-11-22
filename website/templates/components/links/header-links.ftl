[#assign pageName = ctx.pageName!'' ]
<!--Add css lib-->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100' rel='stylesheet' type='text/css'>

<!-- styles -->
<link href="${ctx.contextPath}/.resources/website/webresources/css/font-awesome.css" rel="stylesheet">
<link href="${ctx.contextPath}/.resources/website/webresources/css/bootstrap.min.css" rel="stylesheet">
<link href="${ctx.contextPath}/.resources/website/webresources/css/animate.min.css" rel="stylesheet">
<link href="${ctx.contextPath}/.resources/website/webresources/css/owl.carousel.css" rel="stylesheet">
<link href="${ctx.contextPath}/.resources/website/webresources/css/owl.theme.css" rel="stylesheet">

<!-- theme stylesheet -->
<link href="${ctx.contextPath}/.resources/website/webresources/css/style.default.css" rel="stylesheet" id="theme-stylesheet">

<!-- your stylesheet with modifications -->
<link href="${ctx.contextPath}/.resources/website/webresources/css/custom.css" rel="stylesheet">

<!-- multisite theme -->
[#assign site = sitefn.site()!]
[#assign theme = sitefn.theme(site)!]
[#list theme.cssFiles as cssFile]
<link rel="stylesheet" type="text/css" href="${cssFile.link}" media="${cssFile.media}" />
[/#list]
<!-- end multisite theme -->

[#if cmsfn.language() == 'en_UK']
     [#assign languages = 'en']
     [#assign currency = 'EUR']
     [#assign country = 'United Kingdom (uk)']
     [#assign country_code = 'UK']
[/#if]
[#if cmsfn.language() == 'ja_JAPAN']
     [#assign languages = 'ja']
     [#assign currency = 'JPY']
     [#assign country = 'japan']
     [#assign country_code = 'JP']
[/#if]
[#if cmsfn.language()!='ja_JAPAN' && cmsfn.language()!='en_UK']
     [#assign languages = 'en']
     [#assign currency = 'EUR']
     [#assign country = 'United Kingdom (uk)']
     [#assign country_code = 'UK']
[/#if]


<script src="${ctx.contextPath}/.resources/website/webresources/js/libs/respond.min.js"></script>

<link rel="shortcut icon" href="${ctx.contextPath}/.resources/website/webresources/img/favicon.png">


[#--
<script src="${ctx.contextPath}/.resources/website/webresources/js/libs/jquery.js"></script> --] [#-- or via theme --] [#-- [#assign site = sitefn.site()!] --] [#-- [#assign theme = sitefn.theme(site)!] --] [#-- [#list theme.cssFiles as cssFile] --] [#-- [#if cssFile.conditionalComment?has_content]
<!--[if ${cssFile.conditionalComment}]>[/#if] --]
 [#--     <link rel="stylesheet" type="text/css" href="${cssFile.link}" media="${cssFile.media}" /> --]
 [#--   [#if cssFile.conditionalComment?has_content]<![endif]-->[/#if] --] [#-- [/#list] --] [#-- [#list theme.jsFiles as jsFile] --] [#--
<script src="${jsFile.link}"></script> --] [#-- [/#list] --] [#-- uncomment next line to use resfn templating functions to load all css which matches a globbing pattern --] [#-- ${resfn.css(["/home/.*css"])!} --]

<script type="text/javascript" src="${ctx.contextPath}/.resources/libs/abc/index.bundle.js"></script>
<script type="text/javascript">
     //  Initializing ABC services
     window.locale_details = {language:'${languages}',currency:'${currency}',country:'${country}',country_code:'${country_code}'};
     console.log("locale_details",window.locale_details);

     var baseURL = '${ctx.contextPath}' || window.location.origin;
     if(window.Abc){
         window.Abc = window.Abc.index({
           restPrefix: '/.rest/',
           baseUrl: baseURL
         });
     }
</script>
